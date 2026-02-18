"use client";

import React from "react";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="footer-root">
        <div className="container">
          <div className="footer-content">
            {/* Logo/Brand Section */}
            <div className="brand-col">
              <img
                src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65a7a1698b7b9d000f4fdf0a_optimized_725"
                alt="Omugwo Academy Logo"
                className="footer-logo"
              />
              <p className="brand-tagline">
                Omugwo Academy, Your destination for informed, supportive and relatable postnatal guidance.
              </p>
            </div>

            {/* Social Links Section */}
            <div className="social-col">
              <h4 className="footer-title">Follow us:</h4>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Facebook size={20} />
                </a>
                <a href="mailto:hello@omugwoacademy.com" className="social-icon">
                  <Mail size={20} />
                </a>
                <a href="tel:+2348075528125" className="social-icon">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            {/* Credits Section */}
            <div className="credits-col">
              <div className="credit-text">
                <p>
                  Created by <span className="highlight">SiteCliq</span> | Powered by <span className="highlight">Sapphital</span>
                </p>
                <p className="copyright">© 2026 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="bottom-strip">
          <p className="strip-text">
            REVOLUTIONIZING POSTPARTUM CARE WITH CHILDHOOD EDUCATION & MATERNAL EXCELLENCE
          </p>
        </div>
      </footer>

      <style jsx>{`
        .footer-root {
          background: #fff;
          padding-top: 60px;
          border-top: 1px solid #f0f0f0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
          padding-bottom: 60px;
        }

        .brand-col {
          flex: 1;
          min-width: 250px;
        }

        .footer-logo {
          height: 50px;
          margin-bottom: 20px;
        }

        .brand-tagline {
          font-size: 0.95rem;
          color: #601e80;
          font-weight: 600;
          line-height: 1.5;
          max-width: 300px;
        }

        .social-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-title {
          font-size: 1.1rem;
          color: #601e80;
          font-weight: 800;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f8f0fc;
          color: #601e80;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: #601e80;
          color: white;
          transform: translateY(-3px);
        }

        .credits-col {
          text-align: right;
          flex: 1;
          min-width: 250px;
        }

        .credit-text p {
          margin-bottom: 5px;
          font-size: 0.9rem;
          color: #666;
        }

        .credit-text .highlight {
          color: #601e80;
          font-weight: 700;
        }

        .copyright {
          font-size: 0.8rem;
          color: #999;
        }

        .bottom-strip {
          background: #601e80;
          padding: 15px 0;
          text-align: center;
        }

        .strip-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 40px;
          }

          .brand-col, .credits-col {
            text-align: center;
            width: 100%;
          }

          .footer-logo {
            margin-left: auto;
            margin-right: auto;
          }

          .brand-tagline {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
