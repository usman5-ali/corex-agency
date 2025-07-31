
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
const About = () => {
  const [tags, setTags] = useState([]);
  const [hero, setHero] = useState([]);
  useEffect(() => {
    fetch("https://agency-laravel.wpcorex.com/tags/get-all")
        .then((res) => res.json())
        .then((data) => {
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "about");
          setTags(aboutTags);

          // Set <meta name="keywords">
          const keywords = aboutTags.map(tag => tag.tag_name).join(", ");
          let meta = document.querySelector("meta[name='keywords']");
          if (!meta) {
            meta = document.createElement("meta");
            meta.name = "keywords";
            document.head.appendChild(meta);
          }
          meta.setAttribute("content", keywords);
        })
        .catch((err) => console.error("Failed to fetch tags:", err));
  }, []);
  useEffect(() => {
    fetch("https://agency-laravel.wpcorex.com/heros/get-all")
        .then((res) => res.json())
        .then((data) => {
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "about");
          setHero(aboutTags);
          console.log('data',aboutTags)
          // Set <meta name="keywords">
        })
        .catch((err) => console.error("Failed to fetch tags:", err));
  }, []);
  return (
    <div>
      <Header />
      <main>
        {/* hero-section */}
        <section id="about" className="container-fluid about-section">
          <div className="container about-section-title my-3 py-5 text-start">
            {hero.length > 0 && (
            <h2 className="pt-4 heading-col">{hero[0].title}</h2>
            )}
            {hero.length > 0 && (
            <p className="fs-5">
              {hero[0]?.description.replace(/<[^>]*>/g, '')}
            </p>
            )}
          </div>
        </section>
        {/* hero-section-end */}
        {/* who-we-are- section start now */}
        <section className="who-we-are-section py-5 text-start">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {/* Left Text Column */}
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-4 heading-col"> Meet COREX</h2>
                <p className="text-muted fs-5">
                  <b>COREX</b> is a team of creative thinkers, problem-solvers,
                  and passionate developers who believe in the power of design
                  and technology to transform businesses. We are not just a web
                  agency — we are your <b>digital growth partners.</b>
                  With a strong focus on quality, innovation, and results, we
                  work closely with our clients to understand their vision and
                  turn it into a meaningful digital experience. Our team blends
                  <b>creative design, clean code,</b> and{" "}
                  <b>strategic thinking</b> to deliver websites that drive real
                  business value. We’re driven by a simple goal:
                  <b>
                    {" "}
                    To help brands stand out online and succeed in the digital
                    world.
                  </b>
                </p>
              </div>
              {/* Right Image Column */}
              <div className="col-lg-5 col-md-12 text-center">
                <div className="position-relative">
                  {/* Organic image shape using SVG mask */}
                  <svg
                    viewBox="0 0 500 500"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <clipPath id="blobShape">
                        <path d="M421.5,309.5Q406,369,353,400Q300,431,238.5,443.5Q177,456,130.5,408Q84,360,61.5,300Q39,240,64,180.5Q89,121,139.5,77Q190,33,250.5,53.5Q311,74,363,106.5Q415,139,428,189.5Q441,240,421.5,309.5Z" />
                      </clipPath>
                    </defs>
                    <image
                      xlinkHref="images/about/about-1.jpg"
                      width="100%"
                      height="100%"
                      clipPath="url(#blobShape)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* who-we-are-section-end */}
        <section className="Our-approach-section py-5 text-start">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {/* Left Text Column */}
              <div className="col-lg-5 col-md-12 text-center">
                <div className="position-relative">
                  {/* Organic image shape using SVG mask */}
                  <svg
                    viewBox="0 0 500 500"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <clipPath id="blobShape">
                        <path d="M421.5,309.5Q406,369,353,400Q300,431,238.5,443.5Q177,456,130.5,408Q84,360,61.5,300Q39,240,64,180.5Q89,121,139.5,77Q190,33,250.5,53.5Q311,74,363,106.5Q415,139,428,189.5Q441,240,421.5,309.5Z" />
                      </clipPath>
                    </defs>
                    <image
                      xlinkHref="images/about/about-2.jpg"
                      width="100%"
                      height="100%"
                      clipPath="url(#blobShape)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>
              </div>
              {/* Right Image Column */}
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-4 heading-col">Our Approach</h2>
                <p className="text-muted fs-5">
                  At <b>COREX</b>, our approach is centered around understanding
                  your business, your goals, and your audience — because every
                  successful digital solution begins with a solid foundation. We
                  don’t believe in one-size-fits-all websites. Instead, we
                  follow a strategic, collaborative, and result-oriented process
                  that ensures every project is purposeful, user-focused, and
                  future-ready.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* what-we-do-section */}
        <section className="about-section py-5 text-start">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {/* Left Column: Text */}
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-4 heading-col">What We Do</h2>
                <p className="text-muted fs-5">
                  At COREX, we help businesses grow by crafting custom digital
                  experiences that blend creativity with performance.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill  me-2" />
                    <b>Business Website Design:</b> Modern, user-focused designs
                    that elevate your brand’s presence online.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2" />
                    <b>Custom Web Development:</b> Fast, secure, and scalable
                    websites tailored to your business needs.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2" />
                    <b>Responsive Layouts:</b> Optimized for mobile, tablet, and
                    desktop for a seamless user experience.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2" />
                    <b>Performance &amp; SEO Optimization:</b> Built to load
                    fast and rank higher on search engines.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2" />
                    <b>Maintenance &amp; Support:</b> We keep your website
                    running smoothly with ongoing care and updates.
                  </li>
                </ul>
              </div>
              {/* Right Column: SVG Image */}
              <div className="col-lg-5 col-md-12 text-center">
                <div className="position-relative">
                  {/* Organic image shape using SVG mask */}
                  <svg
                    viewBox="0 0 500 500"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <clipPath id="blobShape">
                        <path d="M421.5,309.5Q406,369,353,400Q300,431,238.5,443.5Q177,456,130.5,408Q84,360,61.5,300Q39,240,64,180.5Q89,121,139.5,77Q190,33,250.5,53.5Q311,74,363,106.5Q415,139,428,189.5Q441,240,421.5,309.5Z" />
                      </clipPath>
                    </defs>
                    <image
                      xlinkHref="images/about/about-3.jpeg"
                      width="100%"
                      height="100%"
                      clipPath="url(#blobShape)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* what-we-us-section-end */}
        <section className="what-we-do-section py-5 text-start">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {/* Left Column: Text */}
              <div className="col-lg-5 col-md-12 text-center">
                <div className="position-relative">
                  {/* Organic image shape using SVG mask */}
                  <svg
                    viewBox="0 0 500 500"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <clipPath id="blobShape">
                        <path d="M421.5,309.5Q406,369,353,400Q300,431,238.5,443.5Q177,456,130.5,408Q84,360,61.5,300Q39,240,64,180.5Q89,121,139.5,77Q190,33,250.5,53.5Q311,74,363,106.5Q415,139,428,189.5Q441,240,421.5,309.5Z" />
                      </clipPath>
                    </defs>
                    <image
                      xlinkHref="images/about/about-4.webp"
                      width="100%"
                      height="100%"
                      clipPath="url(#blobShape)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>
              </div>
              {/* Right Column: SVG Image */}
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-4 heading-col">Why Choose Us?</h2>
                <p className="text-muted fs-5">
                  At COREX, we go beyond just building websites — we create
                  tailored digital solutions designed to elevate your business.
                  Our focus is on combining creative design with solid
                  development to deliver high-performing, user-friendly
                  experiences.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2" />
                    <b>Client-Focused Approach:</b> We listen, plan, and build
                    around your unique business goals and brand identity.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2" />
                    <b>Custom Solutions:</b> No templates here — every site is
                    crafted from scratch to fit your needs and audience.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2" />
                    <b>Skilled Team:</b> Our designers and developers bring
                    experience, creativity, and precision to every project.
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill  me-2" />
                    <b>Reliable Performance:</b> We focus on speed, SEO, and
                    scalability — ensuring your website performs at its best.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
