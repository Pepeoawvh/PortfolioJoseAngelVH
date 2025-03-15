import React, { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
  const [isWebClicked, setIsWebClicked] = useState(false);
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);

  const handleWebClick = () => {
    setIsWebClicked(true);
    setIsPhotoClicked(false);
  };

  const handlePhotoClick = () => {
    setIsPhotoClicked(true);
    setIsWebClicked(false);
  };

  return (
    <div className="absolute inset-0 text-gray-50 overflow-hidden">
      <div className="relative h-full">
        {/* Sección Desarrollo Web */}
        <div
          className={`absolute w-full h-full grid items-center justify-center transition-all duration-500 hover:text-white hover:bg-[#0f2c1b] clip-path-webdev shadow-lg`}
          onClick={handleWebClick}
        >
          <Link
            href="/webdev"
            className={`text-xl select-none mr-36 sm:mr-40 mb-44 tracking-wider transition-all duration-300 border border-transparent ${
              isWebClicked
                ? "bg-black/80 shadow-lg shadow-[#2ecc71]/20 text-[#2ecc71] py-3 px-2 rounded-md cursor-pointer border-[#2ecc71]/30"
                : "text-gray-300 cursor-pointer hover:text-[#2ecc71] hover:bg-black/70 hover:py-3 hover:px-2 hover:rounded-md hover:border-[#2ecc71]/30"
            }`}
          >
            <TypeAnimation
              sequence={["<Desarrollo Web/>", 3000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-mono"
            />
          </Link>
        </div>

        {/* Sección Fotografía */}
        <div
          className={`absolute w-full h-full grid items-center justify-center transition-all duration-500 hover:text-white tracking-wider bg-[#0a0a0a] hover:bg-[#121212] clip-path-photography shadow-lg`}
          onClick={handlePhotoClick}
        >
          <Link
            href="/portphoto"
            className={`ml-44 mt-36 text-xl select-none transition-all duration-300 border border-transparent ${
              isPhotoClicked
                ? "bg-black/80 shadow-lg shadow-white/20 text-white py-3 px-6 rounded-md cursor-pointer border-white/30"
                : "text-gray-400 cursor-pointer hover:text-white hover:bg-black/70 hover:py-3 hover:px-6 hover:rounded-md hover:border-white/30"
            }`}
          >
            <TypeAnimation
              sequence={["[Fotografía]", 3000]} 
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-serif"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;