import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Portfolio = () => {
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

  const filters = [
    { label: "All Work", key: "*" },
    { label: "Web Design", key: "filter-web" },
    { label: "Graphics", key: "filter-graphics" },
    { label: "Motion", key: "filter-motion" },
    { label: "Branding", key: "filter-brand" },
  ];

  const portfolioItems = [
    {
      image: "images/portfolio/port-1.jpg",
      title: "Modern Dashboard Interface",
      desc: "User-centric admin panel with real-time analytics and responsive design.",
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
  ];

  return (
    <div>
      <Header />

      <main>
        {/* hero-section */}
        <section id="about" className="container-fluid about-section text-start">
          <div className="container about-section-title my-3 py-5">
            <h2 className="pt-4">Our Work Speaks for Itself</h2>
            <p className="fs-5">
             At <b>COREX</b>, we specialize in crafting stunning, high-performance digital experiences that drive results. From sleek websites to powerful web applications, our team blends <b>design excellence, technical expertise, and business insight</b> to bring your vision to life. Whether you're starting fresh or scaling up, we deliver <b>responsive, user-focused, and growth-ready</b> solutions tailored to your goals.


            </p>
          </div>
        </section>
        {/* hero-section-end */}
        {/* Section Title */}
        <section id="portfolio" className="portfolio section pb-5">
          <div className="container section-title text-center" data-aos="fade-up">
            <h2>Portfolio</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="isotope-layout">
              {/* Filter Tabs */}
              <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay={200}>
                <ul className="portfolio-filters isotope-filters">
                  {filters.map((filter) => (
                    <li
                      key={filter.key}
                      className={filterKey === filter.key ? "filter-active" : ""}
                      onClick={() => setFilterKey(filter.key)}
                    >
                      {filter.label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portfolio Grid */}
              <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay={300}>
                {portfolioItems.map((item, index) => (
                  <div key={index} className={`col-lg-6 col-md-6 portfolio-item isotope-item ${item.filter}`}>
                    <div className="portfolio-card">
                      <div className="portfolio-image">
                        <img src={item.image} className="img-fluid" alt={item.title} loading="lazy" />
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
            </div>
          </div>
        </section>

        {/* Bottom Content */}
         <div className="container-fluid section-title-intro">
        <div className="container section-title  text-center shadow-sm py-5">
          <h2 className="text-white">Your Vision, Our Mission – Let’s Achieve It.</h2>
          <p className="text-white">
            At Corex, we are a full-service creative agency focused on
            delivering tailored solutions in branding, website design, and
            digital marketing. Our mission is to help businesses enhance their
            online presence and reach their audience effectively. With a wide
            range of professional services, we empower you to build a unique and
            results-driven digital identity.
          </p>
        </div>
          </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
