package com.backend.domain.service.implement;

import com.backend.domain.error.exception.BusinessException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.Band;
import com.backend.domain.model.Member;
import com.backend.domain.model.dto.band.BandStatusDto;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.model.dto.band.CreateBandDto;
import com.backend.domain.repository.BandRepository;
import com.backend.domain.service.BandService;
import com.backend.domain.service.MemberService;
import com.backend.domain.service.ResponseService;
import com.backend.domain.util.SuccessCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BandServiceImpl implements BandService {

    private final BandRepository bandRepository;
    private final ResponseService responseService;
    private final MemberService memberService;

    private int getRandomNumber() {
        return (int) (Math.random() * 10);
    }

    private boolean getRandomBoolean() {
        return getRandomNumber() > 5;
    }

    @Override
    public Band findBandById(Long id) {
        return bandRepository.findById(id)
                .orElseThrow(() -> new BusinessException(
                        ErrorCode.ENTITY_NOT_FOUND));
    }

    @Override
    public Band findBandBySerialNum(String serialNumber) {
        return bandRepository.findBandBySerialNumber(serialNumber)
                .orElseThrow(() -> new BusinessException(
                        ErrorCode.ENTITY_NOT_FOUND));
    }

    @Override
    public ResponseEntity<? extends ResponseDto> createBand(CreateBandDto createBandDto) {
        Member member = memberService.findMemberByEmail(createBandDto.getEmail());
        bandRepository.save(Band.builder()
                .bandOwner(member)
                .serialNumber(createBandDto.getSerialNumber())
                .build());
        return responseService.successResult(SuccessCode.CREATE_BAND_SUCCESS);
    }

    @Override
    public ResponseEntity<? extends ResponseDto> getBandStatus(String serialNumber) {
        // 밴드 찾기
        Band band = findBandBySerialNum(serialNumber);

        // 밴드 소유자 확인
        // band.getBandOwner().getEmail() == ?

        //
        return responseService.successResult(SuccessCode.GET_BAND_STATUS_SUCCESS,
                BandStatusDto.builder()
                        .heartBeat(getRandomNumber() * 8)
                        .oxygen(getRandomNumber() * 9)
                        .temperature(getRandomNumber() * 5)
                        .cry(getRandomBoolean())
                        .flipped(getRandomBoolean())
                        .build());
    }
}
