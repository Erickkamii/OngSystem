package com.inter.interdisciplinar.dto;

import lombok.Data;

@Data
public class SignupRequestDTO {
    private long id;

    private String email;

    private String password;

    private String name;

    private String lastname;

    private String phone;

    
}
