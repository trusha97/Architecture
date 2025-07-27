
import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import {
  portfolio_image_one,
  portfolio_image_two,
} from "../../utils/images";

const slides = [
  {
    title: "Blending futuristic building",
    category: "ARCHITECTURE",
    mainImage: portfolio_image_two,
  },
  {
    title: "Modern wood cabin",
    category: "ARCHITECTURE",
    mainImage: portfolio_image_one,
  },
  {
    title: "Nature in structure",
    category: "ARCHITECTURE",
    mainImage: portfolio_image_two,
  },
  {
    title: "The glass exterior",
    category: "ARCHITECTURE",
    mainImage: portfolio_image_one,
  },
];

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = (currentSlide + 1) % slides.length;

  return (
    <div className="slider-wrapper">
      <div className="slide-content">
        {/* Left: Current Slide (big) */}
        <div
          className="main-image"
          style={{
            backgroundImage: `url(${slides[currentSlide].mainImage})`,
          }}
        >
          <span className="category">{slides[currentSlide].category}</span>
          <h2>{slides[currentSlide].title}</h2>
        </div>

        {/* Right: Preview (next) */}
        <div
          className="preview-image"
          style={{
            backgroundImage: `url(${slides[nextSlide].mainImage})`,
          }}
        >
          <div className="custom-dots">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === currentSlide ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-line">
          <div
            className="progress-fill"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <h4>
        {currentSlide + 1}/{slides.length}
      </h4>
    </div>
  );
};

export default Portfolio;
