import React, { useEffect } from "react";
import cat1 from "../img/categories/cat-1.jpg";

const HomeProduct = () => {
  useEffect(() => {
    document.querySelectorAll(".set-bg").forEach((element) => {
      const bg = element.getAttribute("data-setbg");
      element.style.backgroundImage = `url(${bg})`;
    });
  }, []);

  return (
    <section class="categories">
      <div class="container">
        <div class="row">
          <div class="">
            <div class="col-lg-3">
              <div
                class="categories__item set-bg"
                //data-setbg="img/categories/cat-1.jpg"
                style={{ backgroundImage: `url(${cat1})` }}
              >
                <h5>
                  <a href="#">Fresh Fruit</a>
                </h5>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="categories__item set-bg"
                data-setbg="img/categories/cat-2.jpg"
              >
                <h5>
                  <a href="#">Dried Fruit</a>
                </h5>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="categories__item set-bg"
                data-setbg="img/categories/cat-3.jpg"
              >
                <h5>
                  <a href="#">Vegetables</a>
                </h5>
              </div>
            </div>
            <div class="col-lg-3">
              <div
                class="categories__item set-bg"
                data-setbg="img/categories/cat-4.jpg"
              >
                <h5>
                  <a href="#">drink fruits</a>
                </h5>
              </div>
            </div>
            {/* <div class="col-lg-3">
              <div
                class="categories__item set-bg"
                data-setbg="img/categories/cat-5.jpg"
              >
                <h5>
                  <a href="#">drink fruits</a>
                </h5>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
