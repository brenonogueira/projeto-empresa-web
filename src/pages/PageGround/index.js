import react from "react";

import ServicesPart3 from '../../components/ServicesPart3'


function Graund(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
    
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