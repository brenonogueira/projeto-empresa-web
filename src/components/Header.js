import React from "react";

import logo from "../assets/images/logo/logo.svg";
import "../assets/css/bobble.css";
import "../assets/css/animate.css";

import bannerBg from "../assets/images/header/banner-bg.svg";

export default function Header({ text }) {
  return (
    <>
      <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
      </div>
        <div id="home" className="relative z-55 bg-bottom bg-no-repeat header-hero bg-cover" style={{ backgroundImage: `url(${bannerBg}` }} >
          <div className="container" >
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-2/3">
                <div className="pt-32 mb-120 text-center lg:pt-40 header-hero-content" style={{marginBottom:'200px'}}></div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
