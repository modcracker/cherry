"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <Lock className="w-3.5 h-3.5" /> Confidentiality Standard
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Privacy policy & <br />
            <span className="font-semibold text-rose-500">Corporate Protection</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            Your safety, identity, and data are protected under strict, non-disclosure corporate layers at Cherry NYC. We understand the critical importance of absolute confidentiality in your personal and broadcast career.
          </p>

          <div className="space-y-6 text-sm text-gray-400 leading-relaxed font-sans">
            <h3 className="text-lg text-white font-semibold font-display">1. Absolute Anonymity Protocols</h3>
            <p>
              We compile and maintain no public lists, references, or maps of associated models. All financial processing is conducted via discreet legal shell escrow routing, ensuring that no reference to adult webcam modeling appears on your banks statements.
            </p>

            <h3 className="text-lg text-white font-semibold font-display">2. Automated Data Erasure</h3>
            <p>
              Any information submitted during registrations, tours, or onboardings is encrypted at transit and rest using high-grade protocols. Your contact details and private credentials can be fully expunged immediately upon contract termination.
            </p>

            <h3 className="text-lg text-white font-semibold font-display">3. Algorithmic Opt-Out Safeguards</h3>
            <p>
              We coordinate continuous technical blockers with search engines and computer vision face indexers, restricting data scrapers from associating your likeness with your legal identities.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
