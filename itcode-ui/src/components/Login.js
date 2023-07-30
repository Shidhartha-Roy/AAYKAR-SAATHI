import React, { useRef } from 'react'
import { inView } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserService from '../services/UserService';
import bcrypt from 'bcryptjs';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
      email: "",
      password: "",
    })

    const form = useRef();

    const handleInputChange = (e) =>{
      e.preventDefault();
      const value = e.target.value;
      setLoginDetails({...loginDetails, [e.target.name]: value});
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      // const hashedPassword = bcrypt.hashSync(loginDetails.password, 11);
      
      //const loginData = {
      //  email: loginDetails.email,
      //  passwordHash: loginDetails.password,
     // }

      UserService.loginUser(loginDetails)
      .then((response) => {
        const token = response.headers.get('Authorization');
        if(token){
          // console.log("JWT Token Received: ", token);
          navigate("/search");
        }
        else{
          console.log("Login failed");
        }
        
    })
    .catch((error) => {
      console.log(error)
    })
    }

  return (
    <div className="text-white font-semibold p-0 font-mono">
        Enjoy the Full Services<br />
        <div className="font-bold text-3xl text-green-600 tracking-tight">LOGIN</div>
        <div className="flex flex-row h-screen items-center justify-center  font-mono mr-10">
        <div className="text-white flex items-center -mt-16 justify-center font-semibold ">
          <form
          action=""
          ref={form}
          className="contactForm text-black border border-solid flex flex-col justify-start p-5"
          style={{width: "32rem"}}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onSubmit={handleSubmit}
        >
          
          <div className="formGroup">
            <div className="flex justify-start ml-2">
              <label className="text-green-400">Username/Email</label>
            </div>
            
            <input
              type="text"
              className="formControl"
              value={loginDetails.email}
              onChange={handleInputChange}
              style={{width: "28rem", borderRadius: "10px"}}
              id="code"
              name="email"
            
              required
            />
          </div>
          
          <div className="col-12 formGroup">
          <div className="flex justify-start ml-2">
              <label className="text-green-400">Password</label>
            </div>
            <input
              type="password"
              className="formControl"
              style={{width: "28rem", borderRadius: "10px"}}
              value={loginDetails.password}
              onChange={handleInputChange}
              id="applicable"
              name="password"
              required
              
            />
          </div>
          <div className="">
            <button className="bg-green-600 rounded-2xl text-lg p-2 w-32 focus:bg-green-400">Login</button>
            
          </div>
          <div className="text-white text-sm flex flex-row justify-center mt-5">
            Not Family Yet ? <NavLink to="/register" className="ml-2 text-green-600 hover:text-green-300">Register</NavLink>
          </div>
        </form>
        </div>
        </div>
        </div>
  )
}

export default Login
