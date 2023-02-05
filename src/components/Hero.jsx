import React from "react";
import maldivesVideo from "./assets/maldivesVideo.mp4";
import { AiOutlineSearch } from "react-icons/Ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={maldivesVideo}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
      <div className="hero-color absolute w-full h-full top-0 left-0 bg-gray-900/70"></div>
      <div className="hero-text absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form
          action=""
          className="bg-gray-100/90 flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black"
        >
          <div className="input-text">
            <input
              type="text"
              placeholder="Search Destinations"
              className="bg-transparent w-fit focus:outline-none"
            />
          </div>
          <div className="search-button">
            <button>
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
