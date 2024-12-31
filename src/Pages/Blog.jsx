import React from "react";
import header, { Header } from "../Components/Blog/Header";
import Preloader from "../Components/Blog/Preloder";
import Hero from "../Components/Blog/Hero";
import Breadcrumb from "../Components/Blog/Breadcrumb";
import Footer from "../Components/Blog/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      {/*<Preloader />*/}
      <Hero />
      <Breadcrumb />
      <Footer />
    </div>
  );
};

export default Blog;
