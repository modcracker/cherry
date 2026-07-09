"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Landmark, Sparkles, CheckCircle, Shield, Sliders } from "lucide-react";

export default function ContractsPage() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <Landmark className="w-3.5 h-3.5" /> High-Standard Financial Sovereignty
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Legal Autonomy & <br />
            <span className="font-semibold text-rose-500">Autonomous Contracts</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            We believe models should operate as true business partners, not employees subject to high, unchecked agency fees. Cherry NYC guarantees absolute financial clarity through standard, escrow-backed legal agreements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Sparkles className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Guaranteed Payout Splits</h3>
              <p className="text-xs text-gray-400">Our legally-binding contracts lock in your 85% to 90% broadcast payout levels. No surprise deductions, platform splits, or hidden overhead fees.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Shield className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Discreet Escrow Routing</h3>
              <p className="text-xs text-gray-400">All revenue is routed via independent, secure escrow accounts. Your payouts are released weekly directly into your accounts with absolute discretion.</p>
            </div>
          </div>

          <div className="border border-white/[0.04] bg-white/[0.005] p-8 rounded-2xl font-sans text-xs text-gray-400 leading-normal">
            Every legal arrangement with Cherry NYC features a built-in "Immediate Dissolution Option." If you ever wish to transition to fully independent broadcasting, you can dissolve the agency association instantly with zero penalties, retaining 100% of your broadcast channels, fans, and assets. That is modern career autonomy.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
