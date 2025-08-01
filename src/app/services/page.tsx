import React from "react";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Services</h1>
        <p className="max-w-xl text-center text-pink-800 text-lg">
          Discover the range of services Leo offers, from personalized nutrition
          plans to workshops and consultations. Let us help you achieve your
          health goals.
        </p>
        <div className="mt-24" />
      </div>
      <Footer />
    </div>
  );
}
