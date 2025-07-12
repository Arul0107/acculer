import React from 'react'

import Banner from '../assets/contact-page/contact.png'

const Contact = () => {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-12" style={{ padding: '0px' }}>
              <div className="banner-image">
                <img src={Banner} alt="" className='banner-img banner-img-client' style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                <div className="banner-content">
                  <h1 className='fw-bold fs-1'>Contact Us</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-12">
            <section className="contact-form-section">
              <div className="contact-form-container">
                <h2 className="contact-title">contact us</h2>
                <p className="contact-subtitle">We'd love to hear from you!</p>

                <form className="contact-form" method="post" action="https://enquiry.acculermedia.com/index.php">
                  <input type="text" placeholder="Name" className="form-input" />
                  <div className="form-row">
                    <input type="email" placeholder="Email" className="form-input" />
                    <input type="text" placeholder="Phone Number" className="form-input" />
                  </div>
                  <textarea placeholder="Message" className="form-textarea"></textarea>
                  <button type="submit" className="form-button">Send Message</button>
                </form>
              </div>
            </section>
          </div>




          <div className="col-md-12 col-lg-6 col-12">
            <div className="address-li">
              <h2>Reach us at</h2>
              <h2>Acculer Media Technology India Pvt Ltd</h2>
              <p>3rd Floor, Aruna Avanthika, NSR Rd, Janaki Nagar, Saibaba Colony, Coimbatore, Tamil Nadu 641011</p>
              <p>+91 93606 23765 | +91 90428 71124</p>
            </div>

            <iframe
              title="Acculer Media Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38549.83892453353!2d76.93693!3d11.02556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8595ce8123937%3A0x6f146daa0cd9164c!2sAcculer%20Media%20Technology%20India%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1750757105340!5m2!1sen!2sin"
              width="100%"
              height="60%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>


        </div>
      </div>

      <br />
      <br />


    </div>
  )
}

export default Contact
