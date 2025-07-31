import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const ContactPage = () => {
  const [tags, setTags] = useState([]);
  const [hero, setHero] = useState([]);
  useEffect(() => {
    fetch("https://agency-laravel.wpcorex.com/tags/get-all")
        .then((res) => res.json())
        .then((data) => {
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "contact");
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
          const aboutTags = data.filter(tag => tag.page_name.toLowerCase() === "contact");
          setHero(aboutTags);
          console.log('data',aboutTags)
          // Set <meta name="keywords">
        })
        .catch((err) => console.error("Failed to fetch tags:", err));
  }, []);
  const [activeIndex, setActiveIndex] = useState(0); // Default: first accordion open

  const faqs = [
    {
      question: 'What services does your agency provide?',
      answer:
        'We specialize in web design and development, branding, UI/UX design, SEO, digital marketing, and custom software solutions tailored to your business goals.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'The timeline depends on the complexity of the project. A typical business website takes around 3–5 weeks, while custom platforms may take longer. We always provide clear timelines before starting.',
    },
    {
      question: 'Do you offer SEO services?',
      answer:
        'Yes! We offer on-page and off-page SEO, keyword research, content optimization, and technical SEO to help your website rank better and attract more organic traffic.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer:
        'Absolutely. All our websites are fully responsive and optimized to provide an excellent user experience across all devices — smartphones, tablets, and desktops.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, we offer post-launch support plans including updates, bug fixes, content changes, backups, and performance monitoring to keep your site running smoothly.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, we offer post-launch support plans including updates, bug fixes, content changes, backups, and performance monitoring to keep your site running smoothly.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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

        {/* FAQ Section */}
        <section id="faq" className="faq section mt-5 text-start">
           <div class="container section-title text-center" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>
              From services to support, find quick answers to help you move
              forward confidently.
            </p>
          </div>
          <div className="container py-5" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-5">
              <div className="col-lg-6" data-aos="zoom-out" data-aos-delay={200}>
                <div className="faq-contact-card">
                  <div className="card-icon">
                    <i className="bi bi-question-circle" />
                  </div>
                  <div className="card-content">
                    <h3>Still Have Questions?</h3>
                    <p>
                      We're here to help! If you have any questions about our
                      services, pricing, or how we can support your business, feel
                      free to reach out. Our team is available via email, live chat,
                      or phone to assist you promptly and professionally.
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
                  {faqs.map((faq, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <div className={`faq-item ${isActive ? 'faq-active' : ''}`} key={index}>
                        <div className="faq-header" onClick={() => handleToggle(index)}>
                          <h3>{faq.question}</h3>
                          <i
                            className={`bi ${
                              isActive ? 'bi-chevron-up' : 'bi-chevron-down'
                            } faq-toggle`}
                          />
                        </div>
                        <div
                          className="faq-content"
                          style={{
                            maxHeight: isActive ? '200px' : '0px',
                            opacity: isActive ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.4s ease',
                          }}
                        >
                          <p style={{ margin: 0, paddingTop: isActive ? '10px' : '0' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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

export default ContactPage;
