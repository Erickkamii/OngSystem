package com.inter.interdisciplinar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.inter.interdisciplinar.dto.SignupRequestDTO;
import com.inter.interdisciplinar.dto.UserDto;
import com.inter.interdisciplinar.services.authentication.AuthService;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthService authService;

    @PostMapping("/volunteer/sign-up")
    public ResponseEntity<?> signupVolunteer(@RequestBody SignupRequestDTO signupRequestDTO){

        if(authService.presentByEmail(signupRequestDTO.getEmail())){
            return new ResponseEntity<>("Usuário já cadastrado com esse e-mail",HttpStatus.NOT_ACCEPTABLE);
        }
        UserDto createdUser = authService.signupVolunteer(signupRequestDTO);

        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }
    @PostMapping("/ong/sign-up")
    public ResponseEntity<?> signupOng(@RequestBody SignupRequestDTO signupRequestDTO){

        if(authService.presentByEmail(signupRequestDTO.getEmail())){
            return new ResponseEntity<>("Empresa já cadastrado com esse e-mail",HttpStatus.NOT_ACCEPTABLE);
        }
        UserDto createdUser = authService.signupVolunteer(signupRequestDTO);

        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }
}
