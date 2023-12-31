import React, { useRef } from 'react'
import { inView } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserService from '../services/UserService';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from './Navbar';

const Login = () => {

    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
      email: "",
      password: "",
    })

    const [checkCred, setCheckCred] = useState({
      message: "",
    })

    const form = useRef();

    const handleInputChange = (e) =>{
      e.preventDefault();
      const value = e.target.value;
      setLoginDetails({...loginDetails, [e.target.name]: value});
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      const hashedPassword = bcrypt.hashSync(loginDetails.password, 11);
      
      const loginData = {
       email: loginDetails.email,
       passwordHash: hashedPassword,
     }

      UserService.loginUser(loginDetails)
      .then((response) => {
        const token = response.headers.get('Authorization');
        if(token){
          Cookies.set('authToken', token, {expires: 1});
          navigate("/services");
          window.location.reload("false")
        }
        else{
          setCheckCred({
            message: "LOGIN DENIED FROM SERVER",
          })
        }
        
        
    })
    .catch((error) => {
      if(error.response.data === "Invalid credentials"){
        setCheckCred({
          message: "CHECK YOUR CREDENTIALS",
        })
      }
    })
    }

  return (
    
      
    <div className=" bg-black lg:mt-auto text-white font-semibold p-0 font-mono">
      
        Enjoy the Full Services<br />
        <div className="font-bold text-3xl text-green-600 tracking-tight">LOGIN</div>
        <div className="flex flex-row h-screen items-center justify-center  font-mono mr-10">
        <div className="text-white flex items-center -mt-16 justify-center font-semibold ">
          <form
          action=""
          ref={form}
          className="contactForm ml-8 lg:ml-auto text-black lg:w-auto border border-solid flex flex-col justify-start p-5"
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onSubmit={handleSubmit}
        >
          
          <div className="formGroup">
          <div className="text-red-500 flex justify-start ml-2">{checkCred.message}</div>
            <div className="flex justify-start ml-2">
              <label className="text-green-400 mb-2">Username/Email</label>
            </div>
            
            <input
              type="text"
              className="formControl"
              value={loginDetails.email}
              onChange={handleInputChange}
              id="code"
              name="email"
            
              required
            />
          </div>
          
          <div className="col-12 formGroup">
          
          <div className="flex justify-start ml-2">
              <label className="text-green-400 mb-2">Password</label>
            </div>
            <input
              type="password"
              className="formControl"
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
