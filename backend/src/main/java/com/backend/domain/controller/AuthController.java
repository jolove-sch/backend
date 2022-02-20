package com.backend.domain.controller;

import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.error.exception.InvalidValueException;
import com.backend.domain.model.dto.LoginDto;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "/login")
    public ResponseEntity<? extends ResponseDto> login(@RequestBody LoginDto loginDto) {
        if (loginDto.getEmail().isEmpty() || loginDto.getPassword().isEmpty()) {
            throw new InvalidValueException(ErrorCode.LOGIN_INPUT_INVALID.getMessage(),
                    ErrorCode.LOGIN_INPUT_INVALID);
        }
        return authService.login(loginDto);
    }
}
