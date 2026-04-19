"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Code2, PenTool, Database, Network, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    title: "POS Solutions",
    description: "Enterprise-grade retail and restaurant software with seamless inventory tracking.",
    icon: MonitorSmartphone,
    features: ["Cloud Synchronization", "Hardware Integration", "Real-time Analytics", "Employee Management"]
  },
  {
    title: "Web & Software Development",
    description: "Custom full-stack applications, scalable architectures, and modern web experiences.",
    icon: Code2,
    features: ["High-performance Next.js", "Custom APIs", "E-Commerce Platforms", "SaaS Development"]
  },
  {
    title: "Graphic & Brand Design",
    description: "Compelling brand identities, intuitive UI/UX design, and premium marketing collateral.",
    icon: PenTool,
    features: ["Corporate Branding", "UI/UX Wireframing", "Social Media Kits", "Print Design"]
  },
  {
    title: "Managed IT Support",
    description: "24/7 strategic maintenance, helpdesk services, and proactive cloud management.",
    icon: Database,
    features: ["Remote Helpdesk", "24/7 Monitoring", "Disaster Recovery", "Cloud Backups"]
  },
  {
    title: "Network & Infrastructure",
    description: "Reliable structured cabling, server management, and robust enterprise routing setups.",
    icon: Network,
    features: ["Server Rack Setup", "Structured Cabling", "Enterprise Wi-Fi", "Office Relocation IT"]
  },
  {
    title: "Enterprise Security",
    description: "Advanced threat protection, security auditing, and compliance-driven firewalls.",
    icon: ShieldCheck,
    features: ["Penetration Testing", "Ransomware Protection", "Zero-Trust Architecture", "Compliance Auditing"]
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-black min-h-[calc(100vh-200px)] pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Our <span className="text-brand-amber">Services</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Comprehensive technological solutions tailored for forward-thinking enterprises. Explore exactly how we can accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {allServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-charcoal border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-brand-amber/30 transition-colors group relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="flex items-start mb-6 align-top">
                <div className="w-16 h-16 rounded-2xl bg-black flex flex-shrink-0 items-center justify-center mr-6 border border-gray-800 group-hover:border-brand-amber transition-colors shadow-none group-hover:shadow-amber-glow">
                  <service.icon className="text-brand-amber" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-800 pt-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-brand-amber mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a custom approach?</h2>
          <Link
            href="/quote"
            className="inline-block px-10 py-4 bg-transparent border-2 border-brand-amber text-brand-amber font-bold rounded-lg hover:bg-brand-amber hover:text-brand-black transition-all shadow-amber-glow"
          >
            Contact Our Architects
          </Link>
        </div>
      </div>
    </div>
  );
}
