import React from 'react'
import Banner from '../assets/about-banner/about.png'
import LinkedIn from '../assets/Images/icons/linkedin.png'
import Signature1 from '../assets/Abouts-us/signature1.png'
import Founder from '../assets/Abouts-us/prabakar.png'
import Supriya from '../assets/Abouts-us/supriya.png'
import WhyUs from '../assets/Abouts-us/why-us.jpg'
import Icon1 from '../assets/icons/software-development.png'
import Icon2 from '../assets/icons/branding.png'
import Icon3 from '../assets/icons/seo.png'
import Icon4 from '../assets/About-us-icon/contract.png'
import Icon5 from '../assets/icons/vision.png'
import Icon6 from '../assets/icons/mission.png'
import Icon7 from '../assets/icons/values.png'
import { FaHandshake, FaRocket, FaChartLine, FaTrophy } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import Padmavahinilogo from '../assets/testimonal/Padmavahini.png'
import MegaCrane from '../assets/testimonal/Mega-Crane.png'
import Ideal from '../assets/testimonal/Ideal.png'
import Sreevinayaga from '../assets/testimonal/Sree-Vinayaga.png'

import { FiExternalLink } from "react-icons/fi";


const aboutus = () => {






  return (
    <div>

      <Helmet>
        <title>About us Acculer Media</title>
        <meta name="description" content='' />
        <meta name="keywords" content="At Acculer Media, we transform businesses through expert website development, branding, digital marketing, e-commerce, SEO, and social media strategies." />
        <meta property="og:title" content="At Acculer Media, we transform businesses through expert website development, branding, digital marketing, e-commerce, SEO, and social media strategies." />
        <meta property="og:description" content="At Acculer Media, we transform businesses through expert website development, branding, digital marketing, e-commerce, SEO, and social media strategies." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container-fluid about-us-container ">
        <div className="row">
          <div className="col-md-12 col-12" style={{ padding: '0' }}>
            <img src={Banner} alt="" style={{ width: '100%' }} className='banner-img' />
          </div>
        </div>
        <div className="content-heading">
          <h1 className='text-light'>About </h1>
        </div>
      </div>


      <section className='grey-bg'>
        <div className="container">
          <br />
          <br />
          <div className="row">

            <div className="col-md-6 col-12">
              <img
                src={Founder}
                alt="Founder"
                className="img-fluid rounded "
              />
            </div>


            <div className="col-md-6 col-12">
              <h2 className=' mb-3'>About Acculer Media</h2>
              <p>Acculer Media is a leading Digital Marketing Company based in Coimbatore, with over 15 years of proven experience in helping businesses thrive in the digital space. What began as a vision to bridge the gap between brands and their audiences has evolved into a full-service digital marketing agency known for delivering measurable results and lasting impact.

              </p>

              <p>Our team blends strategic thinking, creative talent, and deep industry knowledge to craft customized digital solutions that drive growth. From SEO, Social Media Marketing, and Google Ads to advanced branding strategies and content creation, we empower businesses to build a strong online presence and connect meaningfully with their customers.

              </p>

              <p>At Acculer Media, excellence is not just a goal—it’s a standard we uphold through every campaign, every click, and every conversion. Our long-standing client relationships and success stories across various industries are a testament to our commitment and expertise.

              </p>

            </div>
          </div>
          <br />
          <br />
        </div>
      </section>

      <section className="py-5 bg-light ">
        <div className="container">
          {/* <center>
         <h2 className="text-primary fw-bold mb-5">Meet Our Founder</h2>
       </center> */}
          <div className="row align-items-center">

            <div className="col-md-7">
              <h5 className="fw-bold">Prabakar Rajappan</h5>
              <p className="text-muted mangedirector" >MANAGING DIRECTOR</p>
              <p>
                With over 15 years of experience, He is a visionary leader who transforms challenges into opportunities for innovation and excellence. His journey is defined by determination, creativity, and a commitment to delivering exceptional results.

              </p>
              <p>
                His envisions a world of endless possibilities, where businesses thrive through collaboration, creativity, and bold strategies. His leadership is grounded in understanding people, markets, and the transformative power of ideas, with a vision focused on creating meaningful impact for brands and the communities they serve.
              </p>
              {/* <div className="social-media-about d-flex justify-content-between">
  <img
              src={Signature1}
              alt="Signature"
              className="img-fluid"
              style={{ maxWidth: '150px', marginTop: '10px' }}
            />
          
            </div> */}

            </div>

            <div className="col-md-5 mb-4 mb-md-0">
              <img
                src={Founder}
                alt="Founder"
                className="img-fluid rounded "
              />
              <div className="mt-3 d-flex align-items-center">
                <i className="bi bi-linkedin me-2 fs-4 text-primary"></i>
                <a
                  href="https://www.linkedin.com/in/prabakaranmba/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prabakar Rajappan
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="py-5 bg-light grey-bg ">
        <div className="container">
          {/* <center>
         <h2 className="text-primary fw-bold mb-5">Our Founder</h2>
       </center> */}
          <div className="row align-items-center">

            <div className="col-md-5 mb-4 mb-md-0">
              <img
                src={Supriya}
                alt="Founder"
                className="img-fluid rounded  "
              />
              <div className="mt-3 d-flex align-items-center">
                <i className="bi bi-linkedin me-2 fs-4 text-primary"></i>
                <a
                  href="https://www.linkedin.com/in/supriya-u-a4a867189/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Supriya prabakar
                  <FiExternalLink />

                </a>
              </div>
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold">Supriya prabakar</h5>
              <p className="text-muted mangedirector">EXECUTIVE DIRECTOR</p>
              <p>
                A dynamic leader with over a decade of expertise in machine learning, education, and operations, Supriya combines industry and academic experience to drive success. Her journey from teaching to co-founding Acculer Media highlights her adaptability and commitment to creating meaningful impact.

              </p>
              <p>
                She ensures seamless operations, flawless strategy execution, and exceptional client value. Her leadership, driven by precision, collaboration, and innovation, is integral to the company’s growth and success.
              </p>
              {/* <div className="social-media-about d-flex justify-content-between">
  <img
              src={Signature1}
              alt="Signature"
              className="img-fluid"
              style={{ maxWidth: '150px', marginTop: '10px' }}
            />
          
            </div> */}

            </div>


          </div>
        </div>
      </section>


      <br />
      <br />
      {/* <section>

  <div className="vission-and-mission-container mt-5 mb-5">
    <div className="container">
      <div className="row">
        <div className=" col-lg-6 col-12 mb-3">
          <div className="vision">
            <h2>Vision</h2>
            <p>We envision a future where our approach goes beyond traditional boundaries, leveraging the power of technology, creativity, and strategic insight to shape industries, elevate communities, and drive sustainable growth for generations to come.</p>
            </div>
        </div>
        <div className=" col-lg-6 col-12 mb-3">
           <div className="mission">
            <h2>Mission</h2>
            <p>Our mission is to empower businesses across industries to reach their full potential by driving innovation, creating value, and building meaningful connections.

.</p>
<br />
<br />
            </div>
        </div>
      </div>
    </div>
  </div>
</section> */}




      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-1 fw-bold section-heading">Mission, Vision and Values</h2>
          <p className="mb-4 text-secondary">Mission and Vision </p>
          <div className="row g-4">
            {/* MISSION */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="mission-bg text-white p-4">

                  <img
                    src={Icon6}
                    alt="Mission"
                    className="icon my-3"
                  />
                </div>
                <div className="card-body">
                  <h4 className="fw-bold">MISSION</h4>
                  <p className="text-secondary small">
                    Our mission is to empower businesses across industries to reach their full potential by driving innovation, creating value, and building meaningful connections.                </p>
                </div>
              </div>
            </div>

            {/* VISION */}
            <div className="col-md-4">
              <div className="card vision-card border-0 shadow-sm">
                <div className="vision-bg text-white p-4">

                  <div className="image-clip-path">
                    <img
                      src={Icon5}
                      alt="Vision"
                      className="icon my-3"
                    />
                  </div>


                </div>
                <div className="card-body">
                  <h4 className="fw-bold">VISION</h4>
                  <p className="text-secondary small">
                    Our vision is to be a global leader in providing holistic, impactful solutions that transform businesses and create lasting legacies.                </p>
                </div>
              </div>
            </div>

            {/* VALUES */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="values-bg text-white p-4">

                  <img
                    src={Icon7}
                    alt="Values"
                    className="icon my-3"
                  />
                </div>
                <div className="card-body">
                  <h4 className="fw-bold texyt-dark">VALUES</h4>
                  <p className="text-secondary small">
                    This text is fully editable. It can be replaced with your own style. This is a sample text. You simply add your own text and description here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="py-5" style={{ backgroundColor: '#eaf7ff' }}>
        <div className="container bg-white rounded shadow p-4">
          <h2 className="text-center fw-bold mb-4 why-title">
            Why Choose Us?
          </h2>
          <div className="row align-items-center">
            {/* Left Column - Benefits */}
            <div className="col-lg-6">
              <div className="mb-3 p-3 rounded d-flex align-items-start" style={{ backgroundColor: '#e0f3ff' }}>
                <div className="fs-2 me-3"><FaHandshake /></div>
                <div>
                  <h5 className="fw-bold mb-1 text-dark">Expertise You Can Trust</h5>
                  <p className="mb-0 benefit-text text-dark">
                    Backed by 15+ years of experience, we deliver proven digital marketing solutions that drive real results. Reliable, strategic, and built for growth.
                  </p>
                </div>
              </div>

              <div className="mb-3 p-3 rounded d-flex align-items-start" style={{ backgroundColor: '#f3e6ff' }}>
                <div className="fs-2 me-3"><FaRocket /></div>
                <div>
                  <h5 className="fw-bold mb-1 text-dark">Driven by Passion</h5>
                  <p className="mb-0 benefit-text text-dark">
                    Our team is fueled by creativity and a genuine passion for digital success, ensuring every strategy is crafted with purpose and precision.
                  </p>
                </div>
              </div>

              <div className="mb-3 p-3 rounded d-flex align-items-start" style={{ backgroundColor: '#ffe6e1' }}>
                <div className="fs-2 me-3"><FaChartLine /></div>
                <div>
                  <h5 className="fw-bold mb-1 text-dark">Results That Matter</h5>
                  <p className="mb-0 benefit-text text-dark">
                    We focus on outcomes that drive growth. Every campaign is built to deliver measurable success                </p>
                </div>
              </div>

              <div className="mb-3 p-3 rounded d-flex align-items-start" style={{ backgroundColor: '#e9fff2' }}>
                <div className="fs-2 me-3"><FaTrophy /></div>              <div>
                  <h5 className="fw-bold mb-1 text-dark">Long-Term Partnership</h5>
                  <p className="mb-0 benefit-text text-dark">
                    We believe in lasting relationships. Your success is our ongoing commitment.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6 mt-4 mt-lg-0 text-center">
              <img
                src={WhyUs}
                alt="Dentist"
                className="img-fluid rounded"
                style={{ border: '4px solid #aee0f9', maxHeight: '450px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <section>
        <div className="container">
          <center>
            {/* <h2 className='text-primary fw-bold mb-1 fs-1 '>Client Success Stories</h2> */}
            <h2 className='text-primary fw-bold mb-1 fs-1 '>Their trust, our pride</h2>
            {/* <h3 className='fw-bold mb-1  mt-3'>Their trust, our pride</h3> */}
            <p className='fw-bold mb-1   mb-5'>Discover why industry leaders trust our expertise to deliver exceptional results.</p>
          </center>

          <div className="row">



            <div className="col-md-12  col-lg-6 col-12 mb-3">
              <div className="client-col">
                <div className="card-clients p-4 " >
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-secondary"></i>
                  </div>
                  <p className="mb-4">
                    “I can't say enough about the excellent work they have done for marketing us digitally. They are very professional and committed. It was an absolute pleasure to work with them.”
                  </p>
                  <div className="d-flex  justify-content-start">
                    <img
                      src={MegaCrane}
                      alt="Padmavahini"
                      className="rounded-circle me-3"
                      width="80"
                      height="80"
                    />
                    <div className="text-start">
                      <strong>SivaRam</strong>
                      <div className="text-muted" style={{ fontSize: '14px' }}>
                        Mega Crane
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-md-12  col-lg-6 col-12 mb-3">
              <div className="client-col">
                <div className="card-clients p-4 " >
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-secondary"></i>
                  </div>
                  <p className="mb-4">
                    “From the start of the project through to completion, Mr. Prabakaran and his team supported us and exceeded our expectations in every way. In many ways they understood our website needs better than we did. He's reliable, professional and easy to work with..”
                  </p>
                  <div className="d-flex  justify-content-start">
                    <img
                      src={Padmavahinilogo}
                      alt="Padmavahini"
                      className="rounded-circle me-3"
                      width="80"
                      height="80"
                    />
                    <div className="text-start">
                      <strong>R. Vathirajan</strong>
                      <div className="text-muted" style={{ fontSize: '14px' }}>
                        Padmavahini Transformers Pvt Ltd.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-md-12  col-lg-6 col-12 mb-3">
              <div className="client-col">
                <div className="card-clients p-4 " >
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-secondary"></i>
                  </div>
                  <p className="mb-4">
                    “I can't say enough about the professionalism, attention to detail, and vast technical knowledge Acculer Media Technologies possesses on multiple levels. We've been trying to put together a functional website, and I am happy to say we finally hired the Acculer Media team.”
                  </p>
                  <div className="d-flex  justify-content-start">
                    <img
                      src={Ideal}
                      alt="Padmavahini"
                      className="rounded-circle me-3"
                      width="80"
                      height="80"
                    />
                    <div className="text-start">
                      <strong>Kirubaharan</strong>
                      <div className="text-muted" style={{ fontSize: '14px' }}>
                        Ideal India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-12  col-lg-6 col-12 mb-3">
              <div className="client-col">
                <div className="card-clients p-4 " >
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-secondary"></i>
                  </div>
                  <p className="mb-4">
                    “One of the most talented Branding & Digital Marketing Agency out there. I always go back to Acculer Media Technologies when I'm out of my depth and they never failed to deliver what I ask for. Smart, trustworthy and professional.”
                  </p>
                  <div className="d-flex  justify-content-start">
                    <img
                      src={Sreevinayaga}
                      alt="Padmavahini"
                      className="rounded-circle me-3"
                      width="80"
                      height="80"
                    />
                    <div className="text-start">
                      <strong>
                        Ram Manikandan</strong>
                      <div className="text-muted" style={{ fontSize: '14px' }}>
                        Sree Vinayaga Automation Solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 
            <div className="col-md-12  col-lg-6 col-12 mb-3">
              <div className="client-col">
                <div className="card-clients p-4 " >
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-secondary"></i>
                  </div>
                  <p className="mb-4">
                    “Some quick example text to build on the card-clients title and make up the bulk of the card-clients’s content.”
                  </p>
                  <div className="d-flex  justify-content-start">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Jane Doe"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div className="text-start">
                      <strong>Jane Doe</strong>
                      <div className="text-muted" style={{ fontSize: '14px' }}>
                        CEO, Example Company
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12  col-lg-6 col-12 mb-3">
              <div className="client-col">
                <div className="card-clients p-4 " >
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-secondary"></i>
                  </div>
                  <p className="mb-4">
                    “Some quick example text to build on the card-clients title and make up the bulk of the card-clients’s content.”
                  </p>
                  <div className="d-flex  justify-content-start">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Jane Doe"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div className="text-start">
                      <strong>Jane Doe</strong>
                      <div className="text-muted" style={{ fontSize: '14px' }}>
                        CEO, Example Company
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}




          </div>
        </div>
      </section>



    </div>
  )
}

export default aboutus
