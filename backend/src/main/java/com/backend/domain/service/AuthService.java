package com.backend.domain.service;

import com.backend.domain.dto.LoginDto;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.SignDto;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    public void emailDuplicationCheck(String email);
    public ResponseEntity<ResponseDto> sign(SignDto signDto);
    public ResponseEntity<ResponseDto> login(LoginDto loginDto);
}
