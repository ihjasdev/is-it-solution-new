import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-2 group mb-6">
              <div className="w-auto min-w-[2.5rem] px-2 h-8 bg-brand-amber text-brand-black rounded-sm flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-300 shadow-amber-glow">
                <span className="font-black text-xl italic tracking-tighter uppercase leading-none">IS</span>
              </div>
              <span className="flex items-center">
                <span className="text-brand-amber text-sm tracking-widest font-medium uppercase ml-1">
                  - IT Solution
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              A multi-disciplinary digital firm empowering businesses with premium POS systems, web development, and managed IT services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm border-b border-brand-amber pb-2 inline-block">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-brand-amber transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">-</span>About Us</Link></li>
              <li><Link href="/works" className="hover:text-brand-amber transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">-</span>Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-brand-amber transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">-</span>Services</Link></li>
              <li><Link href="/contact" className="hover:text-brand-amber transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">-</span>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm border-b border-brand-amber pb-2 inline-block">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/pos" className="hover:text-brand-amber transition-colors">POS Solutions</Link></li>
              <li><Link href="/services/web-dev" className="hover:text-brand-amber transition-colors">Web Development</Link></li>
              <li><Link href="/services/design" className="hover:text-brand-amber transition-colors">Brand Design</Link></li>
              <li><Link href="/services/network" className="hover:text-brand-amber transition-colors">IT Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm border-b border-brand-amber pb-2 inline-block">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-amber mr-3 mt-0.5 flex-shrink-0" />
                <span>Kinniya, Trincomalee, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-brand-amber mr-3 flex-shrink-0" />
                <span>+94 766313173 / +94 758913173</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-brand-amber mr-3 flex-shrink-0" />
                <a href="mailto:info@isitsolution.com" className="hover:text-white transition-colors">info@isitsolution.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} IS-IT Solution. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
