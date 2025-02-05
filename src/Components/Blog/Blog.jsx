import React from "react";
import sr1 from "../img/blog/sidebar/sr-1.jpg";
import sr2 from "../img/blog/sidebar/sr-2.jpg";
import sr3 from "../img/blog/sidebar/sr-3.jpg";
import blog1 from "../img/blog/blog-1.jpg";
import blog2 from "../img/blog/blog-2.jpg";
import blog3 from "../img/blog/blog-3.jpg";
import blog4 from "../img/blog/blog-4.jpg";
import blog5 from "../img/blog/blog-5.jpg";
import blog6 from "../img/blog/blog-6.jpg";

const Section = () => {
  return (
    <div>
      <section class="blog spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-5">
              <div class="blog__sidebar">
                <div class="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span class="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Beauty (20)</a>
                    </li>
                    <li>
                      <a href="#">Food (5)</a>
                    </li>
                    <li>
                      <a href="#">Life Style (9)</a>
                    </li>
                    <li>
                      <a href="#">Travel (10)</a>
                    </li>
                  </ul>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div class="blog__sidebar__recent">
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src={sr1} alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          09 Kinds Of fashion
                          <br />  The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src={sr2} alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          Tips You To be fashion
                          <br /> fashion every Day
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="#" class="blog__sidebar__recent__item">
                      <div class="blog__sidebar__recent__item__pic">
                        <img src={sr3} alt="" />
                      </div>
                      <div class="blog__sidebar__recent__item__text">
                        <h6>
                          4 Principles Help You look<br />
                           good With your fashion
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div class="blog__sidebar__item__tags">
                    <a href="#">shirt</a>
                    <a href="#">jecket</a>
                    <a href="#">Shose</a>
                    <a href="#">jelwery</a>
                    <a href="#">nessecery</a>
                    <a href="#">Lifestyle</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-7">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="blog__item">
                    <div class="blog__item__pic">
                      <img src={blog2} alt="" />
                    </div>
                    <div class="blog__item__text">
                      <ul>
                        <li>
                          <i class="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i class="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">6 ways to prepare your fashrion</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" class="blog__btn">
                        READ MORE <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="blog__item">
                    <div class="blog__item__pic">
                      <img src={blog3} alt="" />
                    </div>
                    <div class="blog__item__text">
                      <ul>
                        <li>
                          <i class="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i class="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">Visit the fashion in the US</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" class="blog__btn">
                        READ MORE <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="blog__item">
                    <div class="blog__item__pic">
                      <img src={blog1} alt="" />
                    </div>
                    <div class="blog__item__text">
                      <ul>
                        <li>
                          <i class="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i class="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">tips make you look cool</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" class="blog__btn">
                        READ MORE <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="blog__item">
                    <div class="blog__item__pic">
                      <img src={blog4} alt="" />
                    </div>
                    <div class="blog__item__text">
                      <ul>
                        <li>
                          <i class="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i class="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#"> tips make fashion simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" class="blog__btn">
                        READ MORE <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="blog__item">
                    <div class="blog__item__pic">
                      <img src={blog4} alt="" />
                    </div>
                    <div class="blog__item__text">
                      <ul>
                        <li>
                          <i class="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i class="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#">
                          The Moment You Need before wearing
                        </a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" class="blog__btn">
                        READ MORE <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="blog__item">
                    <div class="blog__item__pic">
                      <img src={blog6} alt="" />
                    </div>
                    <div class="blog__item__text">
                      <ul>
                        <li>
                          <i class="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i class="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="#"> tips make fashion simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="#" class="blog__btn">
                        READ MORE <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
