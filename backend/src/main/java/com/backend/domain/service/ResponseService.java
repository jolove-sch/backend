package com.backend.domain.service;

import com.backend.domain.dto.ResponseDto;
import com.backend.domain.util.SuccessCode;
import org.springframework.http.ResponseEntity;

public interface ResponseService {
    public ResponseEntity<ResponseDto> successResult(SuccessCode code);
    public ResponseEntity<ResponseDto> successResult(SuccessCode code, Object body);
}
