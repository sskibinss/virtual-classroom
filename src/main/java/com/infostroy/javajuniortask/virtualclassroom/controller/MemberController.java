package com.infostroy.javajuniortask.virtualclassroom.controller;

import com.infostroy.javajuniortask.virtualclassroom.model.Member;
import com.infostroy.javajuniortask.virtualclassroom.repository.MemberRepository;
import com.infostroy.javajuniortask.virtualclassroom.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/members")
@CrossOrigin(origins="http://localhost:3000/")
public class MemberController {

    private final MemberRepository memberRepository;
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberRepository memberRepository, MemberService memberService) {
        this.memberRepository = memberRepository;
        this.memberService = memberService;
    }

    @PostMapping("/new-member")
    @ResponseStatus(HttpStatus.CREATED)
    public Member addNewMember(@RequestBody Member member) {
        return memberService.saveMember(member);
    }

    @GetMapping("/classroom")
    public ResponseEntity<List<Member>> getAllMembers() {
        return new ResponseEntity<>(memberRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/delete-member")
    @ResponseStatus(HttpStatus.OK)
    public void deleteMember(@RequestBody Member member) {
        memberService.deleteMemberByName(member.getName());
    }

}
