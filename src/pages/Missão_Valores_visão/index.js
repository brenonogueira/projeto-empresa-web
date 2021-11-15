import React from 'react'

import abautus from '../../assets/images/abautUs/BTH.jpg';

export default function AbautUsg() {
    return (
        <div className="pb-10 text-center section-title">
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
            <h3 className="text-[32px] pt-2 font-bold"> Nossa empresa </h3>
            <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
                <div class="container">
                    <div class="row mb64 mb-sm-0 flex v-align-row mb-8 text-[32px]"style={{marginTop:'80px'}}>
                        <div class="col-md-6 ">
                            <h2 class="text-center font-bold">Missão</h2>
                            <p className='pt-4 text-center'>    
                                Sermos referência na área de consultoria e serviços especiais de engenharia civil.    
                            </p>
                            <h2 class="text-center font-bold">Visão</h2>
                            <p class="text-center">
                                Ser uma organização eficaz e dinâmica, conquistando o país com serviços prestados.
                            </p> 
                            <h2 class="text-center font-bold">Valores</h2>
                            <p class="text-center">
                                <ul>
                                    <li> Obediência as normas de Saúde e Segurança do trabalho;</li>
                                    <li> Preservação do meio ambiente e recursos naturais;</li>
                                    <li>Colaboradores engajados e satisfeitos;</li>
                                    <li>Entrega de serviços com qualidade e Clientes satisfeitos.</li>
                                </ul>
                            </p>                     
                        </div>
                        <div class="col-md-6">
                            <img src={abautus} />
                        </div>
                    </div>
            </div>
        </div>
    )
}
