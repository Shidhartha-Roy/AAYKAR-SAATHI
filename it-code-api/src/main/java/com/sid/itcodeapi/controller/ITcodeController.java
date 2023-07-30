package com.sid.itcodeapi.controller;

import com.sid.itcodeapi.entity.UserEntity;
import com.sid.itcodeapi.model.ItcodeModel;
import com.sid.itcodeapi.model.UserLoginModel;
import com.sid.itcodeapi.model.UserModel;
import com.sid.itcodeapi.services.ItcodeService;
import com.sid.itcodeapi.services.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Key;
import java.util.Date;

@RestController
@RequestMapping("/aaykarsaathi/")
public class ITcodeController {

    @Autowired
    private ItcodeService itcodeService;
    @Autowired
    private UserService userService;
    @Autowired
    private ApplicationEventPublisher publisher;

    public ITcodeController(ItcodeService itcodeService) {
        this.itcodeService = itcodeService;
    }

    //Search IT code api
    @GetMapping("/result/{id}")
    public ResponseEntity<ItcodeModel> getItcodeById(@PathVariable String id){
        ItcodeModel itcodeModel = null;
        itcodeModel = itcodeService.getCodeById(id);
        return ResponseEntity.ok(itcodeModel);
    }

    //Registering User API
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserModel userModel){
        try {
            UserEntity user = userService.registerUser(userModel);

            return ResponseEntity.ok(user);
        }
        catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email Already Exists");
        }


    }

//    private final String jwtSecret = "this_is_a_testing_secret_key";
    private final long jwtExpirationMs = 86400000;

    private String generateJwtToken(UserEntity user) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        Claims claims = Jwts.claims().setSubject(user.getEmail());

        Date now = new Date();
        Date expiration = new Date(now.getTime() + jwtExpirationMs);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginModel userLoginModel){
        try{
            UserEntity user =  userService.loginUser(userLoginModel.getEmail(), userLoginModel.getPassword());

            String token = generateJwtToken(user);

            return ResponseEntity.ok().header("Authorization", "Bearer "+token).build();
        }
        catch (UsernameNotFoundException | IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }




}
