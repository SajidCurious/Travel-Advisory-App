import { React, useState } from "react";
import { BsSearch } from "react-icons/Bs";
import { BsFillPersonFill } from "react-icons/Bs";
import { GiHamburgerMenu } from "react-icons/Gi";
import { RxCross2 } from "react-icons/Rx";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsPinterest,
} from "react-icons/Bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navbar flex justify-between items-center mt-4 px-4 absolute z-10 w-full text-white">
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
      <div className="icons hidden md:flex lg:flex xl:flex space-x-6 mx-4">
        <BsSearch size={20} />
        <BsFillPersonFill size={20} />
      </div>
      <div
        onClick={handleNav}
        className="Hamburger md:hidden lg:hidden xl:hidden cursor-pointer"
      >
        {nav ? <RxCross2 size={25} /> : <GiHamburgerMenu size={25} />}
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "mobile-nav text-black bg-gray-100 w-full md:hidden lg:hidden xl:hidden absolute top-14 left-0 px-4 py-4 my-4 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
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
          <div className="socials flex justify-around mt-10 mb-5">
            <BsFacebook size={28} className="icon" />
            <BsTwitter size={28} className="icon" />
            <BsYoutube size={28} className="icon" />
            <BsInstagram size={28} className="icon" />
            <BsPinterest size={28} className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
