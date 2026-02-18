"use client";

import React from "react";
import { motion } from "framer-motion";

const Resources = () => {
  const articles = [
    {
      title: "7 Most Recommended Gifts for New Moms",
      desc: "Becoming a new mom is a life-changing experience, and it's important to show our support and appreciation...",
      date: "JANUARY 2, 2025",
      img: "https://res2.yourwebsite.life/res/65561702aed658000f25077c/655b360e7dbf54000f7a985f_optimized_1920_flop",
      href: "https://omugwoacademy.yourwebsite.life/blog/7-most-recommended-gifts-for-new-moms"
    },
    {
      title: "What to Expect When You're Expecting: Dad Edition",
      desc: "While countless resources focus on the mother's experience, dads deserve their own roadmap...",
      date: "JANUARY 4, 2025",
      img: "https://res2.yourwebsite.life/res/65561702aed658000f25077c/65aca3be3c79a9000fd41808_optimized_1280",
      href: "https://omugwoacademy.yourwebsite.life/blog/what-to-expect-when-youre-expecting-or-dad-edition"
    },
    {
      title: "Baby Blues vs Postpartum Depression",
      desc: "We've all seen the idealized images of pregnancy and childbirth: the radiant mother, the joyous arrival...",
      date: "JANUARY 6, 2025",
      img: "https://res2.yourwebsite.life/res/65561702aed658000f25077c/65611135760086000f9abbcc_optimized_775",
      href: "https://omugwoacademy.yourwebsite.life/blog/baby-blues-vs-postpartum-depression"
    },
  ];

  return (
    <>
      <section id="resources" className="resources-root">
        <div className="container">
          <div className="header-box">
            <span className="section-label">-OMUGWO RESOURCES-</span>
            <h2 className="section-title">
              Omugwo <span className="highlight">Resources</span>
            </h2>
            <div className="divider center"></div>
            <p className="section-desc">
              The Omugwo Academy resource center offers a curated selection of resources to support your parenting journey
            </p>
          </div>

          <div className="resources-grid">
            {articles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="resource-card"
              >
                <a href={item.href} className="card-link">
                  <div className="card-image-wrap">
                    <img src={item.img} alt={item.title} className="card-img" />
                    <div className="overlay"></div>
                  </div>
                  <div className="card-body">
                    <span className="card-date">OMUGWO ACADEMY | {item.date}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.desc}</p>
                    <span className="read-more">Read More</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .resources-root {
          background: #fff;
          padding: 80px 0;
        }

        .header-box {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-label {
          display: inline-block;
          color: #c9a0dc;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1.5px;
          font-size: 0.7rem;
          margin-bottom: 10px;
          font-family: 'Montserrat', sans-serif;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
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
          margin: 0 auto 20px;
        }

        .section-desc {
          font-size: 0.95rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .resource-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .resource-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(96, 30, 128, 0.1);
        }

        .card-link {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .resource-card:hover .card-img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(96, 30, 128, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .resource-card:hover .overlay {
          opacity: 1;
        }

        .card-body {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-date {
          font-size: 0.7rem;
          font-weight: 700;
          color: #c9a0dc;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
          line-height: 1.4;
          font-family: 'Montserrat', sans-serif;
        }

        .card-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .read-more {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #601e80;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 1024px) {
          .resources-root {
            padding: 60px 0;
          }

          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 768px) {
          .resources-root {
            padding: 50px 0;
          }

          .resources-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }

          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Resources;
