"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Quote } from "lucide-react";

const CTASection = () => {
  return (
    <>
      <section className="cta-root">
        <div className="container">
          <div className="cta-grid">
            {/* Consultation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cta-card"
            >
              <div className="card-icon">
                <Calendar size={28} />
              </div>
              <h3 className="card-title">Book a Consultation Today!</h3>
              <p className="card-desc">
                Take the first step towards a confident and fulfilling parenthood. Join our community today!
              </p>
              <a href="/contacts" className="cta-btn">
                Schedule a Consultation Now
              </a>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="cta-card testimonial-card"
            >
              <div className="card-icon purple">
                <Quote size={28} />
              </div>
              <h3 className="card-title">Testimonials</h3>
              <div className="testimonial-content">
                <p className="quote-text">
                  "I remember when I was pregnant with my twin girls, I received very valuable advice from Dr Megor Ikuenobe. She taught me how to position while lying down so both me and the baby would be comfortable."
                </p>
                <div className="author-info">
                  <h4 className="author-name">Uche Nnakenyi</h4>
                  <p className="author-tag">Happy Mother</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cta-root {
          background: #fff;
          padding: 80px 0;
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .cta-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid #e8dff0;
          padding: 50px 40px;
          border-radius: 25px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(96, 30, 128, 0.05);
          transition: all 0.3s ease;
        }

        .cta-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(96, 30, 128, 0.1);
        }

        .testimonial-card {
          background: #f8f0fc;
        }

        .card-icon {
          width: 70px;
          height: 70px;
          background: #601e80;
          color: white;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }

        .card-icon.purple {
          background: #c9a0dc;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
          font-family: 'Montserrat', sans-serif;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          max-width: 350px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-btn {
          display: inline-block;
          padding: 14px 30px;
          background: #601e80;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: #7a2aa0;
          transform: scale(1.02);
        }

        .testimonial-content {
          text-align: center;
        }

        .quote-text {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 25px;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 3px;
          font-family: 'Montserrat', sans-serif;
        }

        .author-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #c9a0dc;
        }

        @media (max-width: 1024px) {
          .cta-root {
            padding: 60px 0;
          }

          .cta-grid {
            gap: 25px;
          }

          .cta-card {
            padding: 40px 30px;
          }
        }

        @media (max-width: 768px) {
          .cta-root {
            padding: 50px 0;
          }

          .cta-grid {
            grid-template-columns: 1fr;
          }

          .card-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default CTASection;
