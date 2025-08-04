import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-pink-100/80 backdrop-blur-md shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link
        href="/"
        className="text-pink-900 font-extrabold text-3xl font-sans hover:text-pink-700 transition duration-200"
      >
        Leo Loves Nutrition{" "}
        <span className="text-pink-700" aria-hidden="true">
          💗
        </span>
      </Link>
      <ul className="flex gap-8 text-pink-700 font-semibold text-lg">
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
            href="/blog"
            className="hover:text-pink-900 transition duration-200"
          >
            Blog
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
            href="/contact"
            className="hover:text-pink-900 transition duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
