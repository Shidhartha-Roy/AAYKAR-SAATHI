import React from 'react'
import { useNavigate } from 'react-router-dom'
import landing from "../images/landing-image.png"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import Cookies from 'js-cookie';

const Home = () => {

  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const tryService = (e) => {
    e.preventDefault();
    const token = Cookies.get('authToken');
    console.log(token);
    if(token){
      navigate("/services");
    }
    else{
      navigate("/login")
    }
    
  }


  return (
    <div className="h-screen flex flex-col">
    
      <motion.div 
      ref={ref}
      initial={{ x: "-10vw", opacity: 0 }} // Off-screen position to the left
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }} // Animate to the original position (left to right)
      transition={{ duration: 0.6, ease: "easeInOut" }} // Set the transition type and duration
      className="text-green-200 font-extrabold font-mono tracking tracking-wider mt-40 max-w-xl" style={{textAlign: "left"}}>
      
        <div className="text-6xl pl-5 text-green-400" >
     WELCCOME TO, AAYKAR SAATHI:
      </div>
      <br /> 
      <div className=" text-sm pl-5 max-w-lg text-green-100">
      YOUR EPIC GUIDE TO DECODING IT ACT,1961 FOR EFFORTLESS FILING! EMBARK ON A TAX ADVENTURE AND EMPOWER YOUR FINANCES WITH OUR INTUITIVE TOOL!
      <br />
      <div className="font-semibold text-xl mt-4 text-green-500">
      TRY
      </div> 
      </div>
      </motion.div>
      <motion.div
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      
      className="flex justify-end mr-10 -mt-80">
        <img src={landing} className="max-w-xl" alt='Landing Page'/>
      </motion.div>
      <motion.div 
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="pl-5 flex justify-start">
      <button onClick={tryService} className="h-9 pb-3 pl-3 pr-3 pt-1 -my-24 flex justify-start  tracking-wider text-xl text-white hover:text-white  font-bold transition-colors duration-150 bg-red-800 rounded-xl hover:bg-green-500 ">AAYKAR SAATHI</button>
      </motion.div>
    </div>
  )
}

export default Home
