import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css"; // Make sure this is also included

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Fragment } from "react/jsx-runtime";
import Header from "./header/Header";
import Footer from "./footer/Footer";

<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Responsive Header</title>
  {/* Bootstrap CSS & Icons */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  {/* In <head> */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
  />
  {/* swiper css */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
  />
  <link rel="stylesheet" href="style.css" />
  {/* Header */}

  {/* Bootstrap JS Bundle */}
  {/* Swiper JS */}
</>;

const Home = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  useEffect(() => {
    GLightbox({ selector: ".glightbox" });
  }, []);

  useEffect(() => {
    const faqHeaders = document.querySelectorAll(".faq-header");

    faqHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const item = header.parentElement;

        // Close all other items
        document.querySelectorAll(".faq-item").forEach((faq) => {
          if (faq !== item) {
            faq.classList.remove("faq-active");
          }
        });

        // Toggle current item
        item.classList.toggle("faq-active");
      });
    });

    // Clean up listeners on unmount
    return () => {
      faqHeaders.forEach((header) => {
        header.replaceWith(header.cloneNode(true)); // Quick way to remove listeners
      });
    };
  }, []);
  return (
    <div>
      <Header />
      <main>
        {/* hero-section */}
        <section
          id="hero"
          className="container-fluid hero p-0  mt-4 text-start"
        >
          <section className="hero-section ">
            <div className="container">
              <div className="row align-items-center gy-5">
                {/* Left Column */}
                <div className="col-lg-6">
                  <h1 className="fw-bold display-5 mb-4 heading-col">
                    Let’s Work
                    <br />
                    Together to Create
                    <br />
                    Wonders with Us
                  </h1>
                  <p className="text-muted fs-5 mb-4">
                    A visionary creative, crafting captivating wonders through
                    art and design. Adept at turning imagination into
                    extraordinary reality.
                  </p>
                  <div className="d-flex gap-3 mb-4">
                    <a href="#" className="btn btn-purple  rounded-pill py-2">
                      Let’s Talk
                    </a>
                    <a
                      href="#"
                      className="btn btn-outline-dark rounded-pill px-4 py-2"
                    >
                      Start Project
                    </a>
                  </div>
                  <div className="d-flex gap-5">
                    <div>
                      <h1 className="fw-bold mb-0 heading-col">15+</h1>
                      <p className="mb-0 text-muted small">
                        years
                        <br />
                        experience
                      </p>
                    </div>
                    <div>
                      <h1 className="fw-bold mb-0 heading-col">26K</h1>
                      <p className="mb-0 text-muted small">
                        projects
                        <br />
                        success
                      </p>
                    </div>
                    <div>
                      <h1 className="fw-bold mb-0 heading-col">98%</h1>
                      <p className="mb-0 text-muted small">
                        satisfied
                        <br />
                        rate
                      </p>
                    </div>
                  </div>
                </div>
                {/* Right Column */}
                <div className="col-lg-6 position-relative">
                  <div className="d-flex">
                    {/* Badges on Left */}
                    {/* Image */}
                    <div className="ms-auto">
                      <img
                        src="images/hero.png"
                        alt="Hero"
                        className="hero-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div class="container-fluid section-title-intro ">
        <div className="container section-title text-center text-start">
          <h2 className="heading-col text-white">COREX</h2>
          <p class="text-white">
            <b>COREX</b> is a creative web design and development agency
            committed to empowering businesses with digital solutions that drive
            growth. We specialize in crafting custom websites that are not only
            visually stunning but also{" "}
            <b>optimized for performance, user experience, and conversions.</b>
            With a focus on <b>modern design, responsive layouts, </b> and{" "}
            <b>scalable development,</b> we help companies establish a strong
            online presence that aligns with their brand and goals. Whether you
            need a corporate website, an eCommerce platform, or a tailored web
            application — <b>COREX</b> delivers innovative, results-driven
            solutions.
          </p>
        </div>
        </div>
        {/* hero-section-end */}
        {/* sevice-section */}
        {/* Services Section */}
        <section id="services" className="services section  pb-5">
          {/* Section Title */}
          <div className="container section-title text-center">
            <h2 className="heading-col">Services</h2>
            <p>
              Comprehensive, scalable, and innovative services built to elevate
              your business.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-md-6 ">
                <div className="service-item text-start">
                  <div className="service-icon">
                    <i className="bi bi-code-slash" />
                  </div>
                  <div className="service-content">
                    <h3 className="heading-col">Custom Web Development</h3>
                    <p>
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Nulla quis lorem ut libero malesuada feugiat.
                      Curabitur non nulla sit amet nisl tempus convallis. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a href="#" className="service-link">
                      <span>Learn More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <div className="service-item text-start">
                  <div className="service-icon">
                    <i className="bi bi-phone-fill" />
                  </div>
                  <div className="service-content">
                    <h3 className="heading-col">Mobile App Solutions</h3>
                    <p>
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Vivamus magna justo, lacinia eget
                      consectetur sed. Quisque velit nisi, pretium ut lacinia
                      in, elementum id enim. Donec rutrum congue leo eget
                      malesuada.
                    </p>
                    <a href="#" className="service-link">
                      <span>Learn More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="service-item text-start">
                  <div className="service-icon">
                    <i className="bi bi-palette2" />
                  </div>
                  <div className="service-content">
                    <h3 className="heading-col">UI/UX Design</h3>
                    <p>
                      Pellentesque in ipsum id orci porta dapibus. Proin eget
                      tortor risus. Vivamus suscipit tortor eget felis porttitor
                      volutpat. Vestibulum ac diam sit amet quam vehicula
                      elementum sed sit amet dui.
                    </p>
                    <a href="#" className="service-link">
                      <span>Learn More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="service-item text-start">
                  <div className="service-icon">
                    <i className="bi bi-bar-chart-line" />
                  </div>
                  <div className="service-content">
                    <h3 className="heading-col">Digital Marketing</h3>
                    <p>
                      Donec rutrum congue leo eget malesuada. Mauris blandit
                      aliquet elit, eget tincidunt nibh pulvinar a. Nulla
                      porttitor accumsan tincidunt. Curabitur aliquet quam id
                      dui posuere blandit.
                    </p>
                    <a href="#" className="service-link">
                      <span>Learn More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}
        {/* Portfolio Section */}

        <section id="portfolio" className="portfolio section mb-5">
          <div
            className="container section-title text-center"
            data-aos="fade-up"
          >
            <h2>Portfolio</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="isotope-layout">
              {/* Filter Tabs */}
              <div
                className="portfolio-filters-container"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <ul className="portfolio-filters isotope-filters">
                  {[
                    { label: "All Work", key: "*" },
                    { label: "Web Design", key: "filter-web" },
                    { label: "Graphics", key: "filter-graphics" },
                    { label: "Motion", key: "filter-motion" },
                    { label: "Branding", key: "filter-brand" },
                  ].map((filter) => (
                    <li
                      key={filter.key}
                      className={
                        filterKey === filter.key ? "filter-active" : ""
                      }
                      onClick={() => setFilterKey(filter.key)}
                    >
                      {filter.label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portfolio Grid */}
              <div
                className="row g-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                {[
                  {
                    image: "images/portfolio/port-1.jpg",
                    title: "Modern Dashboard Interface",
                    desc: "User-centric admin panel with real-time analytics and responsive design",
                    category: "Web Design",
                    filter: "filter-web",
                    gallery: "web",
                  },
                  {
                    image: "images/portfolio/port-2.jpg",
                    title: "Creative Brand Identity",
                    desc: "A visually compelling identity system crafted with modern design elements.",
                    category: "Graphics",
                    filter: "filter-graphics",
                    gallery: "graphics",
                  },
                  {
                    image: "images/portfolio/port3.png",
                    title: "Product Animation Reel",
                    desc: "Dynamic showcase of animated visuals highlighting product features and experience.",
                    category: "Motion",
                    filter: "filter-motion",
                    gallery: "motion",
                  },
                  {
                    image: "images/portfolio/port-4.jpg",
                    title: "Luxury Brand Package",
                    desc: "Elegant branding solution for premium businesses with timeless design.",
                    category: "Branding",
                    filter: "filter-brand",
                    gallery: "brand",
                  },
                  {
                    image: "images/portfolio/port-5.png",
                    title: "E-commerce Platform",
                    desc: "A scalable online shopping experience with responsive design.",
                    category: "Web Design",
                    filter: "filter-web",
                    gallery: "web",
                  },
                  {
                    image: "images/portfolio/port-6.jpg",
                    title: "Digital Art Collection",
                    desc: "Curated digital artworks showcasing creativity and unique storytelling.",
                    category: "Graphics",
                    filter: "filter-graphics",
                    gallery: "graphics",
                  },
                ]
                  // Only show first 4
                  .slice(0, 4)
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`col-lg-6 col-md-6 portfolio-item isotope-item ${item.filter}`}
                    >
                      <div className="portfolio-card">
                        <div className="portfolio-image">
                          <img
                            src={item.image}
                            className="img-fluid"
                            alt={item.title}
                            loading="lazy"
                          />
                          <div className="portfolio-overlay">
                            <div className="portfolio-actions">
                              <a
                                href={item.image}
                                className="glightbox preview-link"
                                data-gallery={`portfolio-gallery-${item.gallery}`}
                              >
                                <i className="bi bi-eye" />
                              </a>
                              <a className="details-link">
                                <i className="bi bi-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-content text-start">
                          <span className="category">{item.category}</span>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* View More Button */}
              <div className="text-center mt-4">
                <Link
                  to="/portfolio"
                  className="btn view-btn rounded-pill px-4 py-2"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* portfolio section end now */}
        {/* testimonials-section */}
        <section id="testimonials" className="testimonials section">
          <div className="container section-title text-center">
            <h2 className="heading-col">Testimonials</h2>
            <p>
              Hear what our satisfied clients say about our creative solutions,
              results-driven work, and professional service.
            </p>
          </div>

          <div className="container">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>
                        We’ve seen a strong and consistent increase in leads,
                        engagement, and overall online visibility. Highly
                        recommended to any business!
                      </p>
                    </div>
                    <div className="testimonial-profile">
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i
                          className={
                            index % 3 === 0
                              ? "bi bi-star"
                              : index % 3 === 1
                              ? "bi bi-star-half"
                              : "bi bi-star-fill"
                          }
                        />
                      </div>
                      <div className="profile-info">
                        <img
                          src={`images/person/testi-${(index % 9) + 1}.webp`}
                          alt={`Client ${index + 1}`}
                        />
                        <div>
                          <h3 className="heading-col">Client {index + 1}</h3>
                          <h4>Position</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* testimonial section end now */}
        {/* Faq Section */}
        <section id="faq" className="faq section  text-start">
          <div class="container section-title text-center" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>
              From services to support, find quick answers to help you move
              forward confidently.
            </p>
          </div>
          <div
            className="container py-5"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="row gy-5">
              <div
                className="col-lg-6"
                data-aos="zoom-out"
                data-aos-delay={200}
              >
                <div className="faq-contact-card">
                  <div className="card-icon">
                    <i className="bi bi-question-circle" />
                  </div>
                  <div className="card-content">
                    <h3 className="heading-col">Still Have Questions?</h3>
                    <p>
                      We're here to help! If you have any questions about our
                      services, pricing, or how we can support your business,
                      feel free to reach out. Our team is available via email,
                      live chat, or phone to assist you promptly and
                      professionally.
                    </p>
                    <div className="contact-options">
                      <a href="#" className="contact-option">
                        <i className="bi bi-envelope" />
                        <span>Email Support</span>
                      </a>
                      <a href="#" className="contact-option">
                        <i className="bi bi-chat-dots" />
                        <span>Live Chat</span>
                      </a>
                      <a href="#" className="contact-option">
                        <i className="bi bi-telephone" />
                        <span>Call Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="faq-accordion">
                  <div className="faq-item faq-active">
                    <div className="faq-header">
                      <h3>What services does your agency provide?</h3>
                      <i className="bi bi-chevron-down faq-toggle" />
                    </div>
                    <div className="faq-content">
                      <p>
                        We specialize in web design and development, branding,
                        UI/UX design, SEO, digital marketing, and custom
                        software solutions tailored to your business goals.
                      </p>
                    </div>
                  </div>
                  {/* End FAQ Item*/}
                  <div
                    className="faq-item"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <div className="faq-header">
                      <h3>How long does it take to build a website?</h3>
                      <i className="bi bi-chevron-down faq-toggle" />
                    </div>
                    <div className="faq-content">
                      <p>
                        The timeline depends on the complexity of the project. A
                        typical business website takes around 3–5 weeks, while
                        custom platforms may take longer. We always provide
                        clear timelines before starting.
                      </p>
                    </div>
                  </div>
                  {/* End FAQ Item*/}
                  <div className="faq-item">
                    <div className="faq-header">
                      <h3>Do you offer SEO services?</h3>
                      <i className="bi bi-chevron-down faq-toggle" />
                    </div>
                    <div className="faq-content">
                      <p>
                        Yes! We offer on-page and off-page SEO, keyword
                        research, content optimization, and technical SEO to
                        help your website rank better and attract more organic
                        traffic.
                      </p>
                    </div>
                  </div>
                  {/* End FAQ Item*/}
                  <div className="faq-item">
                    <div className="faq-header">
                      <h3>Will my website be mobile-friendly?</h3>
                      <i className="bi bi-chevron-down faq-toggle" />
                    </div>
                    <div className="faq-content">
                      <p>
                        Absolutely. All our websites are fully responsive and
                        optimized to provide an excellent user experience across
                        all devices — smartphones, tablets, and desktops.
                      </p>
                    </div>
                  </div>
                  {/* End FAQ Item*/}
                  <div className="faq-item">
                    <div className="faq-header">
                      <h3>Do you provide ongoing support and maintenance?</h3>
                      <i className="bi bi-chevron-down faq-toggle" />
                    </div>
                    <div className="faq-content">
                      <p>
                        Yes, we offer post-launch support plans including
                        updates, bug fixes, content changes, backups, and
                        performance monitoring to keep your site running
                        smoothly.
                      </p>
                    </div>
                  </div>
                  {/* End FAQ Item*/}
                  {/* End FAQ Item */}
                  <div className="faq-item">
                    <div className="faq-header">
                      <h3>
                        What makes COREX different from other web agencies?
                      </h3>
                      <i className="bi bi-chevron-down faq-toggle" />
                    </div>
                    <div className="faq-content">
                      <p>
                        At COREX, we blend creative design with technical
                        expertise to deliver fully customized, results-driven
                        solutions. Unlike cookie-cutter agencies, we take the
                        time to understand your business goals, ensuring every
                        project is tailored for performance, usability, and
                        conversion. We also offer end-to-end services — from
                        branding and UX to development and marketing.
                      </p>
                    </div>
                  </div>
                  {/* End FAQ Item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq Section */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
