"use client";

import React from "react";
import { ShieldCheck, Flame, Search, CheckCircle, ArrowRight, Eye, ShieldAlert, Cherry } from "lucide-react";
import Image from "next/image";
import heroBg from "../../src/assets/images/cyber_seductive_neon_1782138657991.jpg";

export default function DmcaTakedown() {
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
            alt="Cherry NYC DMCA De-indexing Defense"
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
            <span>Reputation Defense</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight uppercase font-extralight block">
            Automated DMCA Strike & <span className="font-bold text-[#FF1E82]">Search De-indexing</span>
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            For online broadcasters, keeping control of copyright is vital. If an unauthorized viewer captures or screens your broadcast, they violate federal and international copyright laws. At Cherry NYC, we deploy real-time monitoring and aggressive legal takedown pipelines.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4 font-normal">
            <Search className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">
              24/7 Web Crawling & Asset Identification
            </span>
            <p style={textBody} className="text-gray-400">
              Our automated crawlers continuously cross-reference major online adult video libraries, cyberlockers, and image boards for visual match hashes. We find leaked snippets before they can gain algorithmic momentum or show up on google searches.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4 font-normal">
            <Flame className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">
              Instant Legal Delivery & Web De-indexing
            </span>
            <p style={textBody} className="text-gray-400">
              When a match is confirmed, our legal software generates and issues signed DMCA notices directly to the hosting site&apos;s backend, Cloudflare, and root domain registrars. If a fly-by-night site refuses to remove it, we target the search engines, forcing Google and Bing to wipe the URL results completely.
            </p>
          </div>

        </div>

        {/* Detailed Takedown Process */}
        <div className="space-y-6 pt-10 border-t border-white/5 font-normal text-left">
          <h2 style={textTitle} className="text-white">
            Our Automated Takedown System in Action
          </h2>

          <div className="space-y-6">
            
            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl flex items-start space-x-4">
              <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-mono font-bold text-[#FF1E82] text-xs shrink-0">
                01
              </span>
              <div className="space-y-1">
                <span style={textHeader} className="text-white font-bold block">Digital Fingerprint Watermarks</span>
                <p style={textBody} className="text-gray-400">
                  Every pixel on our Tribeca stream feed contains a subtle, cryptographic digital watermark invisible to standard viewers but easily scanned by crawler scripts. This watermarking acts as instant legal proof of ownership when files are detected elsewhere.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl flex items-start space-x-4">
              <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-mono font-bold text-[#FF1E82] text-xs shrink-0">
                02
              </span>
              <div className="space-y-1">
                <span style={textHeader} className="text-white font-bold block">Aggressive Cloudflare Host-level Notice Filing</span>
                <p style={textBody} className="text-gray-450 text-[13px]">
                  Pirate websites frequently hide behind proxy services like Cloudflare to avoid copyright disputes. We escalate legal notices directly to Cloudflare&apos;s corporate compliance layer, which mandates the operator either remove the leak or face direct IP termination.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl flex items-start space-x-4">
              <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-mono font-bold text-[#FF1E82] text-xs shrink-0">
                03
              </span>
              <div className="space-y-1">
                <span style={textHeader} className="text-white font-bold block">Google De-indexing Integration</span>
                <p style={textBody} className="text-gray-450 text-[13px]">
                  If a pirate host ignores our notices, we file an expedited Google Lumen Database copyright takedown. Within 24-48 hours, Google deletes the corresponding search links, rendering the leaked file completely invisible to search engines and reverse lookups.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Contact */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#FF1E82]/10 to-transparent border border-[#FF1E82]/20 text-center space-y-4 font-normal">
          <span style={textHeader} className="text-white block font-bold">
            Take Control of Your Digital Property
          </span>
          <p style={textBody} className="text-gray-300 max-w-xl mx-auto">
            Broadcasting with Cherry NYC means you never fight thieves alone. Our technology monitors, flags, and blocks content theft automatically so you can work with complete peace of mind.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-white hover:text-black transition-all text-xs font-bold items-center"
            >
              Verify & Secure Content <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
