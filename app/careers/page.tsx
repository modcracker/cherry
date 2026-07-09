"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, CheckCircle, Shield } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({ name: "", email: "", social: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-10 relative overflow-hidden border-rose-500/10">
          
          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-400 mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Registered Successfully</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Thank you for applying to Cherry NYC. Our director will reach out to you discreetly via encrypted channels within 24 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <span className="inline-block text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold">Model Career Applications</span>
                <h1 className="text-3xl font-display font-light text-white">Register With <span className="text-rose-500 font-semibold">Cherry NYC</span></h1>
                <p className="text-xs text-gray-400 font-sans max-w-sm mx-auto">Absolute luxury, higher split parameters, total database protection.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Stage Name / Preferred Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white"
                />
                <input
                  type="email"
                  required
                  placeholder="Private Email address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white"
                />
                <input
                  type="text"
                  placeholder="Social Profile / Instagram Handle (Optional)"
                  value={formData.social}
                  onChange={(e) => setFormData({ ...formData, social: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white"
                />
                <textarea
                  placeholder="Inquiries or preferences (Hours, studio preference, protection inquiries)"
                  rows={4}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white resize-none"
                />
                <button type="submit" className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg">
                  Submit Encrypted Registration
                </button>
              </form>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
