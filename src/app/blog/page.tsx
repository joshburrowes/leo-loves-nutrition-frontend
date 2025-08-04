import React from "react";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Blog() {
  // Example blog posts
  const posts = [
    {
      slug: "easy-breakfasts",
      title: "5 Easy Breakfasts for Busy Mornings",
      excerpt:
        "Start your day right with these quick, nutritious breakfast ideas that keep you energized and satisfied.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      date: "August 1, 2025",
      link: "#",
    },
    {
      slug: "balanced-plate",
      title: "How to Build a Balanced Plate",
      excerpt:
        "Learn the basics of portioning proteins, carbs, and veggies for optimal health and satisfaction.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "July 28, 2025",
      link: "#",
    },
    {
      slug: "hydration-hacks",
      title: "Hydration Hacks: Drink More Water Every Day",
      excerpt:
        "Simple tips to help you stay hydrated and feel your best, even on busy days.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      date: "July 20, 2025",
      link: "#",
    },
    {
      slug: "healthy-snacking",
      title: "Healthy Snacking for Energy & Focus",
      excerpt:
        "Discover smart snack choices that boost your energy and keep you focused throughout the day.",
      image:
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=400&q=80",
      date: "July 15, 2025",
      link: "#",
    },
    {
      slug: "meal-prep-101",
      title: "Meal Prep 101: Save Time & Eat Well",
      excerpt:
        "A beginner's guide to meal prepping for a week of healthy, delicious meals.",
      image:
        "https://images.unsplash.com/photo-1464998857633-50e0ffcfc8a0?auto=format&fit=crop&w=400&q=80",
      date: "July 10, 2025",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center p-8">
        <h1 className="text-5xl font-extrabold text-pink-700 mb-4 tracking-tight">
          Leo's Nutrition Blog
        </h1>
        <p className="max-w-xl text-center text-pink-800 text-lg mb-8">
          Welcome to Leo's blog! Here you'll find nutrition tips, healthy
          recipes, and inspiration for your wellness journey. Check back often
          for new posts.
        </p>

        {/* Featured Post */}
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-6 mb-12 flex flex-col md:flex-row items-center md:items-stretch gap-6">
          <img
            src={posts[0].image}
            alt={posts[0].title}
            className="w-40 h-40 rounded-2xl object-cover shadow-md mb-4 md:mb-0"
          />
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="text-2xl font-bold text-pink-700 mb-2">
              {posts[0].title}
            </h2>
            <p className="text-pink-800 mb-2">{posts[0].excerpt}</p>
            <span className="text-xs text-pink-400 mb-4">{posts[0].date}</span>
            <div className="flex md:justify-start justify-center">
              <Link
                href={`/blog/${posts[0].slug}`}
                className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-32 h-32 rounded-xl object-cover mb-4 shadow"
              />
              <h3 className="text-lg font-bold text-pink-700 mb-1 text-center">
                {post.title}
              </h3>
              <p className="text-pink-800 text-sm text-center mb-2">
                {post.excerpt}
              </p>
              <span className="text-xs text-pink-400 mb-2">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-pink-600 hover:text-pink-900 font-semibold text-sm px-4 py-2 rounded-full bg-pink-50 shadow"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16" />
      </div>
      <div className="mb-16" />
      <Footer />
    </div>
  );
}
