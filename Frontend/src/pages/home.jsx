import React from "react";
import HeroSection from "../components/heroSection";
import ProductCarousel from "../components/productCarousel";
import ShopByCategory from "../components/ShopByCategory";
import ProductsForYou from "../components/ProductsForYou";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductCarousel />
      <ShopByCategory />
      <ProductsForYou />
    </>
  );
};

export default Home;
