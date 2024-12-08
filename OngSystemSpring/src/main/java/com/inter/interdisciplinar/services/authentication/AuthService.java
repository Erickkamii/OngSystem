package com.inter.interdisciplinar.services.authentication;

import com.inter.interdisciplinar.dto.SignupRequestDTO;
import com.inter.interdisciplinar.dto.UserDto;

public interface AuthService {

    UserDto signupClient(SignupRequestDTO signupRequestDTO);
}
