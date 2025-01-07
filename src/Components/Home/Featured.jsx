import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Featured = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const categories = [
    { name: "All", api: "https://fakestoreapi.com/products/" },
    { name: "Electronics", api: "https://fakestoreapi.com/products/category/electronics" },
    { name: "Men's clothing", api: "https://fakestoreapi.com/products/category/men's clothing" },
    { name: "Women's clothing", api: "https://fakestoreapi.com/products/category/women's clothing" },
    { name: "Jewelery", api: "https://fakestoreapi.com/products/category/jewelery" },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryPromises = categories.map(async (category) => {
          const response = await fetch(category.api);
          const data = await response.json();
          return {
            category: category.name,
            products: data.slice(0, 4),
          };
        });

        const results = await Promise.all(categoryPromises);
        setProducts(results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="featured spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Product</h2>
            </div>
            <div class="featured__controls">
              <ul className="active">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className={activeFilter === category.name ? 'active' : ''}
                    onClick={() => handleFilterClick(category.name)}>
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {products
            .filter((categoryData) => activeFilter === categoryData.category)
            .map((categoryData, index) =>
              categoryData.products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mix">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}>
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
                          <a style={{cursor: 'pointer'}}>
                            <i class="fa fa-shopping-cart" onClick={() => handleAddToCart(product)}></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="featured__item__text">
                      <h6>
                        <a href="#">{product.title}</a>
                      </h6>
                      <h5>${product.price}</h5>
                    </div>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
