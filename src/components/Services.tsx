"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Video, PenTool, Mic } from "lucide-react";

const Services = () => {
  const services = [
    { name: "Community", icon: <Users size={26} />, href: "/" },
    { name: "Courses", icon: <BookOpen size={26} />, href: "https://learn.omugwoacademy.com/classes" },
    { name: "Consultation", icon: <Video size={26} />, href: "https://drmegor.yourwebsite.life/" },
    { name: "Resources & Tools", icon: <PenTool size={26} />, href: "/blog" },
    { name: "Podcast", icon: <Mic size={26} />, href: "/podcast" },
  ];

  return (
    <>
      <section className="services-root">
        <div className="container">
          <div className="header-box">
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">
              Omugwo Academy offers a range of services to support new moms, new dads, and families during the early stages of parenthood
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.a
                key={service.name}
                href={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-item"
              >
                <div className="icon-ring">
                  {service.icon}
                </div>
                <h3 className="service-name">{service.name}</h3>
                <span className="learn-btn">Learn more</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-root {
          background: #fff;
          padding: 80px 0;
        }

        .header-box {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
          font-family: 'Montserrat', sans-serif;
        }

        .section-desc {
          font-size: 0.95rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 30px;
        }

        .service-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          padding: 20px 15px;
          transition: all 0.3s ease;
        }

        .service-item:hover {
          transform: translateY(-5px);
        }

        .icon-ring {
          width: 80px;
          height: 80px;
          border: 2px solid #c9a0dc;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #601e80;
          margin-bottom: 18px;
          transition: all 0.4s ease;
        }

        .service-item:hover .icon-ring {
          background: #601e80;
          border-color: #601e80;
          color: white;
          transform: rotate(360deg);
        }

        .service-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
          font-family: 'Montserrat', sans-serif;
        }

        .learn-btn {
          display: inline-block;
          padding: 8px 22px;
          background: #601e80;
          color: white;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .service-item:hover .learn-btn {
          background: #7a2aa0;
        }

        @media (max-width: 1024px) {
          .services-root {
            padding: 60px 0;
          }

          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .section-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 768px) {
          .services-root {
            padding: 50px 0;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .icon-ring {
            width: 65px;
            height: 65px;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
