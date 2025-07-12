import React from "react";

import Button from "react-bootstrap/Button";
// import Seo from "../assets/Images/undraw.png";
// import Seo2 from "../assets/Images/2.jpg";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-bootstrap/Carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Webdev from "../assets/Images/icons/web-dev.png";
import IndustryImage from "../assets/Images/industry/3.png";

import Experience from "../assets/Images/icons/experience.png";
import Project from "../assets/Images/icons/project.png";
import Expert from "../assets/Images/icons/expert.png";
import Clients from "../assets/Images/icons/clients.png";

import Astro from "../assets/Images/Home-About-images/astro.jpg";
import Banner1 from "../assets/Banner-Images/banner-1.png";
import Banner2 from "../assets/Banner-Images/banner-2.png";
import Arrow from "../assets/Images/icons/arrow.png";
// import Website from "../assets/Images/icons/web-site.png";

import Partner1 from "../assets/Our-partners/aws.png";
import Partner2 from "../assets/Our-partners/godaddy.png";
import Partner3 from "../assets/Our-partners/google-ads.png";
import Partner4 from "../assets/Our-partners/google-workspace.png";
import Partner5 from "../assets/Our-partners/meta.png";
import Partner6 from "../assets/Our-partners/razorpay.png";
import Partner7 from "../assets/Our-partners/shopify.png";
import Partner8 from "../assets/Our-partners/youtube.png";

import Client1 from "../assets/clients/1.png";
import Client2 from "../assets/clients/2.png";
import Client3 from "../assets/clients/3.png";
import Client4 from "../assets/clients/4.png";
import Client5 from "../assets/clients/5.png";
import Client6 from "../assets/clients/6.png";
import Client7 from "../assets/clients/7.png";
import Client8 from "../assets/clients/8.png";
import Client9 from "../assets/clients/9.png";
import Client10 from "../assets/clients/10.png";
import Client11 from "../assets/clients/11.png";
import Client12 from "../assets/clients/12.png";
import Client13 from "../assets/clients/13.png";
import Client14 from "../assets/clients/14.png";
import Client15 from "../assets/clients/15.png";
import Client16 from "../assets/clients/16.png";
import Client17 from "../assets/clients/17.png";
import Client18 from "../assets/clients/18.png";
import Client19 from "../assets/clients/19.png";
import Client20 from "../assets/clients/30.png";
import Client21 from "../assets/clients/21.png";
import Client22 from "../assets/clients/22.png";
import Client23 from "../assets/clients/23.png";
import Client24 from "../assets/clients/24.png";
import Client25 from "../assets/clients/25.png";
import Client26 from "../assets/clients/26.png";
import Client27 from "../assets/clients/27.png";
import Client28 from "../assets/clients/28.png";
import Client29 from "../assets/clients/29.png";
import Client30 from "../assets/clients/30.png";


import SoftwareDevelopement from '../../src/assets/icons/cardiocn/Website Development white.png'
import Ecommersicon from '../../src/assets/icons/cardiocn/E-Commerce white.png'
import Branding from '../../src/assets/icons/cardiocn/brand.png'
import Seoicon from '../../src/assets/icons/cardiocn/Seo white.png'
import SEO from '../../src/assets/icons/seo.png'

import Aushadi from '../assets/our-wevbsite-works/httpsaushadinaturals.com.png'
import Padmavahini from '../assets/our-wevbsite-works/padmavahini.png'
import MegaCrane from '../assets/our-wevbsite-works/megacranesindia.png'
import Vkm from '../assets/our-wevbsite-works/Vkm.png'
import JayaMurugan from '../assets/our-wevbsite-works/jayamuruganagencies.png'
import Irumbagam from '../assets/our-wevbsite-works/irumbagam.png'
import RocksNature from '../assets/our-wevbsite-works/rocksnature.png'
import ERA from '../assets/our-wevbsite-works/era.png'
import Nice from '../assets/our-wevbsite-works/niceproductonline.png'
import Website from "../assets/Signature Services/website.png";

import signatureServicesecommers from '../assets/Signature Services/ecommers.png';
import signatureServicesSeo from '../assets/Signature Services/seoanlysits.png';
import signatureServicesdm from '../assets/Signature Services/dm.png';
import signatureServicessocial from '../assets/Signature Services/socialmeia.png';
import signatureServicesbrand from '../assets/Signature Services/brand.png';



/* indestry */

