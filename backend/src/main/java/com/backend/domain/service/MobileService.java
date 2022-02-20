package com.backend.domain.service;

import com.backend.domain.model.Mobile;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.model.dto.mobile.CreateMobileDto;
import org.springframework.http.ResponseEntity;

public interface MobileService {
    public Mobile findMobileById(Long id);
    public Mobile findMobileBySerialNumber(String serialNumber);
    public ResponseEntity<? extends ResponseDto> createMobile(CreateMobileDto createMobileDto);
    public ResponseEntity<? extends ResponseDto> getMobileUrl(String serialNumber);
}
