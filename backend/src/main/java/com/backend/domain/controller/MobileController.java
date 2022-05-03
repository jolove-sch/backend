package com.backend.domain.controller;

import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.CreateMobileDto;
import com.backend.domain.model.CustomUserDetails;
import com.backend.domain.service.MobileService;
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

@RestController
@RequiredArgsConstructor
@RequestMapping("/mobile")
public class MobileController {

    private final MobileService mobileService;

    @PostMapping
    public ResponseEntity<? extends ResponseDto> createMobile(
            @RequestBody @Valid CreateMobileDto createMobileDto
    ) {
        return mobileService.createMobile(createMobileDto);
    }

    @GetMapping(value = "/url/{serialNumber}")
    public ResponseEntity<? extends ResponseDto> getMobileUrl(
            @AuthenticationPrincipal CustomUserDetails customUserDetails
    ) {
        return mobileService.getMobileUrl(customUserDetails.getMember());
    }
}
