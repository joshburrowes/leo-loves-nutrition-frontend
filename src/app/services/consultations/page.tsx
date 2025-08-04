import React from "react";
import Footer from "../../../components/Footer";

export default function Consultations() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Consultations</h1>
        <p className="max-w-xl text-center text-pink-800 text-lg mb-8">
          Expert advice and answers to your nutrition questions in a private
          session. Book a session to get started!
        </p>
        <form className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg flex flex-col gap-6">
          <div>
            <label className="block text-pink-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-pink-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-pink-700 font-semibold mb-2">
              Service
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 bg-pink-50"
              value="Consultations"
              readOnly
            />
          </div>
          <div>
            <label className="block text-pink-700 font-semibold mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-pink-700 font-semibold mb-2">
              Additional Details
            </label>
            <textarea className="w-full border rounded-lg px-4 py-2" rows={3} />
          </div>
          <button
            type="submit"
            className="mt-4 text-pink-600 hover:text-pink-900 font-semibold text-lg px-6 py-3 rounded-full bg-pink-100 shadow"
          >
            Submit Booking
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
