"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Segments", href: "#segments" },
    { name: "Courses", href: "#courses" },
    { name: "Community", href: "#community" },
    { name: "Seasoned Professionals", href: "#professionals" },
    { name: "Events", href: "#events" },
    { name: "Resources", href: "#resources" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <nav className={`navbar-root ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <a href="/" className="nav-logo">
            <img
              src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65a7a1698b7b9d000f4fdf0a_optimized_725"
              alt="Omugwo Academy"
              className="logo-img"
            />
          </a>

          <div className={`nav-links-wrapper ${isOpen ? "mobile-open" : ""}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-item" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#donate" className="btn btn-pill donate-btn" onClick={() => setIsOpen(false)}>
              Donate
            </a>
          </div>

          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <style jsx>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 2000;
          padding: 25px 0;
          transition: var(--transition);
          background: transparent;
        }
        
        .navbar-root.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          padding: 15px 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo-img {
          height: 55px;
          width: auto;
          transition: var(--transition-fast);
        }
        
        .scrolled .logo-img {
          height: 45px;
        }

        .nav-links-wrapper {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        
        .nav-list {
          display: flex;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-item {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          color: var(--primary);
          text-decoration: none;
          letter-spacing: 0.2px;
          position: relative;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        
        .nav-item:hover {
          color: var(--accent);
        }
        
        .nav-item:hover::after {
          width: 100%;
        }
        
        .donate-btn {
          margin-left: 10px;
        }

        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          padding: 5px;
        }

        @media (max-width: 1100px) {
          .nav-links-wrapper {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            background: white;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            transform: translateX(100%);
            transition: transform 0.4s ease;
            box-shadow: -10px 0 40px rgba(0,0,0,0.1);
          }
          
          .nav-links-wrapper.mobile-open {
            transform: translateX(0);
          }
          
          .nav-list {
            flex-direction: column;
            text-align: center;
            gap: 25px;
          }
          
          .nav-item {
            font-size: 1.1rem;
          }
          
          .nav-toggle {
            display: block;
            position: relative;
            z-index: 2001;
          }
          
          .logo-img {
            height: 45px;
          }
        }

        @media (max-width: 768px) {
          .navbar-root {
            padding: 20px 0;
          }
          
          .scrolled {
            padding: 12px 0;
          }
          
          .logo-img {
            height: 40px;
          }
          
          .scrolled .logo-img {
            height: 35px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
