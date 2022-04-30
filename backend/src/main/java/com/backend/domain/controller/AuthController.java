package com.backend.domain.controller;

import com.backend.domain.dto.LoginDto;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.SignDto;
import com.backend.domain.model.CustomUserDetails;
import com.backend.domain.service.AuthService;
import com.backend.domain.service.ResponseService;
import com.backend.domain.util.SuccessCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Collection;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    private final AuthService authService;
    private final ResponseService responseService;

    @PostMapping(value = "/sign")
    public ResponseEntity<? extends ResponseDto> sign(@RequestBody @Valid SignDto signDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return authService.sign(signDto);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<? extends ResponseDto> login(@RequestBody @Valid LoginDto loginDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return authService.login(loginDto);
    }

    @PostMapping(value = "/logout")
    public ResponseEntity<? extends ResponseDto> logout(HttpServletRequest request) {
        request.getSession().invalidate();

        return responseService.successResult(SuccessCode.LOGOUT_SUCCESS);
    }

    @GetMapping(value = "/cookie")
    public ResponseEntity<? extends ResponseDto> cookie() {
        return responseService.successResult(SuccessCode.TEST_SUCCESS);
    }
}
