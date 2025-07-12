import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Footer from '../Pages/Footer';
import { Outlet, NavLink, Link } from 'react-router-dom';
import ScrollToTop from '../Pages/ScrollToTop';
import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';


const RootLayout = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      {/* Top Navbar */}
      <div className={`navbar-container ${isScrolled ? 'navbar-white' : 'navbar-black'}`}>
        <div className="container-fluid navbar-container-fluid">
          <div className="row">
            <div className="col-lg-2 col-12">
              <Link to='/'>
                <img
                  src={isScrolled ? logoBlack : logoWhite}
                  alt="Acculer Logo"
                  className="navbar-logo"
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </Link>


            </div>
            <div className="col-lg-10 col-12">
              <div className="menu-comtainer">
                <div className="menu-list">
                  <ul className='menu-list-ul'>
                    <li>
                      <NavLink to="/" className={({ isActive }) => isActive ? 'lg-mt-3-list active' : 'lg-mt-3-list'}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us" className={({ isActive }) => isActive ? 'lg-mt-3-list active' : 'lg-mt-3-list'}>About Us</NavLink>
                    </li>
                    <li
                      className='lg-mt-3-list service-hover-wrapper'
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      ref={dropdownRef}
                    >
                      Service <RiArrowDropDownLine className='mt-1' />
                      {isHovered && (
                        <div className="service-drop-down-menu">
                          <div className="drop-down-list">
                            <div className="container-fluid">
                              <div className="row">
                                {/* Branding */}
                                <div className="col-lg-4 col-12">
                                  <h5 className="drop-title ms-4 mt-1 ">Branding</h5>
                                  <ul>
                                    <li className='ms-2 mt-2 desktop-menu'>
                                      <Link
                                        to="/brand-strategy"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />      Brand Strategy
                                      </Link>
                                    </li>

                                    <li className='ms-2 mt-2 desktop-menu'>
                                      <Link
                                        to="/Logo-Design"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />      Logo Design
                                      </Link>
                                    </li>

                                    <li className='ms-2 mt-2 desktop-menu'>
                                      <Link
                                        to="/Broucher-Design"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />        Brochure Design
                                      </Link>
                                    </li>

                                    <li className='ms-2 mt-2 desktop-menu'>
                                      <Link
                                        to="/collatral-design"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />        Collatral Design
                                      </Link>
                                    </li>

                                    <li className='ms-2 mt-2 desktop-menu'>
                                      <Link
                                        to="/video-and-adfilms"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />          Video & Ad Film
                                      </Link>
                                    </li>





                                  </ul>
                                </div>
                                {/* Web Development */}
                                <div className="col-lg-4 col-12 ">
                                  <h5 className="drop-title ms-4 mt-2">Web Development</h5>
                                  <ul>
                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Ui-Ux-Designer"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />          UI/UX Designer
                                      </Link>
                                    </li>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Web-Development"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />           Web Development
                                      </Link>
                                    </li>



                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Web-application"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />           Web Application
                                      </Link>
                                    </li>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/E-Commerce"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />          E-Commerce Solution
                                      </Link>
                                    </li>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Wordpress"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />         Wordpress
                                      </Link>
                                    </li>



                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Web-Hosting-Maintenance"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />          Web Hosting & Maintenance
                                      </Link>
                                    </li>



                                  </ul>
                                </div>
                                {/* Digital Marketing */}
                                <div className="col-lg-4 col-12">
                                  <h5 className="drop-title ms-4 mt-1">Digital Marketing</h5>
                                  <ul>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/social-media-managment"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />        Social Media Management
                                      </Link>
                                    </li>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Search-Engine-Optimization"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />       Search Engine Optimization
                                      </Link>
                                    </li>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Search-Engine-Marketing"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />       Search Engine Marketing
                                      </Link>
                                    </li>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Lead-Generation"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />      Lead Generation
                                      </Link>
                                    </li>


                                    <li className='ms-3 mt-2  desktop-menu'>
                                      <Link
                                        to="/Google-Ads"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />      Google Ads
                                      </Link>
                                    </li>

                                    <li className='ms-3 mt-2 desktop-menu'>
                                      <Link
                                        to="/Google-My-Business"
                                        className='text-dark'
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => setIsHovered(false)}
                                      >
                                        <SlArrowRight />     Google My Business
                                      </Link>
                                    </li>



                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li className='lg-mt-3-list'>
                      <NavLink to="/Our-Works" className={({ isActive }) => isActive ? 'lg-mt-3-list active' : 'lg-mt-3-list'}>Our Works</NavLink>
                    </li>
                    <li className='lg-mt-3-list'>
                      <NavLink to="/blogs" className={({ isActive }) => isActive ? 'lg-mt-3-list active' : 'lg-mt-3-list'}>Blogs</NavLink>
                    </li>
                    <li className='lg-mt-3-list'>
                      <NavLink to="/clients" className={({ isActive }) => isActive ? 'lg-mt-3-list active' : 'lg-mt-3-list'}>Clients</NavLink>
                    </li>
                    <li className='lg-mt-3-list'>
                      <NavLink to="/contact" className={({ isActive }) => isActive ? 'lg-mt-3-list active' : 'lg-mt-3-list'}>Contact Us</NavLink>
                    </li>
                  </ul>

                  {/* Offcanvas Toggle */}
                  <button
                    className="btn d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <GiHamburgerMenu className='GiHamburgerMenu' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Acculer</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className='mobile-view-menu-list mt-3' data-bs-dismiss="offcanvas"><NavLink to="/">Home</NavLink></li>
            <li className='mobile-view-menu-list mt-3' data-bs-dismiss="offcanvas"><NavLink to="/about-us">About Us</NavLink></li>
            <li className="mobile-view-menu-list mt-3 mb-3">
              <div className="d-flex justify-content-between align-items-center" onClick={() => setIsServiceOpen(!isServiceOpen)} style={{ cursor: 'pointer' }}>
                <span>Service</span>
                {isServiceOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              <div className={`service-dropdown-content ${isServiceOpen ? 'show' : ''}`}>
                <ul className="ps-3">
                  <li className='mt-2'><strong>Branding</strong></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/brand-strategy">› Brand Strategy</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/brand-strategy">› Brand Strategy</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Logo-Design">› Logo Design</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Broucher-Design">› Brochure Design</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/collatral-design">› Collatral Design</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/video-and-adfilms">› Video & Ad Film</NavLink></li>
                  <li className='mt-3'><strong>Web Development</strong></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Ui-Ux-Designer">› UI/UX Designer</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Web-Development">› Web Development</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Web-application">› Web Application</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/E-Commerce">› E-Commerce</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/wordpress">› WordPress</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Web-Hosting-Maintenance">› Web Hosting & Maintenance</NavLink></li>
                  <li className='mt-3'><strong>Digital Marketing</strong></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/social-media-managment">› Social Media Management</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Search-Engine-Optimization">› SEO</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Search-Engine-Marketing">› Search Engine Marketing</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Lead-Generation">› Lead Generation</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Google-Ads">› Google Ads</NavLink></li>
                  <li data-bs-dismiss="offcanvas"><NavLink to="/Google-My-Business">› Google My Business</NavLink></li>
                </ul>
              </div>
            </li>
            <li className='mobile-view-menu-list mt-3' data-bs-dismiss="offcanvas"><NavLink to="/Our-Works">Work</NavLink></li>
            <li className='mobile-view-menu-list mt-3' data-bs-dismiss="offcanvas"><NavLink to="/clients">Clients</NavLink></li>
            <li className='mobile-view-menu-list mt-3' data-bs-dismiss="offcanvas"><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>

      <main>
        <ScrollToTop />
        <Outlet />
      </main>

      <Footer />
       <div class="rating-container">
        <a href="https://www.google.com/maps/place/Acculer+Media+Technology+India+Pvt+Ltd/@11.0255657,76.9343549,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8595ce8123937:0x6f146daa0cd9164c!8m2!3d11.0255604!4d76.9369298!16s%2Fg%2F11ldrcchh_?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"> <svg class="google-g" viewBox="0 0 24 24">
            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#fbbc04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg></a>
       
        <br />
        <span class="rating-text">4.9</span>
        <span class="star">★</span>
    </div>
    </div>
  );
};

export default RootLayout;
