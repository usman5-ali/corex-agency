import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Services = () => {

  const [tags, setTags] = useState([]);
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch("https://agency-laravel.wpcorex.com/tags/get-all")
        .then((res) => res.json())
        .then((data) => {
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "service");
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
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "service");
          setHero(aboutTags);
          console.log('data',aboutTags)
          // Set <meta name="keywords">
        })
        .catch((err) => console.error("Failed to fetch tags:", err));
  }, []);
  const [service, setService] = useState([]);
  const [error, setError] = useState(null);

  const servicesApi = async () => {
    const servicesApiURL =
      "https://agency-laravel.wpcorex.com/services/get-all";

    const midResponse = await fetch(servicesApiURL);
    const finalResponse = await midResponse.json();
    setService(finalResponse);
    console.log("Fetched services:", finalResponse);
  };

  useEffect(() => {
    servicesApi();
  }, []);

  return (
    <div>
      <Header />

      <main>
        {/* hero-section */}
        <section
          id="about"
          className="container-fluid about-section text-start"
        >
          <div className="container about-section-title my-3 py-5">
            {hero.length > 0 && (
              <h2 className="pt-4">{hero[0].title}</h2>
            )}
            {hero.length > 0 && (
            <p className="fs-5">
              
              {hero[0]?.description.replace(/<[^>]*>/g, '')}
            </p>
            )}
          </div>
        </section>
        {/* hero-section-end */}
        {/* Services Section */}

        <section className="py-5 bg-white">
          <div className="container">
            {/* Title */}
            <div
              className="container section-title text-center"
              data-aos="fade-up"
            >
              <h2>Services</h2>
              <p>
                Comprehensive, scalable, and innovative services built to
                elevate your business.
              </p>
            </div>
            {/* Services Grid */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {Array.isArray(service) &&
                service.map((item, index) => (
                  <div className="col mb-5" key={index}>
                    <div className="text-center px-3 mx-4">
                      {/* Responsive image container */}
                      <div
                        className="d-flex justify-content-center align-items-center mx-auto mb-3 mt-2"
                        style={{
                          width: "100px",
                          height: "100px",
                          overflow: "hidden",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src={`https://agency-laravel.wpcorex.com/storage/${item.image}`}
                          className="img-fluid"
                          alt={item.title}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      {/* Title with limit */}
                      <h4 className="fw-bold text-truncate" title={item.title}>
                        {item.title.length > 40
                          ? item.title.slice(0, 40) + "..."
                          : item.title}
                      </h4>

                      {/* Description with limit */}
                      <p className="fs-6">
                        {item.description.length > 120
                          ? item.description.slice(0, 120) + "..."
                          : item.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* /Services Section */}

        <div className="container-fluid section-title-intro">
          <div className="container section-title  text-center shadow-sm py-3-3">
            {hero.length > 0 && (
          <h2 className="text-white">{hero[0].vtitle}</h2>
          )}
          {hero.length > 0 && (
          <p className="text-white" dangerouslySetInnerHTML={{ __html: hero[0]?.vdescription }}/>

          
          )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
