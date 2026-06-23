"use client";

import React from "react";
import { Cherry, ShieldCheck, Heart, Users, Compass, EyeOff, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "../../src/assets/images/model_lounging_bed_one_1782100906236.jpg";

export default function AboutSanctuary() {
  // Typography rules (32px, 16px, 13px Arial as per brand)
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  return (
    <div className="relative min-h-screen bg-[#070708] text-zinc-100 selection:bg-[#FF1E82]/30 selection:text-[#FF1E82] overflow-hidden">
      
      {/* EXQUISITE VISUAL HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={heroBg}
            alt="Cherry NYC Editorial Silhouette"
            fill
            priority
            className="object-cover object-center scale-[1.01] brightness-60 contrast-110 select-none"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          {/* Seductive luxury gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-black/80" />
          <div className="absolute inset-0 bg-radial from-[#FF1E82]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Hero content aligned in standard grid */}
        <div className="max-w-4xl w-full mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[10px] font-mono tracking-widest text-[#FF1E82] uppercase mx-auto">
            <Cherry className="w-3.5 h-3.5" />
            <span>ESTABLISHED 2021 // TRIBECA</span>
          </div>
          <h1 style={textTitle} className="text-white tracking-tight leading-tight uppercase font-extralight block">
            About <span className="font-bold text-[#FF1E82]">Cherry NYC</span>
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            We are New York City&apos;s leading secure private loungewear broadcasting suites, physical sanctuary environments, and IP protection network for high-vibe creative autonomy.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>
      <div className="absolute left-[-150px] bottom-[5%] opacity-[0.02] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[600px] h-[600px]" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[600px] rounded-full blur-[150px] pointer-events-none bg-radial from-[#FF1E82]/15 to-transparent opacity-40 z-0" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* Narrative Section 1: The Vision */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
          <div className="md:col-span-12 space-y-6">
            <h2 style={textHeader} className="text-white uppercase tracking-widest border-b border-white/5 pb-3 block">
              Our Visionary Standard
            </h2>
            <p style={textBody} className="text-zinc-300 font-light leading-relaxed">
              Cherry NYC was founded on a singular principal: <strong className="text-white font-semibold">autonomous creative dignity</strong>. In an era where online broadcasting and media channels are heavily capitalized but offer creators minimal security, we chose to construct physical structural safety combined with advanced military-grade geofencing proxy technologies.
            </p>
            <p style={textBody} className="text-zinc-300 font-light leading-relaxed">
              Behind our unmarked velvet door in Tribeca resides a sanctuary designed for beauty-space content, ASMR intimate soundscapes, and editorial fashion diaries. But more than rooms, we build shields.
            </p>
          </div>
        </div>

        {/* Grid of Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
          
          <div className="p-8 rounded-3xl bg-[#0C0C0F] border border-white/5 space-y-4 text-left">
            <div className="text-[#FF1E82] bg-[#FF1E82]/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 style={textHeader} className="text-white">Absolute Privacy</h3>
            <p style={textBody} className="text-zinc-400 font-light">
              We operate strictly via unmarked entrances. No public directories, zero public registries, and complete geofencing blocks across designated local ZIP codes or entire states.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0C0C0F] border border-white/5 space-y-4 text-left">
            <div className="text-[#FF1E82] bg-[#FF1E82]/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 style={textHeader} className="text-white">Encrypted IP Routing</h3>
            <p style={textBody} className="text-zinc-400 font-light">
              All broadcasts route securely through virtual private sub-servers, protecting you against reverse image lookup scrapes, PimEyes indexes, and malicious IP sniffing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0C0C0F] border border-white/5 space-y-4 text-left">
            <div className="text-[#FF1E82] bg-[#FF1E82]/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 style={textHeader} className="text-white">Elite 70% Revenue Split</h3>
            <p style={textBody} className="text-zinc-400 font-light">
              Unlike traditional modeling operators who demand 50% cuts, Cherry NYC advocates a model-first layout. You maintain a solid 70% of all platform proceeds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0C0C0F] border border-white/5 space-y-4 text-left">
            <div className="text-[#FF1E82] bg-[#FF1E82]/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 style={textHeader} className="text-white">Acoustic Silent Core</h3>
            <p style={textBody} className="text-zinc-400 font-light">
              Our Tribeca sanctuaries are soundproofed using advanced acoustic layers with a decay index RT60 of just 0.14s, giving ASMR and vocalists professional recording precision.
            </p>
          </div>

        </div>

        {/* Section: Ethical Commitment */}
        <div className="p-10 rounded-3xl bg-radial from-[#120509] via-[#09090C] to-[#09090C] border border-white/10 text-left relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 p-8 text-zinc-800 pointer-events-none select-none text-9xl font-mono opacity-[0.05] font-black">
            18+
          </div>
          <div className="space-y-4 relative z-10">
            <h3 style={textHeader} className="text-[#FF1E82] uppercase tracking-[0.2em] font-mono font-bold block">
              Ethical & Professional Standards
            </h3>
            <p style={textBody} className="text-zinc-300 font-light">
              We operate exclusively in alignment with federal compliance protocols, ethical modeling practices, and autonomous independent contracts. Absolutely no binding lock-ins, zero hidden administrative deductions, and complete control over your broadcast timecodes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-[10px] text-zinc-500">
              <div className="px-3 py-1 bg-black rounded-lg border border-white/5">● VERIFIED GENUINE ACCOUNTING</div>
              <div className="px-3 py-1 bg-black rounded-lg border border-white/5">● COMPLIANCE PASS [COMP]</div>
              <div className="px-3 py-1 bg-black rounded-lg border border-white/5">● 100% ETHICAL WORKSPACES</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-6 pt-6">
          <h3 className="text-2xl font-extralight text-white tracking-tight">Initiate Secure Onboarding</h3>
          <p style={textBody} className="text-zinc-400 max-w-md mx-auto">
            Ready to explore our physical rooms in Tribeca and test our geoblock virtual dashboards? Initiate highly private contact today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-rose-500 text-xs font-bold items-center transition-all shadow-lg shadow-[#FF1E82]/20"
            >
              Secure Communication Gateway
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 px-8 rounded-full border border-white/10 text-white hover:bg-white/5 text-xs font-bold items-center transition-all"
            >
              Homepage Portal
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
