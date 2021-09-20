import React from 'react'
import about1 from '../assets/images/about/10.jpg'
import about2 from '../assets/images/about/about2.svg'
import about3 from '../assets/images/about/about3.svg'

import aboutShape1 from '../assets/images/about/about-shape-1.svg'
import aboutShape2 from '../assets/images/about/about-shape-2.svg'

export default function AboutPart() {
    return (
        <div>
            <section id="about">
      <div class="relative pt-20 about-area">
        <div class="container px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2">
              <div
                class="mx-4 mt-12 about-content max-w-[450px] wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div class="mb-4 section-title">
                  <div
                    class="
                      w-40
                      h-1
                      mb-3
                      bg-gradient-to-r
                      to-[#fe8464]
                      from-[#fe6e9a]
                    "
                  ></div>
                  <h3 class="text-[32px] pt-2 font-bold">
                  Densidade
                    <span class="font-normal"> IN SITU</span>
                  </h3>
                </div>
                {/* <!-- section title --> */}
                <p class="mb-8">
                No controle da compactação em campo, é prioridade o ensaio de laboratório 
                como referência e verificar o que é obtido em campo com equipamento,
                conferindo os resultados com os de laboratório, dentro das especificações, Ensaio embasado na ABNT NBR 7185:2016.
                </p>
                <a href="javascript:void(0)" class="main-btn gradient-btn"
                  >Saiba mais</a>
              </div>

            </div>
            <div class="w-full lg:w-1/2">
              <div
                class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={about1} alt="about" />
              </div>

            </div>
          </div>

        </div>
        
      </div>
 

      {/* <!--====== ABOUT PART START ======--> */}
      <div class="relative pt-20 about-area">
        <div class="about-shape-2 absolute top-0 left-0 h-full z-[-1] w-[35%]">
          <img src={aboutShape2} alt="shape" />
        </div>
        <div class="container px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 lg:order-last">
              <div
                class="
                  mx-4
                  mt-12
                  about-content
                  max-w-[450px]
                  lg:ml-auto
                  wow
                  fadeInLeftBig
                "
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div class="mb-4 section-title">
                  <div
                    class="
                      w-40
                      h-1
                      mb-3
                      bg-gradient-to-r
                      to-[#fe8464]
                      from-[#fe6e9a]
                    "
                  ></div>
                  <h3 class="text-[32px] pt-2 font-bold">
                    Modern design
                    <span class="font-normal"> with Essential Features</span>
                  </h3>
                </div>
                {/* <!-- section title --> */}
                <p class="mb-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing.
                </p>
                <a href="javascript:void(0)" class="main-btn gradient-btn"
                  >Try it Free</a
                >
              </div>
              {/* <!-- about content --> */}
            </div>
            <div class="w-full lg:w-1/2 lg:order-first">
              <div
                class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={about2} alt="about" />
              </div>
              {/* <!-- about image --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/* <!--====== ABOUT PART ENDS ======--> */}

      {/* <!--====== ABOUT PART START ======--> */}
      <div class="relative pt-20 about-area">
        <div class="container px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2">
              <div
                class="mx-4 mt-12 about-content max-w-[450px] wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div class="mb-4 section-title">
                  <div
                    class="
                      w-40
                      h-1
                      mb-3
                      bg-gradient-to-r
                      to-[#fe8464]
                      from-[#fe6e9a]
                    "
                  ></div>
                  <h3 class="text-[32px] pt-2 font-bold">
                    <span class="font-normal">Crafted for</span> SaaS, App and
                    Software Landing Page
                  </h3>
                </div>
                {/* <!-- section title --> */}
                <p class="mb-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing.
                </p>
                <a href="javascript:void(0)" class="main-btn gradient-btn"
                  >Try it Free</a
                >
              </div>
              {/* <!-- about content --> */}
            </div>
            <div class="w-full lg:w-1/2">
              <div
                class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={about3} alt="about" />
              </div>
              {/* <!-- about image --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
        <div class="about-shape-1 absolute top-0 right-0 h-full z-[-1] w-[35%]">
          <img src={aboutShape1} alt="shape" />
        </div>
      </div>
      {/* <!--====== ABOUT PART ENDS ======--> */}
    </section>
        </div>
    )
}
