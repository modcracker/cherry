"use client";

import React from "react";
import { Scale, Check, ShieldCheck, Mail, ArrowRight, ClipboardCheck, Award, Cherry } from "lucide-react";
import Image from "next/image";
import heroBg from "../../src/assets/images/luxury_silk_lounging_1782138646940.jpg";

export default function LegalContractsAutonomy() {
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
            alt="Cherry NYC Legal Sovereignty Contracts"
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
            <span>Legal Transparency</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight uppercase font-extralight block">
            Zero-Trap Agreements & <span className="font-bold text-[#FF1E82]">100% Legal Ownership</span>
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            Predatory modeling agencies often attempt to seize your intellectual property or lock you behind multi-year exclusivity traps. At Cherry NYC, we believe in voluntary, mutually beneficial cooperation. Read about our creator-first contracts.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">

        {/* Contract Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <ClipboardCheck className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block font-bold">
              1. 100% Intellectual Property Rights
            </span>
            <p style={textBody} className="text-gray-400">
              You produce the media, you own the media. Every video frame, image portfolio, and digital lookbook created inside our Tribeca physical suites remains entirely your legal property. If you ever choose to leave our studio, your digital profiles go directly with you.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <Award className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block font-bold">
              2. Pure No-Commitment Autonomy
            </span>
            <p style={textBody} className="text-gray-400">
              Our contracts utilize clear, simple commercial terms. There are zero multi-year handcuffs, zero exit penalties, and zero minimum hours. Stream when you wish, pause when you choose, and terminate the agreement immediately at your simple command.
            </p>
          </div>

        </div>

        {/* Detailed Rights breakdown */}
        <div className="space-y-6 pt-10 border-t border-white/5">
          <h2 style={textTitle} className="text-white">
            Creator Bill of Rights at Cherry NYC
          </h2>
          
          <div className="space-y-6">
            
            <div className="flex items-start space-x-3 p-6 bg-[#0E0E11] border border-white/5 rounded-xl text-gray-300">
              <Check className="w-5 h-5 text-[#FF1E82] shrink-0 mt-0.5" />
              <div style={textBody}>
                <span className="font-bold text-white block">Absolute Boundary Control</span>
                <p className="text-gray-400 mt-1">
                  You hold absolute control over everything you stream. There are no quotas, no requirements to show your face if you choose to remain masked, and absolute veto power over content ideas, platforms, and lighting setups.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-6 bg-[#0E0E11] border border-white/5 rounded-xl text-gray-300">
              <Check className="w-5 h-5 text-[#FF1E82] shrink-0 mt-0.5" />
              <div style={textBody}>
                <span className="font-bold text-white block">No Hidden Deductions</span>
                <p className="text-gray-400 mt-1">
                  Predatory agencies sneak in hidden fees for &apos;camera rental&apos;, &apos;dry cleaning&apos;, or &apos;lighting maintenance&apos;. At Cherry NYC, our 30% studio cut covers all physical and digital services entirely. What you calculate on our calculator is exactly what lands in your bank.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-6 bg-[#0E0E11] border border-white/5 rounded-xl text-gray-300">
              <Check className="w-5 h-5 text-[#FF1E82] shrink-0 mt-0.5" />
              <div style={textBody}>
                <span className="font-bold text-white block">Protected Creator Identity Registry</span>
                <p className="text-gray-400 mt-1">
                  We never register your real name or personal address records with online forums or casting agencies. All platform profiles are created under verified corporate entities using private, secure, third-party proxies.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Contact */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#FF1E82]/10 to-transparent border border-[#FF1E82]/20 text-center space-y-4">
          <span style={textHeader} className="text-white block font-bold">
            Review Our Standard Agreement Safely
          </span>
          <p style={textBody} className="text-gray-300 max-w-xl mx-auto">
            Ready to partner with an agency that respects your hard-earned capital, legal independence, and personal boundaries? Contact our private recruitment desk to receive a sample copy of our partner guidelines.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-white hover:text-black transition-all text-xs font-bold items-center"
            >
              Verify & Receive Sample Agreement <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
