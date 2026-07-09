"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Check, X, Shield } from "lucide-react";

export default function ComparisonPage() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5" /> High-End Model Comparison Sheet
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Traditional Agencies <br />
            <span className="font-semibold text-rose-500">vs Cherry NYC</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            Many webcam modeling agencies hold models back with surprise fee deductions, platform splits, or non-discreet payout procedures. Review how we compare under standard legal structures below:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            
            {/* Traditional */}
            <div className="glass-panel p-8 rounded-2xl border-white/[0.02]/5 space-y-6">
              <h3 className="text-xl font-semibold text-red-400 font-display flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" /> Traditional Agencies
              </h3>
              <ul className="space-y-4 text-xs text-gray-400 font-sans">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Heavy commissions (up to 40% to 50% split).</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No facial search defense or PIMEyes blockers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Non-discreet payments, delays under bloated corporate chains.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Restrictive contracts with severe penalty clauses for leaving.</span>
                </li>
              </ul>
            </div>

            {/* Cherry NYC */}
            <div className="glass-panel p-8 rounded-2xl border-emerald-500/10 bg-emerald-500/[0.01] space-y-6">
              <h3 className="text-xl font-semibold text-emerald-400 font-display flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" /> Cherry NYC Model
              </h3>
              <ul className="space-y-4 text-xs text-emerald-300 font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Sovereign splits (85% to 90% payout level).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Military-grade facial search defense & DMCA blockings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Weekly direct electronic escrow payout clearances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Immediate contract dissolution rights with zero overhead penalties.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
