"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { submitWeb3Form } from "@/lib/web3forms";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSubmitError("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      await submitWeb3Form({
        subject: "New Contact Message - IS-IT Solution",
        from_name: "IS-IT Solution Website",
        replyto: formData.email,
        form_type: "Contact Message",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setSuccessMessage("Your message has been sent successfully. We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Get in <span className="text-brand-amber">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Whether you need a full enterprise POS deployment or a simple consultation, our engineers are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-brand-charcoal border border-gray-800 rounded-3xl overflow-hidden p-2">
          
          {/* Left panel info */}
          <div className="lg:col-span-2 bg-black rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-amber/20 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start">
                <MapPin className="text-brand-amber mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Base</h4>
                  <p className="text-gray-400">Kinniya, Trincomalee<br/>Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-brand-amber mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+94 766313173</p>
                  <p className="text-gray-400">+94 758913173</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-brand-amber mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">info@isitsolution.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-brand-amber mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-400">Monday - Saturday</p>
                  <p className="text-gray-400">09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel map & simple contact */}
          <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Need a formal quote?</h3>
              <p className="text-gray-400 mb-8">
                For complex projects, custom software development, or full network deployments, please use our detailed quotation tool.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 w-full md:w-auto bg-brand-amber text-brand-black font-bold rounded-lg hover:bg-yellow-400 transition-all shadow-amber-glow"
              >
                Go to Quotation Form
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">Send us a direct message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-amber"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-amber resize-none"
                  ></textarea>
                  {submitError && (
                    <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {submitError}
                    </p>
                  )}
                  {successMessage && (
                    <p className="rounded-lg border border-brand-amber/20 bg-brand-amber/10 px-4 py-3 text-sm text-brand-amber">
                      {successMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-transparent border border-gray-600 text-white font-semibold rounded-lg hover:border-brand-amber transition-all disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
