import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const ContactInfo = ({ name, email, location }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div
      className="contactInfo"
      style={{textAlign: "left"}}
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle text-2xl font-bold -mt-20">DEVELOPER INFORMATION</h4>
      <p className="infoDescription">Open for opportunities. Let's connect and build something awesome together! </p>
      <ul className="listInfo -mt-1">
        <li>
          <div className="personalContactInfo">
            <div className="mediaWrap -mt-5 flex flex-row lg:flex lg:flex-col">
              <h6 className="infoType font-bold text-xl font-mono">NAME</h6>
              <span className="infoValue text-lg font-semibold ml-2 lg:ml-auto"><a href="https://shidhartharoy.netlify.app/">{name}</a></span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <div className="mediaWrap -mt-5 flex flex-row lg:flex lg:flex-col">
              <h6 className="infoType font-bold text-xl font-mono">LOCATION</h6>
              <span className="infoValue text-lg font-semibold ml-2 lg:ml-auto">{location}</span>
              </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <div className="mediaWrap -mt-5 flex flex-row lg:flex lg:flex-col">
              <h6 className="infoType font-bold text-xl font-mono ">EMAIL</h6>
              <span className="infoValue text-lg ml-2 lg:ml-auto">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
              </div>
          </div>
          <div className="socialContainer ml-10">
            <SocialIcons />
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactInfo;