import React from "react";
import Preloader from "../Components/Home/Preloader";
import Menu from "../Components/Home/Menu";
import Header from "../Components/Home/Header";
import Hero from "../Components/Home/Hero";
import Categories from "../Components/Home/Categories";
import Featured from "../Components/Home/Featured";
import Banner from "../Components/Home/Banner";
import Product from "../Components/Home/Product";
import Blog from "../Components/Home/Blog";
import Footer from "../Components/Home/Footer";
const Home = () => {
  return (
    <div>
      {/*<Preloader />*/}
      <Menu />
      <Header />
      <Hero />
      <Categories />
      <Featured />
      <Banner />
      <Product />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
