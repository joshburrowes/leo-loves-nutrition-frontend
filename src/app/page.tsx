"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255,240,245,0.6)",
            display: "flex",
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
            Leo Loves Nutrition
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
            Nutrition is the foundation of a vibrant life. Leo Loves Nutrition
            is dedicated to helping you discover the joy of healthy eating, with
            personalized plans and expert guidance for every step of your
            journey.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("intro-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              marginTop: "2rem",
              background: "linear-gradient(90deg, #ff69b4 0%, #d72660 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              padding: "0.85rem 2.2rem",
              borderRadius: "999px",
              boxShadow: "0 2px 12px 0 rgba(168,0,91,0.12)",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            className="hero-scroll-btn"
          >
            Learn More
          </button>
        </div>
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
