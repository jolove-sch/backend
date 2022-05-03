package com.backend.domain.service.implement;

import com.backend.domain.dto.AddStatusDto;
import com.backend.domain.dto.BandStatusDetailDto;
import com.backend.domain.error.exception.BusinessException;
import com.backend.domain.error.exception.EntityNotFoundException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.Band;
import com.backend.domain.model.Member;
import com.backend.domain.dto.BandStatusDto;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.CreateBandDto;
import com.backend.domain.repository.BandRepository;
import com.backend.domain.service.BandService;
import com.backend.domain.service.MemberService;
import com.backend.domain.service.ResponseService;
import com.backend.domain.util.SuccessCode;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class BandServiceImpl implements BandService {

    private final EntityManager entityManager;
    private final BandRepository bandRepository;
    private final ResponseService responseService;
    private final StringRedisTemplate redisTemplate;
    private final String[] kindOfStatus = {"heart", "oxy", "temp"};

    private int getRandomNumber() {
        return (int) (Math.random() * 10 * (getRandomNumber() % 10));
    }

    private String randomNumberToString() {
        return String.valueOf(getRandomNumber());
    }

    private boolean getRandomBoolean() {
        return (getRandomNumber() > 5);
    }

    @Override
    public void serialNumberDuplicationCheck(String serialNumber) {
        if (bandRepository.findBandBySerialNumber(serialNumber).isPresent())
            throw new BusinessException(ErrorCode.SERIAL_NUM_DUPLICATION);
    }

    @Override
    public Band findBandBySerialNumber(String serialNumber) {
        Optional<Band> band = bandRepository.findBandBySerialNumber(serialNumber);
        if(band.isPresent()) return band.get();
        throw new BusinessException(ErrorCode.BAND_NOT_FOUND);
    }

    @Override
    public Band findBandByBandOwner(Member member) {
        Optional<Band> band = bandRepository.findBandByBandOwner(member);
        if(band.isPresent()) return band.get();
        throw new BusinessException(ErrorCode.BAND_NOT_FOUND);
    }

    @Override
    public List<Band> findBandListByBandOwner(Member member) {
        return bandRepository.findAllByBandOwner(member);
    }

    @Override
    public ResponseEntity<ResponseDto> getBandListByMember(Member member) {
        List<Band> bandList = findBandListByBandOwner(member);
        List<BandStatusDto> bandStatusDtoList = new ArrayList<>();

        final ListOperations<String, String> stringListOperations = redisTemplate.opsForList();

        Long id;
        String heartBeat, oxygen, temperature, heartKey, oxyKey, tempKey, serial;

        for(Band band : bandList) {
            id = band.getId();
            serial = band.getSerialNumber();
            heartKey = kindOfStatus[0] + serial;
            oxyKey = kindOfStatus[1] + serial;
            tempKey = kindOfStatus[2] + serial;

            heartBeat = stringListOperations.index(heartKey, -1);
            oxygen = stringListOperations.index(oxyKey, -1);
            temperature = stringListOperations.index(tempKey, -1);

            bandStatusDtoList.add(
                BandStatusDto.builder()
                        .id(id)
                        .nickname(band.getNickname())
                        .heartBeat(heartBeat)
                        .oxygen(oxygen)
                        .temperature(temperature)
                        .cry(band.isCry())
                        .flipped(band.isFlipped())
                        .build()
            );
        }
        return responseService.successResult(SuccessCode.GET_BAND_LIST, bandStatusDtoList);
    }

    @Override
    public ResponseEntity<ResponseDto> createBand(CreateBandDto createBandDto, Member member) {
        serialNumberDuplicationCheck(createBandDto.getSerialNumber());

        bandRepository.save(
            Band.builder()
                .bandOwner(member)
                .serialNumber(createBandDto.getSerialNumber())
                .nickname(createBandDto.getNickname())
                .build()
        );
        return responseService.successResult(SuccessCode.CREATE_BAND_SUCCESS);
    }

    @Override
    public ResponseEntity<ResponseDto> getBandStatus(Member member) {

        final ListOperations<String, String> stringListOperations = redisTemplate.opsForList();

        Band band = findBandByBandOwner(member);
        String serial = band.getSerialNumber();

        return responseService.successResult(SuccessCode.GET_BAND_STATUS_SUCCESS,
                BandStatusDetailDto.builder()
                        .heartBeat(stringListOperations.range(kindOfStatus[0] + serial, 0, 7))
                        .oxygen(stringListOperations.range(kindOfStatus[1] + serial, 0, 7))
                        .temperature(stringListOperations.range(kindOfStatus[2] + serial, 0, 7))
                        .cry(band.isCry())
                        .flipped(band.isFlipped())
                        .build()
        );
    }

    @Override
    public void addBandStatus(AddStatusDto addStatusDto, int kind) {

        String key = kindOfStatus[kind] + addStatusDto.getSerialNumber();
        String data = addStatusDto.getStatus();

        final ListOperations<String, String> stringListOperations = redisTemplate.opsForList();
        Long size = stringListOperations.size(key);

        if(size > 7) { // 데이터가 7개 이상이면 가장 오래된 데이터를 pop
            stringListOperations.leftPop(key);
        }
        stringListOperations.rightPush(key, data); // insert
    }

    @Override
    @Transactional
    public void changeCryStatus(String serialNumber) {
        Band band = (Band) entityManager.createQuery("SELECT b FROM Band b WHERE b.serialNumber = :value1")
                .setParameter("value1", serialNumber)
                .getSingleResult();

        band.setCry(!band.isCry());
    }

    @Override
    @Transactional
    public void changeFlipStatus(String serialNumber) {
        Band band = (Band) entityManager.createQuery("SELECT b FROM Band b WHERE b.serialNumber = :value1")
                .setParameter("value1", serialNumber)
                .getSingleResult();

        band.setFlipped(!band.isFlipped());
    }
}
