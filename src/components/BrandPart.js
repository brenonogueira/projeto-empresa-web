import React from "react";

import img1 from "../assets/images/carrocel/img1.png";
import img2 from "../assets/images/carrocel/img2.png";
import img3 from "../assets/images/carrocel/img3.png";
import img4 from "../assets/images/carrocel/img4.png";
import img5 from "../assets/images/carrocel/img5.png";



export default function BrandPart() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-12">
          <div class="header-hero-image text-center wow fadeIn" data-wow-duration="0.3s" data-wow-delay="1.4s">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
              </ol>
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                  
                  <div class="carousel-item">
                  <img src={img2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                  
                  <div class="carousel-item">
                  <img src={img3} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>

                  <div class="carousel-item">
                  <img src={img4} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>

                  <div class="carousel-item">
                  <img src={img5} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
