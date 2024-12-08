package com.inter.interdisciplinar.services.authentication;

import com.inter.interdisciplinar.dto.SignupRequestDTO;
import com.inter.interdisciplinar.dto.UserDto;

public interface AuthService {

    UserDto signupVolunteer(SignupRequestDTO signupRequestDTO);

    Boolean presentByEmail(String email);

    UserDto signupOng(SignupRequestDTO signupRequestDTO);
}
