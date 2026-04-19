"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-auto min-w-[2.5rem] px-2 h-8 bg-brand-amber text-brand-black rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-amber-glow">
              <span className="font-black text-xl italic tracking-tighter uppercase leading-none">IS</span>
            </div>
            <span className="flex items-center">
              <span className="text-brand-amber text-sm tracking-widest font-medium uppercase ml-1 animate-pulse">
                - IT Solution
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-amber text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className="px-6 py-2 bg-brand-amber text-brand-black font-semibold rounded text-sm hover:bg-yellow-400 transition-colors shadow-amber-glow hover:shadow-amber-glow-hover"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-brand-amber focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full animate-in slide-in-from-top-4 py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-brand-amber text-base font-medium px-2 py-1 rounded hover:bg-brand-charcoal transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-brand-amber text-brand-black text-center font-bold rounded-lg mt-4 shadow-amber-glow"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
