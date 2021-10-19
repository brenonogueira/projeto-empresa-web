import React from "react";

import bannerBg from "../assets/images/header/banner-bg.svg";

export default function TextHeader() {
  return (
    <div className="justify-center flex flex-wrap" >
      <div className="w-full lg:w-2/3" >
        <h3 className=" text-4xl font-light font-bold leading-tight text-center  header-sub-title wow fadeInUp">
          BETONTECH
        </h3>
        <h4 className="text-3xl mb-8 ">
          A Betontech atua na area de consultoria e serviços especiais de
          engenharia civil, sediada em Porto Velho-RO onde possui um laboratório
          central e laboratórios de campo nas principais obras do país.<br />
          Realizamos os mais diversos estudos, bem como o planejamento de projetos, 
          fiscalização e gerenciamento de obras.
        </h4>
      </div>
    </div>
  );
}
