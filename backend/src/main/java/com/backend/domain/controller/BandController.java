package com.backend.domain.controller;

import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.model.dto.band.CreateBandDto;
import com.backend.domain.service.BandService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/band")
public class BandController {
    private final BandService bandService;

    @PostMapping
    public ResponseEntity<? extends ResponseDto> createBand(
            @RequestBody @Valid CreateBandDto createBandDto) {
        return bandService.createBand(createBandDto);
    }

    @GetMapping(value = "/status/{serialNumber}")
    public ResponseEntity<? extends ResponseDto> getBandStatus(
            @PathVariable("serialNumber") String serialNumber
    ) {
        return bandService.getBandStatus(serialNumber);
    }
}
