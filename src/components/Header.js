import React from "react";
import logo from "../assets/images/logo/logo.svg";
import "../assets/css/bobble.css";

import bannerBg from "../assets/images/header/banner-bg.svg";
import logoHeader from "../assets/images/header/bth-logo.jpeg";


import ScriptTag from "react-script-tag";

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

      <header className="header-area z-10">
        <div className=" navbar-area absolute top-0 left-0 z-[999] w-full duration-300 bg-transparent">
          <div className="container px-4 lg:py-0 py-5 relative">
            <div className="flex flex-wrap">
              <div className="w-full">
                <nav className="flex items-center justify-between navbar navbar-expand-lg">
                  <a className="mr-4 navbar-brand" href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                
                  <button
                    className="block navbar-toggler focus:outline-none lg:hidden"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarOne"
                    aria-controls="navbarOne"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span
                      className="
                        toggler-icon
                        relative
                        block
                        duration-300
                        bg-white
                        h-[2px]
                        w-[30px]
                        my-[6px]
                      "
                    ></span>
                    <span
                      className="
                        toggler-icon
                        relative
                        block
                        duration-300
                        bg-white
                        h-[2px]
                        w-[30px]
                        my-[6px]
                      "
                    ></span>
                    <span
                      className="
                        toggler-icon
                        relative
                        block
                        duration-300
                        bg-white
                        h-[2px]
                        w-[30px]
                        my-[6px]
                      "
                    ></span>
                  </button>

                  <div
                    className="
                      absolute
                      left-0
                      z-20
                      hidden
                      w-full
                      px-5
                      py-3
                      duration-300
                      shadow
                      lg:w-auto
                      collapse
                      navbar-collapse
                      lg:block
                      top-full
                      sticky-top-0 z-5
                      lg:static lg:bg-whitet lg:shadow-none
                      
                    "
                    style={{backgroundColor: ' #00b4ff', color: '#6610f2'}}
                    id="navbarOne"
                  >
                    <ul id="nav" className=" items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#home"> Inicio </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#recursos">Recursos </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#about"> Serviços </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#facts"> Sobre Nós </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#team"> Clientes </a>
                      </li>
                    </ul>
                  </div>

                  <div className="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                    <a className="main-btn gradient-btn" data-scroll-nav="0" href="javascript:void(0)"rel="nofollow">Entrar</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        <div id="home" className="relative z-55 bg-bottom bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bannerBg}` }} >
          <div className="container px-4" >
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-2/3">
                <div className="pt-32 mb-120 text-center lg:pt-48 header-hero-content" style={{marginBottom:'250px'}}>
                  <h3 className=" text-4xl font-light font-bold leading-tight text-white header-sub-title wow fadeInUp " data-wow-duration="1.3s" data-wow-delay="0.2s">
                    BETONTECH
                  </h3>
                  
                  <h2 className=" mb-3 text-4xl text-white header-title wow fadeInUp mb-8 " data-wow-duration="1.3s" data-wow-delay="0.5s">
                    A Betontech atua na area de consultoria e serviços especiais de engenharia civil. Sediada em Porto Velho-RO onde possui um laboratório central e laboratórios de campo nas principais obras do país. 
                  </h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
