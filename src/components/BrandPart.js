import React from "react";

import img1 from "../assets/images/carrocel/img1.png";
import img2 from "../assets/images/carrocel/img2.png";
import img3 from "../assets/images/carrocel/img3.png";
import img4 from "../assets/images/carrocel/img4.png";
import img5 from "../assets/images/carrocel/img5.png";


export default function BrandPart() {
  return (
    <div style={{ marginTop: '-39px' }}>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade mt-5 "
        data-ride="carousel"
        data-wow-duration="0.1s"
        data-wow-delay="1.0s">
        <div className="carousel-inner ">
          <div className="carousel-item active d-flex justify-content-center">
            <img src={img1} classNameName="w-99" alt="..." />
          </div>
          <div className="carousel-item d-flex justify-content-center">
            <img src={img2} classNameName="w-99" alt="..." />
          </div>
          <div className="carousel-item d-flex justify-content-center">
            <img src={img3} classNameName="w-99" alt="..." />
          </div>
          <div className="carousel-item d-flex justify-content-center">
            <img src={img4} classNameName="w-99" alt="..." />
          </div>
          <div className="carousel-item d-flex justify-content-center">
            <img src={img5} classNameName="w-99" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
