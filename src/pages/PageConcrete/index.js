import react from "react";


import ServicesPart3 from '../../components/ServicesPart3'
import ServiceSlump from '../PageConcrete/Services_Slump/index.js'

function Concrete(){
    return (
        <div style={{marginTop: '-70px'}}>
            <ServicesPart3/>
            <div className="justify-center flex flex-wrap" style={{marginTop:'35px'}} >
                <div className="w-full lg:w-2/3" >
                    <h3
                    className=" text-4xl font-light font-bold leading-tight text-center  header-sub-title wow fadeInUp">
                    Concreto
                    </h3>
                    <h4 className="text-3xl text-blue mb-8 ">
                        Concreto é basicamente o resultado da mistura de cimento, água, pedra e areia, sendo que o cimento ao 
                        ser hidratado pela água, forma uma pasta resistente e aderente aos fragmentos de agregados (pedra e areia), 
                        formando um bloco monolítico.<br />
                        No preparo do concreto, um ponto de atenção é o cuidado que se deve ter com a qualidade e a quantidade da 
                        água utilizada, pois ela é a responsável por ativar a reação química que transforma o cimento em 
                        uma pasta aglomerante. Se sua quantidade for pouca, a reação não ocorrerá por completo e se for superior à
                        ideal, a resistência diminuirá em função dos poros que ocorrerão quando este excesso evaporar.
                    </h4>
                </div> 
                <div class="row" style={{marginTop:'35px', marginLeft:'70px'}}>
                    <div class="col-4 services__type-name">
                        <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">ABNT NBR -13528</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">ABNT NBR -13755</a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">ABNT NBR -13753</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">ABNT NBR -13754</a>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Revestimentos de paredes e tetos com argamassa inorgânica, Determinação da resistência de aderência á tração Determinação da Resistência de aderência á tração.</div>
                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Revestimento de paredes externas e fachadas com placas cerâmica e com utilização argamassa colante – Anexo A – Determinação da resistência de revestimentos cerâmicos assentados com argamassa colante.</div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Revestimentos de piso interno ou externo com placa cerâmica e com utilização de argamassa colante, Determinação da Resistência de aderência á tração.</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Revestimentos de paredes internas com placas cerâmicas e com utilização de argamassa colante, ensaio de tração. </div>
                        </div>
                    </div>
                </div>
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
                                                            
                                    <a itemprop="url" href="/page-slump" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
                                        <div class="services__type">
                                            <div class="services__type-name" itemprop="name">Slump Test</div>
                                        </div>
                                    </a>
                                                            
                                    <a itemprop="url" href="/page-romper" class="col-md-4 col-sm-6 col-xs-12 services__type-col">
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
    );
};

export default Concrete;