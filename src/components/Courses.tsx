"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Courses = () => {
  return (
    <>
      <section id="courses" className="courses-root">
        <div className="container">
          {/* Moms Course Section */}
          <div className="course-block">
            <div className="grid-layout">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="content-side"
              >
                <span className="section-label">-COURSES-</span>
                <h2 className="section-title">
                  The "Omugwo" Course for <span className="highlight">Moms</span>
                </h2>
                <div className="divider"></div>

                <p className="course-desc">
                  This course introduces you to the concept of the "OMUGWO" culture and why it is such a powerful practice. It examines old wife's tales, medical facts, and practical African practices.
                </p>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-value">3</span>
                    <span className="stat-label">MODULES</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">5</span>
                    <span className="stat-label">eBOOKS</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">36</span>
                    <span className="stat-label">LESSONS</span>
                  </div>
                </div>

                <a href="https://learn.omugwoacademy.com/classes" className="cta-btn">
                  Take a course
                </a>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="image-side"
              >
                <div className="image-frame orange-frame">
                  <img
                    src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65aca3be3c79a9000fd41808_optimized_1280"
                    alt="Mom Course"
                    className="course-img"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dads Course Section */}
          <div className="course-block">
            <div className="grid-layout reversed">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="image-side"
              >
                <div className="image-frame purple-frame">
                  <img
                    src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65aca3be3c79a9000fd41808_optimized_1280"
                    alt="Dad Course"
                    className="course-img"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="content-side"
              >
                <span className="section-label">-COURSES-</span>
                <h2 className="section-title">
                  The "Omugwo" Essential<br />Course for <span className="highlight">Dads</span>
                </h2>
                <div className="divider"></div>

                <p className="course-desc">
                  This course addresses everything fathers, grandmothers and even nannies need to know about the care of a baby and new mum from the day of birth.
                </p>

                <div className="features-list">
                  <div className="feature-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Broken down for Dads</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Immediate postpartum support</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Evidence-based insights</span>
                  </div>
                </div>

                <a href="https://learn.omugwoacademy.com/classes" className="cta-btn">
                  Take a course
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .courses-root {
          background: linear-gradient(180deg, #faf5ff 0%, #f8f0fc 100%);
          padding: 80px 0;
        }

        .course-block {
          margin-bottom: 80px;
        }

        .course-block:last-child {
          margin-bottom: 0;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .grid-layout.reversed {
          direction: ltr;
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

        .course-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .stats-row {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-item {
          background: #fff;
          padding: 15px 25px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.04);
        }

        .stat-value {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #601e80;
          font-family: 'Montserrat', sans-serif;
        }

        .stat-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: #c9a0dc;
          letter-spacing: 1px;
        }

        .features-list {
          margin-bottom: 30px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1a1a1a;
        }

        .check-icon {
          color: #c9a0dc;
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

        .image-side {
          display: flex;
          justify-content: center;
        }

        .image-frame {
          width: 100%;
          max-width: 450px;
          border-radius: 25px;
          overflow: hidden;
          padding: 15px;
        }

        .image-frame.orange-frame {
          background: linear-gradient(135deg, #ffa500 0%, #ff8c00 100%);
        }

        .image-frame.purple-frame {
          background: linear-gradient(135deg, #601e80 0%, #8a2be2 100%);
        }

        .course-img {
          width: 100%;
          display: block;
          border-radius: 15px;
        }

        @media (max-width: 1024px) {
          .courses-root {
            padding: 60px 0;
          }

          .course-block {
            margin-bottom: 60px;
          }

          .grid-layout {
            gap: 40px;
          }

          .section-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 768px) {
          .courses-root {
            padding: 50px 0;
          }

          .grid-layout {
            grid-template-columns: 1fr;
          }

          .grid-layout.reversed {
            display: flex;
            flex-direction: column-reverse;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .stats-row {
            flex-wrap: wrap;
          }

          .image-frame {
            max-width: 350px;
          }
        }
      `}</style>
    </>
  );
};

export default Courses;
