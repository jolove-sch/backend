package com.backend.domain.service;

import com.backend.domain.model.Band;
import com.backend.domain.model.dto.ResponseDto;
import org.springframework.http.ResponseEntity;

public interface BandService {
    public Band findBandBySerialNum(String serialNumber);
    public ResponseEntity<? extends ResponseDto> getBandStatus(String serialNumber);
}
