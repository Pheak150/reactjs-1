import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import breadcrumb from "../img/breadcrumb.jpg";

const Breadcrumb = () => {
  return (
    <div>
      <section
        class="breadcrumb-section set-bg">
       <img src={breadcrumb} alt=""/>
      
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Blog</h2>
                <div class="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Breadcrumb;
