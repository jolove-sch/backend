package com.backend.domain.service.implement;

import com.backend.domain.error.exception.BusinessException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.Band;
import com.backend.domain.model.Member;
import com.backend.domain.model.Mobile;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.model.dto.mobile.CreateMobileDto;
import com.backend.domain.repository.MobileRepository;
import com.backend.domain.service.MemberService;
import com.backend.domain.service.MobileService;
import com.backend.domain.service.ResponseService;
import com.backend.domain.util.SuccessCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MobileServiceImpl implements MobileService {

    private final MobileRepository mobileRepository;
    private final ResponseService responseService;
    private final MemberService memberService;

    @Override
    public Mobile findMobileById(Long id) {
        return mobileRepository.findMobileById(id)
                .orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
    }

    @Override
    public Mobile findMobileBySerialNumber(String serialNumber) {
        return mobileRepository.findMobileBySerialNumber(serialNumber)
                .orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
    }

    @Override
    public ResponseEntity<? extends ResponseDto> createMobile(CreateMobileDto createMobileDto) {
        Member member = memberService.findMemberByEmail(createMobileDto.getEmail());
        mobileRepository.save(Mobile.builder()
                .mobileOwner(member)
                .serialNumber(createMobileDto.getSerialNumber())
                .videoUrl("video url + " + createMobileDto.getSerialNumber())
                .build());
        return responseService.successResult(SuccessCode.CREATE_MOBILE_SUCCESS);
    }

    @Override
    public ResponseEntity<? extends ResponseDto> getMobileUrl(String serialNumber) {
        // 모빌 객체 찾기
        Mobile mobile = findMobileBySerialNumber(serialNumber);

        // 모빌 소유자 확인

        // 모빌 url 반환
        return responseService.successResult(SuccessCode.GET_MOBILE_URL_SUCCESS,
                mobile.getVideoUrl());
    }
}
