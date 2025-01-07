import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Banner1 from "../img/banner/banner-1.webp";
import Banner2 from "../img/banner/banner-2.jpg";

const Banner = () => {
  return (
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src={Banner1} alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src={Banner2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
