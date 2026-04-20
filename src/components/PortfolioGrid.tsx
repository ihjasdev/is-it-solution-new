"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { clsx } from "clsx";

const GithubIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.04c3.7-.36 7.5-1.84 7.5-8.16 0-1.84-.6-3.32-1.6-4.48.16-.4.72-2.12-.16-4.44C1 2.84 1 2.84 1 2.84S2.96 4.88 4.28 4.68A13.38 13.38 0 0 1 11.84 4.68s2.96-2.04 4.28-1.84c.88 2.32.32 4.04.16 4.44 1 1.16 1.6 2.64 1.6 4.48 0 6.32-3.8 7.8-7.5 8.16a4.8 4.8 0 0 1 1 3.04v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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
    fullDescription: "RetailSync POS is an end-to-end multi-branch retail management software designed to scale with your business. It streamlines operations, manages inventory across multiple locations, and syncs everything in real-time, providing deep analytics and a sleek checkout experience.",
    github: "https://github.com/is-itsolution"
  },
  {
    id: 2,
    title: "NexTech Corporate Site",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "High-performance enterprise website built with Next.js.",
    fullDescription: "A cutting-edge corporate website for NexTech. Built leveraging the power of Next.js and Tailwind CSS, this site focuses on high performance, SEO optimization, and a seamless and premium user experience with elegant animations.",
    github: "https://github.com/is-itsolution"
  },
  {
    id: 3,
    title: "Vanguard Rebranding",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    description: "Complete visual identity overhaul and marketing collateral.",
    fullDescription: "A comprehensive rebranding project for Vanguard. We designed a striking new logo, developed a modern color palette, and created extensive marketing collateral to position Vanguard as a premium player in their industry.",
    github: "https://github.com/is-itsolution"
  },
  {
    id: 4,
    title: "Global Office Network",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    description: "Secure structured cabling and server infrastructure setup.",
    fullDescription: "We deployed a robust and highly secure structured cabling and enterprise network infrastructure for Global Office. This involved advanced routing, VLAN configurations, and scalable server architecture.",
    github: "https://github.com/is-itsolution"
  },
  {
    id: 5,
    title: "DineSmart Kiosk software",
    category: "POS Systems",
    image: "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?auto=format&fit=crop&w=800&q=80",
    description: "Self-service ordering kiosk tailored for fast food chains.",
    fullDescription: "DineSmart is an interactive, highly responsive self-service kiosk application aimed at quick-service restaurants. Built to reduce wait times and feature upselling through a beautiful, intuitive user interface.",
    github: "https://github.com/is-itsolution"
  },
  {
    id: 6,
    title: "FinDash Analytics",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "SaaS dashboard for financial data visualization.",
    fullDescription: "An advanced real-time financial tracking dashboard designed for transparency and speedy decision-making. Integrates complex charting libraries and deep data insights wrapped in a modern dark UI.",
    github: "https://github.com/is-itsolution"
  },
];

type Project = typeof portfolioData[0];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-white hover:text-brand-amber transition-colors text-sm font-semibold opacity-0 group-hover:opacity-100 duration-300 delay-150"
                >
                  View Case Study <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-brand-charcoal border border-gray-800 rounded-2xl shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-brand-amber hover:text-black text-white rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="w-full relative h-[300px] sm:h-[400px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent" />
              </div>

              <div className="p-8 sm:p-12 -mt-20 relative z-10">
                <span className="inline-block px-3 py-1 bg-brand-amber/10 text-brand-amber text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-brand-amber/20">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    <GithubIcon size={20} className="mr-2" />
                    View on GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center px-6 py-3 bg-transparent border border-gray-700 text-white hover:border-gray-500 rounded-lg font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
