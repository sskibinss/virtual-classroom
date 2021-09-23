package com.infostroy.javajuniortask.virtualclassroom.service;

import com.infostroy.javajuniortask.virtualclassroom.model.Member;

public interface MemberService {

    public Member saveMember(Member member);

    public void deleteMemberByName(String name);
}
