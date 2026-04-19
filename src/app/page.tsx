"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MonitorSmartphone, Code2, PenTool, Database, Network, ShieldCheck, X } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "POS Solutions",
    description: "Enterprise-grade retail and restaurant software with seamless inventory tracking and hardware integration.",
    detailedDescription: "Our custom POS Solutions are designed to streamline operations for retail and restaurant businesses. We integrate inventory management, robust sales analytics, and seamless hardware support (receipt printers, barcode scanners, cash drawers). Enjoy multi-location synchronization and real-time cloud backups to ensure your business runs without missing a beat.",
    icon: MonitorSmartphone,
  },
  {
    title: "Web & Software Development",
    description: "Custom full-stack applications, scalable architectures, and modern web experiences tailored to your needs.",
    detailedDescription: "We engineer high-performance web applications tailored to your specific business logic. From high-converting corporate websites to complex SaaS platforms, our team utilizes the latest in Next.js, React, and robust backend architectures to deliver lightning-fast, secure, and scalable digital products.",
    icon: Code2,
  },
  {
    title: "Graphic & Brand Design",
    description: "Compelling brand identities, intuitive UI/UX design, and premium marketing collateral.",
    detailedDescription: "Aesthetics dictate perception. Our design team crafts stunning visual identities, intuitive user interfaces (UI), and seamless user experiences (UX) that captivate audiences. Whether it's a complete company rebranding, logo design, or pixel-perfect app wireframes, we build brands that stand out.",
    icon: PenTool,
  },
  {
    title: "Managed IT Support",
    description: "24/7 strategic maintenance, helpdesk services, and proactive cloud management.",
    detailedDescription: "Downtime is not an option. We provide comprehensive 24/7 IT support, including remote monitoring, proactive server maintenance, workstation setup, and dedicated helpdesk services. We act as your entire IT department, so you can focus on growing your business while we handle the technology.",
    icon: Database,
  },
  {
    title: "Network & Infrastructure",
    description: "Reliable structured cabling, server management, and robust enterprise routing setups.",
    detailedDescription: "Build your business on a solid foundation. We design and deploy high-speed, secure, and reliable physical and cloud networks. From precise structured cabling in office buildings to complex enterprise routing and server rack management, our infrastructure solutions are built to scale with your organization.",
    icon: Network,
  },
  {
    title: "Enterprise Security",
    description: "Advanced threat protection, security auditing, and compliance-driven firewalls.",
    detailedDescription: "Protect your most valuable asset: your data. Our enterprise security solutions include comprehensive vulnerability auditing, implementation of compliance-driven firewalls, zero-trust network architectures, and active malware/ransomware protection to keep your corporate environment impenetrable.",
    icon: ShieldCheck,
  },
];

type ServiceType = typeof services[0];

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedService]);

  return (
    <div className="bg-brand-black text-white relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-4">
        {/* Minimal Graph Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.10) 1px, transparent 1px)`,
            backgroundSize: `48px 48px`,
            maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)`
          }}
        />

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-brand-amber/10 blur-[130px] rounded-full pointer-events-none z-0" />
        
        <div className="z-10 text-center max-w-5xl mx-auto mt-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-brand-amber/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-amber shadow-amber-glow"
          >
            Your Trusted IT Partner
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Engineering the <span className="text-brand-amber text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-yellow-200">Future</span> of Your Business
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            A multi-disciplinary digital firm delivering premium web development, robust POS systems, and strategic enterprise IT.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/quote"
              className="w-full sm:w-auto px-8 py-4 bg-brand-amber text-brand-black font-bold rounded-lg text-lg hover:bg-yellow-400 transition-all shadow-amber-glow hover:shadow-amber-glow-hover"
            >
              Start a Project
            </Link>
            <Link
              href="/works"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white font-semibold rounded-lg text-lg hover:border-white transition-all glass"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Summary Array */}
      <section className="py-24 bg-gradient-to-b from-brand-black to-brand-charcoal px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Premium Digital Services</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => setSelectedService(service)}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Logos placeholder */}
      <section className="py-20 border-t border-b border-gray-800 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 font-medium mb-10 text-sm tracking-widest uppercase">Trusted by forward-thinking companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-bold font-sans">CORP <span className="text-brand-amber">ONE</span></div>
            <div className="text-xl font-bold font-serif">AeroDynamics</div>
            <div className="text-xl font-bold tracking-widest">NEXUS</div>
            <div className="text-xl font-black italic">Vertex</div>
            <div className="text-xl font-medium tracking-tight">GLOBAL<span className="font-light">sys</span></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-amber/5" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Elevate Your Business?</h2>
          <p className="text-xl text-gray-400 mb-12">Join forces with IS-IT Solution to build scalable systems that drive growth and maximize efficiency.</p>
          <Link
            href="/quote"
            className="inline-block px-10 py-5 bg-brand-amber text-brand-black font-bold rounded-lg text-xl hover:bg-yellow-400 transition-all shadow-amber-glow hover:shadow-amber-glow-hover"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-charcoal border border-gray-800 rounded-2xl shadow-2xl p-8 md:p-10 z-10 overflow-hidden"
            >
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-black/40 hover:bg-black/80 p-2 rounded-full z-20"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 border border-brand-amber/20 shadow-amber-glow shrink-0">
                  <selectedService.icon className="text-brand-amber" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">{selectedService.title}</h3>
              </div>
              
              <div className="relative z-10">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                  {selectedService.detailedDescription}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-auto">
                <Link
                  href="/quote"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 text-center px-6 py-4 bg-brand-amber text-brand-black font-bold rounded-lg hover:bg-yellow-400 transition-all shadow-amber-glow"
                >
                  Request this Service
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 px-6 py-4 bg-brand-black border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
