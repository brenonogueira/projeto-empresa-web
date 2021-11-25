import React from "react";

import "../assets/css/bobble.css";
import "../assets/css/animate.css";

import bannerBg from "../assets/images/header/banner-bg.svg";

export default function Header({ text }) {
  return (
    <>
      <div  id="home" className="relative z-55 bg-bottom bg-no-repeat header-hero bg-cover" 
            style={{ backgroundImage: `url(${bannerBg}` }} >
        <div className="container" >
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-2/3">
              <div  className="pt-32 mb-120 text-center lg:pt-40 header-hero-content"
                    style={{marginBottom:'200px'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
