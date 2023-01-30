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
    <div className="navbar">
      <div className="logo">
        <h2 className="font-bold text-xl">BEACHES</h2>
      </div>
      <ul className="">
        <li className="pl-6 pr-6">Home</li>
        <li className="pl-6 pr-6">Destinations</li>
        <li className="pl-6 pr-6">Travel</li>
        <li className="pl-6 pr-6">Book</li>
        <li className="pl-6 pr-6">Views</li>
      </ul>
      <div className="nav-icons flex space-x-6 sm:hidden">
        <FiSearch />
        <BsFillPersonFill />
      </div>
      <div className="md:hidden" onClick={handleNav}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
