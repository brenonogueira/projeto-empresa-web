import React from 'react'

import abautus from '../../assets/images/abautUs/BTH.jpg';

export default function AbautUsg() {
    return (
        <div className="pb-10 text-center section-title">
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
            <h3 className="text-[32px] pt-2 font-bold"> Nossa empresa </h3>
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
            <section id="company">
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 text-[32px]"style={{marginTop:'50px'}}>
                        <div class="col-md-6">
                            <h2 class="text-center font-bold">Betontech Controle Tecnológico</h2>
                            <p className='pt-4'>    
                                Sediada em Porto Velho, a Betontech  atua na área de consultoria técnica e prestação
                                de serviços voltados à engenharia civil por meios de ensaios laboratoriais, fiscalização 
                                e acompanhamento de obras, conferindo os padrões de qualidade e segurança na realização da 
                                coleta. As amostras coletadas são encaminhadas para análise ao laboratório central da empresa, e na sequência encaminhado os resultados aos responsáveis.
                            </p>
                            <p>
                                A Betontech atua também na área de serviços especiais de 
                                engenharia civil. Na área de serviços, executa recuperação e reforço em estruturas com a utilização
                                de (clopas) chapas de aço e fibras de carbono, ensaios de concreto, asfalto, solo, argamassas, 
                                concreto projetado, tratamento superficiais, injeções de resina a base de poliuretano, 
                                Impermeabilização e furos em concreto armado utilizando ferramentas diamantadas com diâmetros de 1/2´´ a 20´´.
                                A Betontech está presente em toda a região norte  demonstrando que a empresa pode ser adaptada de acordo 
                                com as necessidades e localidade de cada empreendimento.
                            </p>           
                            
                        </div>
                        <div class="col-md-6">
                            <img src={abautus} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
