import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faWhatsapp,

} from "@fortawesome/free-brands-svg-icons";

const FooterPhoto = () => {
  return (
    <footer className="grid justify-items-center text-xs bg-[#20202a] text-white py-4">
    
      <div className="grid grid-flow-col gap-4 w-full justify-items-center ">
        <a
          href="https://www.instagram.com/joseangel.vh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-5 text-white hover:text-gray-400"
          />
        </a>
        <a
          href="https://www.behance.net/ljpp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faBehance}
            className="h-5 text-white hover:text-gray-400"
          />
        </a>
        <a
          href="https://wa.me/56949866129"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-5 text-white hover:text-gray-400"
          />
        </a>
      </div>
      <p className="p-4 bg-">© {new Date().getFullYear()} José Valdés Hernández</p>
    </footer>
  );
};

export default FooterPhoto;
