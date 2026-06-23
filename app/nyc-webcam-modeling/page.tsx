"use client";

import React from "react";
import { Landmark, Compass, HelpCircle, CheckCircle, ArrowRight, BookOpen, Star, Cherry } from "lucide-react";
import Image from "next/image";
import heroBg from "../../src/assets/images/cherry_talent_one_1782100097075.jpg";

export default function NycWebcamModelingGuide() {
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  return (
    <div className="relative min-h-screen bg-[#070708] text-white overflow-hidden">
      
      {/* EXQUISITE VISUAL HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={heroBg}
            alt="Cherry NYC Manhattan Directory Guide"
            fill
            priority
            className="object-cover object-center scale-[1.01] brightness-55 contrast-115 select-none"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          {/* Seductive luxury gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-black/80" />
          <div className="absolute inset-0 bg-radial from-[#FF1E82]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Hero content aligned in standard grid */}
        <div className="max-w-4xl w-full mx-auto px-6 relative z-10 text-center space-y-6">
          <span style={textHeader} className="text-[#FF1E82] uppercase tracking-widest block font-bold flex items-center justify-center gap-2">
            <Cherry className="w-4 h-4 shrink-0" />
            <span>Manhattan Directory Guide</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight uppercase font-extralight block">
            The Definitive Guide to NYC <span className="font-bold text-[#FF1E82]">Webcam Modeling</span> & Broadcasting
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            As a global cultural hub, New York City is home to an extraordinary community of high-end digital lifestyle broadcasters and sensory creators. This local directory resource outlines what you need to scale, remain legally compliant, and choose the correct spaces.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* Informative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 font-normal">
          
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <Landmark className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block font-bold">
              1. Local New York Compliance Rules
            </span>
            <p style={textBody} className="text-gray-400 leading-relaxed font-normal">
              In New York State, webcam and independent modeling is fully legal for consenting adults aged 18 and older. To operate securely, online platforms demand rigorous 18+ ID verifications, tax reporting files (W-9 / 1099 structures), and strict compliance with global copyright terms.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <Compass id="boroughs" className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block font-bold">
              2. Finding an Commuter-Friendly Hub
            </span>
            <p style={textBody} className="text-gray-400 leading-relaxed font-normal">
              Many creators in Brooklyn, Queens, and New Jersey struggle with slow residential uploads, loud neighbors, or lack of visual space. Cherry NYC’s Tribeca layout acts as the ideal central commuting station, situated steps from local Greenwich lines.
            </p>
          </div>

        </div>

        {/* Detailed Guidelines */}
        <div className="space-y-6 pt-10 border-t border-white/5 font-normal text-left">
          <h2 style={textTitle} className="text-white">
            How to Build a Successful Broadcast Base in NYC
          </h2>

          <div className="space-y-6">
            
            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span className="text-[#FF1E82] text-xs font-mono font-bold uppercase tracking-wider block">PILLARS GATED</span>
              <span style={textHeader} className="text-white font-bold block">A. Elevate Visual Presentation Status</span>
              <p style={textBody} className="text-gray-400 leading-relaxed">
                Audiences on premium fan channels expect aesthetic excellence. Ditch gray apartment walls or dim yellow overhead lights. Clean, white daylight LED setups and spacious designer styling backdrops will lift your tips and retention overnight.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span className="text-[#FF1E82] text-xs font-mono font-bold uppercase tracking-wider block">PHYSICAL SAFETY</span>
              <span style={textHeader} className="text-white font-bold block">B. Maintain Rigid Boundaries</span>
              <p style={textBody} className="text-gray-405 text-[13px] leading-relaxed">
                The most successful creators define strict limits and never waiver. Do not allow physical fan meetups and always operate in a professional, non-physical, secure container. We enforce a zero-physical-touch policy throughout our facilities.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span className="text-[#FF1E82] text-xs font-mono font-bold uppercase tracking-wider block">TECH HARDWARE</span>
              <span style={textHeader} className="text-white font-bold block font-bold">C. Invest in Fiber & Camera Feed Quality</span>
              <p style={textBody} className="text-gray-405 text-[13px] leading-relaxed">
                Stuttering, blurry streams severely damage fan subscriptions. Broadcasters must utilize dual-redundant high-speed upload connections and professional DSLR gear. Avoid low-quality webcam configurations and leverage mirrorless systems instead.
              </p>
            </div>

          </div>
        </div>

        {/* CTA Contact */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#FF1E82]/10 to-transparent border border-[#FF1E82]/20 text-center space-y-4">
          <span style={textHeader} className="text-white block font-bold">
            Launch Your Brand in New York City Safely
          </span>
          <p style={textBody} className="text-gray-300 max-w-xl mx-auto font-normal">
            Whether you reside in Manhattan or commute from Brooklyn/Queens, Cherry NYC provides the premium setup, privacy, and technology you need to maximize your earnings.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-white hover:text-black transition-all text-xs font-bold items-center"
            >
              Contact Local NYC Desk <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
