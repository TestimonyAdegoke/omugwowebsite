"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="hero-root">
        {/* Background Image */}
        <div className="hero-bg">
          <img
            src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/655b360e7dbf54000f7a985f_optimized_1920_flop"
            alt="Mother and Baby"
            className="bg-img"
          />
          <div className="bg-overlay"></div>
        </div>

        {/* Decorative Blob */}
        <div className="hero-blob"></div>

        <div className="container hero-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="hero-box"
          >
            <span className="hero-label">· Omugwo Oasis ·</span>
            <h1 className="hero-title">
              Revolutionizing Postnatal Care for{" "}
              <span className="highlight">Sustainable</span> Maternal and Child well-being in Africa
            </h1>
            <p className="hero-description">
              Omugwo Academy, Your destination for informed, supportive and relatable postnatal guidance.
            </p>
            <a href="#about" className="btn-learn">
              Learn more
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .hero-root {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 120px 0 80px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.92) 0%,
            rgba(255, 255, 255, 0.7) 40%,
            rgba(255, 255, 255, 0.3) 70%,
            transparent 100%
          );
        }

        .hero-blob {
          position: absolute;
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #f0d4ff 0%, #e8c4f8 100%);
          border-radius: 50%;
          top: 50%;
          left: -100px;
          transform: translateY(-50%);
          filter: blur(60px);
          opacity: 0.6;
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 10;
        }

        .hero-box {
          max-width: 550px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 50px 45px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .hero-label {
          display: inline-block;
          color: #c9a0dc;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.7rem;
          margin-bottom: 18px;
          font-family: 'Montserrat', sans-serif;
        }

        .hero-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .highlight {
          color: #c9a0dc;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 6px;
          background: rgba(201, 160, 220, 0.3);
          z-index: -1;
          border-radius: 3px;
        }

        .hero-description {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 28px;
          line-height: 1.6;
          font-weight: 500;
        }

        .btn-learn {
          display: inline-block;
          padding: 14px 35px;
          background: #601e80;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-learn:hover {
          background: #7a2aa0;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(96, 30, 128, 0.3);
        }

        @media (max-width: 1024px) {
          .hero-root {
            min-height: 70vh;
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-box {
            padding: 40px 35px;
            max-width: 480px;
          }
        }

        @media (max-width: 768px) {
          .hero-root {
            min-height: auto;
            padding: 100px 0 50px;
          }

          .hero-box {
            max-width: 100%;
            padding: 35px 25px;
          }

          .hero-title {
            font-size: 1.7rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .bg-overlay {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.95) 0%,
              rgba(255, 255, 255, 0.85) 100%
            );
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
