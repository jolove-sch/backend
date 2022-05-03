package com.backend.domain.service.implement;

import com.backend.domain.error.exception.BusinessException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.CustomUserDetails;
import com.backend.domain.model.Member;
import com.backend.domain.model.Mobile;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.CreateMobileDto;
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
    public Mobile findMobileByMobileOwner(Member member) {
        return mobileRepository.findMobileByMobileOwner(member)
                .orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
    }

    @Override
    public void serialNumberDuplicationCheck(String serialNumber) {
        if (mobileRepository.findMobileBySerialNumber(serialNumber).isPresent())
            throw new BusinessException(ErrorCode.SERIAL_NUM_DUPLICATION);
    }

    @Override
    public ResponseEntity<ResponseDto> createMobile(CreateMobileDto createMobileDto) {
        serialNumberDuplicationCheck(createMobileDto.getSerialNumber());
        Member member = memberService.findMemberByEmail(createMobileDto.getEmail());
        mobileRepository.save(Mobile.builder()
                .mobileOwner(member)
                .serialNumber(createMobileDto.getSerialNumber())
                .videoUrl("video url + " + createMobileDto.getSerialNumber())
                .build());
        return responseService.successResult(SuccessCode.CREATE_MOBILE_SUCCESS);
    }

    @Override
    public ResponseEntity<ResponseDto> getMobileUrl(Member member) {
        // 모빌 객체 찾기
        Mobile mobile = findMobileByMobileOwner(member);

        // 모빌 url 반환
        return responseService.successResult(SuccessCode.GET_MOBILE_URL_SUCCESS,
                mobile.getVideoUrl());
    }
}