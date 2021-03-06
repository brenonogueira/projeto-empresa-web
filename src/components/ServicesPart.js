import React from "react";

import ServicesShape from "../assets/images/services/services-shape.svg";
import ServicesShape1 from "../assets/images/services/services-shape-1.svg";
import ServicesShape2 from "../assets/images/services/services-shape-2.svg";
import ServicesShape3 from "../assets/images/services/services-shape-3.svg";

export default function ServicesPart() {
  return (
    <div>
      <section id="recursos" className="services-area pt-[120px]">
        <div className="container px-4">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-2/3">
              <div className="pb-10 text-center section-title">
                <div
                  className="
                  m-auto
                  w-40
                  h-1
                  mb-3
                  bg-gradient-to-r
                  to-[#fe8464]
                  from-[#fe6e9a]
                "
                ></div>
                <h3 className="text-[32px] pt-2 font-bold">
                Nossos recursos
                </h3>
              </div>
            </div>
          </div>

          <div className="justify-center flex flex-wrap">
            <div className="w-full sm:w-2/3 lg:w-1/3">
              <div
                className="
                single-services
                px-8
                py-12
                mx-4
                mt-8
                text-center
                duration-300
                bg-white
                border-2 border-transparent
                rounded-lg
                shadow-lg
                group
                hover:border-theme-color-2
                wow
                fadeIn
              ">
                <div className="services-icon relative inline-block">
                  <img
                    className="duration-300 shape group-hover:rotate-[25deg]"
                    src={ServicesShape}
                    alt="shape"/>
                  <img
                    className="
                    duration-300
                    shape-1
                    absolute
                    top-1/2
                    left-1/2
                    translate-x-[-50%] translate-y-[-50%]
                  "
                    src={ServicesShape1}
                    alt="shape"
                  />
                  <i
                    className="
                    lni lni-trowel
                    absolute
                    top-0
                    left-0
                    flex
                    items-center
                    justify-center
                    w-full
                    h-full
                    text-3xl text-white "></i>
                </div>

                <div className="mt-8 services-content">
                  <h4 className="mb-8 text-xl font-bold text-gray-900 text-center">Concreto</h4>
                  <p className="mb-8">O concreto ?? um dos materiais mais importantes para a constru????o civil, composto por cimento, brita, areia e aditivos.</p>
                  <a
                    className="
                    duration-300
                    text-theme-color-2
                    hover:tracking-wider
                    duration-300
                  "
                    href="/page-concrete"
                  >
                    Saiba mais
                    <i className="ml-2 lni lni-chevron-right text-sm font-bold"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-2/3 lg:w-1/3">
              <div
                className="
                mt-8
                text-center
                single-services
                px-8
                py-12
                mx-4
                duration-300
                bg-white
                border-2 border-transparent
                rounded-lg
                shadow-lg
                group
                hover:border-theme-color-2
                wow
                fadeIn
              "
              >
                <div className="services-icon relative inline-block">
                  <img
                    className="duration-300 shape group-hover:rotate-[25deg]"
                    src={ServicesShape}
                    alt="shape"
                  />
                  <img
                    className="
                    duration-300
                    shape-1
                    absolute
                    top-1/2
                    left-1/2
                    translate-x-[-50%] translate-y-[-50%]
                  "
                    src={ServicesShape2}
                    alt="shape"
                  />
                  <i
                    className="
                    lni lni-road
                    absolute
                    top-0
                    left-0
                    flex
                    items-center
                    justify-center
                    w-full
                    h-full
                    text-3xl text-white
                  "
                  ></i>
                </div>
                <div className="mt-8 services-content">
                  <h4 className="mb-8 text-xl font-bold text-gray-900 text-center">
                    Asfalto
                  </h4>
                  <p className="mb-8" > O asfalto tem as caracter??sticas de um material betuminoso, escuro, de estrutura s??lida, 
                  sendo res??duo da destila????o a v??cuo do petr??leo bruto.</p>
                  <a
                    className="
                    duration-300
                    text-theme-color-2
                    hover:tracking-wider
                    duration-300
                  "
                    href="page-asphalt"
                  >
                    Saiba mais
                    <i className="ml-2 lni lni-chevron-right text-sm font-bold"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-2/3 lg:w-1/3">
              <div
                className="
                single-services
                px-8
                py-12
                mx-4
                mt-8
                text-center
                duration-300
                bg-white
                border-2 border-transparent
                rounded-lg
                shadow-lg
                group
                hover:border-theme-color-2
                wow
                fadeIn
              ">
                <div className="services-icon relative inline-block">
                  <img
                    className="duration-300 shape group-hover:rotate-[25deg]"
                    src={ServicesShape}
                    alt="shape"
                  />
                  <img
                    className="
                    duration-300
                    shape-1
                    absolute
                    top-1/2
                    left-1/2
                    translate-x-[-50%] translate-y-[-50%]
                  "
                    src={ServicesShape3}
                    alt="shape"
                  />
                  <i
                    className="
                    lni lni-shovel
                    absolute
                    top-0
                    left-0
                    flex
                    items-center
                    justify-center
                    w-full
                    h-full
                    text-3xl text-white
                  "
                  ></i>
                </div>
                <div className="mt-8 services-content">
                  <h4 className="mb-8 text-xl font-bold text-gray-900 text-center">
                      Solo
                  </h4>
                  <p className="mb-8">
                  Um determinado solo pode facilitar ou mesmo limitar o uso do terreno, ele pode trazer dor de cabe??a engenheiro e propriet??rio, caso n??o seja trabalhado.
                  </p>
                  <a
                    className="
                    duration-300
                    text-theme-color-2
                    hover:tracking-wider
                    duration-300
                  "
                    href="page-ground"
                  >
                    Saiba mais
                    <i className="ml-2 lni lni-chevron-right text-sm font-bold"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
