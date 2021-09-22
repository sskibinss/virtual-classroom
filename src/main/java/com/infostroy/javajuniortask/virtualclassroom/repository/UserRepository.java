package com.infostroy.javajuniortask.virtualclassroom.repository;

import com.infostroy.javajuniortask.virtualclassroom.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.name = :name")
    Optional<User> findUserByName(@Param("name") String name);

}
