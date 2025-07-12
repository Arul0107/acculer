import React from 'react'
import Banner from '../assets/contact-page/banner.png'
import Ansuhika from '../assets/projects/anush.png'
import SriLakshmi from '../assets/projects/grinder.png'
import Vanismart from '../assets/projects/vanismart.png'
import NiceHome from '../assets/projects/nice.png'
import Padmavahini from '../assets/projects/transformer.png'
import RocksNature from '../assets/projects/nature.png'
import { FiExternalLink } from "react-icons/fi";

const OurWorks = () => {
  return (
    <div>
      {/* Banner */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="banner-image ">
                <img src={Banner} alt="Banner" style={{ width: '100%' }} loading="lazy" className='banner-img' />
                <div className="banner-content position-absolute top-50  text-white ">
                  <h1 className="fw-bold fs-1">Works</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aushadi */}
      <section className="py-5">

        <div className="container">

          <div className="row our-work-parent">

            <div className="col-lg-6 col-12 ">
              <div className="image-wrapper hoverImageWrapper hoverImageWrapper">
                <img src={Ansuhika} alt="Aushadi" loading="lazy" className='hoverImage' />
              </div>
              <a
                href="https://aushadinaturals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-flex align-items-center mt-3"
              >
                <h3 className="fw-bold text-primary mb-0 me-2">Aushadi</h3>
                <FiExternalLink className="text-primary" size={20} />
              </a>

              <p className="text-muted">Herbal and Natural Cosmetics</p>
            </div>

            <div className="col-lg-6 col-12 ">
              <div className="break-tag">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>

              <div className="image-wrapper hoverImageWrapper ms-lg-5">
                <img src={SriLakshmi} alt="Sri Lakshmi grinders" loading="lazy" className='hoverImage' />
              </div>

              <h3 className="fw-bold text-primary  ms-lg-5">
                <a
                  href="https://srilakshmiwetgrinders.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center mt-3"
                >
                  <h3 className="fw-bold text-primary mb-0 me-2">Sri Lakshmi grinders</h3>
                  <FiExternalLink className="text-primary" size={20} />
                </a></h3>
              <p className="text-muted  ms-lg-5">Wet Grinder Manufacturer</p>
            </div>
          </div>

        </div>


        {/* 2ns container */}

        <div className="container">

          <div className="row our-work-parent">

            <div className="col-lg-6 col-12">
              <div className="image-wrapper hoverImageWrapper">
                <img src={Vanismart} alt="Vanismart" loading="lazy" className='hoverImage' />
              </div>
              <h3 className="fw-bold text-primary">
                <a
                  href="https://www.vanismartonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center mt-3"
                >
                  <h3 className="fw-bold text-primary mb-0 me-2">Vanismart</h3>
                  <FiExternalLink className="text-primary" size={20} />
                </a></h3>
                
              
              <p className="text-muted">Mosquito Swaters</p>
            </div>

            <div className="col-lg-6 col-12 ">
              <div className="break-tag">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>

              <div className="image-wrapper hoverImageWrapper  ms-lg-5">
                <img src={NiceHome} alt="Nice Home" loading="lazy" className='hoverImage' />
              </div> 
              <h3 className="fw-bold text-primary  ms-lg-5">
                
                 <a
                  href="https://niceproductonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center mt-3"
                >
                  <h3 className="fw-bold text-primary mb-0 me-2">Nice Home</h3>
                  <FiExternalLink className="text-primary" size={20} />
                </a></h3>
              <p className="text-muted  ms-lg-5">Ready Made Food Products</p>
            </div>
          </div>

        </div>

        {/* 3ns container */}

        <div className="container">

          <div className="row our-work-parent">

            <div className="col-lg-6 col-12">
              <div className="image-wrapper hoverImageWrapper">
                <img src={Padmavahini} alt="Padmavahini" loading="lazy" className='hoverImage' />
              </div>
                <a
                  href="https://padmavahini.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center mt-3"
                >
                  <h3 className="fw-bold text-primary mb-0 me-2">Padmavahini</h3>
                  <FiExternalLink className="text-primary" size={20} />
                </a>
              <p className="text-muted">Transformers</p>
            </div>

            <div className="col-lg-6 col-12 ">
              <div className="break-tag">
                <br />
                <br />  
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>

              <div className="image-wrapper hoverImageWrapper  ms-lg-5">
                <img src={RocksNature} alt="Rocks Nature" loading="lazy" className='hoverImage' />
              </div>
              <h3 className="fw-bold text-primary  ms-lg-5">Rocks Nature</h3>
              <p className="text-muted  ms-lg-5">Movie Poster</p>
            </div>
          </div>

        </div>





      </section>
    </div>
  )
}

export default OurWorks
