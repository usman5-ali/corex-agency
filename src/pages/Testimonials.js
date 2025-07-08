import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="about" className="container-fluid about-section text-start">
          <div className="container about-section-title my-3 py-5">
            <h2 className="pt-4">What Our Clients Say</h2>
            <p className="fs-5">
              At COREX, client satisfaction is at the heart of everything we do.
              We’ve had the privilege of working with businesses across various
              industries — helping them achieve their digital goals with tailored
              design and development solutions. Here’s what some of our clients have to say about working with us.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">
          <div className="container section-title text-center">
            <h2>Testimonials</h2>
            <p>
              Hear what our satisfied clients say about our creative solutions,
              results-driven work, and professional service.
            </p>
          </div>

          <div className="container">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {[
                {
                  name: "Robert Johnson",
                  title: "Marketing Director",
                  img: "images/person/testi-1.webp",
                  stars: 5
                },
                {
                  name: "Lisa Williams",
                  title: "Product Manager",
                  img: "images/person/testi-2.webp",
                  stars: 5
                },
                {
                  name: "Emma Parker",
                  title: "UX Designer",
                  img: "images/person/testi-3.webp",
                  stars: 5
                },
                {
                  name: "Michael Brown",
                  title: "Developer",
                  img: "images/person/testi-4.webp",
                  stars: 4.5
                },
                {
                  name: "Sophia Allen",
                  title: "HR Manager",
                  img: "images/person/testi-5.webp",
                  stars: 4
                },
                {
                  name: "Daniel Evans",
                  title: "Designer",
                  img: "images/person/testi-6.webp",
                  stars: 3.5
                },
                {
                  name: "Amelia Ross",
                  title: "Business Analyst",
                  img: "images/person/testi-7.webp",
                  stars: 4
                },
                {
                  name: "Benjamin Lee",
                  title: "SEO Specialist",
                  img: "images/person/testi-8.webp",
                  stars: 3
                },
                {
                  name: "Olivia Clark",
                  title: "Project Manager",
                  img: "images/person/testi-9.webp",
                  stars: 3.5
                }
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>
                        We’ve seen a strong and consistent increase in leads,
                        engagement, and overall online visibility. Highly recommended
                        to any business!
                      </p>
                    </div>
                    <div className="testimonial-profile">
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => {
                          if (testimonial.stars >= i + 1) {
                            return <i key={i} className="bi bi-star-fill" />;
                          } else if (testimonial.stars > i && testimonial.stars < i + 1) {
                            return <i key={i} className="bi bi-star-half" />;
                          } else {
                            return <i key={i} className="bi bi-star" />;
                          }
                        })}
                      </div>
                      <div className="profile-info">
                        <img src={testimonial.img} alt={testimonial.name} />
                        <div>
                          <h3>{testimonial.name}</h3>
                          <h4>{testimonial.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Final Section */}
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

export default Testimonial;
