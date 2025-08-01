import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Leo Loves Nutrition. All rights
          reserved.
        </p>
        <nav className="mt-4 mb-2">
          <ul className="flex flex-wrap justify-center gap-6 text-pink-700 font-semibold text-md">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-pink-500"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-pink-500"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.53 3.5h3.47l-7.59 8.7 8.93 11.3h-7.03l-5.52-6.98-6.32 6.98H2.47l8.13-9.3L1.5 3.5h7.18l4.98 6.3 6.87-6.3zm-1.22 17.13h1.94l-6.02-7.61-1.6 1.83 5.68 5.78zm-8.13-16.13l5.44 6.88 1.5-1.74-4.98-6.14h-1.96zm-2.13 1.13l6.02 7.61 1.6-1.83-5.68-5.78zm13.13 16.13l-5.44-6.88-1.5 1.74 4.98 6.14h1.96zm2.13-1.13l-6.02-7.61-1.6 1.83 5.68 5.78z" />
            </svg>
          </a>
        </div>
        <p className="text-sm mt-4">
          Follow us on social media for more updates and tips!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
