package com.backend.domain.service.implement;

import com.backend.domain.error.exception.BusinessException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.Band;
import com.backend.domain.model.dto.BandStatusDto;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.repository.BandRepository;
import com.backend.domain.service.BandService;
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

    private int getRandomNumber() {
        return (int) (Math.random() * 10);
    }
    private boolean getRandomBoolean() {
        return getRandomNumber() > 5;
    }

    @Override
    public Band findBandBySerialNum(String serialNumber) {
        return bandRepository.findBandBySerialNumber(serialNumber).orElseThrow(() -> new BusinessException(
                ErrorCode.ENTITY_NOT_FOUND));
    }

    @Override
    public ResponseEntity<? extends ResponseDto> getBandStatus(String serialNumber) {
        // 밴드를 찾는 과정...

        //
        return responseService.successResult(SuccessCode.GET_BAND_STATUS_SUCCESS, BandStatusDto.builder()
                .heartBeat(getRandomNumber() * 8)
                .oxygen(getRandomNumber() * 9)
                .temperature(getRandomNumber() * 5)
                .cry(getRandomBoolean())
                .flipped(getRandomBoolean())
                .build());
    }
}
