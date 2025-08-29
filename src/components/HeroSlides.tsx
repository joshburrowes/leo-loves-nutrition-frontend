import React, { useState, useEffect } from "react";

export type Slide = {
  title: string;
  text: string;
  buttonText: string;
  buttonAction: () => void;
  background: string;
};

interface HeroSlidesProps {
  slides: Slide[];
}

const HeroSlides: React.FC<HeroSlidesProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 20000; // 20 seconds
  const PROGRESS_INTERVAL = 100; // ms

  useEffect(() => {
    setProgress(0);
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= SLIDE_DURATION) return SLIDE_DURATION;
        return prev + PROGRESS_INTERVAL;
      });
    }, PROGRESS_INTERVAL);
    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [slides.length, current]);

  // Arrow navigation handlers
  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };
  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };
  const goToSlide = (idx: number) => {
    setCurrent(idx);
    setProgress(0);
  };

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "100vw",
        maxWidth: "100vw",
        left: 0,
        marginLeft: 0,
        marginRight: 0,
        height: "350px",
        overflow: "hidden",
      }}
      aria-label="Hero Section"
    >
      {slides.map((slide: Slide, idx: number) => (
        <div
          key={idx}
          aria-hidden={current !== idx}
          style={{
            display: current === idx ? "flex" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: slide.background,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            className="hero-title"
            style={{
              color: "#a8005b",
              fontSize: "2.8rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              textShadow: "0 2px 8px #fff",
            }}
          >
            {slide.title}
          </h1>
          <p
            className="hero-text"
            style={{
              color: "#d72660",
              fontSize: "1.3rem",
              maxWidth: "600px",
              textAlign: "center",
              textShadow: "0 2px 8px #fff",
            }}
          >
            {slide.text}
          </p>
          <button
            onClick={slide.buttonAction}
            style={{
              marginTop: "2rem",
              background:
                "radial-gradient(circle at 30% 50%, #ff69b4, #d72660)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              padding: "0.85rem 2.2rem",
              borderRadius: "999px",
              boxShadow: "0 2px 12px 0 rgba(168,0,91,0.12)",
              border: "none",
              cursor: "pointer",
            }}
            className="hero-scroll-btn"
            aria-label={slide.buttonText}
          >
            {slide.buttonText}
          </button>
        </div>
      ))}
      {/* Slide Dots */}
      {/* Arrows and Slide Dots */}
      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        style={{
          position: "absolute",
          top: "50%",
          left: 24,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.35)",
          border: "none",
          borderRadius: "50%",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
          cursor: "pointer",
          zIndex: 2,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 19l-7-7 7-7"
            stroke="#d72660"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Slide Dots */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 32,
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 2,
          opacity: 0.7,
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          {slides.map((_, idx) =>
            idx === current ? (
              <div
                key={idx}
                onClick={() => goToSlide(idx)}
                style={{
                  width: 36,
                  height: 8,
                  borderRadius: 4,
                  background: "#d72660",
                  boxShadow: "0 1px 4px #d72660",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  opacity: 0.85,
                }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${(progress / SLIDE_DURATION) * 100}%`,
                    background: "#fff",
                    borderRadius: 4,
                    transition: "width 0.1s linear",
                  }}
                />
              </div>
            ) : (
              <div
                key={idx}
                onClick={() => goToSlide(idx)}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 1px 4px #d72660",
                  opacity: 0.4,
                  cursor: "pointer",
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          )}
        </div>
      </div>
      {/* Right Arrow */}
      <button
        onClick={goToNext}
        aria-label="Next Slide"
        style={{
          position: "absolute",
          top: "50%",
          right: 24,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.35)",
          border: "none",
          borderRadius: "50%",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
          cursor: "pointer",
          zIndex: 2,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 5l7 7-7 7"
            stroke="#d72660"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSlides;
