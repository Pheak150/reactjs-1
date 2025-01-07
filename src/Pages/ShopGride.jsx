import React from "react";
import Preloder from "../Components/ShopGrid/Preloder";
import Menu from "../Components/Home/Menu";
import Header from "../Components/Home/Header";
import Hero from "../Components/ShopGrid/Hero";
import Section from "../Components/ShopGrid/Section";
import Product from "../Components/ShopGrid/Product";
import Footer from "../Components/Home/Footer";

const ShopGride = () => {
  return (
    <div>
      {/* <Preloder /> */}
      <Menu />
      <Header />
      <Hero />
      {/*<Section />*/}
      <Product />
      <Footer />
    </div>
  );
};

export default ShopGride;
