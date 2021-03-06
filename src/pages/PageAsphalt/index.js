import react from "react";

import ServicesPart3 from '../../components/ServicesPart3'

function Asphalt(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
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