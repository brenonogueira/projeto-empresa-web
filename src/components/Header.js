import React from "react";

import logo from "../assets/images/logo/logo.svg";
import "../assets/css/bobble.css";
import "../assets/css/animate.css";

import bannerBg from "../assets/images/header/banner-bg.svg";

export default function Header() {
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
                <div className="pt-32 mb-120 text-center lg:pt-40 header-hero-content" style={{marginBottom:'250px'}}>
                  <h3 className=" text-4xl font-light font-bold leading-tight text-white header-sub-title wow fadeInUp " data-wow-duration="1.3s" data-wow-delay="0.2s">
                    BETONTECH
                  </h3>
                  
                  <h2 className="text-3xl text-white mb-8 ">
                    A Betontech atua na area de consultoria e serviços especiais de engenharia civil. Sediada em Porto Velho-RO onde possui um laboratório central e laboratórios de campo nas principais obras do país. 
                  </h2>
                  
                </div>
              </div>
            </div>
          </div>
          <div id="particles-1" class="particles"></div>
        </div>

    </>
  );
}
