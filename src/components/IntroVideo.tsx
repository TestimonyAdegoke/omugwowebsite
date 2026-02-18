"use client";

import React from "react";
import { motion } from "framer-motion";

const IntroVideo = () => {
  return (
    <>
      <section className="video-root">
        <div className="container">
          <div className="header-box">
            <h2 className="section-title">Introducing Omugwo Academy</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="video-container"
          >
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/Cq2rxibUbOs"
                title="Introducing Omugwo Academy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="youtube-embed"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .video-root {
          background: #fff;
          position: relative;
          padding: 80px 0;
        }

        .header-box {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
          font-family: 'Montserrat', sans-serif;
        }

        .video-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .video-frame {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          border-radius: 25px;
          overflow: hidden;
          background: #f0e8f5;
          box-shadow: 0 20px 50px rgba(96, 30, 128, 0.15);
          border: 8px solid white;
        }

        .youtube-embed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1024px) {
          .video-root {
            padding: 60px 0;
          }

          .section-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 768px) {
          .video-root {
            padding: 50px 0;
          }

          .section-title {
            font-size: 1.4rem;
          }

          .video-frame {
            border-radius: 15px;
            border-width: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default IntroVideo;
