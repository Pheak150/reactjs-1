import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import breadcrumb from "../img/breadcrumb.jpg";

const Section = () => {
  return (
    <div>
      {/*<!-- Breadcrumb Section Begin -->*/}
      <section class="breadcrumb-section set-bg">
        <img src={breadcrumb} alt="" />
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Organi Shop</h2>
                <div class="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- Breadcrumb Section End -->*/}
    </div>
  );
};

export default Section;
