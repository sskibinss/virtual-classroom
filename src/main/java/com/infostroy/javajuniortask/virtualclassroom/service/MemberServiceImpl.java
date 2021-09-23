package com.infostroy.javajuniortask.virtualclassroom.service;

import com.infostroy.javajuniortask.virtualclassroom.model.Member;
import com.infostroy.javajuniortask.virtualclassroom.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public Member saveMember(Member member) {
        return memberRepository.save(member);

    }

    @Override
    public void deleteMemberByName(String name) {
        memberRepository.delete(memberRepository.findMemberByName(name).orElseThrow());
    }


}
