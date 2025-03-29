import { Carousel } from "@material-tailwind/react";
import React from "react";

const ProductCarousel = () => {
  return (
    <section className="bg-white py-10">
      {/* Banner Image */}
      <div className="max-w-screen-2xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
        <img
          src="/crazy.webp"
          alt="banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Carousel */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
        <Carousel
          className="rounded-none py-10"
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 w-2 rounded-full transition-colors content-[''] ${
                    activeIndex === i ? "bg-black" : "bg-black/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => null} // Hide prev arrow
          nextArrow={({ handleNext }) => null} // Hide next arrow
        >
          {/* First Slide */}
          <div className="relative h-full w-full bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 ">
              <a href="/link1" className="block">
                <img
                  src="/image1.webp"
                  alt="image 1"
                  className="w-full h-auto object-cover"
                />
              </a>
              <a href="/link2" className="block">
                <img
                  src="/image2.webp"
                  alt="image 2"
                  className="w-full h-auto object-cover"
                />
              </a>
              <a href="/link3" className="block">
                <img
                  src="/imgae3.webp"
                  alt="image 3"
                  className="w-full h-auto object-cover"
                />
              </a>
              <a href="/link4" className="block">
                <img
                  src="/image5.webp"
                  alt="image 4"
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          </div>

          {/* Second Slide */}
          <div className="relative h-full w-full bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 ">
              <a href="/product1" className="block">
                <img
                  src="/pro1.webp"
                  alt="product 1"
                  className="w-full h-auto object-cover"
                />
              </a>
              <a href="/product2" className="block">
                <img
                  src="/pro2.webp"
                  alt="product 2"
                  className="w-full h-auto object-cover"
                />
              </a>
              <a href="/product3" className="block bg-[#FAFAFA]">
                <img
                  src="/ppp.webp"
                  alt="product 3"
                  className="w-full h-auto object-cover"
                />
              </a>
              <a href="/product4" className="block">
                <img
                  src="/pro4.webp"
                  alt="product 4"
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
