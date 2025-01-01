import React from "react";
import Header from "../Components/Home/Header";
import Preloader from "../Components/Blog/Preloder";
import Menu from "../Components/Blog/Menu";
import Hero from "../Components/Blog/Hero";
import Blogs from "../Components/Blog/Blog";
import Breadcrumb from "../Components/Blog/Breadcrumb";
import Footer from "../Components/Home/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      {/*<Preloader />*/}
      <Menu />
      <Hero />
      <Blogs />
      <Breadcrumb />
      <Footer />
    </div>
  );
};

export default Blog;
