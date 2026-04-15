package com.valve.engineering.controller;

import com.valve.engineering.service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.valve.engineering.entity.User;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LoginController {
    private final LoginService service;

    public LoginController(LoginService service) {
        this.service = service;
    }

    @GetMapping("/hello")
    public String hello(){return "Hello World!";}

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return service.register(user);
    }

//    @PostMapping("/login")
//    public String login(@RequestBody User user) {
//        return service.login(user.getUsername(), user.getPassword());
//    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        String token = service.login(user.getUsername(), user.getPassword());
        return ResponseEntity.ok(token);
    }
}
