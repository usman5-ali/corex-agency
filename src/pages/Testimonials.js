import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const [tags, setTags] = useState([]);
  const [hero, setHero] = useState([]);
  useEffect(() => {
    fetch("https://agency-laravel.wpcorex.com/tags/get-all")
        .then((res) => res.json())
        .then((data) => {
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "testimonial");
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
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "testimonial");
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
        {/* Hero Section */}
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

export default Testimonial;
