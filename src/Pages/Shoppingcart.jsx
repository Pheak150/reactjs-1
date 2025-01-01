import React from "react";
import Preloader from "../Components/Home/Preloader";
import Header from "../Components/Home/Header";
import Menu from "../Components/Home/Menu";
import Hero from "../Components/Home/Hero";
import Breadcrumb from "../Components/Shoppingcart/Breadcrumb";
import Shopingcart from "../Components/Shoppingcart/Shopingcart";
import Footer from "../Components/Home/Footer";
const Shoppingcart = () => {
  return (
    <div>
      {/* <Preloader/> */}
      <Header />
      <Menu />
      <Breadcrumb />
      <Shopingcart />
      <Footer />
    </div>
  );
};

export default Shoppingcart;
