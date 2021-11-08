import react from "react";

import ServicesPart3 from '../../../components/ServicesPart3'
import cbr from '../../../assets/images/concrete/romperCBR.jpg';


function Graund(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
        <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold">Ensaio de CBR</h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            O ensaio CBR consiste na determinação da relação entre a pressão necessária para produzir uma penetração de um pistão num corpo de prova de solo, e a pressão necessária para produzir a mesma penetração numa mistura padrão de brita estabilizada granulometricamente.<br />
                            Ensaio realizado em laboratório, a partir de uma amostra de solo retirada do local da obra. O procedimento indica os pontos ótimos de densidade e umidade para aquele local em específico, seu resultado é de grande importância para que o engenheiro civil possa dimensionar a estrutura a ser construída sobre esse solo. Posteriormente ao projeto, seus resultado auxiliam a execução da obra no momento da terraplanagem, garantindo a boa continuidade da construção.
                            <br />Fonte: Norma – ABNT NBR 9895:1987

                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src={cbr} />
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