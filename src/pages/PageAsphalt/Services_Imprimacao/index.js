import react from "react";

import ServicesPart3 from '../../../components/ServicesPart3'
import imprimacao from '../../../assets/images/concrete/imprimacao.jpg';

function Asphalt(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
        <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Imprimação </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            É a pintura asfáltica executada sobre a superfície de uma camada de base para promover certa coesão a superfície da camada pela penetração do ligante asfáltico aplicado, impermeabilizar e conferir condições adequadas de ligação entre a camada de base e a camada asfáltica a se sobreposta. É aplicável em camadas de base de pavimentos flexíveis e também, em casos indicados em projeto em camadas de sub-base.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={imprimacao} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div  className="pb-10 text-center section-title" style={{marginTop:'45px'}}>
        <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
        <h3 className="text-[32px] pt-2 font-bold"> Nossos serviços </h3>
        <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
            <div class="row">
                <div class="services" style={{marginTop:'65px'}}>
                    <div class="col-md-12 services__types" style={{marginLeft:'30%'}}>
                        <div class="services__types">
                            <div class="row services__types-row">
                                                        
                                <a itemprop="url" href="/page-teorligante" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                    <div class="services__type">
                                        <div class="services__type-name" itemprop="name">Teor de ligante </div>
                                    </div>
                                </a>
                                                        
                                <a itemprop="url" href="/page-marshell" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                    <div class="services__type">
                                        <div class="services__type-name" itemprop="name">Ensaio de Marshell</div>
                                    </div>
                                </a>
                                                
                                <a itemprop="url" href="/page-imprimacao" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                    <div class="services__type">
                                        <div class="services__type-name" itemprop="name">Imprimação</div>
                                    </div>
                                </a>
                                                        
                                <a itemprop="url" href="/page-betume" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                    <div class="services__type">
                                        <div class="services__type-name" itemprop="name">Extração de betume</div>
                                    </div>
                                </a>
                                                                            
                            </div>
                        </div>  
                    </div>                      
                </div>
            </div>
        </div>
    </div>
    );
};
export default Asphalt;