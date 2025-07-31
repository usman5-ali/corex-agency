import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css"; // Make sure this is also included

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Helmet } from "react-helmet-async";
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
  const [tags, setTags] = useState([]);
  const [hero, setHero] = useState([]);
  useEffect(() => {
    fetch("https://agency-laravel.wpcorex.com/tags/get-all")
        .then((res) => res.json())
        .then((data) => {
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "home");
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
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [blogs, setBlogs] = useState([]);

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
  useEffect(() => {
    fetch("http://127.0.0.1:8000/heros/get-all")
        .then((res) => res.json())
        .then((data) => {
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "home");
          setHero(aboutTags);
          console.log('data',aboutTags)
          // Set <meta name="keywords">
        })
        .catch((err) => console.error("Failed to fetch tags:", err));
  }, []);

  const blogApiFunc = async () => {
    let apiUrl = "https://agency-laravel.wpcorex.com/blogs/all";
    let response = await fetch(apiUrl);
    let finalResponse = await response.json();
    console.log("Fetched services:", finalResponse);
    setBlogs(finalResponse);
  };

  useEffect(() => {
    blogApiFunc();
  }, []);
  const [service, setService] = useState([]);
  const [faqs, setFaq] = useState([]);
  const [error, setError] = useState(null);
const [activeIndex, setActiveIndex] = useState(null);
  const servicesApi = async () => {
    const servicesApiURL =
      "https://agency-laravel.wpcorex.com/services/get-all";

    const midResponse = await fetch(servicesApiURL);
    const finalResponse = await midResponse.json();
    setService(finalResponse);
    console.log("Fetched services:", finalResponse);
  };
const faqsApi = async () => {
    const faqsApiURL =
      "https://agency-laravel.wpcorex.com/faqs/get-all";

    const midResponse = await fetch(faqsApiURL);
    const finalResponse = await midResponse.json();
    setFaq(finalResponse);
    console.log("Fetched faqsApi:", finalResponse);
  };
  useEffect(() => {
    servicesApi();
    faqsApi();
  }, []);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
                  <div className="container about-section-title my-3 py-5 text-start">
                    {hero.length > 0 && (
                    <h2 className="pt-4 heading-col">{hero[0].title}</h2>
                    )}
                    {hero.length > 0 && (
                    <p className="fs-5">
                      <div dangerouslySetInnerHTML={{ __html: hero[0]?.description }} />
                    </p>
                    )}
                  </div>
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
           {hero.length > 0 && (
            <p class="text-white">
            
              <div dangerouslySetInnerHTML={{ __html: hero[0]?.about }} />
              
            </p>
            )}
          </div>
        </div>
        {/* hero-section-end */}
        {/* sevice-section */}
        {/* Services Section */}

        <section id="services" className="services section  pb-5">
          {/* Section Title */}
          <div
            className="container section-title text-center"
            data-aos="fade-up"
          >
            <h2>Services</h2>
            <p>
              Comprehensive, scalable, and innovative services built to elevate
              your business.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {Array.isArray(service) && service.length > 0 ? (
              <div className="row justify-content-center g-5">
                {service.map((item, index) => (
                  <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-delay={100}
                    key={index}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        <img
                          src={`https://agency-laravel.wpcorex.com/storage/${item.image}`}
                          className="card-img-top"
                          alt={item.title}
                        />
                      </div>
                      <div className="service-content text-start">
                        <h3 className="truncate-multiline">{item.title}</h3>
                        <p className="truncate-3-lines ">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <img
                  src="/images/not-found.webp" // 🔁 Replace this path with your fallback image
                  alt="No Services Available"
                  style={{ maxWidth: "400px", width: "100%" }}
                />
                <p className="mt-3">No services available at the moment.</p>
              </div>
            )}
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

        {/* Blog Section Start */}
        <section id="blog-section text-start">
          <div className="container section-title ">
            <h2 className="heading-col ">Clients Success Spotlights</h2>
            <p>
              Hear what our satisfied clients say about our creative solutions,
              results-driven work, and professional service.
            </p>
          </div>
          <div className="container">
            {blogs.length === 0 ? (
              <div className="text-center">
                <img
                  src="/images/not-found-webp" // 🔁 Replace with your actual image path
                  alt="No Blogs Available"
                  style={{ maxWidth: "400px", width: "100%" }}
                />
                <p className="mt-3">No blog posts available at the moment.</p>
              </div>
            ) : (
              <div className="row g-4">
                {blogs.slice(0, 3).map((item, index) => (
                  <div key={index} className="col-md-4">
                    <div
                      className="card-custom card-light text-start"
                      id={`blog-card-${index + 1}`}
                    >
                      <div className="arrow-icon">
                        <i className="bi bi-arrow-up-right" />
                      </div>
                      <h4 className="card-title mb-3 truncate-multiline">
                        {item.title}
                      </h4>
                      <p className="card-text truncate-3-lines ">
                        {item.description}
                      </p>
                      <p className="card-text">
                        {item.created_at
                          ? item.created_at.split("T")[0]
                          : "No date"}
                      </p>
                      <img
                        src={`https://agency-laravel.wpcorex.com/storage/${item.image}`}
                        alt={item.title || "Blog Image"}
                        className="card-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Blog Section End */}
        {/* Faq Section */}
        <section id="faq" className="faq section  text-start mt-5">
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
                   {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
              key={faq.id}
            >
              <div className="faq-header" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <i className="bi bi-chevron-down faq-toggle" />
              </div>
              <div
                className="faq-content"
                style={{ display: activeIndex === index ? "block" : "none" }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
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
