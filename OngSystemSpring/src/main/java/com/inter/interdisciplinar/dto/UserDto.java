package com.inter.interdisciplinar.dto;

import com.inter.interdisciplinar.enums.UserRole;

import lombok.Data;

@Data
public class UserDto {
    private long id;

    private String email;

    private String password;

    private String name;

    private String lastname;

    private String phone;
    
    private UserRole role;
    
}
