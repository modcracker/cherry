"use client";

import React, { useState } from "react";
import { Cherry, ShieldCheck, Mail, ArrowUpRight, HelpCircle, UserCheck, Play, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "../../src/assets/images/model_lounging_bed_two_1782100921335.jpg";

export default function CareersSanctuary() {
  const [inquired, setInquired] = useState(false);

  // Typography guidelines (32px, 16px, 13px Arial as per brand)
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  const positions = [
    {
      title: "Independent Boutique Broadcaster",
      department: "Creative Studio Content",
      type: "Self-Scheduled Autonomy (70/30 Split)",
      description: "Produce editorial diaries, private ASMR, lifestyle lounge broadcasts, or silhouette portraiture within Tribeca's premier soundproof sound stages. Benefit from automatic SONY imaging, daylight control grids, and ironclad proxy geoshields.",
      requirements: ["Aged 18+ with valid identification", "Enthusiasm for high-aesthetic video production", "Commitment to personal digital hygiene and compliance protocols", "Collaborative and professional communication standards"]
    },
    {
      title: "Acoustic & AV Calibration Tech",
      department: "Technical Systems",
      type: "Part-Time Flexible // Tribeca",
      description: "Manage soundproofing chambers calibration, local proxy server connections routing, 4K camera apertures, daylight grids preset shifting, and ensure complete data security standards across our physical facilities.",
      requirements: ["Familiarity with SONY Cinema-Line digital cameras", "Basic networking knowledge (isolated sub-servers & localized IP proxies)", "Strong spatial design and high-end lighting experience", "Attention to discrete operational secrecy"]
    },
    {
      title: "Luxury Lounge Host & Concierge",
      department: "Hospitality",
      type: "Flexible Residency // Tribeca",
      description: "Maintain physical comfort standards within our Tribeca parlor. Manage high-end tea rotations, premium satin garment allocations, visitor codes clearance, and ensure secure entrance procedures run with extreme discretion.",
      requirements: ["Experience in premium hospitality or model studios", "Warm, discrete, and highly-professional composure", "Ability to coordinate flexible timetables in a closed-loop setting", "Familiarity with quiet residential gated codes"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#070708] text-zinc-100 selection:bg-[#FF1E82]/30 selection:text-[#FF1E82] overflow-hidden">
      
      {/* EXQUISITE VISUAL HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={heroBg}
            alt="Cherry NYC Security Fellowships"
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[10px] font-mono tracking-widest text-[#FF1E82] uppercase mx-auto">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Opportunities for Independent Creators</span>
          </div>
          <h1 style={textTitle} className="text-white tracking-tight leading-tight uppercase font-extralight block">
            Careers & <span className="font-bold text-[#FF1E82]">Fellowships</span>
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            Constructing a highly cooperative luxury ecosystem. Whether you are an independent lifestyle creator retaining 70% splits, or a technical specialist guarding our secure geoshield servers, join NYC&apos;s finest independent workspace team.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute left-[-150px] top-[40%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[600px] h-[600px]" />
      </div>
      <div className="absolute right-[-100px] bottom-[10%] opacity-[0.02] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 right-1/4 w-[70vw] h-[70vw] max-w-[700px] rounded-full blur-[180px] pointer-events-none bg-radial from-[#FF1E82]/12 to-transparent opacity-35 z-0" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-4 mb-16 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] font-mono tracking-widest text-[#FF1E82] uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Opportunities for Independent Creators</span>
          </div>
          <h1 style={textTitle} className="text-white tracking-tight leading-tight uppercase font-extralight block">
            Careers & <span className="font-bold text-[#FF1E82]">Fellowships</span>
          </h1>
          <p style={textBody} className="text-zinc-400 max-w-xl font-light">
            Constructing a highly cooperative luxury ecosystem. Whether you are an independent lifestyle creator retaining 70% splits, or a technical specialist guarding our secure geoshield servers, join NYC&apos;s finest independent workspace team.
          </p>
        </div>

        {/* Dynamic Positions List */}
        <div className="space-y-12 mb-24">
          <h2 style={textHeader} className="text-white uppercase tracking-widest border-b border-white/5 pb-3 font-bold">
            Guarded Positions & Residencies
          </h2>
          
          <div className="space-y-8">
            {positions.map((pos, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-[#0C0C0F] border border-white/5 hover:border-white/10 transition-colors text-left space-y-6"
                id={`career-position-${idx}`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4 border-b border-white/5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white tracking-tight">{pos.title}</h3>
                    <div className="text-[11px] font-mono text-[#FF1E82] tracking-wider uppercase">{pos.department}</div>
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 bg-white/5 text-zinc-300 rounded border border-white/5 font-semibold shrink-0">
                    {pos.type}
                  </span>
                </div>

                <p style={textBody} className="text-zinc-400 font-light">
                  {pos.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-black">Candidate Credentials:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {pos.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-xs text-zinc-400 flex items-start">
                        <span className="text-[#FF1E82] mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Application Flow Card */}
        <div className="p-10 rounded-3xl bg-radial from-[#120509] via-[#09090C] to-[#09090C] border border-white/10 text-left relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 p-8 text-zinc-800 pointer-events-none select-none text-9xl font-mono opacity-[0.05] font-black">
            70%
          </div>
          <div className="space-y-6 relative z-10">
            <h3 style={textHeader} className="text-[#FF1E82] uppercase tracking-[0.2em] font-mono font-bold block">
              Discretion-First Application Flow
            </h3>
            <p style={textBody} className="text-zinc-300 font-light">
              We never perform general background record aggregates on creative candidates, nor do we require credit registries inquiries. All career applications remain strictly protected under pre-NDA guidelines, stored inside non-indexed sub-servers located right here in Manhattan.
            </p>
            <div className="p-6 bg-black/40 border border-white/5 rounded-2xl text-center space-y-4">
              <span className="text-xs font-mono text-zinc-400 block uppercase tracking-widest">To initiate secure onboarding dialogue:</span>
              <div className="text-white text-lg font-mono font-bold">info@cherry.nyc</div>
              <div className="flex justify-center flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-rose-500 hover:scale-102 transition-all cursor-pointer text-xs font-bold items-center shadow-lg"
                >
                  Apply Online Instantly <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Link>
                <a
                  href="mailto:info@cherry.nyc"
                  className="inline-flex h-11 px-8 rounded-full border border-white/10 text-white hover:bg-white/5 text-xs font-neutral items-center transition-all cursor-pointer"
                >
                  Open Secure Mail Client
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
