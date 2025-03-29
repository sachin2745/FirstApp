import React from "react";
import HeroSection from "../components/heroSection";
import ProductCarousel from "../components/productCarousel";
import ShopByCategory from "../components/ShopByCategory";
import ProductsForYou from "../components/ProductsForYou";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductCarousel />
      <ShopByCategory />
      <ProductsForYou />
      <Footer/>
    </>
  );
};

export default Home;
