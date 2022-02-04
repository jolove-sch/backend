package com.backend.domain.service;

import com.backend.domain.error.exception.EntityNotFoundException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.Member;
import com.backend.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MemberService{
    private final MemberRepository memberRepository;

    public Member loadUserByUserEmail(String username) {
        return memberRepository.findMemberByEmail(username)
                .orElseThrow(() -> new EntityNotFoundException(
                        ErrorCode.ENTITY_NOT_FOUND));
    }
}
