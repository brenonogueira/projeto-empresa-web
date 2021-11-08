import react from "react";

import ServicesPart3 from '../../../components/ServicesPart3'
import lp from '../../../assets/images/concrete/lp.jpg';


function Graund(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
        <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Limite de Plasticidade </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            É tido como o teor de umidade em que o solo deixa de ser plástico, tornando-se quebradiço; é a umidade de transição entre os estados plástico e semissólido do solo. Em laboratório o LP é obtido determinando-se o teor de umidade no qual um cilindro de um solo com 3mm de diâmetro e cerca de 10cm de comprimento apresenta-se fissuras.<br />
                            Fonte: Norma - ABNT NBR 7180:198
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={lp} />
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