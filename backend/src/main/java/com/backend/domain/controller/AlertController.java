package com.backend.domain.controller;

import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.error.exception.InvalidValueException;
import com.backend.domain.model.Member;
import com.backend.domain.model.MemberDto;
import com.backend.domain.model.ResponseDto;
import com.backend.domain.service.MemberService;
import com.backend.domain.service.ResponseServiceImpl;
import com.backend.domain.util.JwtUtil;
import com.backend.domain.util.SuccessCode;
import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/alert")
public class AlertController {
//    private final MemberService memberService;
//    private final ResponseServiceImpl responseServiceImpl;
//
//    @PostMapping(value = "/login")
//    public ResponseEntity<ResponseDto> login(@RequestBody MemberDto requestDto) {
//
//    }
}
