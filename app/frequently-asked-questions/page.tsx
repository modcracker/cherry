"use client";

import React from "react";
import { HelpCircle, FileText, Landmark, ShieldCheck, ArrowRight, CornerDownRight } from "lucide-react";

export default function FAQ() {
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  const faqs = [
    {
      q: "How does the 70/30 payout split work?",
      a: "At Cherry NYC, you keep a full 70% of gross tips, subscriptions, tokens, and direct fan payouts. The remaining 30% acts as our workspace margin to pay for your luxury Tribeca suite lease, high-fidelity soundproofing elements, mirrorless 4K lens equipment and advanced IP geoblock systems.",
      category: "payouts-and-banking"
    },
    {
      q: "When are payments distributed, and are they secure?',",
      a: "Every Tuesday, we issue direct electronic payouts. You get custom bookkeeping spreadsheets outlining every single transaction. Payments are sent via discrete corporate accounts to protect your bank trail.",
      category: "payouts-and-banking"
    },
    {
      q: "How do you handle 1099 taxes and tax write-offs?",
      a: "Our independent creators operate as self-employed 1099 contractors. We provide itemized year-end earnings reports and connect you with trusted, modeling-friendly accounting professionals to write off styling accessories, cosmetics, travel, and wellness expenditures legally.",
      category: "taxes-write-offs"
    },
    {
      q: "What prevents local family or friends from finding my stream?",
      a: "Our advanced Geofencing systems let us blacklist entire regional zipcodes, cities, boroughs, states, or countries. If someone tries to view your profile from a blacklisted zone, they see a completely blank, offline status.",
      category: "privacy-and-anonymity"
    },
    {
      q: "How does Cherry NYC defend creators from reverse-indexing bots (PimEyes)?",
      a: "We maintain direct developer APIs with top facial search tools like PimEyes to file biometric blocks on your behalf. Additionally, we use dynamic overlays on our video feeds that confuse indexing algorithms, preventing automated capture.",
      category: "privacy-and-anonymity"
    },
    {
      q: "Do I have to sign a lock-in agency contract?",
      a: "No. High-end creators deserve freedom. Our contracts are completely standard no-claws agreements. You can walk away anytime with zero technical penalties, zero traps, and 100% ownership of your digital channels.",
      category: "legal-and-onboarding"
    },
    {
      q: "What is your physical safety model at the Tribeca studio?",
      a: "We operate on a zero-physical-touch, 100% digital policy. There are zero client meetups, zero local fan connections, and zero physical interactions. Our facilities are locked down with keycard doors and discrete exit routes near Greenwich Street.",
      category: "physical-studio"
    }
  ];

  return (
    <div className="min-h-screen bg-[#070708] py-20 text-white font-normal text-left">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <span style={textHeader} className="text-[#FF1E82] uppercase tracking-widest block font-bold">
            Creator Knowledge Base
          </span>
          <h1 style={textTitle} className="text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p style={textBody} className="text-gray-400">
            Learn more about banking, tax filing schedules, geoblocks, physical safety boundaries, and other operational guidelines for independent lifestyle broadcasters.
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-8 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              id={faq.category} 
              className="p-6 rounded-2xl bg-[#09090A] border border-white/5 space-y-3"
            >
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-[#FF1E82] shrink-0 mt-0.5" />
                <h3 style={textHeader} className="text-white font-bold leading-tight">
                  {faq.q}
                </h3>
              </div>
              
              <div className="flex items-start space-x-3 pl-8">
                <CornerDownRight className="w-4 h-4 text-gray-600 shrink-0 mt-1" />
                <p style={textBody} className="text-gray-400 font-normal leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Category Anchors links panel */}
        <div className="p-8 rounded-2xl bg-[#0F0F12] border border-white/5 space-y-4">
          <span style={textHeader} className="text-white block font-bold">
            Still Have Questions?
          </span>
          <p style={textBody} className="text-gray-300">
            For advanced queries regarding corporate bank write-offs, routing geoblocks, or to tour our private Tribeca lofts, reach out safely to our digital privacy team.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-white hover:text-black transition-all text-xs font-bold items-center"
            >
              Contact Onboarding Team <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
