
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition-all duration-300 relative group"
    >
      {title}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-[#64ffda] to-[#2997ff] group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default NavLink;