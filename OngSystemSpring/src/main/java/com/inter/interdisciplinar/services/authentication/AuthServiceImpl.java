package com.inter.interdisciplinar.services.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inter.interdisciplinar.dto.SignupRequestDTO;
import com.inter.interdisciplinar.entity.User;
import com.inter.interdisciplinar.enums.UserRole;
import com.inter.interdisciplinar.repository.UserRepository;

@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private UserRepository userRepository;

    public UserDto signupClient(SignupRequestDTO signupRequestDTO){
        User user = new User();
        user.setName(signupRequestDTO.getName());
        user.setLastname(signupRequestDTO.getLastname());
        user.setEmail(signupRequestDTO.getEmail());
        user.setPhone(signupRequestDTO.getPhone());
        user.setPassword(signupRequestDTO.getPassword());

        user.setRole(UserRole.VOLUNTEER);

        return userRepository.save(user).getDto();
    }
}
