import React from 'react'
import logo from "../images/aaykar-saathi-logo.png"
import SocialIcons from './SocialIcons'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
     className="aboutTitle bg-black lg:mt-auto text-white font-semibold p-0 font-mono"
     
     >
    ABOUT<br />
    <div className="font-bold text-4xl text-green-600 tracking-tight">AAYKAR SAATHI</div>
    <div className="h-screen flex flex-col text-white items-center justify-center">
    <div className="flex items-center -mt-32">
      <img src={logo} className="aaykarImage h-72 border-4 border-yellow-300 p-2 -ml-22" />
      <motion.div 
      
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="siteDescription ml-10 ">
        <div className="description text-xl text-green-500 font-bold -mt-7" style={{textAlign: "left"}}>
          DESCRIPTION:
        </div>
        <div className="compDescription text-lg tracking-wider font-semibold text-green-100 max-w-3xl" style={{textAlign: "left"}}>
        AAYKAR SAATHI is a tool designed to simplify the complexities of the Income Tax Law of 1961. 
        Our platform is dedicated to helping you grasp the intricate terminologies and nuances of various tax law codes. 
        With AAYKAR SAATHI, you can navigate the tax landscape with confidence and gain a deeper understanding of the tax regulations 
        that impact your financial journey. Let us be your trusted companion on your tax compliance and financial empowerment journey.
        </div>
        <div className="mobileDescription text-lg tracking-wider font-semibold text-green-100 max-w-3xl" style={{textAlign: "left"}}>
        AAYKAR SAATHI is a tool to simplify the complexities of Income Tax Law of 1961. It helps you understand tax codes, gain confidence in navigating taxes, 
        and empowers you financially. Trust us to be your companion on your tax compliance journey.
        </div>
        <div className="developerDesc text-xl text-green-500 mt-7 font-bold" style={{textAlign: "left"}}>
          DEVELOPED BY:
        </div>
        <div className="developerInfo text-lg text-green-100 max-w-lg" style={{textAlign: "left"}}>
        <a href="https://shidhartharoy.netlify.app/">Shidhartha Roy</a>
        <div className="flex-row">
        <SocialIcons />
        </div>
        </div>
      </motion.div>
    </div>
  </div>
  </div>
  

  )
}

export default About
