"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, CheckCircle, Shield, Sliders } from "lucide-react";

export default function WebcamModelingPage() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5" /> High-End Webcam Modeling Overview
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Webcam Modeling <br />
            <span className="font-semibold text-rose-500">In New York City</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            New York City represents the global capital of digital fashion, branding, and modeling. Webcam modeling with Cherry NYC merges this creative supremacy with modern security scripts, establishing a highly polished digital workspace where models generate sustainable careers securely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Shield className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Advanced Brand Architecture</h3>
              <p className="text-xs text-gray-400">We assist models in defining highly profitable, custom branding models, ensuring high fan engagement while keeping absolute privacy control.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Sliders className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Full Technology Access</h3>
              <p className="text-xs text-gray-400">From 4K custom Sony DSLR streams to mechanized lighting partitions, we cover all hardware costs, bringing your broadcast to premium caliber.</p>
            </div>
          </div>

          <div className="border border-white/[0.04] bg-white/[0.005] p-8 rounded-2xl font-sans text-xs text-gray-400 leading-normal">
            Whether broadcasting from our luxury Tribeca flagship studio, our SoHo collective lofts, or from the comfort of your private residence with our remote tech-suit kits, Cherry NYC handles everything. Experience premium setups backed by elite corporate protection.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
