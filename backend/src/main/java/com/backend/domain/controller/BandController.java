package com.backend.domain.controller;

import com.backend.domain.dto.AddStatusDto;
import com.backend.domain.dto.BandStatusDto;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.CreateBandDto;
import com.backend.domain.error.exception.EntityNotFoundException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.CustomUserDetails;
import com.backend.domain.service.BandService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
    public ResponseEntity<ResponseDto> createBand(
            @RequestBody @Valid CreateBandDto createBandDto,
            @AuthenticationPrincipal CustomUserDetails customUserDetails
    ) {
        return bandService.createBand(createBandDto, customUserDetails.getMember());
    }

    @GetMapping(value = "/list")
    public ResponseEntity<ResponseDto> getBandListStatus(
            @AuthenticationPrincipal CustomUserDetails customUserDetails
    ) {
        return bandService.getBandListByMember(customUserDetails.getMember());
    }

    @GetMapping(value = "/status")
    public ResponseEntity<ResponseDto> getBandStatus(
            @AuthenticationPrincipal CustomUserDetails customUserDetails
    ) {
        return bandService.getBandStatus(customUserDetails.getMember());
    }

    // 센싱 데이터 수신 Controller
    @PostMapping(value = "/heartRate")
    public void addHeartRate(
            @RequestBody @Valid AddStatusDto addStatusDto
    ) {
        bandService.addBandStatus(addStatusDto, 0);
    }

    @PostMapping(value = "/oxygen")
    public void addOxygen(
            @RequestBody @Valid AddStatusDto addStatusDto
    ) {
        bandService.addBandStatus(addStatusDto, 1);
    }

    @PostMapping(value = "/temperature")
    public void addTemperature(
            @RequestBody @Valid AddStatusDto addStatusDto
    ) {
        bandService.addBandStatus(addStatusDto, 2);
    }

    @PostMapping(value = "/cry")
    public void changeCryStatus(
            @RequestBody ObjectNode data
    ) {
        bandService.changeCryStatus(data.get("serialNumber").asText());
    }

    @PostMapping(value = "/flip")
    public void changeFlipStatus(
            @RequestBody ObjectNode data
    ) {
        bandService.changeFlipStatus(data.get("serialNumber").asText());
    }
}