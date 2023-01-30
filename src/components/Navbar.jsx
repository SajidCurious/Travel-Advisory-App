import { React, useState } from "react";
import { FiSearch } from "react-icons/Fi";
import { BsFillPersonFill } from "react-icons/Bs";
import { GiHamburgerMenu } from "react-icons/Gi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/Fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="header w-full ml-5 mr-5 mt-5 mb-5">
      <div className="navbar  flex items-center justify-between md:items-center md:justify-around lg:items-center lg:justify-around">
        <div className="logo">
          <h2 className="font-bold text-xl">BEACHES</h2>
        </div>
        <ul
          className={`bg-[#848884] static sm:absolute top-20 space-y-5 md:flex md:items-center lg:flex lg:items-center lg:justify-between md:space-y-0 lg:space-y-0 md:space-x-2`}
        >
          <li className="pl-6 pr-6">Home</li>
          <li className="pl-6 pr-6">Destinations</li>
          <li className="pl-6 pr-6">Travel</li>
          <li className="pl-6 pr-6">Book</li>
          <li className="pl-6 pr-6">Views</li>
        </ul>
        <div className="nav-icons flex space-x-4">
          <FiSearch />
          <BsFillPersonFill />
        </div>
        <div className="md:hidden lg:hidden mr-10">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
