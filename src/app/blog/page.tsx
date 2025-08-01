import React from "react";
import Footer from "../../components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Blog</h1>
        <p className="max-w-xl text-center text-pink-800 text-lg">
          Welcome to Leo's blog! Here you'll find nutrition tips, healthy
          recipes, and inspiration for your wellness journey. Check back often
          for new posts.
        </p>
        <div className="mt-16" />
      </div>
      <div className="mb-16" />
      <Footer />
    </div>
  );
}
