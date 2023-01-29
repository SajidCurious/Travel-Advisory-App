import React from "react";
import { FiSearch } from "react-icons/Fi";
import { BsFillPersonFill } from "react-icons/Bs";

const Navbar = () => {
  return (
    <div className="navbar w-full flex justify-between items-center p-6 space-x-5">
      <div className="logo">
        <h2>BEACHES</h2>
      </div>
      <ul className="nav-menu flex lg:inline-flex md:inline-flex sm:hidden">
        <li className="pl-6 pr-6">Home</li>
        <li className="pl-6 pr-6">Destinations</li>
        <li className="pl-6 pr-6">Travel</li>
        <li className="pl-6 pr-6">Book</li>
        <li className="pl-6 pr-6">Views</li>
      </ul>
      <div className="nav-icons flex space-x-6">
        <FiSearch className="icon" />
        <BsFillPersonFill className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
