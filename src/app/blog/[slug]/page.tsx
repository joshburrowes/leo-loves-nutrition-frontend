import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const FAKE_POSTS = [
  {
    slug: "easy-breakfasts",
    title: "5 Easy Breakfasts for Busy Mornings",
    date: "August 1, 2025",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    content: `Start your day right with these quick, nutritious breakfast ideas that keep you energized and satisfied.\n\n1. Overnight oats\n2. Greek yogurt parfait\n3. Avocado toast\n4. Smoothie bowl\n5. Nut butter banana wrap`,
  },
  {
    slug: "balanced-plate",
    title: "How to Build a Balanced Plate",
    date: "July 28, 2025",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    content: `Learn the basics of portioning proteins, carbs, and veggies for optimal health and satisfaction.\n\nA balanced plate includes: protein, whole grains, healthy fats, and plenty of vegetables.`,
  },
  {
    slug: "hydration-hacks",
    title: "Hydration Hacks: Drink More Water Every Day",
    date: "July 20, 2025",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    content: `Simple tips to help you stay hydrated and feel your best, even on busy days.\n\n- Carry a water bottle\n- Infuse with fruit\n- Set reminders`,
  },
  {
    slug: "healthy-snacking",
    title: "Healthy Snacking for Energy & Focus",
    date: "July 15, 2025",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=400&q=80",
    content: `Discover smart snack choices that boost your energy and keep you focused throughout the day.\n\nTry: nuts, seeds, fruit, yogurt, hummus with veggies.`,
  },
  {
    slug: "meal-prep-101",
    title: "Meal Prep 101: Save Time & Eat Well",
    date: "July 10, 2025",
    image:
      "https://images.unsplash.com/photo-1464998857633-50e0ffcfc8a0?auto=format&fit=crop&w=400&q=80",
    content: `A beginner's guide to meal prepping for a week of healthy, delicious meals.\n\nPlan, shop, prep, and store for easy meals all week.`,
  },
];

export async function generateStaticParams() {
  return FAKE_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPost(props: { params: { slug: string } }) {
  const { params } = props;
  const post = FAKE_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">
          Post Not Found
        </h1>
        <Link
          href="/blog"
          className="text-pink-600 hover:text-pink-900 font-semibold"
        >
          Back to Blog
        </Link>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center p-8">
        <div className="w-64 h-64 relative rounded-3xl overflow-hidden shadow-lg mb-6">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        <h1 className="text-4xl font-extrabold text-pink-700 mb-2 text-center">
          {post.title}
        </h1>
        <span className="text-xs text-pink-400 mb-4">{post.date}</span>
        <div className="max-w-2xl text-pink-800 text-lg whitespace-pre-line mb-8 text-center">
          {post.content}
        </div>
        <Link
          href="/blog"
          className="text-pink-600 hover:text-pink-900 font-semibold"
        >
          ← Back to Blog
        </Link>
      </div>
      <Footer />
    </div>
  );
}
