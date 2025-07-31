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
        <section id="about" className="container-fluid about-section text-start">
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
            <div className="row justify-content-center g-5">
              {Array.isArray(service) &&
                service.map((item, index) => (
                  <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-delay={100}
                    key={index}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        {/* <i className="bi bi-code-slash" /> */}
                        <img
                          src={`https://agency-laravel.wpcorex.com/storage/${item.image}`}
                          className="card-img-top"
                          alt={item.title}
                        />
                      </div>
                      <div className="service-content text-start">
                        <h3 className="truncate-multiline">{item.title}</h3>
                        {/* <h3>{item.id}</h3> */}

                        <p className="truncate-3-lines ">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              {/* End Service Item */}
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
