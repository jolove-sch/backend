package com.backend.domain.service;

import com.backend.domain.model.Band;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.model.dto.band.CreateBandDto;
import org.springframework.http.ResponseEntity;

public interface BandService {
    public Band findBandById(Long id);
    public Band findBandBySerialNum(String serialNumber);
    public ResponseEntity<? extends ResponseDto> createBand(CreateBandDto createBandDto);
    public ResponseEntity<? extends ResponseDto> getBandStatus(String serialNumber);
}
