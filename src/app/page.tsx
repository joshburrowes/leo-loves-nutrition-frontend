"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import HeroSlides, { Slide } from "@/components/HeroSlides";

const SLIDES: Slide[] = [
  {
    title: "Leo Loves Nutrition",
    text: "Nutrition is the foundation of a vibrant life. Leo Loves Nutrition is dedicated to helping you discover the joy of healthy eating, with personalized plans and expert guidance for every step of your journey.",
    buttonText: "Learn More",
    buttonAction: () => {
      const el = document.getElementById("intro-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    background:
      "linear-gradient(135deg, #ffe4ec 0%, rgba(255,240,245,0.6) 60%, #fff0f6 100%)",
  },
  {
    title: "Explore Our Services",
    text: "Discover personalized nutrition plans, 1-on-1 coaching, and workshops designed to help you achieve your health goals.",
    buttonText: "View Services",
    buttonAction: () => {
      window.location.href = "/services";
    },
    background:
      "linear-gradient(135deg, #f0fff5 0%, rgba(240,255,245,0.6) 60%, #e0ffe6 100%)",
  },
  {
    title: "Read Our Blog",
    text: "Stay updated with the latest nutrition tips, healthy recipes, and wellness inspiration on our blog.",
    buttonText: "Visit Blog",
    buttonAction: () => {
      window.location.href = "/blog";
    },
    background:
      "linear-gradient(135deg, #f5f0ff 0%, rgba(245,240,255,0.6) 60%, #e6e0ff 100%)",
  },
  {
    title: "Contact Leo",
    text: "Have questions or need personalized advice? Get in touch with Leo for consultations and support.",
    buttonText: "Contact Us",
    buttonAction: () => {
      window.location.href = "/contact";
    },
    background:
      "linear-gradient(135deg, #fff5f0 0%, rgba(255,245,240,0.6) 60%, #ffe6e0 100%)",
  },
];

function IntroSection() {
  return (
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
          Leo is a certified nutritionist passionate about helping you achieve
          your wellness goals. Whether you want to lose weight, gain energy, or
          simply eat better, Leo offers personalized nutrition plans and ongoing
          support.
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
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
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <Link href="/contact" className="cta-button">
        Book a Free Consultation
      </Link>
    </section>
  );
}

export default function Home() {
  return (
    <div
      className="site-wrapper"
      style={{ background: "var(--background)", padding: 0 }}
    >
      <HeroSlides slides={SLIDES} />
      <header className="site-header">
        <p className="site-subtitle">
          Empowering you to live your healthiest life
        </p>
      </header>
      <main className="site-main">
        <IntroSection />
        <ServicesSection />
        <CTASection />
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  );
}
