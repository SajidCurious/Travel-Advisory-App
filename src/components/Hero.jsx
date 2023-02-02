import React from "react";
import maldivesVideo from "./assets/maldivesVideo.mp4";

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
    </div>
  );
};

export default Hero;
