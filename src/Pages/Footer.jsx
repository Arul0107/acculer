import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

// Company information data
const companyInfo = {
  name: "Acculer Media Pvt. Ltd.",
  year: new Date().getFullYear(),
  privacyPolicyLink: "/privacy-policy" // Link to privacy policy (not used in this snippet but kept for context)
};

// Social media links data
const socialLinks = {
  facebook: "https://www.facebook.com/acculermedia",
  instagram: "https://www.instagram.com/acculermedia",
  linkedin: "https://www.linkedin.com/company/acculermedia",
  youtube: "https://www.youtube.com/@acculermedia",
  whatsapp: "https://wa.me/919360623765" // WhatsApp link (not used in this snippet but kept for context)
};

// Contact information data
const contactInfo = {
  phone: "+91 93606 23765 | +91 90428 71124",
  email: "info@acculermedia.com",
  address: `Aruna Avanthika,3rd Floor, NSR Rd,<br /> Janaki Nagar, Saibaba Colony,<br /> Coimbatore-641011,  Tamil Nadu. `
};

// Footer navigation links data, categorized by title
const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Works', href: '/Our-Works' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Contact', href: '/contact' },
      { label: 'Knowledge Center', href: '#' },
      { label: 'Happy Clients', href: '/clients' },

    ]
  },
  {
    title: 'Branding',
    links: [
      { label: 'Logo Design', href: '/Logo-Design' },
      { label: 'Brochure Design', href: '/Broucher-Design' },
      { label: 'Brand Strategy', href: '/brand-strategy' },
      { label: 'Collatral design', href: '/collatral-design' },
      { label: 'Video & Ad film', href: '/video-and-adfilms' },
    ]
  },
  {
    title: 'Digital Marketing',
    links: [
      { label: 'Search Engine Optimization', href: '/Search-Engine-Optimization' },
      { label: 'Search Engine Marketing', href: '/Search-Engine-Marketing' },
      { label: 'Social Media Management', href: '/social-media-managment' },
      { label: 'Lead Generation', href: '/Lead-Generation' },
      { label: 'Google Ads', href: '/Google-Ads' },
      { label: 'Google My Business', href: '/Google-My-Business' }
    ]
  },
  {
    title: 'Web Design & Development',
    links: [
      { label: 'Website Design (UI & UX)', href: '/Ui-Ux-Designer' },
      { label: 'Website Development', href: '/Web-Development' },
      { label: 'Web Application', href: '/Web-application' },
      { label: 'Web Hosting', href: '/Web-Hosting-Maintenance' },

      { label: 'Ecommerce Solutions', href: '/E-Commerce' }
    ]
  }
];

