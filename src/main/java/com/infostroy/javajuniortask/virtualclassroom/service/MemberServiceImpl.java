package com.infostroy.javajuniortask.virtualclassroom.service;

import com.infostroy.javajuniortask.virtualclassroom.model.Member;
import com.infostroy.javajuniortask.virtualclassroom.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.security.auth.login.LoginException;

@Service
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public boolean validateMember(Member member) throws LoginException {
        if (memberRepository.findMemberByName(member.getName()).isPresent()) {
            throw new LoginException("Current login already exists");
        }
        return true;
    }

    @Override
    public Member saveMember(Member member) {
        try {
            if (validateMember(member)) return memberRepository.save(member);
        } catch (LoginException e) {
            e.printStackTrace();
        }
        return member;
    }
}
