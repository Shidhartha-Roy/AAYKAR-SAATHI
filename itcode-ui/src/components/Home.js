import React from 'react'
import { useNavigate } from 'react-router-dom'
import landing from "../images/landing-image.png"

const Home = () => {

  const navigate = useNavigate();

  const tryService = (e) => {
    e.preventDefault();
     navigate("/search")
  }


  return (
    <div className="h-screen flex flex-col">
    
      <div className="text-green-200 font-extrabold font-mono tracking tracking-wider mt-40 max-w-xl" style={{textAlign: "left"}}>
      
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
      </div>
      <div className="flex justify-end mr-10 -mt-80">
        <img src={landing} className="max-w-xl" alt='Landing Page'/>
      </div>
      <div className="pl-5">
      <button onClick={tryService} className="h-9 pb-3 pl-3 pr-3 pt-1 -my-24 flex justify-start  tracking-wider text-xl text-white hover:text-white  font-bold transition-colors duration-150 bg-red-800 rounded-xl hover:bg-green-500 ">AAYKAR SAATHI</button>
      </div>
    </div>
  )
}

export default Home
