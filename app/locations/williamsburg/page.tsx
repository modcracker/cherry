"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, MapPin, CheckCircle, Shield, ArrowRight, EyeOff, Sliders } from "lucide-react";
import williamsburgModelImg from "@/src/assets/images/williamsburg_loft_model_1782184198866.jpg";

export default function WilliamsburgLocation() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-rose-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <Header />

      <main className="pt-36">
        
        {/* Intro */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1 text-rose-500 font-mono text-xs uppercase tracking-widest font-bold">
            <MapPin className="w-3.5 h-3.5" /> North Brooklyn Waterfront
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Williamsburg Studio <br />
            <span className="font-semibold text-rose-500">Industrial Waterproof Lofts</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            Located deep inside New Brooklyn's creative center. Styled with exposed rustic bricks, modern glass partitions, and a panoramic city backdrop. Full protection guaranteed under zip codes <span className="text-white font-mono">11211 & 11249</span>.
          </p>
        </section>

        {/* Funnel: Premium Specs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-light text-white leading-tight">
              Tech-Forward Splendors and <br />
              <span className="font-semibold text-rose-500">Full Crypt Shielding</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Our Williamsburg studio targets modern creators focusing on technical superiority. Featuring 4K-integrated streaming terminals and highly isolated audio cards to route direct, crystal transmissions.
            </p>
            <div className="space-y-4 font-sans text-sm text-gray-300">
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Waterfront views with customizable mechanized window screens.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Dedicated stream-sync consoles for effortless multi-platform routing.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Fully integrated client-side VPN and hardware-isolated router blocks.</span>
              </div>
            </div>
          </div>

          {/* Photo Representation Card */}
          <div className="relative rounded-2xl overflow-hidden border border-rose-500/15 h-80 flex flex-col justify-end p-8 group shadow-2xl bg-neutral-950">
            <div className="absolute inset-0 z-0">
              <Image
                src={williamsburgModelImg}
                alt="Williamsburg Studio Live Broadcast Model"
                fill
                placeholder="blur"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.55] group-hover:brightness-[0.65]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/10 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold">Williamsburg Industrial Loft C</span>
              <p className="text-xl font-display text-white">Waterfront Exposed Steel & High Glass Layout</p>
              <div className="flex gap-4 text-xs text-gray-400 font-mono">
                <span>Zipcodes: 11211, 11249</span>
                <span>Space: 1,320 sq ft</span>
              </div>
            </div>
          </div>
        </section>

        {/* Localized Apply Form Funnel */}
        <section id="local-apply" className="py-16 bg-white/[0.005] border-t border-b border-white/[0.03]">
          <div className="max-w-xl mx-auto px-4">
            <div className="glass-panel rounded-2xl p-8 sm:p-10 border-rose-500/10">
              
              {submitted ? (
                <div className="text-center space-y-4 py-8">
                  <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-400 mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Brooklyn Session Synced</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Our Brooklyn coordinator will call you discreetly via encrypted communication channels.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white font-display">Acquire Brooklyn Studio</h3>
                    <p className="text-xs text-gray-400 mt-1">Provide your credentials to check open booking brackets.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Stage Name / Preferred Handle *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Discreet Email Account *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white"
                    />
                    <textarea
                      placeholder="Special equipment requirements (Camera lenses, micro setups, private stream servers)"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white resize-none"
                    />
                    <button type="submit" className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg">
                      Submit Williamsburg Application
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
