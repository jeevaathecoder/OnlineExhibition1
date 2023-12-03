//package com.onlineexhibition.backend.controllers;
//
//import com.onlineexhibition.backend.dtos.UserDto;
//import com.onlineexhibition.backend.dtos.UserLoginDto;
//import com.onlineexhibition.backend.models.User;
//import com.onlineexhibition.backend.services.AuthenticationService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
////@RequestMapping("api/v1/auth")
////@CrossOrigin(origins = "http://localhost:4200")
//public class AuthenticationController {
//
//    @Autowired
//    private AuthenticationService authenticationService;
//
//    @PostMapping("/register")
//    public User register(@RequestBody UserDto user) {
//        return authenticationService.register(user.getEmail(), user.getPassword());
//    }
//
//    @PostMapping("/login")
//    public UserLoginDto login(@RequestBody UserDto user) {
//        return authenticationService.login(user.getEmail(), user.getPassword());
//    }
//}
//
//
