import React,{ useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import wink from "../images/contactus.png"
import Modal from 'react-modal'
import close from "../images/close.svg"
import dev from "../images/devimage.png"
import Cookies from 'js-cookie'


const Services = () => {

  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "30rem",
    
  }

  useEffect(() => {
    const token = Cookies.get("authToken");
    if(!token){
      navigate("/login");
    }
  }, [])
  

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

  Modal.setAppElement("#root");

  const [serviceModal, setServiceModal] = useState(false);

  //Service Model
  const handleOpenServiceModal = () => setServiceModal(true);
  const handleCloseServiceModal = () => setServiceModal(false);


  return (
    
    <div
     className="h-screen text-white font-semibold p-0 font-mono"
     
     >
    Explore Our<br />
    <div className="font-bold text-3xl text-green-600 tracking-tight">SERVICES</div>
    <div className="flex flex-row justify-center -ml-16">
    
    <div className=" text-white mt-40">
    <NavLink to="/search">
     <div className="text-white bg-green-900 hover:bg-green-600 hover:text-yellow-200  text-4xl font-extrabold border border-solid border-black cursor-pointer h-60 ml-5 flex justify-start items-center rounded-xl" style={backgroundStyle} >
      <div className="ml-20 mt-2 flex">TAX CODE SEARCH</div>
     </div>
     </NavLink>
    </div>
    
    <div className=" text-white mt-40 pl-5">
     <div className="text-white bg-red-900 hover:bg-red-600 hover:text-green-300  text-4xl font-extrabold border border-solid border-black cursor-pointer h-60 ml-5 flex justify-start items-center rounded-xl" style={backgroundStyle} onClick={handleOpenServiceModal}>
     <div className="ml-8 mt-2 flex">APPLICABLE DEDUCTIONS</div>
     </div>
    </div>
    </div>
    <div className="flex justify-center">
    <div className="w-96 h-32  flex flex-col justify-center mt-12 -ml-5">
      <div className="text-lg">Got Ideas?</div>
      <NavLink to="/contact" ><div className="font-bold text-3xl text-yellow-400 tracking-tight cursor-pointer">
        Let Us Know
        <div className="winkImage w-24 ml-36">
        <img src={wink} />
        </div></div></NavLink>

    </div>
    </div>
    <Modal
        isOpen={serviceModal}
        onRequestClose={handleCloseServiceModal}
        style={modalStyle}
      >
        <img src={close} className="closeMenu h-5 cursor-pointer ml-64 -mr-20 -mt-10 hover:filter: brightness-100" onClick={handleCloseServiceModal} alt="Close" ></img>
        <div className="font-bold font-2xl text-white flex flex-row mt-2">
          SOMETHING GOOD IS ON THE WAY
          <div className="winkImage w-52 ml-10 -mt-5">
        <img src={dev} />
        </div>
        </div>
        </Modal>
    
    </div>
    
  )
}

export default Services
