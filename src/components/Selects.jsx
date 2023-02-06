import React from "react";
import SelectCard from "./SelectCard";
import BoraBora from "./assets/borabora.jpg";
import BoraBora2 from "./assets/borabora2.jpg";
import Maldives from "./assets/maldives.jpg";
import Maldives2 from "./assets/maldives2.jpg";
import Maldives3 from "./assets/maldives2.jpg";
import KeyWest from "./assets/keywest.jpg";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <SelectCard bg={BoraBora} text="BoraBora" />
      <SelectCard bg={BoraBora2} text="Maldives" />
      <SelectCard bg={Maldives} text="Antigua" />
      <SelectCard bg={Maldives2} text="Cozumel" />
      <SelectCard bg={Maldives3} text="Jamaica" />
      <SelectCard bg={KeyWest} text="Key West" />
    </div>
  );
};

export default Selects;
