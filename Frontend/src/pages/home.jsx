import React from "react";
import HeroSection from "../components/heroSection";
import ProductCarousel from "../components/productCarousel";
import ShopByCategory from "../components/ShopByCategory";
import ProductsForYou from "../components/ProductsForYou";
import Footer from "../components/footer";
import Faq from "../components/faq";
import ShoesProduct from "../components/ShoesProduct";
import HeroSectionTwo from "../components/HeroSectionTwo";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductCarousel />
      <ShopByCategory />
      <HeroSectionTwo />
      <ProductsForYou />
      <ShoesProduct />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
