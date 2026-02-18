"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Omugwo?",
      answer: "Omugwo is a traditional Nigerian postpartum care practice that emphasizes holistic support for new mothers and their families. It encompasses physical care, such as assisting with breastfeeding, newborn care, and household chores, as well as emotional and mental support.",
    },
    {
      question: "What is Omugwo Academy?",
      answer: "Omugwo Academy is a one-stop knowledge center for new moms, new dads, and families, providing comprehensive care and support from the labor and delivery period through the fourth trimester and beyond.",
    },
    {
      question: "Who can benefit from Omugwo Academy's services?",
      answer: "Omugwo Academy's services can benefit anyone who is welcoming a new baby into their family, regardless of their cultural background or experience level.",
    },
    {
      question: "What services does Omugwo Academy offer?",
      answer: "Omugwo Academy offers a variety of services, including online courses, virtual consultations, a thriving online community, and a podcast with expert insights.",
    },
  ];

  return (
    <>
      <section id="faq" className="faq-root">
        <div className="container">
          <div className="grid-layout">
            {/* Left Column: Title & Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-col"
            >
              <span className="section-label">-HELP CENTER-</span>
              <h2 className="section-title">
                Commonly Asked <br />
                <span className="highlight">Questions</span>
              </h2>
              <div className="divider"></div>

              {/* Illustration for desktop */}
              <div className="illustration-wrapper">
                <img
                  src="https://res2.yourwebsite.life/res/65561702aed658000f25077c/65aca3be3c79a9000fd41808_optimized_1280"
                  alt="FAQ Illustration"
                  className="faq-img"
                />
              </div>
            </motion.div>

            {/* Right Column: Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="accordion-col"
            >
              <div className="accordion-wrapper">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`accordion-item ${openIndex === index ? 'active' : ''}`}
                  >
                    <button
                      className="accordion-header"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                      <span className="question-text">{faq.question}</span>
                      <span className="icon-wrapper">
                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="accordion-content"
                        >
                          <div className="inner-content">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-root {
          background: #fff;
          padding: 80px 0;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
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
          margin-bottom: 40px;
        }
        
        .illustration-wrapper {
          max-width: 350px;
          border-radius: 20px;
          overflow: hidden;
          margin-top: 20px;
        }
        
        .faq-img {
          width: 100%;
          display: block;
        }

        .accordion-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .accordion-item {
          border: 1px solid #e8dff0;
          border-radius: 15px;
          overflow: hidden;
          background: #fff;
          transition: all 0.3s ease;
        }

        .accordion-item.active {
          border-color: #c9a0dc;
          box-shadow: 0 10px 30px rgba(96, 30, 128, 0.05);
        }

        .accordion-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .question-text {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          font-family: 'Montserrat', sans-serif;
          padding-right: 20px;
        }

        .icon-wrapper {
          color: #601e80;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .inner-content {
          padding: 0 25px 25px;
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .faq-root {
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
          .faq-root {
            padding: 50px 0;
          }

          .grid-layout {
            grid-template-columns: 1fr;
          }
          
          .illustration-wrapper {
            display: none;
          }

          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default FAQ;
