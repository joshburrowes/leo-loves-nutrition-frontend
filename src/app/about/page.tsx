import React from "react";
import Image from "next/image";
import leoImage from "../../../public/leo-loves-nutrition-image.png";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="w-full space-y-16">
        <div className="w-full bg-gradient-to-r from-pink-100 to-pink-50 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <Image
                src={leoImage}
                alt="Leo Loves Nutrition"
                className="rounded-full shadow-lg object-cover"
                layout="fill"
              />
            </div>
            <h1 className="text-6xl font-extrabold text-pink-700 mt-8">
              About Leo
            </h1>
            <p className="text-pink-800 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
              Leo is a certified nutritionist with over 10 years of experience
              helping clients achieve their health goals. Her approach is
              holistic, evidence-based, and tailored to each individual. She
              believes that good nutrition is the foundation for a vibrant,
              healthy life.
            </p>
          </div>
        </div>

        <div className="w-full bg-white py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pink-700 mb-8">
              Our Mission
            </h2>
            <p className="text-pink-800 text-lg leading-relaxed max-w-3xl mx-auto">
              At Leo Loves Nutrition, we believe in empowering individuals to
              embrace a healthier lifestyle through personalized nutrition plans
              and expert guidance. Founded by Leo, a leading nutritionist with
              over a decade of experience, our mission is to provide
              evidence-based, holistic solutions tailored to each client's
              unique needs.
            </p>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-pink-50 to-pink-100 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pink-700 mb-8">
              Our Expertise
            </h2>
            <p className="text-pink-800 text-lg leading-relaxed max-w-3xl mx-auto">
              Leo specializes in areas such as weight management, sports
              nutrition, and family health. She is passionate about educating
              others, hosting workshops, and collaborating with health
              professionals to spread awareness about the importance of
              nutrition.
            </p>
          </div>
        </div>

        <div className="w-full bg-white py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pink-700 mb-8">
              Client Stories
            </h2>
            <p className="text-pink-800 text-lg leading-relaxed max-w-3xl mx-auto">
              Our clients often share how Leo's approach has transformed their
              lives, helping them achieve their health goals while fostering a
              positive relationship with food. Join us on a journey to better
              health and well-being.
            </p>
          </div>
        </div>
        <div className="mt-16" />
      </div>

      <Footer />
    </div>
  );
}
