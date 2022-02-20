package com.backend.domain.service;

import com.backend.domain.model.Member;

public interface MemberService {
    public Member findMemberById(Long id);
    public Member findMemberByEmail(String username);
}

