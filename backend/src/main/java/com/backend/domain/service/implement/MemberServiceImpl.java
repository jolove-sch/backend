package com.backend.domain.service.implement;

import com.backend.domain.error.exception.EntityNotFoundException;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.model.Member;
import com.backend.domain.repository.MemberRepository;
import com.backend.domain.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;

    @Override
    public Member findMemberById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(ErrorCode.ENTITY_NOT_FOUND));
    }

    @Override
    public Member findMemberByEmail(String username) {
        return memberRepository.findMemberByEmail(username)
                .orElseThrow(() -> new EntityNotFoundException(ErrorCode.ENTITY_NOT_FOUND));
    }
}
