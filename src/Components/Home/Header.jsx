import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../img/logo.png";
import lang from "../img/language.png";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalProductCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleLanguageSwitch = (language) => {
    const pathWithoutLanguage = location.pathname.split("/").slice(2).join("/");
    navigate(`/${language}/${pathWithoutLanguage}`);
  };

  const isKhmer = location.pathname.startsWith("/kh");
  const currentLanguage = location.pathname.split("/")[1] || "en";
  const currentPath = location.pathname;

  return (
    <div>
      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i>{" "}
                      {isKhmer
                        ? "សូមស្វាគមន៍ការមកកាន់គេហទំព័រយើងខ្ញុំ"
                        : "Welcome to my website"}
                    </li>
                    <li>Free Shipping for all Orders over $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    {/* <img src={lang} alt="Language options" /> */}
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a style={{ color: "white" }}>Khmer</a>
                      </li>
                      <li>
                        <a style={{ color: "white" }}>English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/">
                  <img src={image} alt="Company logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li
                    className={`${
                      currentPath.includes("home") ? "active" : ""
                    }`}
                  >
                    <Link to='/home'>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`${
                      currentPath.includes("shopgrid") ? "active" : ""
                    }`}
                  >
                    <Link to='/shopgrid'>
                      Shop
                    </Link>
                  </li>
                  <li
                    className={`${
                      currentPath.includes("shoppingcart") ||
                      currentPath.includes("blogdetail")
                        ? "active"
                        : ""
                    }`}
                  >
                    <a>{isKhmer ? "ទំព័រ" : "Page"}</a>
                    <ul className="header__menu__dropdown">
                      {/* <li>
                        <Link to="/shopdetail">Shop Details</Link>
                      </li> */}
                      <li>
                        <Link to='/shoppingcart'>
                          Shopping Cart
                        </Link>
                        {/* Updated link */}
                      </li>
                      {/* <li>
                        <Link to="/checkout">Check Out</Link>
                      </li> */}
                      <li>
                        <Link to='/blogdetail'>
                          Blog Detail
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='/blog'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <Link to="/wishlist">
                      <i className="fa fa-heart"></i> <span>1</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoppingcart">
                      <i className="fa fa-shopping-bag"></i>{" "}
                      <span>{totalProductCount}</span>
                    </Link>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </div>
  );
};

export default Header;
