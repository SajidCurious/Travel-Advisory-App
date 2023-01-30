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
    <div className="navbar w-full flex justify-between items-center p-6 space-x-5 sm:space-x-0">
      <div className="logo">
        <h2 className="font-bold text-xl">BEACHES</h2>
      </div>
      <ul className="nav-menu flex lg:inline-flex md:inline-flex sm:hidden">
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
      <div className="md:hidden lg:hidden" onClick={handleNav}>
        <GiHamburgerMenu />
      </div>
      <div className={nav ? "mobile-nav active" : "mobile-nav"}>
        <div className="mobile-menu md:hidden lg:hidden absolute top-[-100vh] left-0 p-10 bg-[#f5f5f5] w-full">
          <ul className="mobile-nav mb-6 space-y-4 font-medium">
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
          </ul>
          <div className="mobile-menu-bottom">
            <div className="menu-icons flex flex-col space-y-5">
              <button className="bg-blue-500 text-white p-1 rounded-md text-xl">
                Search
              </button>
              <button className="bg-blue-500 text-white p-1 rounded-md text-xl">
                Account
              </button>
            </div>
            <div className="social-icons flex justify-around mt-10">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaPinterest />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
