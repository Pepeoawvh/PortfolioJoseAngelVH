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
    <div className="grid h-screen bg-[#0c0c10] text-gray-50">
      <div>
        <div
          className={`absolute w-full h-full grid items-center justify-center transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#20202a] clip-path-webdev`}
          onClick={handleWebClick}
        >
          <Link
            href="/webdev"
            className={`text-xl mr-36 sm:mr-40 mb-44 tracking-wider ${
              isWebClicked
                ? "bg-black shadow-md text-primary-500 py-2 px-4 rounded cursor-pointer"
                : "text-gray-700 cursor-pointer"
            }`}
          >
            <TypeAnimation
              sequence={["<Desarrollo Web/>", 3000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </Link>
        </div>
        <div
          className={`absolute w-full h-full grid items-center justify-center transition-colors duration-300 ease-in-out hover:text-white tracking-wider bg-[#0c0c10] hover:bg-[#20202a] clip-path-photography`}
          onClick={handlePhotoClick}
        >
          <Link
            href="/portphoto"
            className={`ml-44 mt-36 text-xl ${
              isPhotoClicked
                ? "bg-black shadow-md text-primary-500 py-2 px-4 rounded cursor-pointer"
                : "text-gray-700 cursor-pointer"
            }`}
          >
            <TypeAnimation
              sequence={["[Fotografía]", 3000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;