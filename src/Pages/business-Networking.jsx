import React from 'react'
import Banner from '../assets/about-banner/about.png'


import Experience from "../assets/Images/icons/experience.png";
import Project from "../assets/Images/icons/project.png";
import Expert from "../assets/Images/icons/expert.png";
import Clients from "../assets/Images/icons/clients.png";

const brandstrategy = () => {
  return (
    <div>
      <div className="container-fluid about-us-container">
           <div className="row">
             <div className="col-md-12 col-12" style={{padding:'0'}}>
   <img src={Banner} alt=""  style={{width:'100%'}}/>
             </div>
           </div>
           <div className="content-heading">
             <h1 className='text-light'>Brand Strategy </h1>
           </div>
         </div>


         <section className="d-flex align-items-center justify-content-center brand">
  <div className="container-fluid">
    <div className="row align-items-center justify-content-center text-center ">
      
      <div className="col-md-12 col-lg-6 col-12  brand-col">
        <br />
        <br />
        <br />
        <br />
        <div className="brand-col">
          <h2>Is Your Brand Making an Impact ?</h2>
          <p>
            A strong brand is more than just a logo—it’s the soul of your business. A well-defined brand strategy helps you connect, stand out, and build lasting customer trust. Whether you’re a startup or an established business, we create strategies that define who you are, enhance recognition, and drive growth. Let’s craft a brand identity that truly resonates.
          </p>
        </div>
          <br />
        <br />
        <br />
        <br />
      </div>
      
      <div className="col-md-12 col-lg-6 col-12 brand-col-2 ">
          <br />
        <br />
        <br />
        <br />
        <div className="brand-col-2 mb-2">
          <h2>"Let’s Craft a Winning Brand Strategy Together!"</h2>
        <button className='click-here'><span>Click Here</span></button>

 
 
       
        </div>
          <br />
        <br />
        <br />
        <br />
      </div>

    </div>
  </div>
</section>



 {/* About Us start */}
      <div className="brand-strategy-container py-5">
        <div className="container container-about-us-home py-4">
          <div className="row">
          
            <div className="col-md-12 col-12">
              <h2 className=" mt-3 mb-2 fs-2">
            Our Comprehensive Brand <br /> Strategy Services
              </h2>
              {/* <h2 className="fw-bold">Let's talk numbers</h2> */}
              {/* <p className="text-light mb-3 fs-5 ">
                Our journey began with a vision empowering businesses to thrive
                in the digital world. With innovative strategies and a passion
                for results, we've helped hundreds of brands unlock growth and
                overcome challenges. For us, every project is a chance to
                redefine success. The best is yet to come!{" "}
              </p> */}
              <div className="row g-4">
                <div className="col-md-12 col-lg-4 col-12">
                  <div className="brand-strategy  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <h3 className=" text-center mt-1">
                        <img
                          src={Experience}
                          alt=""
                          className="image-icon-experience"
                        />
                      </h3>
                    </div>

                    <h2 className="">Storytelling That Connects</h2>
                    <p className="mb-0">Craft engaging brand narratives that build emotional connections and establish trust.</p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-12">
                  <div className="brand-strategy  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                        src={Project}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="">Brand Anthem Creation</h2>
                    <p className="mb-0">Develop a powerful brand anthem that strengthens your identity and inspires stakeholders.</p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-12">
                  <div className="brand-strategy  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                        src={Expert}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="">Employee Testimonials</h2>
                    <p className="mb-0">Showcase real employee experiences to reinforce company culture and credibility</p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-12">
                  <div className="brand-strategy  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                        src={Clients}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="">Brand Evolution Mapping</h2>
                    <p className="mb-0">Highlight key milestones to reinforce credibility and adaptability in changing markets</p>
                  </div>
                </div>


                 <div className="col-md-12 col-lg-4 col-12">
                  <div className="brand-strategy  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                        src={Clients}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="">Core Values Definition</h2>
                    <p className="mb-0">Define your brand’s core principles and align them with audience expectations.</p>
                  </div>
                </div>

                   <div className="col-md-12 col-lg-4 col-12">
                  <div className="brand-strategy  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                        src={Clients}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="">Customer Success Stories</h2>
                    <p className="mb-0">Turn positive customer experiences into impactful case studies that build credibility.</p>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us end */}


    </div>
  )
}

export default brandstrategy

