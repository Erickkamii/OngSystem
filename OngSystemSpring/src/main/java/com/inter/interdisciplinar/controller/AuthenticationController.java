package com.inter.interdisciplinar.controller;

import java.io.IOException;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.inter.interdisciplinar.dto.AuthenticationRequest;
import com.inter.interdisciplinar.dto.SignupRequestDTO;
import com.inter.interdisciplinar.dto.UserDto;
import com.inter.interdisciplinar.entity.User;
import com.inter.interdisciplinar.repository.UserRepository;
import com.inter.interdisciplinar.services.authentication.AuthService;
import com.inter.interdisciplinar.services.jwt.UserDetailsServiceImpl;
import com.inter.interdisciplinar.util.JwtUtil;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;


    public static final String TOKEN_PREFIX = "Bearer ";

    public static final String HEADER_STRING = "Authorization";

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
        UserDto createdUser = authService.signupOng(signupRequestDTO);

        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }

    @PostMapping({"/authenticate"})
    
    public void createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest,
                                            HttpServletResponse response) throws JSONException, IOException{
    try {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            authenticationRequest.getUsername(), authenticationRequest.getPassword()
        ));
    } catch (BadCredentialsException e) {
        throw new BadCredentialsException("Usuário ou senha incorretos", e);
    }
    
    final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

    final String jwt = jwtUtil.generateToken(userDetails.getUsername());
    User user = userRepository.findFirstByEmail(authenticationRequest.getUsername());

    response.getWriter().write(new JSONObject()
                                .put("userId",user.getId())
                                .put("role", user.getRole())
                                .toString()
                                );
    response.addHeader("Access-Control-Expose-Headers", "Autorization");
    response.addHeader("Access-Control-Allow-Headers", "Authorization" +
                        "X-Pingother, Origin, X-Requested-With, Content-Type, Accept, X-Custom-header");

    response.addHeader(HEADER_STRING, TOKEN_PREFIX+jwt);
}                                            
    
}

