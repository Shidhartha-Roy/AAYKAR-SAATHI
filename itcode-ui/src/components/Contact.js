import { useInView } from "react-intersection-observer";
import { useState } from "react";
import React, {useRef} from "react";
import emailjs from '@emailjs/browser'
import ContactInfo from "./ContactInfo";

const Contact = () => {

  const form = useRef();
    const inView = useInView({
          threshold: 0,
          triggerOnce: true,
        });


  // const success = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
    
  });
  const [button, setButton] = useState({
    message: "Send Message",
  })

  const reviveForm = () =>{
    setTimeout(() => {
      setButton({
        message: "Send Message"
      });
      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      })
    }, 3000);
  }

  const sendEmail = (e) => {
      e.preventDefault();
      setButton({
        message: "Sending..."
      })
      
  
      emailjs.sendForm('service_mdrpn3m', 'template_m04djxh', form.current, 'xz44QJhu_ypIQkas_')
        .then(() => {
            setButton({
              message: "Message Sent"
            })
            reviveForm();
        }, (error) => {
            console.log(error.text);
            setButton({
              message: "Message Not Sent"
            })
            reviveForm();
        });
    };

   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
     className="email bg-black text-white font-semibold p-0 font-mono"
     
     >
    CONTACT<br />
    <div className="pageTitle font-bold text-3xl text-green-600 tracking-tight">THE TEAM</div>
    <div className="lg:flex lg:flex-row h-screen justify-between  font-mono">
    <div className="emailFormContainer text-white flex items-center -mt-16 justify-start font-semibold ml-40 ">
      <form
      action=""
      ref={form}
      className="emailForm text-black"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={sendEmail}
    >
      <h4 className="contentTitle font-bold text-2xl" style={{textAlign: "left"}} id="emailTitle">MESSAGE ME</h4>
      <div className="emailGroup" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl -mb-2 lg:mb-auto"
          onChange={handleChange}
          value={formData.from_name}
          id="contactName"
          name="from_name"
          placeholder="Name"
          required
        />
      </div>
      <div className="emailGroup" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="formControl ml-10 -mt-3 lg:mt-5 lg:-ml-1"
          onChange={handleChange}
          value={formData.from_email}
          id="contactEmail"
          name="from_email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 emailGroup">
        <input
          type="text"
          className="formControl -mt-10 lg:mt-auto"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 emailGroup">
        <textarea
          className="formControl -mt-2 lg:mt-auto"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="">
        <button className="bg-blue-600 rounded-2xl p-3">{button.message}</button>
        
      </div>
    </form>
    </div>
    <div className="flex items-center text-white mt-32 lg:-mt-16 lg:mr-32 text-2xl">
      <ContactInfo name="Shidhartha Roy" location="Guwahati, Assam, India" email="sidroy192@gmail.com"/>
    </div>
    </div>
    </div>
  )
}

export default Contact
