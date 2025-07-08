import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from '../components/footer/Footer';

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
                      <div className="service-content">
                        <h3>{item.title}</h3>
                        {/* <h3>{item.id}</h3> */}

                        <p>{item.description}</p>
                        <a href="#" className="service-link">
                          <span>Learn More</span>
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              <div
                className="col-md-6"
                data-aos="fade-right"
                data-aos-delay={100}>
                <div className="service-item text-start">
                  <div className="service-icon">
                    <i className="bi bi-code-slash" />
                  </div>
                  <div className="service-content">
                    <h3>Custom Web Development</h3>
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
                    <h3>Mobile App Solutions</h3>
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
                    <h3>UI/UX Design</h3>
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
                    <h3>Digital Marketing</h3>
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
        <div className="container-fluid section-title-intro">
        <div className="container section-title  text-center shadow-sm py-3-3">
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
      <Footer/>
    </div>
  );
};

export default Services;
