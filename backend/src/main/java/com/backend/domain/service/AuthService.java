package com.backend.domain.service;

import com.backend.domain.model.dto.LoginDto;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.model.dto.SignDto;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    public ResponseEntity<? extends ResponseDto> sign(SignDto signDto);
    public ResponseEntity<? extends ResponseDto> login(LoginDto loginDto);
}
