import React from 'react'
import hero from "../img/blog/details/details-hero.jpg"

const blogdetailhero = () => {
  return (
    <div>
          
    <section class="blog-details-hero set-bg"/>
    <img src={hero} alt=""/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog__details__hero__text">
                        <h2>The Moment You Need To Remove Garlic From The Menu</h2>
                        <ul>
                            <li>By Michael Scofield</li>
                            <li>January 14, 2019</li>
                            <li>8 Comments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default blogdetailhero