import React from 'react'

import footerBg from '../assets/images/footer/footer-bg.svg'
import logo from "../assets/images/logo/logo.svg";

export default function Footer() {
  return (
    <div>
      <footer id="footer" class="relative z-10 footer-area pt-[120px] ">
        <div class="container px-4">
          <div  class="footer-bg absolute bottom-0 left-0 w-full h-full bg-top bg-no-repeat bg-cover z-[-1]" 
                style={{ backgroundImage: `url(${footerBg}`}}>
          </div>
            <div  class="footer-widget" 
                  style={{ marginTop: '225px' }}>
              <div class="flex flex-wrap" >
                <div class="col-lg-4 col-md-6 col-sm-8">
                  <div class="mt-12 footer-about wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" >
                    <a class="inline-block mb-8 logo" href="/home">
                      <img src={logo} alt="logo" class="w-40"/>
                    </a>
                    <p class="pb-10 pr-10 leading-snug text-white">
                      A Betontech agradece seu acesso, para mais informações acesse nossas redes sociais.
                    </p>
                    <ul class="flex footer-social">
                      
                      <li>
                        <a href="https://www.facebook.com/betontech.com.br" class=" inline-block mr-6 text-2xl text-white duration-300 hover:text-theme-color-2">
                          <i class="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/betontech-tecnologia-de-concreto-ltda/about/" class=" inline-block mr-6 text-2xl text-white duration-300 hover:text-theme-color-2">
                          <i class="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6">
                  <div class="flex flex-wrap">
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                      <div
                        class="mt-12 link-wrapper wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.4s"
                      >
                        <div class="footer-title">
                          <h4 class="mb-8 text-2xl font-bold text-white">
                          Link rápido
                          </h4>
                        </div>
                        <ul class="link">
                          <li><a href="page-values">Visão</a></li>
                          <li><a href="page-values">Missão</a></li>
                          <li><a href="page-values">Valores</a></li>
                          
                        </ul>
                      </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                      <div
                        class="mt-12 link-wrapper wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.6s"
                      >
                        <div class="footer-title">
                          <h4 class="mb-8 text-2xl font-bold text-white">
                            Recursos
                          </h4>
                        </div>
                        <ul class="link">
                          <li><a href="/">Inicio</a></li>
                          <li><a href="/#recursos">Recursos</a></li>
                          <li><a href="/#about">Serviços</a></li>
                          <li><a href="page-about-us">Sobre Nós</a></li>
                          <li><a href="page-customers">Clientes</a></li>
                          <li><a href="page-contato">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6">
                  <div class="mt-12 footer-contact wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                    <div class="footer-title">
                      <h4 class="mb-8 text-2xl font-bold text-white">Contatos</h4>
                    </div>
                    <ul class="contact">
                      <li class="mb-3 text-white">(69) 3219-1142</li>
                      <li class="mb-3 text-white">contato@betontech.com.br</li>
                      <li class="mb-3 text-white">www.betontech.com</li>
                      <li class="mb-3 text-white"> Rua Rio Candeias, 4171 B - Nova Esperança <br /> Porto Velho - RO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class="py-8 border-t border-gray-100 footer-copyright">
              <p class="text-white text-center "> COPYRIGHT © BETONTECH </p>
          </div>
      </footer>
      
    <a href="/" class="back-to-top"><i class="lni lni-chevron-up"></i></a>

    </div>
  )
}
