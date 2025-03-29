import React from "react";
import { Carousel } from "@material-tailwind/react";

const HeroSection = () => {
  return (
    <>
      <Carousel
        className="rounded-none pb-10"
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
          <img
            src="/img1.webp"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <img
            src="/img5.webp"
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <img
            src="/img3.webp"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <img
            src="/img4.webp"
            alt="image 4"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <img
            src="/img2.webp"
            alt="image 5"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
      <div className="container p-5 sm:m-10 pb-4">
        <h1 className="font-bold text-xl sm:text-2xl text-[#3e4152] uppercase">
          Medal Worthy Brands To Bag
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
