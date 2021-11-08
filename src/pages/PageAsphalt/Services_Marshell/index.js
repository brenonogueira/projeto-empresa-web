import react from "react";

import ServicesPart3 from '../../../components/ServicesPart3'
import marshell from '../../../assets/images/concrete/marchel.jpg';

function Asphalt(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
        <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Ensaio de Marshell </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            A aplicação de revestimentos asfálticos deve ser precedida por ensaios que permitam a obtenção do teor de ligante a ser utilizado na mistura, para que a mesma se enquadre dentro de especificações que são definidas com a finalidade de evitar desagregação da mistura por falta de ligante, ou superfícies escorregadias e deformáveis por excesso de ligante.<br />
                            Através do ensaio Marshall, determina-se a quantidade ótima de ligante a ser utilizada em misturas asfálticas usinadas a quente, destinadas a pavimentação de vias.<br />
                            Com este ensaio é possível determinar a estabilidade, que é a resistência máxima a compressão radial, apresentada pelo corpo de prova expressa em N (Kgf), e a fluência que corresponde a deformação total apresentada pelo corpo de prova, desde a aplicação da carga inicial nula até a aplicação da carga máxima, expressa em décimos de milímetros.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={marshell} />
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