package com.infostroy.javajuniortask.virtualclassroom.repository;

import com.infostroy.javajuniortask.virtualclassroom.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    @Query("SELECT u FROM Member u WHERE u.name = :name")
    Optional<Member> findMemberByName(@Param("name") String name);

}
