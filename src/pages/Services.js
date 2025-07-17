import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import axios from "axios";
const Services = () => {
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
            <h2 className="pt-4">Our Services</h2>
            <p className="fs-5">
              At <b>COREX</b>, we offer a complete suite of web design and
              development services crafted to empower businesses online. Whether
              you’re launching a new brand, revamping your existing site, or
              building a powerful web application — we’ve got you covered. We
              combine <b>creative design, clean code, and strategic thinking</b>{" "}
              to deliver solutions that are fast, responsive, and built for
              growth.
            </p>
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
            <h2 className="text-white">
              Your Vision, Our Mission – Let’s Achieve It.
            </h2>
            <p className="text-white">
              At Corex, we are a full-service creative agency focused on
              delivering tailored solutions in branding, website design, and
              digital marketing. Our mission is to help businesses enhance their
              online presence and reach their audience effectively. With a wide
              range of professional services, we empower you to build a unique
              and results-driven digital identity.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
