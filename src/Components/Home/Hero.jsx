import React, { useEffect, useState } from "react";
import banner from "../img/hero/banner.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    document.querySelectorAll(".set-bg").forEach((element) => {
      const bg = element.getAttribute("data-setbg");
      element.style.backgroundImage = `url(${bg})`;
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setProducts(data);
      } catch (error) { console.error("Error fetching products:", error); }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero Section Begin */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  {products.map((product, index) => (
                    <li key={index}>
                      <Link to="/shopgrid">{product}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do you need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div className="hero__item set-bg" data-setbg={banner}>
                <div className="hero__text">
                 
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
    </div>
  );
};

export default Hero;
