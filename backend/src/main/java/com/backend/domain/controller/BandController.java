package com.backend.domain.controller;

import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.service.BandService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/band")
public class BandController {
    private final BandService bandService;

    @GetMapping(value = "/status/{serialNumber}")
    public ResponseEntity<? extends ResponseDto> getBandStatus(
            @PathVariable("serialNumber") String serialNumber
    ) {
        return bandService.getBandStatus(serialNumber);
    }
}
