"use client";

import React, { useState } from "react";
import { ShieldCheck, Mail, Clipboard, ClipboardCheck, ArrowUpRight, HelpCircle, ExternalLink, Cherry } from "lucide-react";
import Image from "next/image";
import heroBg from "../../src/assets/images/elegant_satin_lounging_1782140729935.jpg";

export default function ContactGateway() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("info@cherry.nyc");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Typography guidelines (32px, 16px, 13px Arial)
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
            alt="Cherry NYC Secure Communication"
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
            <span>Private Communication Portal</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight tracking-tight uppercase font-extralight block">
            Direct & <span className="font-bold text-[#FF1E82]">Discretion-First</span> Inquiries
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            We do not use insecure web forms, third-party ticketing platforms, or external databases to route inquiries. Below, browse our direct, encrypted channels to initiate safe contact and coordination.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      {/* Soft atmospheric gradient */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-rose-950/15 via-transparent to-transparent pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* Page Title & Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-20 animate-fade-in">
          <span style={textHeader} className="text-[#FF1E82] uppercase tracking-widest block font-bold flex items-center justify-center gap-2">
            <Cherry className="w-4 h-4 shrink-0" />
            <span>Private Communication Portal</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight tracking-tight">
            Direct & Discretion-First Inquiries
          </h1>
          <p style={textBody} className="text-gray-400">
            We do not use insecure web forms, third-party ticketing platforms, or external databases to route inquiries. Below, browse our direct, encrypted channels to initiate safe contact and coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: Security & Trust Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-6">
              <span style={textHeader} className="text-white block">
                Discretion Standards
              </span>

              <div className="space-y-5 font-normal">
                <div className="flex items-start space-x-3 text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-[#FF1E82] shrink-0 mt-0.5" />
                  <div style={textBody}>
                    <p className="font-bold text-white">Zero Cloud Logs</p>
                    <p className="text-gray-500 mt-1">We maintain no online database of model identities, phone numbers, or residential addresses records.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-[#FF1E82] shrink-0 mt-0.5" />
                  <div style={textBody}>
                    <p className="font-bold text-white">Pre-NDA Covered</p>
                    <p className="text-gray-500 mt-1">Every preliminary email message falls under strict New York commercial non-disclosure guidelines instantly on receipt.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-[#FF1E82] shrink-0 mt-0.5" />
                  <div style={textBody}>
                    <p className="font-bold text-white">Decentralized Routing</p>
                    <p className="text-gray-500 mt-1">All messages are delivered to our private, locally stored Tribeca workstation, away from scrapers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#0E0E11]/40 border border-white/5 rounded-2xl text-[12px] text-gray-500 font-normal leading-relaxed">
              *All partners must be over the age of 18 at onboarding. Governed strictly in accordance with Manhattan compliance, safety guidelines, and independent content licensing regulations.
            </div>
          </div>

          {/* Column Right: Elegant Credentials Display Card */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0F0F12] border border-white/5 space-y-8 shadow-2xl relative">
              
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span style={textHeader} className="text-white">
                  Direct Coordination Desk
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-emerald-950/40 text-emerald-400 border border-emerald-800/30 px-2.5 py-0.5 rounded-full font-bold">
                  ● ACTIVE & GUARDED
                </span>
              </div>

              <div className="space-y-6">
                <p style={textBody} className="text-gray-300 font-normal">
                  To protect applicant security, we handle all preliminary requests via our verified electronic post. Please direct your questions or appointment bookings directly to our secure inbox:
                </p>

                {/* Styled copy-interactive address container */}
                <div className="p-6 bg-black/40 border border-white/5 rounded-2xl space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-[#FF1E82]">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest">OFFICIAL HANDSHAKE ADDRESS</span>
                  </div>
                  
                  <div className="py-2">
                    <a
                      href="mailto:info@cherry.nyc"
                      className="text-white text-[20px] font-bold hover:text-[#FF1E82] transition-colors font-mono tracking-tight"
                    >
                      info@cherry.nyc
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <button
                      onClick={copyEmailToClipboard}
                      className="flex-1 h-11 flex items-center justify-center space-x-2 rounded-xl bg-white/5 hover:bg-white hover:text-black border border-white/10 text-xs font-bold transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied perfectly!</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="w-3.5 h-3.5 text-gray-400" />
                          <span>Copy Email Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href="mailto:info@cherry.nyc"
                      className="flex-1 h-11 flex items-center justify-center space-x-2 rounded-xl bg-[#FF1E82] hover:bg-rose-500 text-xs font-bold transition-all cursor-pointer shadow-lg shadow-[#FF1E82]/10"
                    >
                      <span>Open Mail Client</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Simple structural FAQ/Guideline list to tell a pristine story */}
                <div className="space-y-4 pt-2">
                  <h4 style={textHeader} className="text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#FF1E82]" />
                    Inquiry Guidelines
                  </h4>
                  <ul className="space-y-3 pl-1">
                    <li className="text-[12px] text-zinc-400 leading-relaxed font-normal flex items-start">
                      <span className="text-[#FF1E82] mr-2">•</span>
                      <span>Include your preferred working hours projections and any previous boutique or workspace experience if relevant.</span>
                    </li>
                    <li className="text-[12px] text-zinc-400 leading-relaxed font-normal flex items-start">
                      <span className="text-[#FF1E82] mr-2">•</span>
                      <span>Specify if you prefer a virtual geoshield demo or a private walkthrough of our Tribeca physical showrooms.</span>
                    </li>
                    <li className="text-[12px] text-zinc-400 leading-relaxed font-normal flex items-start">
                      <span className="text-[#FF1E82] mr-2">•</span>
                      <span>All inbound messages are manually screened by a dedicated partner coordinator within 12-24 business hours.</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
