import React from 'react'

import ServicesPart3 from '../../../components/ServicesPart3'
import Concreteext from '../../../assets/images/concrete/3.jpg';
import Concreteext2 from '../../../assets/images/concrete/2.jpg';
import Concreteext4 from '../../../assets/images/concrete/4.jpg';
import Concreteext6 from '../../../assets/images/concrete/6.jpg';
import Concreteext7 from '../../../assets/images/concrete/7.jpg';

export default function extracao() {
    return (
            <div style={{marginTop: '-70px'}}>
                <ServicesPart3/>
            <div className="pb-10 text-center section-title listextraa">
            <h3 className="text-[32px] font-bold"> Extracão de Testemunhos </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 listextraa">
                        <div class="col-md-6">
                            <p>    
                            A extração permite obter amostras de corpos de prova em asfalto e concreto.
                            Com este corpo de prova extraído da peça concretada , torna-se possível o ensaio de resistência à compressão 
                            axial. O material extraído pode ter variados diâmetros, dependendo da necessidade do cliente.<br />
                            Fonte: Norma ABNT NBR 7584:1995
                            </p>
                            <h3 class="listextraa">EXTRAÇÃO, PREPARO, ENSAIO E ANÁLISE DOS RESULTADOS</h3>
                            <ul style={{ listStyleType: "disc"}} class="listextra">
                                <li> 50mm;</li>
                                <li> 75mm;</li>
                                <li>100mm;</li>
                                <li>150mm;</li>
                                <li>Outras dimensões pedir orçamento prévio;;</li>
                                <li>Acrescentar custos de transportes, diárias em viagem, estadias, etc;;</li>
                                <li>Furos em concreto , Corte em concreto, Fixação de chumbamentos.;</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <img src={Concreteext} />
                        </div> 
                    </div>
                </div>
            </section>
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 listextraa">
                        <div class="col-md-6">
                            <p>    
                                Por norma recomenda-se que se efetue a amostragem de testemunhos extraídos de concreto somente de regiões sãs e 
                                íntegras, sempre e quando o objetivo seja avaliar a resistência à compressão do concreto, nossos equipamentos 
                                reconhecem a ferragem da estrutura, tornando a extração limpa de ferragens.<br />
                                Os testemunhos têm seus topos regularizados por meio de retificação com serra metálica diamantada e capeados com 
                                pasta de enxofre (NBR 5738 – ABNT, 2015), obtendo-se faces planas, paralelas e normais ao seu eixo vertical, normalizados para os ensaios de ruptura.
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-12 mb-2 mb-lg-0 a.image_container">
                            <img src={Concreteext2} class="w-10  mb-2" />
                            <img src={Concreteext4} class="w-10  mb-2" />
                        </div>
                        <div class="col-lg-2 col-md-12 mb-2 mb-lg-0 a.image_container">
                            <img src={Concreteext6} class="w-10  mb-2" />
                            <img src={Concreteext7} class="w-10  mb-2" />
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
                                            <div class="services__type-name" itemprop="name">Extração de testemunhos</div>
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
