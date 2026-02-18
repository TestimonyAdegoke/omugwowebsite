"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section id="about" className="about-root">
        <div className="container">
          <div className="grid-layout">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="image-side"
            >
              <div className="image-frame">
                <img
                  src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65605594d043ba000fa6d982_optimized_1080_c1080x1080-0x0"
                  alt="Dr. Megor Ikuenobe"
                  className="about-img"
                />
              </div>
              {/* Decorative blob behind image */}
              <div className="image-blob"></div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="content-side"
            >
              <span className="section-label">-WELCOME TO OMUGWO ACADEMY-</span>
              <h2 className="section-title">
                Nurturing Parenthood- <br />
                <span className="highlight">A Personal Journey, A Global Mission</span>
              </h2>
              <div className="divider"></div>

              <div className="text-content">
                <p>
                  <strong>Megor Ikuenobe</strong>, a distinguished medical professional and early childhood development (ECD) specialist, is on a mission to provide every child in Africa with a promising start through comprehensive, data-driven interventions.
                </p>
                <p>
                  With over a decade of expertise, she has led groundbreaking multi-sectoral ECD initiatives, focusing on underserved children and their mothers across Africa. As the visionary founder of the Lead Oak Women and Children Foundation, Megor has been a relentless advocate for education, healthcare, and empowerment in rural communities.
                </p>
                <p>
                  Her commitment to ECD extends to her brainchild, Omugwo Academy, a pioneering platform offering essential online resources, including courses, workshops, and guidance tailored for the African demographic.
                </p>

                {showMore && (
                  <div className="more-content">
                    <p>
                      Megor's proficiency spans the entire spectrum of ECD, maternal, and child health, evident in her impactful contributions at both grassroots and international levels.
                    </p>
                    <p>
                      Recognized as a 2017 Mandela Washington Fellow and acknowledged among the top 20 female leaders in Nigeria by the Swedish Embassy in 2019, Megor's influence in the ECD domain is significant.
                    </p>
                  </div>
                )}

                <button onClick={() => setShowMore(!showMore)} className="read-more-btn">
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="author-box">
                <h4 className="author-name">Dr. Megor Ikuenobe</h4>
                <p className="author-title">Founder, Omugwo Academy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-root {
          background: #fff;
          padding: 80px 0;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .image-side {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .image-frame {
          position: relative;
          width: 100%;
          max-width: 420px;
          border-radius: 200px 200px 200px 200px;
          overflow: hidden;
          z-index: 10;
        }

        .about-img {
          width: 100%;
          display: block;
        }

        .image-blob {
          position: absolute;
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f0d4ff 0%, #e0c0f0 100%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(50px);
          opacity: 0.5;
          z-index: 0;
        }

        .content-side {
          padding-left: 20px;
        }

        .section-label {
          display: inline-block;
          color: #c9a0dc;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1.5px;
          font-size: 0.7rem;
          margin-bottom: 15px;
          font-family: 'Montserrat', sans-serif;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .highlight {
          color: #c9a0dc;
          font-style: italic;
        }

        .divider {
          width: 60px;
          height: 4px;
          background: #ffb6c1;
          border-radius: 2px;
          margin-bottom: 25px;
        }

        .text-content p {
          color: #555;
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .text-content strong {
          color: #601e80;
          font-weight: 700;
        }

        .read-more-btn {
          background: none;
          border: none;
          color: #c9a0dc;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          margin-bottom: 25px;
          display: block;
        }

        .read-more-btn:hover {
          color: #601e80;
        }

        .author-box {
          background: #f8f0fc;
          padding: 20px 30px;
          border-left: 4px solid #601e80;
          border-radius: 0 15px 15px 0;
          display: inline-block;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 3px;
          font-family: 'Montserrat', sans-serif;
        }

        .author-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #c9a0dc;
        }

        @media (max-width: 1024px) {
          .about-root {
            padding: 60px 0;
          }

          .grid-layout {
            gap: 40px;
          }

          .section-title {
            font-size: 1.7rem;
          }

          .image-frame {
            max-width: 350px;
          }
        }

        @media (max-width: 768px) {
          .about-root {
            padding: 50px 0;
          }

          .grid-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .content-side {
            padding-left: 0;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .image-frame {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
};

export default About;
