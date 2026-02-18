"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Send } from "lucide-react";

const TrustedAlly = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section id="trusted" className="ally-root">
        <div className="container">
          <div className="grid-layout">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="content-col"
            >
              <span className="section-label">-ABOUT OMUGWO-</span>
              <h2 className="section-title">
                Your Trusted &<br />Professional <span className="highlight">Ally</span>
              </h2>

              {/* What is Omugwo Card */}
              <div className="info-card">
                <h3 className="card-heading">What is Omugwo?</h3>
                <p className="card-text">
                  Omugwo, a time-honored Nigerian postnatal care practice deeply ingrained in tradition, focuses on providing holistic support for new mothers, infants, and their families. It is practiced all over Nigeria but with the eastern Nigeria term of Omugwo being the most popular.
                </p>
              </div>

              {/* Why Omugwo Academy Card */}
              <div className="info-card purple-border">
                <h3 className="card-heading">Why Omugwo Academy?</h3>
                <p className="card-text">
                  Enter Omugwo Academy – a singular knowledge center committed to empowering new moms, new dads, and families with evidence-based information, personalized guidance, and an expansive support network.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="mission-vision-grid">
                <div className="mv-card">
                  <div className="mv-icon">
                    <Target size={24} />
                  </div>
                  <h4 className="mv-title">MISSION</h4>
                  <p className="mv-text">
                    Empowering families with comprehensive knowledge and skills about childbirth and early parenthood by blending time-honored prenatal care practices with evidence-based research.
                  </p>
                </div>

                <div className="mv-card">
                  <div className="mv-icon">
                    <Eye size={24} />
                  </div>
                  <h4 className="mv-title">VISION</h4>
                  <p className="mv-text">
                    To be the leading resource platform for prenatal care education and support, acknowledged for our unwavering commitment to excellence and cultural inclusivity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image & Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="image-col"
            >
              <div className="image-wrapper">
                <img
                  src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65aca3be3c79a9000fd41808_optimized_1280"
                  alt="Mother and baby"
                  className="ally-img"
                />
              </div>

              {/* Newsletter signup */}
              <div className="newsletter-box">
                <p className="newsletter-langs">
                  Omugwo | ojojo omo | Jego | umaan | Jëkk ndëpp | Ngeqemva
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                  />
                  <button type="submit" className="submit-btn">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ally-root {
          background: #fff;
          padding: 80px 0;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
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
          margin-bottom: 30px;
          font-family: 'Montserrat', sans-serif;
        }

        .highlight {
          color: #c9a0dc;
        }

        .info-card {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border-left: 4px solid #c9a0dc;
          margin-bottom: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
        }

        .info-card.purple-border {
          border-left-color: #601e80;
        }

        .card-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          font-family: 'Montserrat', sans-serif;
        }

        .card-text {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
        }

        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        .mv-card {
          background: #f8f0fc;
          padding: 25px 20px;
          border-radius: 15px;
          text-align: center;
        }

        .mv-icon {
          width: 50px;
          height: 50px;
          background: #fff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #601e80;
          margin: 0 auto 15px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }

        .mv-title {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #1a1a1a;
          margin-bottom: 10px;
          font-family: 'Montserrat', sans-serif;
        }

        .mv-text {
          font-size: 0.8rem;
          color: #666;
          line-height: 1.5;
        }

        .image-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .image-wrapper {
          width: 100%;
          max-width: 400px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .ally-img {
          width: 100%;
          display: block;
        }

        .newsletter-box {
          background: #f8f0fc;
          padding: 25px;
          border-radius: 15px;
          width: 100%;
          max-width: 350px;
          text-align: center;
        }

        .newsletter-langs {
          font-size: 0.75rem;
          color: #888;
          margin-bottom: 15px;
          font-style: italic;
        }

        .newsletter-form {
          display: flex;
          gap: 10px;
        }

        .email-input {
          flex: 1;
          padding: 12px 15px;
          border: 1px solid #e0d0e8;
          border-radius: 10px;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .email-input:focus {
          border-color: #c9a0dc;
        }

        .submit-btn {
          width: 45px;
          height: 45px;
          background: #601e80;
          color: white;
          border: none;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: #7a2aa0;
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .ally-root {
            padding: 60px 0;
          }

          .grid-layout {
            gap: 40px;
          }

          .section-title {
            font-size: 1.7rem;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .ally-root {
            padding: 50px 0;
          }

          .grid-layout {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .image-wrapper {
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
};

export default TrustedAlly;
