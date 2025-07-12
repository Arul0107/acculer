import React from 'react'
import Banner from '../assets/contact-page/banner.png'
import Blog1 from '../assets/Blogs/blog1.png'
import Blog2 from '../assets/Blogs/blog2.png'
import Blog3 from '../assets/Blogs/blog3.png'
import Blog4 from '../assets/Blogs/blog4.png'
import Blog5 from '../assets/Blogs/blog5.png'
const Blogs = () => {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-12" style={{ padding: '0px' }}>
              <div className="banner-image">
                <img src={Banner} alt="" style={{ width: '100%' }} loading="lazy" className='banner-img' />
                <div className="banner-content">
                  <h1 className='fw-bold fs-1'>Latest post</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section>
        <div className="container">
          <div className="row">
            <center>
              <h2 className='fw-bold fs-1 mb-5 '>Our Blog's</h2>
            </center>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Blog1} alt="post" className="blog-main-image" loading="lazy" />
                  <span className="blog-badge">POPULAR</span>
                </div>

                <div className="blog-content">


                  <h3 className="blog-title">The Impact of Website Structure on Google Rankings</h3>
                  {/* <p className="blog-description">
                    Meta Ads can be a powerful tool for small businesses — offering targeted visibility, budget flexibility, and measurable results. While there's a learning curve and risk of rising costs, starting small and optimizing campaigns can lead to strong returns. Done right, Meta Ads can level the playing field against bigger brands and drive meaningful growth.
                  </p> */}

                  <div className="blog-author">
                    {/* <img src={AuthorImage} alt="author" className="author-img" /> */}
                    <div className="author-info">
                      <h5>Acculer Media </h5>
                      <span>1.2k followers</span>
                    </div>
                  </div>

                  <button className="read-more-btn">
                    <a href="https://www.linkedin.com/pulse/meta-ads-smart-investment-your-business-acculermedia-3qnhf/?trackingId=hi7YlnERIc%2BwkcP6fY5KFQ%3D%3D" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>
                      Read More
                    </a>
                  </button>                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-4 col-12">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Blog2} alt="post" className="blog-main-image" loading="lazy" />
                  <span className="blog-badge">POPULAR</span>
                </div>

                <div className="blog-content">
                  <div className="blog-tags">

                  </div>

                  <h3 className="blog-title">PPC vs. Organic SEO: Which One Works Best?</h3>
                  {/* <p className="blog-description">
                   Businesses want more people to visit their websites, but should they pay for ads (PPC) or use SEO to rank higher on Google? PPC gives fast results, but it costs money. SEO takes time, but it helps in the long run. Which one is best for your business?

Or should you use both?
                  </p> */}

                  <div className="blog-author">
                    {/* <img src={AuthorImage} alt="author" className="author-img" /> */}
                    <div className="author-info">
                      <h5>Acculer Media </h5>
                      <span>1.2k followers</span>
                    </div>
                  </div>

                  <button className="read-more-btn">
                    <a href="https://www.linkedin.com/pulse/ppc-vs-organic-seo-which-one-works-best-acculermedia-czzjc/?trackingId=T28K9nUWYsZolRHcTOLTOA%3D%3D" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>
                      Read More
                    </a>
                  </button>                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-4 col-12">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Blog3} alt="post" className="blog-main-image" loading="lazy" />
                  <span className="blog-badge">POPULAR</span>
                </div>

                <div className="blog-content">
                  <div className="blog-tags">

                  </div>

                  <h3 className="blog-title">𝐎𝐯𝐞𝐫𝐜𝐨𝐦𝐢𝐧𝐠 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐂𝐡𝐚𝐥𝐥𝐞𝐧𝐠𝐞𝐬 𝐢𝐧 𝟐𝟎𝟐𝟓: 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐞𝐬 𝐟𝐨𝐫 𝐆𝐫𝐨𝐰𝐭𝐡 </h3>
                  {/* <p className="blog-description">
                   Growing a business in 2025 is tough. There is strong competition, customer needs keep changing, and new technology is growing fast. This blog talks about big problems like entering new markets, using new ideas, making a strong brand, and keeping customers happy. It also gives easy ways to solve them. Businesses can grow by staying flexible, using smart tools, and focusing on customers.

🚀 𝐖𝐚𝐧𝐭 𝐭𝐨 𝐦𝐚𝐤𝐞 𝐲𝐨𝐮𝐫 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐛𝐞𝐭𝐭𝐞𝐫? Read the full blog now and learn how to grow and succeed!

                  </p> */}

                  <div className="blog-author">
                    {/* <img src={AuthorImage} alt="author" className="author-img" /> */}
                    <div className="author-info">
                      <h5>Acculer Media </h5>
                      <span>1.2k followers</span>
                    </div>
                  </div>

                  <button className="read-more-btn">
                    <a href="https://www.linkedin.com/pulse/overcoming-business-development-challenges-2025-strategies-vxgac/?trackingId=IIjClwekYCOfv2HRux3Pdg%3D%3D" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>
                      Read More
                    </a>
                  </button>                </div>
              </div>
            </div>

          </div>
        </div>

        {/* row2 */}
        <div className="container mt-5">
          <div className="row">

            <div className="col-md-6 col-lg-4 col-12">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Blog4} alt="post" className="blog-main-image" loading="lazy" />
                  <span className="blog-badge">POPULAR</span>
                </div>

                <div className="blog-content">
                  <div className="blog-tags">

                  </div>

                  <h3 className="blog-title">The Impact of Website Structure on Google Rankings</h3>


                  <div className="blog-author">
                    {/* <img src={AuthorImage} alt="author" className="author-img" /> */}
                    <div className="author-info">
                      <h5>Acculer Media </h5>
                      <span>1.2k followers</span>
                    </div>
                  </div>

                  <button className="read-more-btn">
                    <a href="https://www.linkedin.com/pulse/impact-website-structure-google-rankings-acculermedia-otd9c/?trackingId=Q8pcVS%2BBOMk2KwPOarHFWQ%3D%3D" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>
                      Read More
                    </a>
                  </button>                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-4 col-12">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={Blog5} alt="post" className="blog-main-image" loading="lazy" />
                  <span className="blog-badge">POPULAR</span>
                </div>

                <div className="blog-content">
                  <div className="blog-tags">

                  </div>

                  <h3 className="blog-title">𝐌𝐚𝐤𝐞 𝐘𝐨𝐮𝐫 𝐁𝐫𝐚𝐧𝐝 𝐒𝐭𝐚𝐧𝐝 𝐎𝐮𝐭: 𝐁𝐮𝐢𝐥𝐝 𝐓𝐫𝐮𝐬𝐭 & 𝐂𝐨𝐧𝐧𝐞𝐜𝐭 𝐰𝐢𝐭𝐡 𝐂𝐮𝐬𝐭𝐨𝐦𝐞𝐫𝐬
                  </h3>


                  <div className="blog-author">
                    {/* <img src={AuthorImage} alt="author" className="author-img" /> */}
                    <div className="author-info">
                      <h5>Acculer Media </h5>
                      <span>1.2k followers</span>
                    </div>
                  </div>

                  <button className="read-more-btn">
                    <a href="https://www.linkedin.com/pulse/building-brand-identity-stands-out-real-digital-world-acculermedia-ilshc/?trackingId=ngYogWiQi0Rq8U%2BKr%2B%2F5Qg%3D%3D" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>
                      Read More
                    </a>
                  </button>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>

      <br />
      <br />
    </div>
  )
}

export default Blogs
