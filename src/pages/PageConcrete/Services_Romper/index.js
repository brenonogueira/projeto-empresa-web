import React from 'react'

import ServicesPart3 from '../../../components/ServicesPart3'
import Concreteesc from '../../../assets/images/concrete/ropimento.jpg';

export default function index() {
    return (
            <div style={{marginTop: '-70px'}}>
                <ServicesPart3/>
            <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Rompimento de corpo de prova </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                                As grandes exigências requeridas para um projeto é a resistência á compressão. <br />Nesses casos,
                                o projetista deve especificar um material que possua boa resistência à compressão, que não se deforme
                                facilmente e que assegure boa precisão dimensional quando for solicitado por esforços de compressão.<br />
                                Compressão é um esforço axial que tende a provocar um encurtamento ou até o rompimento 
                                do corpo submetido a este esforço.<br /> Em ensaios de compressão realizados em concretos, 
                                são produzidos corpos-de-prova com dimensões padronizadas e são submetidos a uma força axial 
                                distribuída de modo uniforme em toda seção transversal do corpo-de-prova.<br />
                                Ensaio realizado em laboratório, com o intuito de determinar a resistência característica
                                do concreto utilizado. Para este ensaio são fornecidos os moldes em regime de comodato
                                (empréstimo) e é feito um treinamento para a forma de moldagem, e em casos de grandes concretagens, 
                                disponibilizamos um laboratorista para a realização dos ensaios.<br />
                                Fonte: Norma – ABNT NBR 12025: 2012
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={Concreteesc} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div  className="pb-10 text-center section-title" style={{marginTop:'35px'}}>
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
            <h3 className="text-[32px] pt-2 font-bold"> Sevirços relacionados ao concreto</h3>
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
                <div class="row">
                    <div class="services" style={{marginTop:'65px'}}>
                        <div class="col-md-12 services__types" style={{marginLeft:'30%'}}>
                            <div class="services__types">
                                <div class="row services__types-row">
                                                            
                                    <a  href="/page-slump" class="col-md-4 col-sm-6 col-xs-12 ">
                                        <div class="services__type">
                                            <div class="services__type-name" itemprop="name">Slump Test</div>
                                        </div>
                                    </a>
                                                            
                                    <a  href="/page-romper" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type">
                                            <div class="services__type-name" itemprop="name">Rompimento de Corpo de Prova</div>
                                        </div>
                                    </a>
                                                    
                                    <a itemprop="url" href="/page-esclerometria" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type">
                                            <div class="services__type-name" itemprop="name">Esclorometria</div>
                                        </div>
                                    </a>
                                                            
                                    <a itemprop="url" href="/page-extracao" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type">
                                            <div class="services__type-name" itemprop="name">Extração de testemunho</div>
                                        </div>
                                    </a>
                                                                                
                                </div>
                            </div>  
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    
    )
}
