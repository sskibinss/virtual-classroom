package com.infostroy.javajuniortask.virtualclassroom.controllers;

import com.infostroy.javajuniortask.virtualclassroom.entity.User;
import com.infostroy.javajuniortask.virtualclassroom.repository.UserRepository;
import com.infostroy.javajuniortask.virtualclassroom.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;


@Controller
public class MainController {

    private final UserRepository userRepository;
    private final UserService userService;

    @Autowired
    public MainController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping("/")
    public String main(Model model) {
        model.addAttribute("user", new User());
        return "main";
    }

    @PostMapping("/classroom")
    public String processRegistration(User user) {
        userService.saveNewUser(user);

        return "classroom";
    }

    @GetMapping("/classroom")
    public String admin(Model model) {
        List<User> users = userRepository.findAll();
        model.addAttribute("users", users);
        return "classroom";
    }
}
