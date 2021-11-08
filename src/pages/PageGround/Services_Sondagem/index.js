import react from "react";

import ServicesPart3 from '../../../components/ServicesPart3'
import spt from '../../../assets/images/concrete/spt.jpg';


function Graund(){
    return (
        <div style={{marginTop: '-70px'}}>
        <ServicesPart3/>
        <div className="pb-10 text-center section-title" style={{marginTop:'50px'}}>
            <h3 className="text-[32px] pt-2 font-bold"> Sondagem SPT </h3>
        
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 "style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <p className='pt-4'>    
                            A sondagem a percussão, também conhecida como sondagem SPT é um dos tipos de sondagem mais executadas para o dimensionamento de fundação. Ela é utilizada para determinar características do solo em um terreno no qual se pretende realizar uma construção e é fundamental para o sucesso da mesma.<br />
                            O ensaio spt é um método de investigação e reconhecimento do solo que fornece informações sobre a compacidade a consistência das suas camadas constituintes do mesmo. Ela permite identificar a capacidade de carga suportada pelo solo e esse fator é utilizado pelos engenheiros no dimensionamento da fundação da construção.<br />
                            Além desses parâmetros, existem outras informações que a sondagem à percussão fornece:<br />
                            <ul style={{ listStyleType: "disc"}} class="listextra">
                                <li> nível do lençol freático;</li>
                                <li> mineralogia;</li>
                                <li>tipo de rocha.</li>
                            </ul>
                            Com todas estas informações, é possível definir com mais precisão o tipo de fundação que será empregada em um determinado terreno, bem como definir se é necessário outros tipos de estudo geotécnicos mais aprofundados.
                            </p>
                            <p>
                            A quantidade de furos de sondagem segundo a NBR 8036:1983 era realizada de acordo com o tamanho do terreno da seguinte forma:<br />
                            <ul style={{ listStyleType: "disc"}} class="listextra">
                                <li> Até 1.200 m² 1 furo para cada 200 m²;</li>
                                <li> De 1.200 a 2.400 m² 1 sondagem à percussão para cada 400 m² que excederem de 1200m²;</li>
                                <li>Acima de 2.400 m², de acordo com a construção</li>
                                <li>Devem ser feito no minímo dois furos para área da projeção em planta do edifício de até 200m²</li>
                                <li>Devem ser feitos três furos para áreas entre 200m² e 400m².</li>
                            </ul>
                            Com a mudança para a NBR 6484/2020, a locação dos furos de sondagem em planta deve ser fornecida pela contratante.<br />
                            Fonte: Norma - ABNT NBR 6484/2020.

                            </p>
                            
                        </div>
                        <div class="col-md-6">
                            <img src={spt} />
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