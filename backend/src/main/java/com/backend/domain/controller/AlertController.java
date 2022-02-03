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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/alert")
public class AlertController {
    private final MemberService memberService;
    private final ResponseServiceImpl responseServiceImpl;

    @PostMapping(value = "/login")
    public ResponseEntity<ResponseDto> login(@RequestBody MemberDto requestDto) {
        if (requestDto.getEmail().isEmpty() || requestDto.getPassword().isEmpty()) {
            throw new InvalidValueException(ErrorCode.LOGIN_INPUT_INVALID.getMessage(),
                    ErrorCode.LOGIN_INPUT_INVALID);
        }

        Member member = memberService.loadUserByUserEmail(requestDto.getEmail());

        if (!passwordEncoder.matches(requestDto.getPassword(), member.getPassword())) {
            throw new InvalidValueException(ErrorCode.LOGIN_INPUT_INVALID.getMessage(),
                    ErrorCode.LOGIN_INPUT_INVALID);
        }

        String accessToken = jwtUtil.createAuthToken(requestDto.getEmail());

        Map<String, String> body = new HashMap<>();
        body.put("access-token", accessToken);

        return responseServiceImpl.successResult(SuccessCode.LOGIN_SUCCESS, body);
    }
}
