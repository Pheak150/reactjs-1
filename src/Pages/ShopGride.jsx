import React from "react";
import Preloder from "../Components/ShopGrid/Preloder";
import Menu from "../Components/ShopGrid/Menu";
import Header from "../Components/ShopGrid/Header";
import Hero from "../Components/ShopGrid/Hero";
import Section from "../Components/ShopGrid/Section";
import Product from "../Components/ShopGrid/Product";
import Footer from "../Components/ShopGrid/Footer";

const ShopGride = () => {
  return (
    <div>
      {/* <Preloder /> */}
      <Menu />
      <Header />
      <Hero />
      <Section />
      <Product />
      <Footer />
    </div>
  );
};

export default ShopGride;
