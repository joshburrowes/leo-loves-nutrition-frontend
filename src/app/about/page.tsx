import React from "react";
import Image from "next/image";
import leoImage from "../../../public/leo-loves-nutrition-image.png";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div className="w-full bg-gradient-to-r from-pink-100/80 to-pink-200/80 py-24">
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

        <div className="w-full bg-pink-50/80 py-24">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-0 md:mr-8">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Healthy food bowl"
                className="object-cover w-full h-full rounded-[65%_35%_60%_40%/40%_60%_35%_65%] shadow-md border-4 border-pink-200"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-pink-600 mb-8">
                Our Mission
              </h2>
              <p className="text-pink-700 text-lg leading-relaxed max-w-3xl mx-auto">
                At Leo Loves Nutrition, we believe in empowering individuals to
                embrace a healthier lifestyle through personalized nutrition
                plans and expert guidance. Founded by Leo, a leading
                nutritionist with over a decade of experience, our mission is to
                provide evidence-based, holistic solutions tailored to each
                client's unique needs.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-pink-100/80 py-24">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-0 md:mr-8">
              <img
                src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad04?auto=format&fit=crop&w=400&q=80"
                alt="Nutritionist at work"
                className="object-cover w-full h-full rounded-[55%_60%_45%_70%/60%_45%_70%_55%] shadow-md border-4 border-pink-200"
              />
            </div>
            <div className="flex-1">
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
        </div>

        <div className="w-full bg-pink-200/80 py-24">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-0 md:mr-8">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Happy clients"
                className="object-cover w-full h-full rounded-[60%_50%_55%_45%/45%_55%_50%_60%] shadow-md border-4 border-pink-200"
              />
            </div>
            <div className="flex-1">
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
        </div>
        <div className="mt-0" />
      </div>

      <Footer />
    </div>
  );
}
