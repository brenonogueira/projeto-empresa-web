import react from "react";

import ServicesPart3 from '../../../components/ServicesPart3'
import insitu from '../../../assets/images/concrete/insitu.jpg';


function Graund(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
        <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Densidade de IN SITU </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            No controle da compactação no campo, é regra geral tomar-se um ensaio de laboratório como referência e verificar o que é obtido no campo, com equipamento, comparando estes resultados com os de laboratório, dentro de certas especificações.<br />
                            Controla-se certos parâmetros do solo após compactado, como grau de compactação, índice de compacidade, percentagem de vazios, etc. o ideal no entanto, é que seja feita uma combinação dos dois tipos de controle citados.<br />
                            Para o corpo dos aterros o grau mínimo de compactação é de 95% e para a camada final é de 100% em relação ao proctor normal, com uma tolerância de - 3% no teor de umidade, comparando com a umidade ótima, deverá ser feita uma determinação da massa específica de campo para cada 1000m3 de solo compactado. Já para a camada final do aterro para cada 200m3 de solo compactado será feita uma determinação da massa específica de campo.<br />                            Fonte: Norma ABNT NBR 7185:1986


                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={insitu} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    
            <div  className="pb-10 text-center section-title" style={{marginTop:'35px'}}>
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
            <h3 className="text-[32px] pt-2 font-bold"> Sevirços relacionados ao Solo</h3>
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
            <div class="row" style={{paddingTop:'55px'}}>
                    <div class="services__filters">
                        <div class="col-md-12 services__types-col">
                            <div class="services__types">
                                <div class="row services__types-row">
                                    <a href="page-california" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type ">
                                            <div class="services__type-name" >Ensaio de CBR</div>
                                        </div>
                                    </a>
                                    <a href="page-liquidez" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type ">
                                            <div class="services__type-name">Limite de Liquidez</div>
                                        </div>
                                    </a>
                                    <a href="page-plasticidade" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type ">
                                            <div class="services__type-name">Limite de Plasticidade</div>
                                        </div>
                                    </a>
                                    <a href="page-insitu" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type ">
                                            <div class="services__type-name">Densidade IN SITU</div>
                                        </div>
                                    </a>
                                    <a href="page-granulometria" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type ">
                                            <div class="services__type-name">Granulometria</div>
                                        </div>
                                    </a>
                                    <a href="page-sondagem" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type services__type--active">
                                            <div class="services__type-name">Sondagem</div>
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
export default Graund;