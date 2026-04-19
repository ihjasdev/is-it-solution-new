"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, onClick, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <button onClick={onClick} className="block w-full h-full text-left">
        <div className="h-full p-8 rounded-2xl bg-brand-charcoal border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-brand-amber/30 shadow-amber-glow focus:outline-none focus:ring-2 focus:ring-brand-amber flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:bg-brand-amber transition-colors duration-300">
              <Icon className="text-brand-amber group-hover:text-black transition-colors duration-300" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              {description}
            </p>
          </div>
          
          <div className="mt-auto flex items-center text-brand-amber font-semibold text-sm">
            <span className="mr-2">Explore Details</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </button>
    </motion.div>
  );
}
