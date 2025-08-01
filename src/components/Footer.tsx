import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-pink-700 text-white py-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Leo Loves Nutrition. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">
          Follow us on social media for more updates and tips!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
