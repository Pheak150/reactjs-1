import React, { useEffect, useRef, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) { console.error("Error fetching products:", error); }
    };

    fetchProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section class="product spad">
        <div class="container" />
        <div class="row">
          <div class="col-lg-3 col-md-5">
          </div>
          <div class="col-lg-9 col-md-7">
            <div class="filter__item">
            </div>
            <div className="row">
              {currentProducts.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg">
                      <img
                        src={product.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "contain",
                          padding: "5px",
                        }}
                      />
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="#">{product.title}</a>
                      </h6>
                      <h5>${product.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="product__pagination">
              {Array.from(
                { length: Math.ceil(products.length / itemsPerPage) },
                (_, index) => (
                  <a
                    key={index + 1}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(index + 1);
                    }}
                    className={currentPage === index + 1 ? "active" : ""}
                    style={{
                      padding: "5px 10px",
                      margin: "0 5px",
                      textDecoration: "none",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      color: currentPage === index + 1 ? "#fff" : "#000",
                      backgroundColor:
                        currentPage === index + 1 ? "#007bff" : "transparent",
                    }}
                  >
                    {index + 1}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
