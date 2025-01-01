import React from "react";
import Header from "../Components/Home/Header";
import Hero from "../Components/ShopGrid/Hero";
import Menu from "../Components/Home/Menu";
import Footer from "../Components/Home/Footer";
import Breadcrumb from "../Components/ShopDetail/Breadcrumb";
import Productdetail from "../Components/ShopDetail/Productdetail";
import RelatedProduct from "../Components/ShopDetail/RelatedProduct";
const ShopDetail = () => {
  return (
    <div>
      {/*<Preloder />*/}
      <Menu />
      <Header />
      <Hero />
      <Breadcrumb />
      <Productdetail />
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default ShopDetail;
