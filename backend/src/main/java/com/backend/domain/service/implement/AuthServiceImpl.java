package com.backend.domain.service.implement;

import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.error.exception.InvalidValueException;
import com.backend.domain.model.Member;
import com.backend.domain.model.dto.LoginDto;
import com.backend.domain.model.dto.ResponseDto;
import com.backend.domain.model.dto.SignDto;
import com.backend.domain.service.AuthService;
import com.backend.domain.service.MemberService;
import com.backend.domain.service.ResponseService;
import com.backend.domain.util.JwtUtil;
import com.backend.domain.util.SuccessCode;
import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {

    private final MemberService memberService;
    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Override
    public ResponseEntity<? extends ResponseDto> sign(SignDto signDto) {
        return null;
    }

    @Override
    public ResponseEntity<? extends ResponseDto> login(LoginDto loginDto) {
        Member member = memberService.findMemberByEmail(loginDto.getEmail());

        if (!passwordEncoder.matches(loginDto.getPassword(), member.getPassword())) {
            throw new InvalidValueException(ErrorCode.LOGIN_INPUT_INVALID.getMessage(),
                    ErrorCode.LOGIN_INPUT_INVALID);
        }

        String accessToken = jwtUtil.createAuthToken(loginDto.getEmail());

        Map<String, String> body = new HashMap<>();
        body.put("access-token", accessToken);

        return responseService.successResult(SuccessCode.LOGIN_SUCCESS, body);
    }
}
