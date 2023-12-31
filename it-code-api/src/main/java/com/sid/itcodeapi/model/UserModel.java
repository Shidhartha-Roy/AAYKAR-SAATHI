package com.sid.itcodeapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
}
