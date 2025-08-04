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
      <div
        style={{
          position: "absolute",
          bottom: 24,
          right: 32,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 12,
          zIndex: 2,
        }}
      >
        {slides.map((_, idx) =>
          idx === current ? (
            <div
              key={idx}
              style={{
                width: 64,
                height: 12,
                borderRadius: 6,
                background: "#d72660",
                boxShadow: "0 2px 8px #d72660",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${(progress / SLIDE_DURATION) * 100}%`,
                  background: "#fff",
                  borderRadius: 6,
                  transition: "width 0.1s linear",
                }}
              />
            </div>
          ) : (
            <div
              key={idx}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 2px 8px #d72660",
                opacity: 0.5,
              }}
            />
          )
        )}
      </div>
    </section>
  );
};

export default HeroSlides;
