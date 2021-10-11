import React from "react";

import logo from "../../logo.svg";

import "../../App.css";
import "../../assets/css/animate.css";
import "../../assets/css/tiny-slider.css";
import "../../assets/css/glightbox.min.css";
import "../../assets/css/lineicons.css";
import "../../assets/css/tailwindcss.css";
import NavbarHeader from "../../components/NavbarHeader";
import Header from "../../components/Header";
import BrandPart from "../../components/BrandPart";
import ServicesPart from "../../components/ServicesPart";
import AboutPart from "../../components/AboutPart";
import Footer from "../../components/Footer";
import Clientes from "../../components/Clientes";
import TextHeader from "../../components/TextHeader";

export default function index() {
  return (
    <div>
      {/* <Header/> */}
      <TextHeader/>
      <BrandPart />
      <ServicesPart />
      <AboutPart />
      <Clientes />
      {/* <Footer/> */}
    </div>
  );
}
