"use client";

import React from "react";
import { motion } from "framer-motion";

const Podcast = () => {
  return (
    <>
      <section className="podcast-root">
        <div className="container">
          <div className="grid-layout">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="image-side"
            >
              <div className="image-frame">
                <img
                  src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65aca3be3c79a9000fd41808_optimized_1280"
                  alt="Beyond Birth Podcast"
                  className="podcast-img"
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="content-side"
            >
              <span className="section-label">-PODCAST-</span>
              <h2 className="section-title">
                Beyond Birth with<br /><span className="highlight">Dr. Megor</span>
              </h2>
              <div className="divider"></div>

              <p className="podcast-desc">
                Join Dr. Megor as she delves into the depths of parenthood, exploring the joys, challenges, and transformative experiences that come with raising children.
              </p>
              <p className="podcast-desc">
                Each episode features insightful conversations with leading experts, experienced parents, and Dr. Megor herself, covering a wide range of topics relevant to new families.
              </p>

              <a href="/podcast" className="cta-btn">
                Subscribe and Listen Today!
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .podcast-root {
          background: linear-gradient(180deg, #f8f0fc 0%, #faf5ff 100%);
          padding: 80px 0;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .image-side {
          display: flex;
          justify-content: center;
        }

        .image-frame {
          width: 100%;
          max-width: 450px;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(96, 30, 128, 0.15);
        }

        .podcast-img {
          width: 100%;
          display: block;
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
        }

        .divider {
          width: 60px;
          height: 4px;
          background: #ffb6c1;
          border-radius: 2px;
          margin-bottom: 25px;
        }

        .podcast-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .cta-btn {
          display: inline-block;
          padding: 14px 30px;
          background: #601e80;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .cta-btn:hover {
          background: #7a2aa0;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(96, 30, 128, 0.3);
        }

        @media (max-width: 1024px) {
          .podcast-root {
            padding: 60px 0;
          }

          .grid-layout {
            gap: 40px;
          }

          .section-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 768px) {
          .podcast-root {
            padding: 50px 0;
          }

          .grid-layout {
            grid-template-columns: 1fr;
          }

          .content-side {
            padding-left: 0;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .image-frame {
            max-width: 350px;
          }
        }
      `}</style>
    </>
  );
};

export default Podcast;
