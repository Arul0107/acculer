import React from 'react'
import Banner from '../assets/about-banner/about.png'


import Experience from "../assets/Images/icons/experience.png";
import Project from "../assets/Images/icons/project.png";
import Expert from "../assets/Images/icons/expert.png";
import Clients from "../assets/Images/icons/clients.png";
import WhyChoose from "../assets/Abouts-us/why-choose-us.png";

import Faq from '../assets/Abouts-us/faq.png'


import Icon1 from '../assets/icons/software-development.png'
import Icon2 from '../assets/icons/branding.png'
import Icon3 from '../assets/icons/seo.png'
const GoogleMyBussiness = () => {
  return (
    <div>
      <div className="container-fluid about-us-container">
           <div className="row">
             <div className="col-md-12 col-12" style={{padding:'0'}}>
   <img src={Banner} alt=""  style={{width:'100%'}} className='banner-img'/>
             </div>
           </div>
           <div className="content-heading">
             <h1 className='text-light'>Google My Business</h1>
           </div>
         </div>

<br />
<br />
         <section className="d-flex align-items-center justify-content-center brand">
  <div className="container">
    <div className="row align-items-center justify-content-center text-center ">
      
      <div className="col-md-12 col-lg-12 col-12  brand-col">
        <br />
        <br />
        <br />
        <br />
        <div className="brand-col">
          <h2>Want to Rank on Google Maps? Let Us Help You Dominate Local Searches!</h2>
          <p>
Imagine your business being the first thing customers see when they search for your services on Google Maps or Google Search. Google My Business (GMB) is the key to appearing in local searches, bringing more foot traffic, phone calls, and online inquiries. With the right GMB optimization, you increase your business’s visibility, authority, and customer trust in your local area.</p>
        </div>
          <br />
        <br />
        <br />
        <br />
      </div>
      


    </div>
  </div>
</section>

<br />
<br />

 {/* About Us start */}
      <div className="brand-strategy-container py-5">
        <div className="container container-about-us-home py-4">
              <center>
  <h2 className="  mt-3 mb-5 fs-2 text-light">
Our Comprehensive Google My Business Services
              </h2>
              </center>
          <div className="row">
          
            <div className="col-md-12 col-12">
          
            
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
                  <center>
  <div className="brand-strategy holographic-card  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <h3 className=" text-center mt-1">
                        <img
                          src={Icon1}
                          alt=""
                          className="image-icon-experience"
                        />
                      </h3>
                    </div>

                    <h2 className="fs-3">GMB Profile Optimization</h2>
                    <p className="mb-0">We ensure that your GMB profile is fully optimized, with accurate business hours, location, services, and more. A complete profile gives your business a higher chance of showing up in local searches.</p>
                  </div>
                  </center>
                
                </div>
                <div className="col-md-12 col-lg-4 col-12">
                  <center>
   <div className="brand-strategy  holographic-card p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
           src={Icon2}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="fs-3">Tailored Category Selection</h2>
                    <p className="mb-0">We assist in selecting the most fitting primary and subcategories for your GMB profile, ensuring your business is accurately categorized. This helps improve your visibility in relevant local searches, connecting you with potential customers who are looking for your specific products and services.


</p>
                  </div>
                  </center>
               
                </div>




              <div className="col-md-12 col-lg-4 col-12">
  <center>
    <div className="brand-strategy holographic-card p-4 rounded-4">
    <div className="icon brand-strategy-icon mb-4">
      <img src={Icon3} alt="" className="image-icon-experience" />
    </div>
    <h2 className="fs-3">Review Management & Reputation Building</h2>
    <p className="mb-0">
Customer reviews are critical for local SEO. We help you manage your reviews, respond to customer feedback, and maintain a positive reputation, which in turn helps improve your local search rankings.
    </p>
  </div>
  </center>
</div>

                <div className="col-md-12 col-lg-4 col-12">
                <center>
                    <div className="brand-strategy holographic-card  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                            src={Icon1}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="fs-3">Regular GMB Posts, Offers & Updates</h2>
                    <p className="mb-0">We ensure your GMB profile stays fresh and engaging with regular posts about offers, updates, and events. Active profiles are favored by Google, helping you stay visible and relevant to customers.</p>
                  </div>
                </center>
                </div>


                 <div className="col-md-12 col-lg-4 col-12">
                 <center>
                   <div className="brand-strategy  holographic-card p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                        src={Icon2}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="fs-3">Photo & Video Optimization</h2>
                    <p className="mb-0">Visual content enhances your GMB profile’s appeal. We help you upload high-quality photos and videos that showcase your products, services, and business environment, attracting more customers.</p>
                  </div>
                 </center>
                </div>

                   <div className="col-md-12 col-lg-4 col-12">
                    <center>
  <div className="brand-strategy holographic-card  p-4 rounded-4 ">
                    <div className="icon brand-strategy-icon mb-4 ">
                      <img
                      src={Icon3}
                        alt=""
                        className="image-icon-experience"
                      />
                    </div>
                    <h2 className="fs-3">Service & Product Listings</h2>
                    <p className="mb-0">We highlight your offerings by listing your products and services directly on your GMB profile. This helps potential customers quickly understand what you offer and drives more inquiries and sales..</p>
                  </div>
                    </center>
                
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us end */}


<section className="simple-process py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-5">How We Drive Results:
A Simple Process That Works </h2>
    <div className="row justify-content-center align-items-center">
      {[
        { step: "1", title: "Understanding Your Business Goals" },
        { step: "2", title: "Custom Strategy Creation" },
        { step: "3", title: "Setting Up Google Ads Campaigns" },
        { step: "4", title: "Optimizing Campaign Performance" },
        { step: "5", title: "CTracking & Reporting Results" },
      ].map((item, index) => (
        <div key={index} className="col-6 col-md-2 text-center position-relative">
          <div className="step-circle mx-auto mb-2">{item.step}</div>
          <p className="fw-semibold small">{item.title}</p>
          {index < 4 && (
            <div className="dotted-line d-none d-md-block"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


<section className='Why-Choose-Us'>
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-6 col-12">
        <h2 className=' mb-3 ms-4 mt-5 Why-Choose-Us-h2 text-light'>Why Acculer Media Is the Best Google My Business Optimization Agency in Coimbatore</h2>
        <ol className='Why-Choose-Us-h2-ol'>
          <li className='mb-4 fs-5 text-light '> 1. Maximize your local visibility by optimizing your Google My Business profile</li>
          <li className='mb-4 fs-5 text-light'>2.  Focus on long-term local SEO success with proven GMB strategies</li>
          <li className='mb-4 fs-5 text-light'>3. Provide clear, actionable insights and monthly performance reports</li>
          <li className='mb-4 fs-5 text-light'>4.  Ensure accurate and consistent business information across GMB for better search rankings</li>
          <li className='mb-4 fs-5 text-light'>5.Drive measurable results, helping your business stand out in local searches and attract more customers</li>
         
        </ol>
      </div>

       <div className="col-md-12 col-lg-6 col-12">
        <img src={WhyChoose} alt=""  style={{width:'100%'}}/>
      </div>
    
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-6 col-12 mb-4">
        <img src={Faq} alt="Frequently Asked Questions" style={{ width: '100%' }} />
      </div>

      <div className="col-md-12 col-lg-6 col-12 mb-4">
        <h2 className="mb-3 ms-4 mt-5 Why-Choose-Us-h2">Frequently Asked Questions</h2>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

What is Google My Business (GMB)?

              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
       


Google My Business (GMB) is a powerful tool that allows businesses to manage their online presence across Google, including Google Search and Google Maps. At Acculer Media Technology in Coimbatore, with years of experience our Experts help businesses set up, optimize, and manage their GMB profiles to ensure maximum local visibility and reac
              </div>
            </div>
          </div>
          <br />

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
How soon can I see results with GMB optimization?


              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">




With Acculer Media Technologies in Coimbatore, GMB optimization results typically begin to show within a few weeks, with noticeable improvements in local visibility, customer engagement, and an increase in calls to your business. While some changes may be immediate, full benefits such as higher rankings and more inquiries may take 1-2 months, depending on the competitiveness of your market and the optimization efforts.
              </div>
            </div>
          </div>
          <br />

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
How can I improve my local ranking on Google?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
   



Improving your local ranking on Google is crucial for visibility, especially in competitive areas and in Industries. At Acculer Media Technologies, we ensure your GMB profile is complete, with up-to-date information like business hours, location, and services. We also help you engage with customers through reviews and posts, which significantly boosts your local search rankings.
              </div>
            </div>
          </div>
          <br />

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
How can I add products or services to my GMB profile?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">




To add products or services to your profile, sign in to your Google Business Profile and navigate to the "Products" or "Services" tab. In Coimbatore, Acculer Media Technologies helps local businesses add detailed descriptions, prices, and photos of their products or services to enhance customer interest and improve local SEO.
              </div>
            </div>
          </div>
          <br />

         
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default GoogleMyBussiness

