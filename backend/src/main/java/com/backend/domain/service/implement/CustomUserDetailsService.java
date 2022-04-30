package com.backend.domain.service.implement;

import com.backend.domain.error.exception.BusinessException;
import com.backend.domain.error.exception.EntityNotFoundException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.CustomUserDetails;
import com.backend.domain.model.Member;
import com.backend.domain.repository.MemberRepository;
import com.backend.domain.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component("userDetailsService")
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws BusinessException {
        Member member = memberRepository.findMemberByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException(ErrorCode.ENTITY_NOT_FOUND));

        return CustomUserDetails
                .builder()
                .member(member)
                .build();
    }
}
