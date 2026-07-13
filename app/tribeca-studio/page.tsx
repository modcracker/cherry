"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, MapPin, CheckCircle, Flame, Video, ShieldAlert, Cpu, Heart } from "lucide-react";
import Link from "next/link";

export default function TribecaHQ() {
  const specs = [
    {
      title: "4K Sony DSLR Camera Systems",
      desc: "Every suite is equipped with native 4K Sony Alpha Series DSLR cameras running high-aperture G-Master lenses, offering incredible depth of field, real-time eye-tracking auto-focus, and ultra-high-resolution broadcast quality."
    },
    {
      title: "DMX-Controlled Professional Lighting",
      desc: "Fully customizable overhead LED softbox grids, ambient backlights, and professional warm ring illuminations managed via local touch panels to match your brand's unique color palette."
    },
    {
      title: "Commercial-Grade Soundproofing",
      desc: "Constructed with multi-layered acoustic partition walls, specialized ceiling baffles, and heavy soundproof velvet curtains to eliminate any noise and provide studio-grade vocal resonance."
    },
    {
      title: "Private Vanity & Beauty Bar",
      desc: "Spacious private dressing stations loaded with Hollywood vanity bulb layouts, professional make-up mirrors, premium cosmetic organizers, and high-purity sateen lounge linen."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-10 w-[450px] h-[450px] bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <Header />
      
      <main className="pt-36 max-w-5xl mx-auto px-4 sm:px-6 pb-24 relative z-10">
        <div className="space-y-16">
          
          {/* Header Area */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5" /> Flagship Manhattan HQ
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
              The Tribeca Sanctuary <br />
              <span className="font-semibold text-rose-500">Premium Broadcast HQ</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed max-w-3xl">
              Situated discretely behind an unmarked entrance in Manhattan&apos;s historic Tribeca warehouse district, our flagship headquarters represents the absolute pinnacle of physical webcam modeling infrastructure. Built inside an expansive, high-ceiling loft, each suite is architecturally designed to mimic a premium luxury penthouse residence.
            </p>
          </div>

          {/* Deep Content Section 1: Physical Infrastructure */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-light text-white">
                Physical Security Met with <span className="font-semibold text-rose-500">Peak Technology</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                At Cherry NYC, we understand that a premium broadcast requires more than just a camera and a laptop. Our Tribeca suites provide a fully-managed environment where every detail—from custom-built room acoustics and temperature controls to fiber-optic network routing—is optimized for uninterrupted, high-yield streaming.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Privacy is woven into our physical design. Models access the building through a passcode-locked, high-security corporate elevator system with private lobby reception. We maintain zero public directories, ensuring your visits remain completely confidential.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/careers" className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
                  Apply for Residency
                </Link>
                <Link href="/locations/soho" className="px-6 py-3 border border-white/10 hover:border-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
                  View SoHo Lofts
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border-white/[0.03] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full filter blur-xl" />
              <h3 className="text-base font-semibold text-white flex items-center gap-2 font-display">
                <Cpu className="w-5 h-5 text-rose-500" /> Suite Tech Specs
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Dedicated Dual-Fiber Feeds</p>
                    <p className="text-[11px] text-gray-400">1 Gbps symmetric corporate connection with automatic backup failover lines.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Advanced Hardware VPN Routers</p>
                    <p className="text-[11px] text-gray-400">All stream traffic is routed through encrypted dedicated VPN tunnels to mask local IP addresses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Private Climate Zones</p>
                    <p className="text-[11px] text-gray-400">Individually controlled, silent HVAC units in every suite to keep you cool and comfortable.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Deep Content Section 2: Detailed Specifications */}
          <section className="space-y-8 pt-6">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-light text-white">
                World-Class Suite <span className="font-semibold text-rose-500">Amenities</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans">
                We spare no expense to provide our models with the ultimate physical broadcasting sanctuary in Manhattan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((spec, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl space-y-3 border-white/[0.03]">
                  <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-lg w-fit">
                    {idx % 2 === 0 ? <Video className="w-5 h-5" /> : <Flame className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-semibold text-white">{spec.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{spec.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security Banner */}
          <section className="glass-panel p-8 rounded-2xl border-rose-500/10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-400" /> Private Scheduled Booking Access
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our Tribeca Flagship lofts operate strictly via discreet, scheduled bookings and long-term residency agreements. This ensures zero overlapping model traffic and complete, uncompromised confidentiality.
              </p>
            </div>
            <Link href="/careers" className="px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shrink-0">
              Apply For Residency
            </Link>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
