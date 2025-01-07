import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import cat1 from "../img/categories/cat-1.jpg";
import cat2 from "../img/categories/cat-2.jpg";
import cat3 from "../img/categories/cat-3.jpg";
import cat4 from "../img/categories/cat-4.jpg";
import cat5 from "../img/categories/cat-5.jpg";

const Categories = () => {
  const [images, setImages] = useState([]);

  const fetchProductsByIds = async (ids) => {
    try {
      const urls = ids.map((id) => `https://fakestoreapi.com/products/${id}`);
      const productPromises = urls.map((url) =>
        fetch(url).then((response) => response.json())
      );
      const products = await Promise.all(productPromises);

      const productImages = products.map((product) => product.image);
      setImages(productImages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProductsByIds([3, 6, 13, 16]);
  }, []);

  return (
    <div>
      {/* Categories Section Begin */}
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="d-flex" style={{ margin: "0px auto" }}>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <h5>
                    <Link to="/shopgrid">Men's clothing</Link>{" "}
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${images[1]})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <h5>
                    <Link to="/shopgrid">Jewelery</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${images[2]})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <h5>
                    <Link to="/shopgrid">Electronics</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${images[3]})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "250px",
                    height: "250px",
                  }}
                >
                  <h5>
                    <Link to="/shopgrid">Woment's clothing</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section End */}
    </div>
  );
};

export default Categories;
