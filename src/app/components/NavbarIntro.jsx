"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarIntro = () => {

  return (
    <div className="grid bg-[#20202a] shadow-md py-3">
      <div className="grid items-center justify-items-center">
        <Link href="/" className="justify-self-center">
          <Image
            src="/images/logoWhite.svg"
            alt="LOGO"
            width={140}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavbarIntro;