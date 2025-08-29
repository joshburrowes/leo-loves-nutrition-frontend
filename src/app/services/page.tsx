import React from "react";
import Footer from "../../components/Footer";
import Link from "next/link";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80"
              alt="Personalized Nutrition Plans"
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-pink-700 font-bold text-xl mb-2">
              Personalized Nutrition Plans
            </h2>
            <p className="text-pink-800 text-center">
              Custom meal plans tailored to your unique needs, preferences, and
              goals.
            </p>
            <div className="flex-grow" />
            <Link
              href="/services/personalized-nutrition-plans"
              className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow text-center w-full"
            >
              Book Now
            </Link>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80"
              alt="1-on-1 Coaching"
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-pink-700 font-bold text-xl mb-2">
              1-on-1 Coaching
            </h2>
            <p className="text-pink-800 text-center">
              Ongoing support, motivation, and accountability from Leo every
              step of the way.
            </p>
            <div className="flex-grow" />
            <Link
              href="/services/1-on-1-coaching"
              className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow text-center w-full"
            >
              Book Now
            </Link>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80"
              alt="Workshops & Seminars"
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-pink-700 font-bold text-xl mb-2">
              Workshops & Seminars
            </h2>
            <p className="text-pink-800 text-center">
              Interactive group sessions covering nutrition, wellness, and
              healthy habits.
            </p>
            <div className="flex-grow" />
            <Link
              href="/services/workshops-seminars"
              className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow text-center w-full"
            >
              Book Now
            </Link>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=200&q=80"
              alt="Family Nutrition"
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-pink-700 font-bold text-xl mb-2">
              Family Nutrition
            </h2>
            <p className="text-pink-800 text-center">
              Guidance for families to create healthy eating habits together.
            </p>
            <div className="flex-grow" />
            <Link
              href="/services/family-nutrition"
              className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow text-center w-full"
            >
              Book Now
            </Link>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
              alt="Sports Nutrition"
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-pink-700 font-bold text-xl mb-2">
              Sports Nutrition
            </h2>
            <p className="text-pink-800 text-center">
              Performance-focused plans for athletes and active individuals.
            </p>
            <div className="flex-grow" />
            <Link
              href="/services/sports-nutrition"
              className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow text-center w-full"
            >
              Book Now
            </Link>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1464998857633-50e0ffcfc8a0?auto=format&fit=crop&w=200&q=80"
              alt="Consultations"
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-pink-700 font-bold text-xl mb-2">
              Consultations
            </h2>
            <p className="text-pink-800 text-center">
              Expert advice and answers to your nutrition questions in a private
              session.
            </p>
            <div className="flex-grow" />
            <Link
              href="/services/consultations"
              className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow text-center w-full"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="mt-24" />
      </div>
      <Footer />
    </div>
  );
}
