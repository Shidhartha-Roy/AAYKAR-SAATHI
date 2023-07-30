import React from 'react'
import search from "../images/seach.jpg"
const Services = () => {
  const backgroundStyle = {
    backgroundImage: `url(${search})`,
    filter: "brightness(100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "30rem",
    
  }
  return (
    
    <div
     className="text-white font-semibold p-0 font-mono"
     
     >
    Explore Our<br />
    <div className="font-bold text-4xl text-green-600 tracking-tight">SERVICES</div>
    <div className="flex flex-row justify-center -ml-16">
    <div className="h-screen text-white mt-40">
     <div className=" text-black text-2xl font-extrabold border border-solid border-red-600 h-60 ml-5 flex justify-center items-center" style={backgroundStyle} >
      TAX CODE SEARCH
     </div>
    </div>
    <div className="h-screen text-white mt-40 pl-5">
     <div className="text-white border border-solid border-red-600 h-60 ml-5 flex justify-center items-center" style={backgroundStyle}>
      Tax Code Search
     </div>
    </div>
    </div>
    </div>
  )
}

export default Services
