package com.backend.domain.service;

import com.backend.domain.model.CustomUserDetails;
import com.backend.domain.model.Member;
import com.backend.domain.model.Mobile;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.CreateMobileDto;
import org.springframework.http.ResponseEntity;

public interface MobileService {
    public Mobile findMobileById(Long id);
    public Mobile findMobileBySerialNumber(String serialNumber);
    public Mobile findMobileByMobileOwner(Member member);

    public void serialNumberDuplicationCheck(String email);
    public ResponseEntity<ResponseDto> createMobile(CreateMobileDto createMobileDto);
    public ResponseEntity<ResponseDto> getMobileUrl(Member member);
}
