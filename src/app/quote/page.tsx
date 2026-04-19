"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";
import { submitWeb3Form } from "@/lib/web3forms";

const serviceTypes = [
  { id: "pos", label: "POS Solutions" },
  { id: "web", label: "Web & Software Development" },
  { id: "design", label: "Graphic & Brand Design" },
  { id: "it", label: "Managed IT & Network" },
  { id: "other", label: "Others" },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const isStepValid = () => {
    if (step === 1) return formData.service !== "";
    if (step === 2) return formData.name !== "" && formData.email !== "";
    return true;
  };

  const handleServiceSelect = (service: string) => {
    setFormData((current) => ({ ...current, service }));
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid() || isSubmitting) {
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      await submitWeb3Form({
        subject: "New Quote Request - IS-IT Solution",
        from_name: "IS-IT Solution Website",
        replyto: formData.email,
        form_type: "Quote Request",
        service: serviceTypes.find((type) => type.id === formData.service)?.label || formData.service,
        name: formData.name,
        email: formData.email,
        company: formData.company || "Not provided",
        details: formData.details || "Not provided",
      });

      setStep(3);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your request right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-32 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl relative">
        {/* Glow behind form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-brand-amber/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="glass rounded-3xl p-8 md:p-12 relative z-10 border border-gray-800 shadow-2xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Get a <span className="text-brand-amber">Quote</span>
            </h1>
            <p className="text-gray-400">Let&apos;s build something exceptional together.</p>
          </div>

          {/* Progress Bar */}
          {step < 3 && (
            <div className="w-full bg-brand-charcoal h-1 mb-12 rounded-full overflow-hidden">
              <div 
                className="bg-brand-amber h-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Service Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-white mb-6">What service are you looking for?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceTypes.map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => handleServiceSelect(type.id)}
                        className={clsx(
                          "p-6 rounded-xl text-left transition-all duration-300 border",
                          formData.service === type.id
                            ? "bg-brand-amber/10 border-brand-amber text-brand-amber shadow-amber-glow"
                            : "bg-brand-charcoal border-gray-800 text-gray-300 hover:border-gray-600 focus:outline-none"
                        )}
                      >
                        <span className="block font-medium text-lg">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-white mb-6">A bit about you.</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-amber transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-amber transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-brand-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-amber transition-colors"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-brand-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-amber transition-colors resize-none"
                      placeholder="Tell us a bit more about what you need..."
                    ></textarea>
                  </div>
                  {submitError && (
                    <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {submitError}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Step 3: Success Message */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-amber/10 text-brand-amber mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Request Submitted</h2>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Thank you, {formData.name || 'friend'}! We&apos;ve received your request and will get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setStep(1); setSubmitError(""); setFormData({ service: "", name: "", email: "", company: "", details: "" }); }}
                    className="px-8 py-3 border border-gray-700 rounded-lg hover:border-brand-amber transition-colors text-white"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 3 && (
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-800">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={step === 1}
                  className={clsx(
                    "flex items-center space-x-2 font-medium transition-colors",
                    step === 1 ? "text-gray-600 cursor-not-allowed" : "text-gray-400 hover:text-white"
                  )}
                >
                  <ArrowLeft size={18} />
                  <span>Back</span>
                </button>
                
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={clsx(
                      "flex items-center space-x-2 font-bold px-6 py-3 rounded-lg transition-all",
                      isStepValid()
                        ? "bg-brand-amber text-brand-black shadow-amber-glow hover:bg-yellow-400"
                        : "bg-gray-800 text-gray-500 cursor-not-allowed"
                    )}
                  >
                    <span>Next Step</span>
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid() || isSubmitting}
                    className={clsx(
                      "flex items-center space-x-2 font-bold px-6 py-3 rounded-lg transition-all",
                      isStepValid() && !isSubmitting
                        ? "bg-brand-amber text-brand-black shadow-amber-glow hover:bg-yellow-400"
                        : "bg-gray-800 text-gray-500 cursor-not-allowed"
                    )}
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit Request"}</span>
                    <CheckCircle2 size={18} />
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
