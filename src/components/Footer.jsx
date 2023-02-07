import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsPinterest,
} from "react-icons/Bs";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex sm:flex-col text-center justify-between items-center">
          <h1 className="mb-11">Beaches</h1>
          <div className="flex justify-around w-full my-4">
            <BsFacebook size={28} className="icon" />
            <BsTwitter size={28} className="icon" />
            <BsYoutube size={28} className="icon" />
            <BsInstagram size={28} className="icon" />
            <BsPinterest size={28} className="icon" />
          </div>
        </div>
        <div className="flex justify-around">
          <ul>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
