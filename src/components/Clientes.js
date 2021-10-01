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
import about11 from '../assets/images/clientes/11.png';
import about12 from '../assets/images/clientes/12.png';
import about13 from '../assets/images/clientes/13.png';
import about14 from '../assets/images/clientes/14.png';
import about15 from '../assets/images/clientes/15.png';
import about16 from '../assets/images/clientes/16.png';
import about17 from '../assets/images/clientes/17.png';
import about18 from '../assets/images/clientes/18.png';
import about19 from '../assets/images/clientes/19.png';
import about20 from '../assets/images/clientes/20.png';
import about21 from '../assets/images/clientes/21.png';
import about22 from '../assets/images/clientes/22.png';
import about23 from '../assets/images/clientes/linha1.png';



export default function Clientes() {
    return (            
        <marquee behavior="scroll" scrollamount="9" direction="left">
            <div style={{display:'flex', flexDirection:'row', marginTop: '100px'}}>
                <img src={about1} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about2} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about3} width="210" height="124"  alt="img1"style={{marginRight:50}}/>
                <img src={about4} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about5} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about6} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about7} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about8} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about9} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about10} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about11} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about12} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about13} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about14} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about15} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about16} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about17} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about18} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about19} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about20} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about21} width="210" height="124" alt="img1" style={{marginRight:50}}/>
                <img src={about22} width="210" height="124" alt="img1" style={{marginRight:50}}/>
            </div>
        </marquee>  
    )
}
