import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center animate-fade-down
    ">
      {links.map((link, index) => (
        <li
          key={index}
          className="hover:bg-primary-700 transition-colors rounded-full "
        >
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
