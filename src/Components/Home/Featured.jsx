import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import featured1 from "../img/featured/feature-1.jpg";
import featured2 from "../img/featured/feature-2.jpg";
import featured3 from "../img/featured/feature-3.jpg";
import featured4 from "../img/featured/feature-4.jpg";
import featured5 from "../img/featured/feature-5.jpg";
import featured6 from "../img/featured/feature-6.jpg";
import featured7 from "../img/featured/feature-7.jpg";
import featured8 from "../img/featured/feature-8.jpg";

const Featured = () => {
  useEffect(() => {
    document.querySelectorAll(".set-bg").forEach((element) => {
      const bg = element.getAttribute("data-setbg");
      element.style.backgroundImage = `url(${bg})`; // Corrected string interpolation
    });
  }, []);

  return (
    <section className="featured spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Product</h2>
            </div>
            <div class="featured__controls">
              <ul>
                <li class="active" data-filter="*">
                  All
                </li>
                <li data-filter=".oranges">Oranges</li>
                <li data-filter=".fresh-meat">Fresh Meat</li>
                <li data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row featured__filter">
          <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured1}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured2}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured3}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured4}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured5}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured6}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured7}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
            <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg={featured8}>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
