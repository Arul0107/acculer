import React from 'react';
import Client1 from '../assets/clients/1.png'
import Client2 from '../assets/clients/2.png'
import Client3 from '../assets/clients/3.png'
import Client4 from '../assets/clients/4.png'
import Client5 from '../assets/clients/5.png'
import Client6 from '../assets/clients/6.png'
import Client7 from '../assets/clients/7.png'
import Client8 from '../assets/clients/8.png'
import Client9 from '../assets/clients/9.png'
import Client10 from '../assets/clients/10.png'
import Client11 from '../assets/clients/11.png'
import Client12 from '../assets/clients/12.png'
import Client13 from '../assets/clients/13.png'
import Client14 from '../assets/clients/14.png'
import Client15 from '../assets/clients/15.png'
import Client16 from '../assets/clients/16.png'
import Client17 from '../assets/clients/17.png'
import Client18 from '../assets/clients/18.png'
import Client19 from '../assets/clients/19.png'
import Client20 from '../assets/clients/20.png'
import Client21 from '../assets/clients/21.png'
import Client22 from '../assets/clients/22.png'
import Client23 from '../assets/clients/23.png'
import Client24 from '../assets/clients/24.png'
import Client25 from '../assets/clients/25.png'
import Client26 from '../assets/clients/26.png'
import Client27 from '../assets/clients/27.png'
import Client28 from '../assets/clients/28.png'
import Client29 from '../assets/clients/29.png'
import Client30 from '../assets/clients/30.png'
import Banner from '../assets/contact-page/banner.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from 'swiper/modules';

const Clients = () => {

  


const settings = {
  className: "center",
  centerMode: true,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  rows: 3,
  slidesPerRow: 2,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesPerRow: 2,
        rows: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesPerRow: 2,
        rows: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 2,
        rows: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 1,
        rows: 1,
      },
    },
  ],
}

const clients = [
  Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8,
  Client9, Client10, Client11, Client12, Client13, Client14, Client15,
  Client16, Client17, Client18, Client19, Client30, Client21, Client22,
  Client23, Client24, Client25, Client26, Client27, Client28, Client29, Client30
];


  return (
    <div>


     <section>
             <div className="container-fluid">
               <div className="row">
                 <div className="col-md-12 col-12" style={{padding:'0px'}}>
                   <div className="banner-image banner-image-client-page">
     <img src={Banner} alt=""  style={{width:'100%'}} className='banner-img banner-img-client'/>
     <div className="banner-content">
       <h1 className='fw-bold fs-1'>Our Clients</h1>
     </div>
                   </div>
                   
                 </div>
               </div>
             </div>
           </section>


           <section>
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-12">
        <div className="slider-container">
      <Slider {...settings}>
  {clients.map((img, index) => (
    <div key={index}>
      <img
        src={img}
        alt={`Client ${index + 1}`}
        style={{
          width: '99%',
          // maxHeight: '120px',
          objectFit: 'cover',
          // padding: '10px'
        }}
      />
    </div>
  ))}
</Slider>
    </div>
      </div>
    </div>
  </div>
</section>
{/*      
        <div className="container">
        <div className="row">
          {clients.map((img, index) => (
            <div className="col-md-6 col-lg-4 col-12 mb-3" key={index}>
              <img src={img} alt={`Client ${index + 1}`} style={{ width: '100%' ,zIndex:'100'}} />
            </div>
          ))}
        </div>
      </div> */}
      
    </div>
  )
}

export default Clients
