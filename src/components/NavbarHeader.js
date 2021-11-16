import React from "react";

import logo from "../assets/images/logo/logo.svg";
import "../assets/css/animate.css";

export const NavbarHeader = () => {
  return (
    <>
      <header className="header-area">
        <div className=" navbar-area sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" />
                  </a>

                  <button
                    class="block navbar-toggler focus:outline-none lg:hidden"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarOne"
                    aria-controls="navbarOne"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class=" toggler-icon relative block duration-300 bg-white h-[2px] w-[30px] my-[6px]"></span>
                    <span class=" toggler-icon relative block duration-300 bg-white h-[2px] w-[30px] my-[6px]"></span>
                    <span class=" toggler-icon relative block duration-300 bg-white h-[2px] w-[30px] my-[6px]"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarOne"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll" href="/">
                          Inicio
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="/#recursos">
                          Recursos
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#/#about">
                          Serviços
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#/page-about-us">
                          Sobre Nós
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#/page-customers">
                          Clientes
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#/page-contato">
                          Contato
                        </a>
                      </li>
                    </ul>
                    <div className="navbar-btn">
                      <a
                        className="main-btn gradient-btn"
                        data-scroll-nav="1,5s"
                        href="#/report"
                        rel="nofollow"
                      >
                        RELATÓRIO
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarHeader;
