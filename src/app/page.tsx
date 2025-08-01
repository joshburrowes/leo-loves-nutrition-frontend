"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const slides = [
    {
      title: "Leo Loves Nutrition",
      text: "Nutrition is the foundation of a vibrant life. Leo Loves Nutrition is dedicated to helping you discover the joy of healthy eating, with personalized plans and expert guidance for every step of your journey.",
      buttonText: "Learn More",
      buttonAction: () => {
        const el = document.getElementById("intro-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
      backgroundColor: "rgba(255,240,245,0.6)",
    },
    {
      title: "Explore Our Services",
      text: "Discover personalized nutrition plans, 1-on-1 coaching, and workshops designed to help you achieve your health goals.",
      buttonText: "View Services",
      buttonAction: () => {
        window.location.href = "/services";
      },
      backgroundColor: "rgba(240,255,245,0.6)",
    },
    {
      title: "Read Our Blog",
      text: "Stay updated with the latest nutrition tips, healthy recipes, and wellness inspiration on our blog.",
      buttonText: "Visit Blog",
      buttonAction: () => {
        window.location.href = "/blog";
      },
      backgroundColor: "rgba(245,240,255,0.6)",
    },
    {
      title: "Contact Leo",
      text: "Have questions or need personalized advice? Get in touch with Leo for consultations and support.",
      buttonText: "Contact Us",
      buttonAction: () => {
        window.location.href = "/contact";
      },
      backgroundColor: "rgba(255,245,240,0.6)",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000); // Switch slides every 20 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="site-wrapper"
      style={{ background: "var(--background)", padding: 0 }}
    >
      {/* Hero Section */}
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
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              display: index === currentSlide ? "flex" : "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, #ffe4ec 0%, ${slide.backgroundColor} 60%, #fff0f6 100%)`,
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
            >
              {slide.buttonText}
            </button>
          </div>
        ))}
      </section>

      <header className="site-header">
        <p className="site-subtitle">
          Empowering you to live your healthiest life
        </p>
      </header>

      <main className="site-main">
        <section id="intro-section" className="intro-section">
          <h2 className="section-title">Meet Leo</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 2px 8px #d72660",
              }}
            >
              <Image
                src="/leo-loves-nutrition-image.png"
                alt="Leo, female nutritionist"
                width={180}
                height={180}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>
            <p className="section-text">
              Leo is a certified nutritionist passionate about helping you
              achieve your wellness goals. Whether you want to lose weight, gain
              energy, or simply eat better, Leo offers personalized nutrition
              plans and ongoing support.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="service-card">
            <h3 className="service-title">Personalized Plans</h3>
            <p className="service-text">
              Custom nutrition strategies tailored to your lifestyle and goals.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-title">1-on-1 Coaching</h3>
            <p className="service-text">
              Direct support and accountability from Leo every step of the way.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Workshops & Resources</h3>
            <p className="service-text">
              Group sessions, recipes, and guides to keep you inspired.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <Link href="/contact" className="cta-button">
            Book a Free Consultation
          </Link>
        </section>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  );
}
