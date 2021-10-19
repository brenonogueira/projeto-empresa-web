import React from 'react'

import ServicesPart3 from '../../../components/ServicesPart3'
import Concreteslump from '../../../assets/images/concrete/slump .jpg';

export default function slump() {
    return (
            <div style={{marginTop: '-70px'}}>
                <ServicesPart3/>
            <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Slump test </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            O procedimento de teste de abatimento é realizado para verificar a trabalhabilidade do
                            concreto. Um bom concreto trabalhável tem boa resistência.<br />
                            A trabalhabilidade diz respeito
                            à aplicação do material, pois para a concretagem de um piso o abatimento tem de ser menor 
                            para que haja maior resistência e menor deformação, facilitando o trabalho. Em contrapartida
                            na concretagem de uma estaca o abatimento tem de ser maior, concreto mais úmido, para que consiga
                            preencher os espaços vazios do local onde foi aplicado.Um dos métodos mais utilizados para determinar 
                            a consistência é o ensaio de abatimento do concreto, também conhecido como slump test. <br />
                            Fonte: Norma – ABNT NBR NM67: 1998
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={Concreteslump} />
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
                                                            
                                    <a itemprop="url" href="servicos_detalhes.html?projectId=13" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type">
                                            <div class="services__type-name" itemprop="name">Sondagem Rotativa</div>
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
