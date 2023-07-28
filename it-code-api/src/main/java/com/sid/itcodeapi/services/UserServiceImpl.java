package com.sid.itcodeapi.services;

import com.sid.itcodeapi.entity.UserEntity;
import com.sid.itcodeapi.model.UserModel;
import com.sid.itcodeapi.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserEntity registerUser(UserModel userModel) {

        String email = userModel.getEmail();
        UserEntity existingUser = userRepository.findByEmail(email);

        if(existingUser != null){
            throw new IllegalArgumentException("Email already registered");
        }
        UserEntity user = new UserEntity();
        user.setEmail(userModel.getEmail());
        user.setFirstname(userModel.getFirstname());
        user.setLastname(userModel.getLastname());
        user.setPassword(passwordEncoder.encode(userModel.getPassword()));

        userRepository.save(user);
        return user;
    }


}
