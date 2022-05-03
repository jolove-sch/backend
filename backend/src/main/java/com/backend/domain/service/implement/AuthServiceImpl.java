package com.backend.domain.service.implement;

import com.backend.domain.dto.LoginDto;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.SignDto;
import com.backend.domain.error.exception.BusinessException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.Member;
import com.backend.domain.repository.MemberRepository;
import com.backend.domain.service.AuthService;
import com.backend.domain.service.ResponseService;
import com.backend.domain.util.SuccessCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {

    private final MemberRepository memberRepository;
    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    @Override
    public void emailDuplicationCheck(String email) {
        if(memberRepository.findMemberByEmail(email).isPresent()) {
            throw new BusinessException(ErrorCode.EMAIL_DUPLICATION);
        }
    }

    @Override
    public ResponseEntity<ResponseDto> sign(SignDto signDto) {
        emailDuplicationCheck(signDto.getEmail());
        Member member = Member.builder()
                .email(signDto.getEmail())
                .password(passwordEncoder.encode(signDto.getPassword()))
                .phoneNumber(signDto.getPhoneNumber()).build();

        memberRepository.save(member);
        return responseService.successResult(SuccessCode.SIGN_SUCCESS);
    }

    @Override
    public ResponseEntity<ResponseDto> login(LoginDto loginDto) {
        try {
            UsernamePasswordAuthenticationToken authenticationToken
                    = new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());
            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch (Exception e) {
            throw new BusinessException(ErrorCode.LOGIN_INPUT_INVALID);
        }
        return responseService.successResult(SuccessCode.LOGIN_SUCCESS);
    }
}