// Footer functional component
const Footer = () => {
  return (
    <>
      {/* Inline style block for CSS. This is placed here to ensure it's loaded with the component. */}
      <style>
        {`
          /* General container styles for consistent width */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Call to Action (CTA) section at the top of the footer */
          .footer-cta {
            background: linear-gradient(135deg, #1e439e 0%, #1e439e 100%); /* Blue gradient background */
            padding: 10px 0;
            border-top: 1px solid #3a4651; /* Dark border at the top */
          }

          /* Content within the CTA section, uses flexbox for alignment */
          .cta-content {
            display: flex;
            justify-content: space-between; /* Spaces items evenly */
            align-items: center; /* Vertically centers items */
            flex-wrap: wrap; /* Allows items to wrap on smaller screens */
          }

          /* Heading style for CTA text */
          .cta-text h2 {
            color: #ffffff; /* White text color */
            font-size: 2.5rem; /* Large font size */
            font-weight: 600; /* Semi-bold font weight */
            margin: 0; /* No default margin */
          }

          /* Button style for CTA */
          .cta-button {
            background: transparent; /* Transparent background */
            border: 2px solid #ffffff; /* White border */
            color: #ffffff; /* White text color */
            padding: 12px 30px; /* Padding inside the button */
            border-radius: 25px; /* Rounded corners */
            font-size: 1rem; /* Changed to rem for responsiveness */
            font-weight: 500; /* Medium font weight */
            cursor: pointer; /* Pointer cursor on hover */
            transition: all 0.3s ease; /* Smooth transition for hover effects */
          }

          /* Hover effect for CTA button */
          .cta-button:hover {
            background: #ffffff; /* White background on hover */
            color: #2a3441; /* Dark text color on hover */
          }

          /* Main footer section styles */
          .footer-main {
            background-color: #000000; /* Black background */
            padding: 60px 0 40px; /* Padding for the main footer content */
          }

          /* Grid layout for footer columns */
          .footer-grid {
            max-width: 1550px; /* Changed from fixed width to max-width for responsiveness */
            margin: 0 auto; /* Center the grid */
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid columns */
            gap: 40px; /* Gap between grid items */
          }

          /* Heading style for each footer column */
          .footer-column h3 {
            color: #ffffff; /* White text color */
            font-size: 1.2rem; /* Font size */
            font-weight: 600; /* Semi-bold font weight */
            margin-bottom: 25px; /* Margin below the heading */
          }

          /* List styles within footer columns */
          .footer-column ul {
            list-style: none; /* Remove default list bullets */
            padding: 0; /* No default padding */
          }

          /* List item styles within footer columns */
          .footer-column ul li {
            margin-bottom: 12px; /* Margin below each list item */
            justify-content: flex-start; /* Aligns content to the start */
          }

          /* Link styles within footer columns */
          .footer-column ul li a {
            color:rgb(194, 188, 188); /* Light grey text color */
            text-decoration: none; /* Remove underline */
            font-size: 0.875rem; /* Changed from px to rem (14px) */
            line-height: 1.6; /* Line height for readability */
            transition: color 0.3s ease; /* Smooth transition for hover effect */
          }

          /* Hover effect for footer links */
          .footer-column ul li a:hover {
            color: #ffffff; /* White text color on hover */
          }

          /* Contact information section styles */
          .contact-info {
            color:rgb(194, 188, 188); /* Light grey text color */
            font-size: 0.875rem; /* Changed from px to rem (14px) */
            line-height: 1.8; /* Line height for readability */
          }

          /* Paragraph styles within contact info */
          .contact-info p {
            margin-bottom: 15px; /* Margin below each paragraph */
            display: flex; /* Uses flexbox for icon and text alignment */
            align-items: flex-start; /* Vertically aligns items to the start for multiline addresses */
            gap: 8px; /* Gap between icon and text */
          }

          /* Social icons container */
          .social-icons {
            display: flex; /* Uses flexbox for icon alignment */
            gap: 15px; /* Gap between social icons */
            margin-top: 25px; /* Margin above social icons */
          }

          /* Individual social icon link styles */
          .social-icons a {
            display: inline-flex; /* Inline flex for centering icon */
            align-items: center; /* Vertically centers icon */
            justify-content: center; /* Horizontally centers icon */
            width: 35px; /* Fixed width */
            height: 35px; /* Fixed height */
            background: rgba(148, 169, 201, 0.1); /* Semi-transparent background */
            border-radius: 50%; /* Makes the background circular */
            color: #94a9c9; /* Light blue text color */
            text-decoration: none; /* Remove underline */
            font-size: 1rem; /* Changed from px to rem (16px) */
            transition: all 0.3s ease; /* Smooth transition for hover effect */
          }

          /* Hover effect for social icons */
          .social-icons a:hover {
            background: #94a9c9; /* Light blue background on hover */
            color: #2a3441; /* Dark text color on hover */
          }

          /* Footer bottom section (copyright) */
          .footer-bottom {
            background-color: #000000; /* Black background */
            border-top: 1px solid #3a4651; /* Dark border at the top */
            padding: 20px 0; /* Padding for the bottom section */
          }

          /* Content within the footer bottom section */
          .footer-bottom-content {
            display: flex; /* Uses flexbox for alignment */
            align-items: center; /* Vertically centers items */
            text-align: center; /* Centers text */
            justify-content: center; /* Horizontally centers content */
          }

          /* Paragraph style for copyright text */
          .footer-bottom p {
            color: #94a9c9; /* Light blue text color */
            font-size: 0.8125rem; /* Changed from px to rem (13px) */
            margin: 0; /* No default margin */
          }

          /* Link style within copyright text (e.g., privacy policy) */
          .footer-bottom a {
            color: #94a9c9; /* Light blue text color */
            text-decoration: none; /* Remove underline */
            margin-left: 10px; /* Margin to the left of the link */
          }

          /* Hover effect for links in the footer bottom */
          .footer-bottom a:hover {
            color: #ffffff; /* White text color on hover */
          }

          /* Media queries for responsiveness */
          @media (max-width: 768px) {
            /* Adjust CTA content for smaller screens */
            .cta-content {
              flex-direction: column; /* Stacks items vertically */
              text-align: center; /* Centers text */
              gap: 30px; /* Increased gap between stacked items */
            }

            /* Adjust CTA heading font size for smaller screens */
            .cta-text h2 {
              font-size: 2rem; /* Smaller font size */
            }

            /* Adjust footer grid for smaller screens to a single column */
            .footer-grid {
              grid-template-columns: 1fr; /* Single column layout */
              gap: 30px; /* Adjusted gap */
              width: auto; /* Allow width to be fluid */
              padding: 0 20px; /* Add horizontal padding */
            }

            /* Center align text in footer columns for smaller screens */
            .footer-column {
              text-align: center;
            }

            /* Center align social icons for smaller screens */
            .social-icons {
              justify-content: center;
            }
          }

          /* Additional breakpoint for even smaller screens (e.g., mobile) */
          @media (max-width: 480px) {
            .cta-text h2 {
              font-size: 1.8rem; /* Even smaller font size for very small screens */
            }
            .cta-button {
              padding: 10px 25px; /* Slightly smaller button padding */
              font-size: 0.875rem; /* Changed to rem (14px) */
            }
            .footer-main {
              padding: 40px 0 30px; /* Reduced padding for main footer */
            }
            .footer-column h3 {
              font-size: 1.1rem; /* Slightly smaller heading font size */
            }
            .footer-column ul li a,
            .contact-info,
            .footer-bottom p {
              font-size: 0.75rem; /* Changed to rem (12px) */
            }
            .social-icons a {
              width: 30px; /* Smaller social icon size */
              height: 30px;
              font-size: 0.875rem; /* Changed to rem (14px) */
            }
          }
        `}
      </style>

      {/* Top CTA Section */}
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Let's Make Something Great Together</h2>
            </div>
            <div className="cta-action">
              <button className="cta-button">Get Quote</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="footer-main">
        {/* Using container-fluid to allow the grid to expand, then grid itself will handle max-width if needed */}
        <div className="container-fluid">
          <div className="footer-grid">

            {/* Loop through dynamic footer sections (Quick Links, Branding, etc.) */}
            {footerLinks.map((section, index) => (
              <div className="footer-column" key={index}>
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      {/* Using a standard anchor tag as Link from react-router-dom was imported but not used, and not necessary for external/placeholder links */}
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info Column */}
            <div className="footer-column">
              <h3>{companyInfo.name}</h3>
              <div className="contact-info">
                {/* Using dangerouslySetInnerHTML to render the <br /> tag */}
                <p dangerouslySetInnerHTML={{ __html: contactInfo.address }}></p>
                <p><FaPhone /> {contactInfo.phone}</p>
                <p><FaEnvelope /> {contactInfo.email}</p>

                {/* Social Media Icons */}
                <div className="social-icons">
                  {/* Using socialLinks data for hrefs */}
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  {/* Twitter and Pinterest were in Fa imports but not in socialLinks, so removed them or added placeholders */}
                  {/* <a href="#"><FaTwitter /></a> */}
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                  {/* <a href="#"><FaPinterest /></a> */}
                  {/* WhatsApp was in socialLinks but not in Fa imports used in this section, so added it */}
                  <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
       
      </footer>

      {/* Footer Bottom Section (Copyright) */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              © {companyInfo.year} {companyInfo.name}. All rights reserved.
              {/* Privacy Policy Link - using a standard anchor tag */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;