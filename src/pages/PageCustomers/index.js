import react from "react";

import img1 from '../../assets/images/clientes/1.png';
import img2 from '../../assets/images/clientes/2.png';
import img3 from '../../assets/images/clientes/3.png';
import img4 from '../../assets/images/clientes/4.png';
import img5 from '../../assets/images/clientes/5.png';
import img6 from '../../assets/images/clientes/6.png';
import img7 from '../../assets/images/clientes/7.png';
import img8 from '../../assets/images/clientes/8.png';
import img9 from '../../assets/images/clientes/9.png';
import img10 from '../../assets/images/clientes/10.png';
import img11 from '../../assets/images/clientes/11.png';
import img12 from '../../assets/images/clientes/12.png';
import img13 from '../../assets/images/clientes/13.png';
import img14 from '../../assets/images/clientes/14.png';
import img15 from '../../assets/images/clientes/15.png';
import img16 from '../../assets/images/clientes/16.png';
import img17 from '../../assets/images/clientes/17.png';
import img18 from '../../assets/images/clientes/18.png';
import img19 from '../../assets/images/clientes/19.png';
import img20 from '../../assets/images/clientes/20.png';
import img21 from '../../assets/images/clientes/21.png';
import img22 from '../../assets/images/clientes/22.png';
import img23 from '../../assets/images/clientes/23.png';
import img25 from '../../assets/images/clientes/25.png';
import img26 from '../../assets/images/clientes/26.png';
import img27 from '../../assets/images/clientes/27.png';
import img28 from '../../assets/images/clientes/28.png';
import img29 from '../../assets/images/clientes/29.png';


function Customers(){
  return (
    <>
      <div className="pb-10 text-center section-title">
        <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
        <h3 className="text-[32px] pt-2 font-bold"> Clientes </h3>
        <div className="m-auto w-50 h-1 mb-3 bg-gradient-to-r"></div>
        <h3 className="pt-4">A Betontech é a parceira e presta serviços para grandes empresas do país. Abaixo algumas de nossas parceiras. </h3>

        <div class="row" style={{marginTop:'50px', marginLeft:'10%'}}>
          <div class="col-lg-2 col-md-12 mb-2 mb-lg-0">
            <img src={img1} class="w-10  mb-2" />
            <img src={img2} class="w-10  mb-2" />
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img3} class="w-10 mb-2"/>
            <img src={img4} class="w-10  mb-2"/>
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img5} class="w-10 mb-2"/>
            <img src={img6} class="w-10  mb-2"/>
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img7} class="w-10 mb-2"/>
            <img src={img8} class="w-10  mb-2"/>
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img9} class="w-10 mb-2"/>
            <img src={img10} class="w-10  mb-2"/>
          </div>
        </div>

        <div className="row" style={{marginTop:'2px', marginLeft:'10%'}}> 
          <div class="col-lg-2 col-md-12 mb-2 mb-lg-0">
            <img src={img11} class="w-10  mb-2" />
            <img src={img12} class="w-10  mb-2" />
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img13} class="w-10 mb-2"/>
            <img src={img14} class="w-10  mb-2"/>
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img15} class="w-10 mb-2"/>
            <img src={img16} class="w-10  mb-2"/>
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img17} class="w-10 mb-2"/>
            <img src={img18} class="w-10  mb-2"/>
          </div>

          <div class="col-lg-2 mb-2 mb-lg-0">
            <img src={img19} class="w-10 mb-2"/>
            <img src={img20} class="w-10  mb-2"/>
          </div>
        </div>

        <div className="row" style={{marginTop:'2px', marginLeft:'10%'}}> 
          <div class="col-lg-2 col-md-12 mb-2 mb-lg-0 a.image_container">
            <img src={img21} class="w-10  mb-2" />
            <img src={img22} class="w-10  mb-2" />
          </div>

          <div class="col-lg-2 col-md-12 mb-2 mb-lg-0 a.image_container">
            <img src={img23} class="w-10  mb-2" />
            <img src={img29} class="w-10 mb-2" /> 
          </div> 

          <div class="col-lg-2 col-md-12 mb-2 mb-lg-0">
          <img src={img25} class="w-10 mb-2" /> 
            <img src={img26} class="w-10 mb-2'" />
          </div>

          <div class="col-lg-2 col-md-12 mb-2 mb-lg-0 a.image_container">
            <img src={img27} class="w-10  mb-2" />
            <img src={img28} class="w-10  mb-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;