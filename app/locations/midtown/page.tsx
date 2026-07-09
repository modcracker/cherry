"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, MapPin, CheckCircle, Shield, ArrowRight, EyeOff, Sliders } from "lucide-react";
import midtownModelImg from "@/src/assets/images/midtown_penthouse_model_1782184211147.jpg";

export default function MidtownLocation() {
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
            <MapPin className="w-3.5 h-3.5" /> Core Corporate Manhattan Precinct
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Midtown Manhattan <br />
            <span className="font-semibold text-rose-500">Penthouse Suites</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            Perched high above the city skyline. Panoramic skyline lofts overlooking the city, equipped with lightning-fast fibers and corporate-grade anonymity blocks. Full safety in zip codes <span className="text-white font-mono">10018, 10001, & 10036</span>.
          </p>
        </section>

        {/* Funnel: Premium Specs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-light text-white leading-tight">
              Summit-Level Payouts and <br />
              <span className="font-semibold text-rose-500">Continuous Privacy Escort</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Our Midtown residency penthouse spaces represent high-intensity brand growth. With 4K Sony display inputs, intelligent stream monitors, and professional key-code elevators.
            </p>
            <div className="space-y-4 font-sans text-sm text-gray-300">
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Panoramas of the Empire State and Hudson River lines.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Encrypted on-site stream security hardware limiting system metadata leaks.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Secure underground garage entrances with direct elevator connections.</span>
              </div>
            </div>
          </div>

          {/* Photo Representation Card */}
          <div className="relative rounded-2xl overflow-hidden border border-rose-500/15 h-80 flex flex-col justify-end p-8 group shadow-2xl bg-neutral-950">
            <div className="absolute inset-0 z-0">
              <Image
                src={midtownModelImg}
                alt="Midtown Studio Live Broadcast Model"
                fill
                placeholder="blur"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.55] group-hover:brightness-[0.65]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/10 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold">Midtown Penthouse C</span>
              <p className="text-xl font-display text-white">Full Glass Skyline High-Altitude View Layout</p>
              <div className="flex gap-4 text-xs text-gray-400 font-mono">
                <span>Zipcodes: 10018, 10001, 10036</span>
                <span>Space: 1,800 sq ft</span>
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
                  <h3 className="text-xl font-semibold text-white">Midtown Penthouse Reserved</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Our luxury brand executive will screen your profile and communicate discreetly.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white font-display">Reserve Midtown Penthouse</h3>
                    <p className="text-xs text-gray-400 mt-1">Submit your parameters to view luxury penthouse space accessibility.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Booking handle or Stage name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Discreet Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white"
                    />
                    <textarea
                      placeholder="Scheduling timelines or specific on-site requirements (Discreet configuration)"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white resize-none"
                    />
                    <button type="submit" className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg">
                      Request Penthouse Access Terms
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
