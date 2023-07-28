import React, { useState, useEffect } from 'react';
import logo from "../images/aaykar-saathi-logo.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [ activeLink, setActiveLink] = useState("")

    useEffect(() => {
      // Get the current path
      const currentPath = window.location.pathname;
      setActiveLink(currentPath);
    }, []);


  return (
    <nav className="sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap font-mono justify-between mx-auto p-4">

        <NavLink to="/" className="flex -ml-24">
          <img src={logo} className="h-8 mr-3" alt="Aaykar Saathi Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap  dark:text-green-500">AAYKAR SAATHI</span>
        </NavLink>
        
        <div className="-mr-20 text-white font-semibold flex md:space-x-8 pl-3 text-lg">
         
            <NavLink to="/" activeclassname="active" className="hover:text-green-500">
              Home
            </NavLink>
            <NavLink to="/search" activeclassname="active" className="hover:text-green-500">
              Search
            </NavLink>
            <NavLink to="/about" activeclassname="active" className="hover:text-green-500">
              About
            </NavLink>
            <NavLink to="/contact" activeclassname="active" className="hover:text-green-500">
              Contact
            </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
