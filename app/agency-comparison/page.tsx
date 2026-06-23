"use client";

import React from "react";
import { Check, X, Shield, ArrowRight, DollarSign, Percent, Cherry } from "lucide-react";
import Image from "next/image";
import heroBg from "../../src/assets/images/cyber_cherry_hero_1782100082489.jpg";

export default function AgencyComparison() {
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  const comparisons = [
    {
      feature: "Payout Split",
      cherry: "Keep 70% share from day one",
      standard: "Takes 50% or more as 'management fee'",
      cherryIcon: true
    },
    {
      feature: "Legal Commitment",
      cherry: "Zero commitment, no-claws agreement",
      standard: "Locks you into multi-year master clauses",
      cherryIcon: true
    },
    {
      feature: "Workspace Access",
      cherry: "Private, soundproof, 4K-fitted Tribeca suites",
      standard: "Home-setup (purchased at your expense)",
      cherryIcon: true
    },
    {
      feature: "Privacy Core Technology",
      cherry: "Custom-built multi-VPN tunnels & Geofencing Included",
      standard: "None (leaves your IP completely open to lookup)",
      cherryIcon: true
    },
    {
      feature: "Reverse-Search AI Defense",
      cherry: "PimEyes / FaceCheck opt-outs filed instantly",
      standard: "None (zero index protection)",
      cherryIcon: true
    },
    {
      feature: "Earning Logs",
      cherry: "Itemized spreadsheets, full transparent trackings",
      standard: "Vague, manual monthly checkouts",
      cherryIcon: true
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#070708] text-white overflow-hidden">
      
      {/* EXQUISITE VISUAL HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={heroBg}
            alt="Cherry NYC Split Comparison Analysis"
            fill
            priority
            className="object-cover object-center scale-[1.01] brightness-50 contrast-120 select-none"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          {/* Seductive luxury gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,30,130,0.1),transparent_70%)] opacity-60 pointer-events-none" />
        </div>

        {/* Hero content aligned in standard grid */}
        <div className="max-w-4xl w-full mx-auto px-6 relative z-10 text-center space-y-6">
          <span style={textHeader} className="text-[#FF1E82] uppercase tracking-widest block font-bold flex items-center justify-center gap-2">
            <Cherry className="w-4 h-4 shrink-0" />
            <span>Split Analysis</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight uppercase font-extralight block">
            Stop Giving Away 50% of Your <span className="font-bold text-[#FF1E82]">Creator Income</span>
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            Many webcam portals, networks, and predatory OnlyFans management teams charge upwards of 40% to 50% for standard technical setup. Cherry NYC operates on a fair 70/30 split, keeping your revenue high while providing maximum physical luxury and anonymity.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">

        {/* Structured Comparison Panel */}
        <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-3 p-6 border-b border-white/5 bg-[#121215] text-[13px] font-bold">
            <span style={textHeader}>FEATURES</span>
            <span style={textHeader} className="text-[#FF1E82] text-center">CHERRY NYC (70%)</span>
            <span style={textHeader} className="text-gray-400 text-center">STANDARD AGENT (50%)</span>
          </div>

          <div className="divide-y divide-white/5 font-normal">
            {comparisons.map((row, index) => (
              <div key={index} className="grid grid-cols-3 p-6 items-center text-[13px]">
                <span className="font-bold text-white">{row.feature}</span>
                
                {/* Cherry NYC */}
                <div className="flex flex-col items-center justify-center text-center space-y-1.5 px-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-gray-200 text-xs">{row.cherry}</span>
                </div>

                {/* Standard Agent */}
                <div className="flex flex-col items-center justify-center text-center space-y-1.5 px-3">
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="text-gray-500 text-xs">{row.standard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Article Explanation */}
        <div className="space-y-6 pt-10 border-t border-white/5">
          <h2 style={textTitle} className="text-white">
            Why Our 30% Margin Works
          </h2>
          <p style={textBody} className="text-gray-400 font-normal leading-relaxed">
            Standard management agencies are notoriously top-heavy—sinking your revenue into administrative waste, overhead staff, and inflated advertising budgets. At Cherry NYC, we keep our operations lean, physical, and targeted. 
          </p>
          <p style={textBody} className="text-gray-400 font-normal leading-relaxed">
            Our 30% margin is reinvested directly into maintaining our luxury Tribeca lofts, upgrading soundproofing barriers, renting professional 4K camera components, and maintaining our secure IP-masking software servers. This ensures you always stream in a luxurious, safe, high-end ecosystem without sacrificing half of your income.
          </p>
        </div>

        {/* Interactive Math Reminder block */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0F0F12] border border-white/5 space-y-4">
          <h3 style={textHeader} className="text-white">Calculate Your Extra Earnings</h3>
          <p style={textBody} className="text-gray-400 font-normal">
            An independent creator producing $10,000 in monthly subscriber revenue stands to keep <strong className="text-white">$7,000 net</strong> at Cherry NYC, compared to just <strong className="text-red-400">$5,000 net</strong> under conventional agency terms. That is a difference of <strong className="text-[#FF1E82]">$24,000 in extra annual take-home take</strong>, fully yours to save or reinvest.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-white text-black hover:bg-[#FF1E82] hover:text-white transition-all text-xs font-bold items-center"
            >
              Secure Onboarding Details <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
