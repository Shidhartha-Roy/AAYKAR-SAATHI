import React, { useRef } from 'react'
import { inView } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const form = useRef();

  return (
    <div className="text-white font-semibold p-0 font-mono">
        Be a part of the Family<br />
        <div className="font-bold text-3xl text-green-600 tracking-tight">REGISTER</div>
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
        //   onSubmit={goBack}
        >
          
          <div className="formGroup">
            <div className="flex justify-start ml-2">
              <label className="text-green-400">Username/Email</label>
            </div>
            
            <input
              type="text"
              className="formControl"
            //   value={taxCode.id}
              style={{width: "28rem", borderRadius: "10px"}}
              id="code"
              name="req_code"
            
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
            //   value={taxCode.applicable}
              id="applicable"
              name="applicable_for"
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
