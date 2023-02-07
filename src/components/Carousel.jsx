import { React, useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/Bs";
import { BsArrowRightSquareFill } from "react-icons/Bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1675432979329-e8f2ac1cd914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1580223530509-849e0ad583ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    id: 3,
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const length = sliderData.length;

  const preSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 flex justify-center items-center relative">
      <BsArrowLeftSquareFill
        onClick={preSlide}
        className="absolute top=[50%] text-white cursor-pointer text-3xl left-28 sm:left-10 md:left-10"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top=[50%] text-white cursor-pointer text-3xl right-28 sm:right-10 md:right-10"
      />
      {sliderData.map((item, index) => (
        <div
          key={item.id}
          className={index === slide ? "opacity-100" : "opacity-0"}
        >
          {index === slide && (
            <img src={item.url} alt="/" className="w-full rounded-md" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
