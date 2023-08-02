import React, { useState, useEffect } from 'react';
import logo from "../images/aaykar-saathi-logo.png"
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Modal from 'react-modal'
import close from "../images/close.svg" 
import open from "../images/open.svg"
import axios from 'axios';

const Navbar = () => {
    const [ activeLink, setActiveLink] = useState("");

    const [loginMsg, setLoginMsg] = useState("Login");

    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const [logoutModal, setLogoutModal] = useState(false);

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




  const handleOpenLogoutModal = () =>{
    setIsNavOpen(!isNavOpen);
    if(loginMsg === "Logout"){
      setLogoutModal(true)
    }
  }
  
  const handleCloseLogoutModal = () =>{
    
    navigate("/services")
  };

  const handleCloseNavbar = () =>{
    setIsNavOpen(!isNavOpen);
    
  }
  
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
    <nav className="navbar">
      <div className="max-w-screen flex flex-wrap font-mono justify-between mx-auto p-4">

        <NavLink to="/" className="flex ml-2">
          <img src={logo} className="h-8 -ml-4 lg:mr-3" alt="Aaykar Saathi Logo" />
          <span className="brand self-center text-2xl font-semibold whitespace-nowrap  dark:text-green-500">AAYKAR SAATHI</span>
        </NavLink>
        
        <div className="routes lg:-mr-5 text-white font-semibold flex md:space-x-8 pl-3 text-lg">
         
            <NavLink to="/" activeclassname="active" className={`navItem ${isNavOpen ? "open" : "closed"}`} onClick={handleCloseNavbar}>
              Home
            </NavLink>
            <NavLink to="/about" activeclassname="active" className={`navItem ${isNavOpen ? "open" : "closed"}`} onClick={handleCloseNavbar}>
              About
            </NavLink>
            <NavLink to="/contact" activeclassname="active" className={`navItem ${isNavOpen ? "open" : "closed"}`} onClick={handleCloseNavbar}>
              Contact
            </NavLink>
            <NavLink to="/login" activeclassname="active" className={`navItem ${isNavOpen ? "open" : "closed"}`} onClick={handleOpenLogoutModal} >
              {loginMsg}
            </NavLink>
            
            <button className="dropdown-toggle" onClick={handleCloseNavbar}>
        {isNavOpen ? (
          <img src={close} className="closeNav h-5 cursor-pointer -mt-1 hover:filter: brightness-100" alt="hamburger-closing"/>
        ) : (
          <img src={open} className="closeNav h-5 cursor-pointer -mt-1 hover:filter: brightness-100" alt="hamburger-opening"/>
        )}
      </button>
            
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
