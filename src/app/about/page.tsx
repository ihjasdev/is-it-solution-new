"use client";

import { motion } from "framer-motion";
import { Users, Target, Shield, Clock } from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "Precision", desc: "We believe in writing clean code, exact infrastructure setup, and pixel-perfect design.", icon: Target },
    { title: "Integrity", desc: "Transparent billing, honest timelines, and secure data handling are core to our identity.", icon: Shield },
    { title: "Reliability", desc: "Your business doesn't stop, and neither do we. We build systems designed for maximum uptime.", icon: Clock },
    { title: "Collaboration", desc: "We don't just work for you; we act as an extension of your own internal teams.", icon: Users },
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">
              Who is <span className="text-brand-amber">IS - IT Solution?</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              We are a multi-disciplinary collective of engineers, designers, and strategists. Based in Kinniya, Sri Lanka, we empower local and global businesses by bridging the gap between raw technology and human-centric design.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Narrative</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Founded on the premise that enterprise-grade technology should be accessible to all ambitious businesses, IS - IT Solution started as a boutique web development agency. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              Over the years, we recognized that our clients needed more than just a website—they needed robust Point of Sale systems to track inventory, reliable networks to keep their offices online, and secure environments to protect their data. Today, we are a holistic digital firm providing 360-degree technological support.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team collaborating"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-brand-amber mix-blend-overlay opacity-20" />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="border-t border-gray-800 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Our Core <span className="text-brand-amber">Values</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-charcoal p-8 rounded-2xl border border-gray-800 text-center group hover:border-brand-amber transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-black rounded-xl flex items-center justify-center mb-6 text-brand-amber group-hover:scale-110 transition-transform duration-300 shadow-amber-glow">
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
