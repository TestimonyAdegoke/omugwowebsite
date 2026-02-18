"use client";

import React from "react";
import { motion } from "framer-motion";

const OmugwoStory = () => {
  const storyImages = [
    "https://res2.yourwebsite.life/res/65561702aed658000f25077c/656041ec189913000f13524b_optimized_250",
    "https://res2.yourwebsite.life/res/65561702aed658000f25077c/656041eeb020cb0010996845_optimized_250",
    "https://res2.yourwebsite.life/res/65561702aed658000f25077c/656041ee235889000fd92131_optimized_250",
    "https://res2.yourwebsite.life/res/65561702aed658000f25077c/656041ee77364b0010530739_optimized_250",
  ];

  const shareOptions = [
    "Video Submission",
    "Podcast Feature",
    "Written Article",
    "Live Videos"
  ];

  return (
    <>
      <section className="story-root">
        <div className="container">
          <div className="grid-layout">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="content-side"
            >
              <span className="section-label">-MY OMUGWO STORY-</span>
              <h2 className="section-title">
                Share Your <span className="highlight">Omugwo</span> Journey
              </h2>
              <div className="divider"></div>

              <p className="story-desc">
                The "My Omugwo Story" campaign aims to highlight the transformative power of omugwo care by sharing real-life experiences of families who have benefited from this tradition.
              </p>

              <div className="options-grid">
                {shareOptions.map((option, idx) => (
                  <div key={idx} className="option-item">
                    <div className="option-dot"></div>
                    <span className="option-text">{option}</span>
                  </div>
                ))}
              </div>

              <a href="/" className="cta-btn">
                Share your story
              </a>
            </motion.div>

            {/* Images Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="images-side"
            >
              <div className="images-grid">
                {storyImages.map((src, idx) => (
                  <div key={idx} className="image-item">
                    <img src={src} alt={`Story ${idx + 1}`} className="story-img" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .story-root {
          background: #fff;
          padding: 80px 0;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
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

        .story-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 30px;
        }

        .option-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .option-dot {
          width: 8px;
          height: 8px;
          background: #ffb6c1;
          border-radius: 50%;
        }

        .option-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a1a;
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
        }

        .cta-btn:hover {
          background: #7a2aa0;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(96, 30, 128, 0.3);
        }

        .images-side {
          display: flex;
          justify-content: center;
        }

        .images-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          max-width: 400px;
        }

        .image-item {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
        }

        .story-img {
          width: 100%;
          display: block;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .story-root {
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
          .story-root {
            padding: 50px 0;
          }

          .grid-layout {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .images-grid {
            max-width: 320px;
          }
        }
      `}</style>
    </>
  );
};

export default OmugwoStory;
