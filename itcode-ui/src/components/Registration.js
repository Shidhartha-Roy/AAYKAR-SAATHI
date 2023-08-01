import React, { useRef,useState } from 'react'
import { inView } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import bcrypt from 'bcryptjs';

const Registration = () => {
    const form = useRef();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email:"",
        password: "",
        
    })

    const [validate, setValidate] = useState({
        confirmPassword: "",
    })

    const [checkEmail, setCheckEmail] = useState({
      message: "",
    })

    const handleInputChange = (e) =>{
        const value = e.target.value;
    setUser({...user, [e.target.name]: value});
    setValidate({...validate, [e.target.name]: value});
    }

    const handleSubmit = (e) =>{
      const hashedPassword = bcrypt.hashSync(user.password, 11);
      const userData = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: hashedPassword,
      }
        e.preventDefault();
        UserService.saveUser(userData)
        .then(() => {
            console.log("User Registered");
            navigate("/login");
        })
        .catch((error) => {
          if(error.response.data === "Email Already Exists"){
            setCheckEmail({
              message: "EMAIL ALREADY EXISTS",
            })
         }
         else{
          setCheckEmail({
            message: "SOME OTHER ERROR",
          })
         }
        })
    }



  return (
    <div className="bg-black text-white lg:mt-auto font-semibold p-0 font-mono">
        Be a part of the Family<br />
        <div className="font-bold text-3xl text-green-600 tracking-tight">REGISTER</div>
        <div className="flex flex-row h-screen items-center justify-center  font-mono mr-10">
        <div className="text-white flex items-center -mt-16 justify-center font-semibold ">
          <form
          action=""
          ref={form}
          className="registerForm lg:mt-auto text-black border border-solid flex flex-col justify-start p-5"
          // style={{width: "32rem"}}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onSubmit={handleSubmit}  
        >
          
          <div className="registerGroup">
            <div className="text-red-500 flex justify-start ml-2">{checkEmail.message}</div>
            <div className="flex justify-start ml-2">
              <label className="text-green-400">First Name</label>
            </div>
            
            <input
              type="text"
              name="firstname"
              className="formControl"
              value={user.firstname}
              onChange={handleInputChange}
              // style={{width: "28rem", borderRadius: "10px"}}
              required
            />
          </div>
          <div className="registerGroup">
          <div className="flex justify-start ml-2">
              <label className="text-green-400">Last Name</label>
            </div>
            <input
              type="text"
              name="lastname"
              className="formControl"
              // style={{width: "28rem", borderRadius: "10px"}}
              value={user.lastname}
              onChange={handleInputChange}
              required
              
            />
          </div>
          <div className="registerGroup" style={{ display: "inline-block" }}>
          <div className="flex justify-start ml-2">
              <label className="text-green-400">Email</label>
            </div>
            <input
              type="email"
              name="email"
              className="formControl"
              // style={{width: "28rem", borderRadius: "10px"}}
              value={user.email}
              onChange={handleInputChange}
              required
              
            />
          </div>
          <div className="col-12 registerGroup">
          <div className="flex justify-start ml-2">
              <label className="text-green-400">Password</label>
            </div>
            <input
              type="password"
              name="password"
              className="formControl"
              // style={{width: "28rem", borderRadius: "10px"}}
              value={user.password}
              onChange={handleInputChange}
              required
              
            />
          </div>
          <div className="col-12 formGroup">
          <div className="flex justify-start ml-2">
              <label className="text-green-400">Confirm Password</label>
            </div>
            <input
              type="password"
              name="confirmPassword"
              className="formControl"
              style={{
                        borderColor: user.password !== validate.confirmPassword ? 'red' : '',
                    }}
              value={validate.confirmPassword}
              onChange={handleInputChange}
              required
              
            />
            {user.password !== validate.confirmPassword && (
            <div className="text-red-500 -mt-4 mb-5 ml-2 text-xs flex justify-start">*Entered Passwords do not match</div> )}
          </div>
          <div className="">
            <button className="bg-green-600 rounded-2xl text-lg p-2 w-32 focus:bg-green-400">Submit</button>
            
            
          </div>
          <div className="text-white text-sm flex flex-row justify-center mt-5">
            Already Family? <NavLink to="/login" className="ml-2 text-green-600 hover:text-green-300">Login</NavLink>
          </div>
        </form>
        </div>
        </div>
        </div>
  )
}

export default Registration
