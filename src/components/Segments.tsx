"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Baby, Heart, Sparkles, Cake, ChevronLeft, ChevronRight } from "lucide-react";

const Segments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const segments = [
    {
      title: "Labour & Delivery",
      desc: "Discover the wonders of childbirth and make informed decisions",
      icon: <Baby size={28} />,
      color: "#f8e8ff",
      href: "/labor-delivery"
    },
    {
      title: "Post-Delivery",
      desc: "Your guide to a smooth and supportive transition to parenthood.",
      icon: <Heart size={28} />,
      color: "#e8f4ff",
      href: "/post-delivery"
    },
    {
      title: "4th Trimester",
      desc: "Navigate the uncharted waters of parenthood beyond childbirth with confidence.",
      icon: <Sparkles size={28} />,
      color: "#fff0f7",
      href: "/4th-trimester"
    },
    {
      title: "Baby's First Year",
      desc: "Your guide to an informed and supportive postpartum experience.",
      icon: <Cake size={28} />,
      color: "#f0faf0",
      href: "/baby-s-first-year"
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % segments.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, segments.length]);

  const visibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % segments.length;
      cards.push({ ...segments[index], originalIndex: index });
    }
    return cards;
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + segments.length) % segments.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % segments.length);
  };

  return (
    <>
      <section id="segments" className="segment-root">
        <div className="container">
          <div className="header-box">
            <h2 className="section-title">
              Motherhood is a Journey and we're here to guide you through
            </h2>
          </div>

          <div className="carousel-wrapper">
            <button className="nav-btn prev" onClick={goToPrev} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>

            <div className="cards-container">
              <AnimatePresence mode="popLayout">
                {visibleCards().map((item) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="segment-card"
                  >
                    <div
                      className="icon-circle"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.desc}</p>
                    <a href={item.href} className="card-btn">
                      Learn More
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button className="nav-btn next" onClick={goToNext} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="dots-container">
            {segments.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${currentIndex === idx ? "active" : ""}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .segment-root {
          background: linear-gradient(180deg, #faf5ff 0%, #f8f0fc 100%);
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }

        .header-box {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #000000;
          line-height: 1.3;
          max-width: 700px;
          margin: 0 auto;
          font-family: 'Montserrat', sans-serif;
        }

        .carousel-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          position: relative;
        }

        .nav-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 2px solid #e0d0e8;
          background: white;
          color: #601e80;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: #601e80;
          color: white;
          border-color: #601e80;
        }

        .cards-container {
          display: flex;
          gap: 25px;
          overflow: hidden;
          max-width: 900px;
          padding: 10px 0;
        }

        .segment-card {
          flex: 1;
          min-width: 270px;
          max-width: 290px;
          background: white;
          padding: 35px 25px;
          border-radius: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #e0d0e8;
          transition: all 0.3s ease;
        }

        .segment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(96, 30, 128, 0.1);
          border-color: #d0b8e0;
        }

        .icon-circle {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #601e80;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
          font-family: 'Montserrat', sans-serif;
        }

        .card-desc {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.5;
          flex-grow: 1;
        }

        .card-btn {
          display: inline-block;
          padding: 10px 25px;
          background: #601e80;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.8rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .card-btn:hover {
          background: #7a2aa0;
          transform: scale(1.05);
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 35px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #e0d0e8;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #601e80;
          transform: scale(1.2);
        }

        .dot:hover {
          background: #c9a0dc;
        }

        @media (max-width: 1024px) {
          .segment-root {
            padding: 60px 0;
          }

          .section-title {
            font-size: 1.7rem;
            padding: 0 20px;
          }

          .cards-container {
            max-width: 600px;
          }

          .segment-card {
            min-width: 240px;
          }
        }

        @media (max-width: 768px) {
          .segment-root {
            padding: 50px 0;
          }

          .section-title {
            font-size: 1.4rem;
          }

          .cards-container {
            max-width: 280px;
          }

          .segment-card {
            min-width: 260px;
            max-width: 260px;
          }

          .nav-btn {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </>
  );
};

export default Segments;
