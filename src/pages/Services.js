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
        <section
          id="about"
          className="container-fluid about-section text-start"
        >
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
