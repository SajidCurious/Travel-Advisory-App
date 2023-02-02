import React from "react";
import { BsSearch } from "react-icons/Bs";
import { BsFillPersonFill } from "react-icons/Bs";
import { GiHamburgerMenu } from "react-icons/Gi";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsPinterest,
} from "react-icons/Bs";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center h-20 px-4">
      <div className="logo">
        <h1>BEACHES</h1>
      </div>
      <ul className="hidden md:flex lg:flex xl:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="icons hidden md:flex lg:flex xl:flex">
        <BsSearch size={20} />
        <BsFillPersonFill size={20} />
      </div>
      <div className="Hamburger md:hidden lg:hidden xl:hidden">
        <GiHamburgerMenu size={30} />
      </div>
      <div className="mobile-nav bg-gray-100 w-full md:hidden lg:hidden xl:hidden absolute top-14 left-0 px-4 py-4 my-4 flex flex-col">
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          <div className="buttons flex flex-col space-y-2">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="socials">
            <BsFacebook />
            <BsTwitter />
            <BsYoutube />
            <BsInstagram />
            <BsPinterest />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
