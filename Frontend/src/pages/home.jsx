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
import CardShows from "../components/CardShows";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductCarousel />
      <ShopByCategory />
      <HeroSectionTwo />
      <CardShows />
      <ShoesProduct />
      <ProductsForYou />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
