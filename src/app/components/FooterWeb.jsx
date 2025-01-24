import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterWeb = () => {
  return (
    <footer className="bg-[#20202a] py-2 fixed bottom-0 w-full">
      <div className="container p-2 flex justify-between items-center">
        <div className="grid grid-flow-col w-full justify-items-center gap-6 ">
          <a href="https://github.com/Pepeoawvh" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className=" h-5 text-white hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/jose-angel-valdes-hernandez/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className=" text-white h-5 hover:text-gray-400" />
          </a>

          <a href="https://wa.me/56949866129" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white h-5 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterWeb;