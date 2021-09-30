import React from 'react'

import Marquee from "react-fast-marquee";

import about1 from '../assets/images/clientes/1.png';
import about2 from '../assets/images/clientes/2.png';
import about3 from '../assets/images/clientes/3.png';
import about4 from '../assets/images/clientes/4.png';
import about5 from '../assets/images/clientes/5.png';
import about6 from '../assets/images/clientes/6.png';
import about7 from '../assets/images/clientes/7.png';
import about8 from '../assets/images/clientes/8.png';
import about9 from '../assets/images/clientes/9.png';
import about10 from '../assets/images/clientes/10.png';



export default function Clientes() {
    return (
        
            <marquee behavior="scroll" scrollamount="9" direction="left" >
                <div style={{display:'flex', flexDirection:'row'}}>
                <img src={about1} width="210" height="124" style={{marginRight:50}}/>
                <img src={about2} width="210" height="124"/>
                </div>
            </marquee>  
    )
}
