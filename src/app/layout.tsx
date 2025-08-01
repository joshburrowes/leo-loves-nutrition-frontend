import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leo Loves Nutrition",
  description: "Nutrition services by Leo.",
};

function Navbar() {
  return (
    <nav className="w-full bg-pink-100/80 backdrop-blur-md shadow-sm py-4 px-8 flex justify-center sticky top-0 z-50">
      <ul className="flex gap-8 text-pink-700 font-semibold text-lg">
        <li>
          <Link
            href="/"
            className="hover:text-pink-900 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-pink-900 transition duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="hover:text-pink-900 transition duration-200"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-pink-900 transition duration-200"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover:text-pink-900 transition duration-200"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
