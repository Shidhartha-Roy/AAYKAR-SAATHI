import React, { useState, useEffect } from 'react';
import logo from "../images/aaykar-saathi-logo.png"
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Modal from 'react-modal'
import close from "../images/close.svg" 
import axios from 'axios';

const Navbar = () => {
    const [ activeLink, setActiveLink] = useState("");

    const [loginMsg, setLoginMsg] = useState("Login");

    const navigate = useNavigate();

    const modalStyle = {
    content: {

      backgroundColor: "#101010",
      color: "#9f9f9f",
      padding: "60px",
      display: "flex",
      flexDirection: "column",
      width: "400px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "999",
      overflow: "hidden",
      borderRadius: "15px",
    }
  }



  const [logoutModal, setLogoutModal] = useState(false);

  const handleOpenLogoutModal = () =>{
    if(loginMsg === "Logout"){
      setLogoutModal(true)
    }
  }
  
  const handleCloseLogoutModal = () =>{
    setLogoutModal(false)
    navigate("/services")
  };
  
  const handleLogout = () =>{
    Cookies.remove("authToken");

    axios.defaults.headers.common['Authorization'] = "";
    
    navigate("/login")
    window.location.reload("false")
    
  }

    useEffect(() => {
      const token = Cookies.get('authToken');
      if(token){
        setLoginMsg("Logout")
        
      }
      // Get the current path
      const currentPath = window.location.pathname;
      setActiveLink(currentPath);
    }, []);


  return (
    <nav className="sticky top-0 bg-black">
      <div className="max-w-screen flex flex-wrap font-mono justify-between mx-auto p-4">

        <NavLink to="/" className="flex ml-2">
          <img src={logo} className="h-8 mr-3" alt="Aaykar Saathi Logo" />
          <span className="brand self-center text-2xl font-semibold whitespace-nowrap  dark:text-green-500">AAYKAR SAATHI</span>
        </NavLink>
        
        <div className="routes mr-10 text-white font-semibold flex md:space-x-8 pl-3 text-lg">
         
            <NavLink to="/" activeclassname="active" className="hover:text-green-500">
              Home
            </NavLink>
            <NavLink to="/about" activeclassname="active" className="hover:text-green-500">
              About
            </NavLink>
            <NavLink to="/contact" activeclassname="active" className="hover:text-green-500">
              Contact
            </NavLink>
            <NavLink to="/login" activeclassname="active" className="hover:text-green-500" onClick={handleOpenLogoutModal}>
              {loginMsg}
            </NavLink>
        </div>
        <Modal
        isOpen={logoutModal}
        onRequestClose={handleCloseLogoutModal}
        style={modalStyle}
      >
        <img src={close} className="closeMenu h-5 cursor-pointer ml-64 -mr-20 -mt-10 hover:filter: brightness-100" onClick={handleCloseLogoutModal} alt="Close" ></img>
        <div className="font-bold font-3xl text-white flex flex-col mt-2 ml-16">
          LEAVING SO SOON?
        </div>
        <div className="flex flex-row jsu mb-2 text-white font-bold">
        <button className="bg-red-500 focus:bg-red-700 p-2 mt-5 rounded-lg w-32" onClick={handleLogout}>Yes</button>
        <button className="bg-green-500 focus:bg-green-700 p-2 mt-5 rounded-lg w-32 ml-5" onClick={handleCloseLogoutModal}>No</button>
        </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
