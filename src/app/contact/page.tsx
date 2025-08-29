import React from "react";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Contact Leo</h1>
        <p className="max-w-xl text-center text-pink-800 text-lg">
          Get in touch with Leo for personalized nutrition advice,
          consultations, or any questions you may have. We&apos;re here to help
          you on your wellness journey.
        </p>
        <div className="mt-16" />
        <form className="bg-white rounded-lg shadow p-8 w-full max-w-md flex flex-col gap-4">
          <style>{`
            ::placeholder {
              color: #a8005b;
              opacity: 1;
            }
          `}</style>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-pink-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-pink-300 rounded px-4 py-2"
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-pink-300 rounded px-4 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-16" />
      <Footer />
    </div>
  );
}
