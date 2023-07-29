package com.sid.itcodeapi.services;

import com.sid.itcodeapi.entity.UserEntity;
import com.sid.itcodeapi.model.UserLoginModel;
import com.sid.itcodeapi.model.UserModel;
import com.sid.itcodeapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

    @Override
    public UserEntity loginUser(UserLoginModel userLoginModel) {
        String email = userLoginModel.getEmail();
        UserEntity user = userRepository.findByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }
//        if(!passwordEncoder.matches(user.getPassword())){
//            throw new IllegalArgumentException("Invalid password");
//        }

        return user;
    }


}
