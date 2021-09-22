package com.infostroy.javajuniortask.virtualclassroom.service;

import com.infostroy.javajuniortask.virtualclassroom.entity.User;
import com.infostroy.javajuniortask.virtualclassroom.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.security.auth.login.LoginException;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean validateUser(User user) throws LoginException {
        if (userRepository.findUserByName(user.getName()).isPresent()) {
            throw new LoginException("Current login already exists");
        }
        return true;
    }

    public void saveNewUser(User user) {
        try {
            if (validateUser(user)) userRepository.save(user);
        } catch (LoginException e) {
            e.printStackTrace();
        }
    }
}
