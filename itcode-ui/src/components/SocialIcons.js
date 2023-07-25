import git from "../images/github.png"
import linkedin from "../images/linkedin.png"
import insta from "../images/instagram.png"

const SocialIcons = () => {
  
    return (
      <div className="flex mt-3 -mb-10">
        <a href="https://github.com/Shidhartha-Roy">
            <img src={git} className="w-5 h-5 tracking-wider"/>
        </a>
        <a href="https://www.linkedin.com/in/shidhartha-roy">
          <img src={linkedin} className="w-5 h-5 ml-2"/>
        </a>
        <a href="https://www.instagram.com/thesidtales/">
            <img src={insta} className="w-7 h-7 -mt-1 ml-2"/>
        </a>
        
      </div>
    );
  };
  
  export default SocialIcons