import react from "react";

import ServicesPart3 from '../../../components/ServicesPart3'
import betume from '../../../assets/images/concrete/extação.jpg';

function Asphalt(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
        <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Extração de Betume </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            O ensaio de extração de betume, é utilizado para determinar o volume de CAP (Concreto Asfáltico de Petróleo), perante a quantidade de amostra total. Este material é o ligante do asfalto, através dele que a capa asfáltica adquire a sua forma e características de flexibilidade, impermeabilidade e travamento.<br />
                            Os resultados apurados são comparados ao projeto da usina de CBUQ (Fornecedor da massa asfáltica). Nestes resultados pode-se apresentar dois fatores:Percentagem de betume é maior que a do projeto: a massa asfáltica pode apresentar-se com flexibilidade acima do necessário, desfavorecendo o travamento, e consequentemente causar deformações no pavimento.<br />
                            Percentagem de betume for menor que a do projeto: a quantidade de material ligante não é suficiente para o perfeito travamento dos agregados, reduz as taxas impermeabilização e flexibilidade, podendo causar problemas de segregação dos agregados causando crateras e fissuras no pavimento.

                            <br />Fonte: DNER-ME 053/94 - IPR


                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={betume} />
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
                            <div class="services__types">
                                                        
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