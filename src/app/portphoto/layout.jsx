import React from "react";
import NavbarPhoto from "./components/NavbarPhoto";
import FooterPhoto from "./components/FooterPhoto";

const PortPhotoLayout = ({ children }) => {
  return (
    <div className="grid select-none auto-rows-min h-screen bg-[#191923] text-gray-50">
      <NavbarPhoto/>
      <main>{children}</main>
      <FooterPhoto />
    </div>
  );
};

export default PortPhotoLayout;