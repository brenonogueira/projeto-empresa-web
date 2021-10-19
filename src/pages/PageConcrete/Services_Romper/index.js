import React from 'react'

import ServicesPart3 from '../../../components/ServicesPart3'
import Concreteesc from '../../../assets/images/concrete/esc.jpg';

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
                            Testar a resistência do concreto sem destruí-lo ou quebrá-lo após o endurecimento é uma tarefa complexa.<br />
                            O teste do esclerômetro é um teste não destrutivo e simples que é usado para testar a resistência à compressão do concreto
                            sem qualquer dano. Além disso, a melhor parte do teste do martelo de ressalto é que o concreto pode ser testado em tempo real no local em vez de ir ao laboratório sem nenhum dano.<br />
                            Antes de iniciar o procedimento, é necessária a calibração do martelo. Para fazer isso, o esclerômetro é testado contra a bigorna
                            de teste de aço, que tem um número de dureza Brinell de cerca de 5000 MPa.<br />
                            Fonte: ABNT NBR 7584:2012

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
