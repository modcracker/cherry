"use client";

import React from "react";
import { EyeOff, AlertTriangle, ShieldCheck, Mail, ArrowRight, UserCheck, ShieldAlert, Cherry } from "lucide-react";
import Image from "next/image";
import heroBg from "../../src/assets/images/crimson_neon_modeling_1782140761770.jpg";

export default function ReverseSearchDefense() {
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
            alt="Cherry NYC Reverse Image Defense"
            fill
            priority
            className="object-cover object-center scale-[1.01] brightness-50 contrast-120 select-none"
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
            <span>Identity Protection Core</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight uppercase font-extralight block">
            Defending Broadcasters Against <span className="font-bold text-[#FF1E82]">Reverse Image Lookups</span> & AI Searches
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            For premium webcam models and independent creators, personal safety and digital anonymity are absolute prerequisites. Here is how Cherry NYC deploys enterprise-grade face-indexing defense, search engine de-indexing, and legal DMCA rings to protect your identity.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">

        {/* Feature grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <span style={textHeader} className="text-white block">
              The Threat: Reverse Image Crawlers (PimEyes, Google Lens, FaceCheck)
            </span>
            <p style={textBody} className="text-gray-400">
              Modern search engines use automated neural networks to index facial biometrics. This means a single cropped screen capture from a live stream can be reverse-searched to find your personal Instagram, LinkedIn, or hometown Facebook page in split seconds.
            </p>
            <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-xl text-[12px] text-red-300 font-mono leading-relaxed flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Standard webcam agency networks allow global crawlers to catalog their creators indexically. We block them by default.</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <span style={textHeader} className="text-white block">
              The Shield: Active Anti-Indexing Strategies Built-In
            </span>
            <p style={textBody} className="text-gray-400">
              At Cherry NYC, we do not hope for privacy—we enforce it. Every stream hosted through our server routing tunnels utilizes visual watermark shields, dynamic frame filters, and absolute region blackout blocks that disable indexers before they can collect telemetry.
            </p>
            <div className="p-4 bg-[#FF1E82]/5 border border-[#FF1E82]/20 rounded-xl text-[12px] text-gray-300 font-mono leading-relaxed flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#FF1E82]" />
              <span>We virtualize IP headers and deploy Geofencing grids, neutralizing searches in your local tri-state sector.</span>
            </div>
          </div>

        </div>

        {/* Core Pillars Section */}
        <div className="space-y-6 pt-8 border-t border-white/5">
          <h2 style={textTitle} className="text-white">
            Our 4-Point Reverse Search Defense Protocol
          </h2>

          <div className="space-y-6">
            
            {/* Protocol 1 */}
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-[#0E0E11] border border-white/5">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-bold text-[#FF1E82] font-mono shrink-0">
                01
              </div>
              <div className="space-y-1">
                <span style={textHeader} className="text-white font-bold block">Regional Geofencing & Blackout Rings</span>
                <p style={textBody} className="text-gray-400">
                  We blacklist all surrounding zipcode areas and coordinate blocks from querying your active stream pages. If a viewer resides in the New York, New Jersey, or Connecticut tri-state area, your channel is instantly shown as completely offline.
                </p>
              </div>
            </div>

            {/* Protocol 2 */}
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-[#0E0E11] border border-white/5">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-bold text-[#FF1E82] font-mono shrink-0">
                02
              </div>
              <div className="space-y-1">
                <span style={textHeader} className="text-white font-bold block">PimEyes & FaceCheck Opt-Out Management</span>
                <p style={textBody} className="text-gray-400">
                  Our dedicated privacy team operates direct corporate APIs on leading facial recognition search engines. We submit biometric hashes on your behalf to guarantee permanent opt-out rules, meaning any scrap attempt from other sites will fail to match your actual self.
                </p>
              </div>
            </div>

            {/* Protocol 3 */}
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-[#0E0E11] border border-white/5">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-bold text-[#FF1E82] font-mono shrink-0">
                03
              </div>
              <div className="space-y-1">
                <span style={textHeader} className="text-white font-bold block">Dynamic Watermark Superpositions</span>
                <p style={textBody} className="text-gray-400">
                  AI scrapers operate by recognizing continuous visual blocks. By appending barely visible, dynamically shifting transparent watermarks over critical areas of our stream feed, we break the mathematical pattern index algorithms use to map eyes, cheekbones, and lips.
                </p>
              </div>
            </div>

            {/* Protocol 4 */}
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-[#0E0E11] border border-white/5">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-bold text-[#FF1E82] font-mono shrink-0">
                04
              </div>
              <div className="space-y-1">
                <span style={textHeader} className="text-white font-bold block">Active Automated DMCA De-indexing Takedowns</span>
                <p style={textBody} className="text-gray-400">
                  If leaked images slip onto gray-market tube directories, our real-time scanning bots identify the hash, assemble a legally binding DMCA notice, and force Google, Bing, and Cloudflare to de-index the content from standard organic search outcomes in under 24 hours.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#FF1E82]/10 to-transparent border border-[#FF1E82]/20 text-center space-y-4">
          <span style={textHeader} className="text-white block font-bold">
            Ready to Stream in Complete Privacy?
          </span>
          <p style={textBody} className="text-gray-300 max-w-xl mx-auto font-normal">
            Your physical safety, financial security, and digital privacy are the foundational core of Cherry NYC. Chat with a discrete team coordinator in our Tribeca showroom to formulate your private boundary setup.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-white hover:text-black transition-all text-xs font-bold items-center"
            >
              Contact Privacy Desk <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
