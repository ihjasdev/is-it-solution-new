"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

type Category = "All" | "POS Systems" | "Web Development" | "Graphic Design" | "Networking";

const categories: Category[] = ["All", "POS Systems", "Web Development", "Graphic Design", "Networking"];

// Placeholder data representing central JSON file concept
const portfolioData = [
  {
    id: 1,
    title: "RetailSync POS",
    category: "POS Systems",
    image: "https://images.unsplash.com/photo-1556740749-887f6717defa?auto=format&fit=crop&w=800&q=80",
    description: "Multi-branch retail management system with real-time sync.",
  },
  {
    id: 2,
    title: "NexTech Corporate Site",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "High-performance enterprise website built with Next.js.",
  },
  {
    id: 3,
    title: "Vanguard Rebranding",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    description: "Complete visual identity overhaul and marketing collateral.",
  },
  {
    id: 4,
    title: "Global Office Network",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    description: "Secure structured cabling and server infrastructure setup.",
  },
  {
    id: 5,
    title: "DineSmart Kiosk software",
    category: "POS Systems",
    image: "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?auto=format&fit=crop&w=800&q=80",
    description: "Self-service ordering kiosk tailored for fast food chains.",
  },
  {
    id: 6,
    title: "FinDash Analytics",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "SaaS dashboard for financial data visualization.",
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredData = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={clsx(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === cat
                ? "bg-brand-amber text-brand-black shadow-amber-glow scale-105"
                : "bg-brand-charcoal text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredData.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-brand-charcoal border border-gray-800 aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-amber text-xs font-bold uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  href={`/works/${project.id}`}
                  className="inline-flex items-center text-white hover:text-brand-amber transition-colors text-sm font-semibold opacity-0 group-hover:opacity-100 duration-300 delay-150"
                >
                  View Case Study <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