import IndustryWeTransformautomobile from '../assets/Industry-We-Transform/automobile.png'
import IndustryWeTransformhealthcare from '../assets/Industry-We-Transform/health.png';
import IndustryWeTransformconstructiion from '../assets/Industry-We-Transform/constructiion.png';
import IndustryWeTransformenginerring from '../assets/Industry-We-Transform/enginerring.png';
import IndustryWeTransformfood from '../assets/Industry-We-Transform/food.png';
import IndustryWeTransformindustry from '../assets/Industry-We-Transform/industry.png';
import IndustryWeTransformrealestate from '../assets/Industry-We-Transform/realestate.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";

const Home = () => {
  const features = [
    {
      icon: "🌟",
      title: "Leading Agency",
      description:
        "One of the Leading Agency in South India with 100% Inhouse Production",
    },
    {
      icon: "🧠",
      title: "Client-centric approach",
      description:
        "Client-centric approach, Better workflow management, Real-time Performance tracking",
    },
    {
      icon: "🏅",
      title: "Proven track record",
      description:
        "Proven track record - Successful Casestudies for clients across Industry",
    },
    {
      icon: "🔁",
      title: "Our Client Retention",
      description:
        "Our Client Retention rate is more than 90%. Out of 10 clients, we retain 9.",
    },
    {
      icon: "🌐",
      title: "Domain knowledge",
      description:
        "Strong Domain knowledge in Industries we serve like Manufacturing, Healthcare, Education and Real Estate.",
    },
    {
      icon: "📝",
      title: "Personalized approach",
      description:
        "Personalized approach - Dedicated account manager and Customized strategies",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>Acculer Media</title>
        <meta name="description" content='' />
        <meta name="keywords" content="At Acculer Media, we transform businesses through expert website development, branding, digital marketing, e-commerce, SEO, and social media strategies." />
        <meta property="og:title" content="At Acculer Media, we transform businesses through expert website development, branding, digital marketing, e-commerce, SEO, and social media strategies." />
        <meta property="og:description" content="At Acculer Media, we transform businesses through expert website development, branding, digital marketing, e-commerce, SEO, and social media strategies." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="container-fluid banner-container-fluid">
        <div className="row">
          <div className="col-12 banner-col-12">
            <Carousel data-bs-theme="dark" interval={2500} pause={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 Carousel-img"
                  src={Banner1}
                  alt="First slide"
                />
                {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 Carousel-img"
                  src={Banner2}
                  alt="Second slide"
                />
                {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 Carousel-img"
                  src={Banner1}
                  alt="Third slide"
                />
                {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        {/* 
        <div className="banner-container">
          <div className="banner-content">
            <h1 className="home-h1 text-light">
              Smart Digital Market Agency For Your Business Success
            </h1>
            <p className=" text-light p-font-size">
              Digital Marketing | Web Developemenr | Branding & Designing | Web
              Application{" "}
            </p>
            <div className="banner-button">
              <Button className="know-more-btn">Know More</Button>
              <Button className="know-more-btn">Contact Us</Button>
            </div>
          </div>
        </div> */}
      </div>

      {/* About Us start */}
      <div className="about-achievements-container py-5">
        <div className="container container-about-us-home py-4">
          <div className="row">
            <div className="col-md-5 col-12 mb-4 text-light  ">
              <img src={Astro} alt="astro" style={{ width: "100%" }} />
            </div>
            <div className="col-md-7 col-12">
              <h2 className=" text-light mt-3 mb-2 fs-2 h-tag-fonts">
                The Story So Far
              </h2>
              {/* <h2 className="fw-bold">Let's talk numbers</h2> */}
              <p className="text-light mb-3 fs-5 ">
                Our journey began with a vision empowering businesses to thrive
                in the digital world. With innovative strategies and a passion
                for results, we've helped hundreds of brands unlock growth and
                overcome challenges. For us, every project is a chance to
                redefine success. The best is yet to come!{" "}
              </p>
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <center>
                    <div className="achievement-card text-light p-4 rounded-4 ">
                      <div className="icon achievement-card-icon mb-4 ">
                        <h3 className="text-light text-center mt-1">
                          <img
                            src={Experience}
                            alt=""
                            className="image-icon-experience"
                          />
                        </h3>
                      </div>

                      <div className="display-6">15+</div>
                      <p className="mb-0">Years Of Experience</p>
                    </div>
                  </center>

                </div>
                <div className="col-12 col-md-6">
                  <center>
                    <div className="achievement-card text-light p-4 rounded-4 ">
                      <div className="icon achievement-card-icon mb-4 ">
                        <img
                          src={Project}
                          alt=""
                          className="image-icon-experience"
                        />
                      </div>
                      <div className="display-6">1400+</div>
                      <p className="mb-0">Projects</p>
                    </div>
                  </center>

                </div>
                <div className="col-12 col-md-6">
                  <center>
                    <div className="achievement-card text-light p-4 rounded-4 ">
                      <div className="icon achievement-card-icon mb-4 ">
                        <img
                          src={Expert}
                          alt=""
                          className="image-icon-experience"
                        />
                      </div>
                      <div className="display-6">20+</div>
                      <p className="mb-0">Experts</p>
                    </div>
                  </center>

                </div>
                <div className="col-12 col-md-6">
                  <center>
                    <div className="achievement-card text-light p-4 rounded-4 ">
                      <div className="icon achievement-card-icon mb-4 ">
                        <img
                          src={Clients}
                          alt=""
                          className="image-icon-experience"
                        />
                      </div>
                      <div className="display-6">200+</div>
                      <p className="mb-0">Clients</p>
                    </div>
                  </center>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us end */}

      {/* About Us end */}

      {/* Our Creations */}
      <div className="Our-Creations">
        <div className="container-fluid">
          <center>
            <h2 className="about-us-h2-white text-light  h-tag-fonts">
              Our Creations
            </h2>
          </center>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12 col-12">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                autoplay={true}
                autoplaySpeed={1000}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={Aushadi} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Padmavahini} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={MegaCrane} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Vkm} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={JayaMurugan} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Irumbagam} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={RocksNature} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ERA} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Nice} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      {/* Signature-Services */}

      <div className="">
        <div className="container">
          <center>
            <br />
            <br />
            <br />
            <h2 className="about-us-h2 h-tag-fonts">
              Signature Services
            </h2>
          </center>
          <br />
          <br />
          <div className="row Signature-Services">
            {/* 1. Website Development */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="web-development flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={SoftwareDevelopement} alt="icon" className="mb-3" style={{ width: '150px' }} />
                    <div className="random-content">
                      <h2 className="fs-5 fw-bold text-center">Website Development</h2>
                      <p className="fs-6 text-center">We build websites that ensure seamless experiences across devices.</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="box-acc-2 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <img src={Arrow} alt="arrow" className="arrow-icon mb-2" />
                      <img src={Website} alt="web development" className="icon-size-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Brand Strategy */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="web-development flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Branding} alt="icon" className="mb-3" style={{ width: '150px' }} />
                    <div className="random-content">
                      <h2 className="fs-5 fw-bold text-center">Brand Strategy</h2>
                      <p className="fs-6 text-center">We create brands that build loyalty and stand out with lasting value.</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="box-acc-2 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <img src={Arrow} alt="arrow" className="arrow-icon mb-2" />
                      <img src={signatureServicesbrand} alt="web development" className="icon-size-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Digital Marketing */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="web-development flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={SEO} alt="icon" className="mb-3" style={{ width: '150px' }} />
                    <div className="random-content">
                      <h2 className="fs-5 fw-bold text-center">Digital Marketing</h2>
                      <p className="fs-6 text-center">Powerful digital strategies that grow your brand and customer base.</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="box-acc-2 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <img src={Arrow} alt="arrow" className="arrow-icon mb-2" />
                      <img src={signatureServicesdm} alt="web development" className="icon-size-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. E-Commerce */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="web-development flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Ecommersicon} alt="icon" className="mb-3" style={{ width: '150px' }} />
                    <div className="random-content">
                      <h2 className="fs-5 fw-bold text-center">E-Commerce</h2>
                      <p className="fs-6 text-center">Transform your store with seamless e-commerce experiences.</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="box-acc-2 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <img src={Arrow} alt="arrow" className="arrow-icon mb-2" />
                      <img src={signatureServicesecommers} alt="ecommerce" className="icon-size-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. SEO */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="web-development flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Seoicon} alt="icon" className="mb-3" style={{ width: '150px' }} />
                    <div className="random-content">
                      <h2 className="fs-5 fw-bold text-center">SEO</h2>
                      <p className="fs-6 text-center">Boost search rankings and drive organic traffic to your website.</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="box-acc-2 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <img src={Arrow} alt="arrow" className="arrow-icon mb-2" />
                      <img src={signatureServicesSeo} alt="seo" className="icon-size-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Social Media Marketing */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="web-development flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={SEO} alt="icon" className="mb-3" />
                    <div className="random-content">
                      <h2 className="fs-5 fw-bold text-center">Social Media</h2>
                      <p className="fs-6 text-center">Engaging campaigns that boost brand authority and reach.</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="box-acc-2 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <img src={Arrow} alt="arrow" className="arrow-icon mb-2" />
                      <img src={signatureServicessocial} alt="social media" className="icon-size-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* Industry We Transform */}

      <div className="Industry-We-Transform">
        <br />
        <br />
        <div className="title">
          <h2 className="about-us-h2-white text-light   h-tag-fonts">
            Industry We Transform
          </h2>
        </div>

        <div>
          <Marquee speed={120} delay={0} className="marquee">
            <div className="image_wrapper">
              <img src={IndustryWeTransformautomobile} />
            </div>
            <div className="image_wrapper-2">
              <img src={IndustryWeTransformhealthcare} />
            </div>
            <div className="image_wrapper">
              <img src={IndustryWeTransformconstructiion} />
            </div>
            <div className="image_wrapper-2">
              <img src={IndustryWeTransformenginerring} />
            </div>
            <div className="image_wrapper">
              <img src={IndustryWeTransformfood} />
            </div>
            <div className="image_wrapper-2">
              <img src={IndustryWeTransformindustry} />
            </div>
            <div className="image_wrapper">
              <img src={IndustryWeTransformrealestate} />
            </div>

          </Marquee>
        </div>
        <br />
        <br />
      </div>

      {/* <div className="Industry-We-Transform">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-12">
         
      </div>
    </div>
  </div>
</div> */}
      <div className="our-partners py-4">
        <div className="container">
          <center>
            <h2 className="our-partners-h2 text-light mt-5 mb-5 h-tag-fonts">
              Our Channel Partners
            </h2>
          </center>
          <div className="row">
            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner1} alt="Partner 1" className="partner-img" />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner2} alt="Partner 2" className="partner-img" />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner3} alt="Partner 3" className="partner-img" />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner4} alt="Partner 4" className="partner-img" />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner5} alt="Partner 5" className="partner-img" />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner6} alt="Partner 6" className="partner-img" />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner7} alt="Partner 7" className="partner-img" />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 mb-4">
              <div className="partner-logo ">
                <img src={Partner8} alt="Partner 8" className="partner-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Our-Valuable-Brands">
        <br />
        <br />
        <div className="Our-Valuable-Brands-title">
          <h2 className="about-us-h2-white  text-light   h-tag-fonts">
            Our Valuable Brands
          </h2>
        </div>

        <div>
          <Marquee speed={50} delay={0} className="marquee">
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client1} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client2} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client3} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client4} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client5} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client6} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client7} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client8} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client9} />
            </div>

            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client10} />
            </div>
          </Marquee>
        </div>
        <br />
        <br />

        <div>
          <Marquee speed={50} delay={0} direction="right" className="marquee">
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client11} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client12} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client13} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client14} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client15} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client16} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client17} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client18} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client19} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client20} />
            </div>
          </Marquee>
        </div>

        <br />
        <br />

        <div>
          <Marquee speed={50} delay={0} className="marquee">
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client21} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client22} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client23} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client24} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client25} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client26} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client27} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client28} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper">
              <img src={Client29} />
            </div>
            <div className="Our-Valuable-Brands-image_wrapper-2">
              <img src={Client30} />
            </div>
          </Marquee>
        </div>
        <br />
        <br />
      </div>

      {/* testimonial  start*/}

      <section className="testimonia-section">
        <div className="container">
          <center>
            <h2 className="mt-2 mb-5 h-tag-fonts">Their trust, our pride</h2>
          </center>
          <div className="row">
            <div className="col-md-12 col-12 slider-card-col">
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <div className="row">
                      <div className="col-md-12 col-12 slider-card-col">
                        <div className="slider-card">

                          <p>
                            "The branding work by Acculer Media was outstanding! They understood our vision and helped us create a strong, memorable identity that resonates with our target audience. Our brand now feels more aligned with our mission. Huge thanks to the team for their incredible work!

"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-md-12 col-12 slider-card-col">
                        <div className="slider-card">
                          <p>
                            "Acculer Media's digital marketing strategies helped us gain the visibility we needed. Their attention to detail, data-driven approach, and creative strategies significantly boosted our online presence. We're very impressed with the results. Thank you for helping us grow our business!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-md-12 col-12 slider-card-col">
                        <div className="slider-card">
                          <p>
                            "Acculer Media truly transformed our online presence. The website they built for us is user-friendly, visually stunning, and fully functional on all devices. We saw a noticeable increase in traffic and engagement. Thank you to the team for your expertise and dedication!

"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-md-12 col-12 slider-card-col">
                        <div className="slider-card">
                          <p>
                            "The branding work by Acculer Media was outstanding! They understood our vision and helped us create a strong, memorable identity that resonates with our target audience. Our brand now feels more aligned with our mission. Huge thanks to the team for their incredible work!

"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial  end*/}
    </div>
  );
};

export default Home;
