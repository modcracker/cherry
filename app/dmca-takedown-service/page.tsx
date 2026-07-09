"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, EyeOff, CheckCircle, Scale, AlertCircle } from "lucide-react";

export default function DMCAPage() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/15 text-emerald-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <Shield className="w-3.5 h-3.5" /> High-Intensity Copyright Protection
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Automated DMCA <br />
            <span className="font-semibold text-rose-500">Takedown Engine</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            Your content is your wealth. Under the sovereign management model at Cherry NYC, we operate proprietary crawler scripts that continuously crawl the web, identifying re-uploads, unauthorized stream recorders, and forum leaks instantly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <EyeOff className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Continuous Web Crawlers</h3>
              <p className="text-xs text-gray-400">Our engines crawl indexing directories, forums, and adult video hosters 24 hours a day, checking matching file hashes and digital watermarks.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Scale className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Binding Legal Requests</h3>
              <p className="text-xs text-gray-400">Our automated legal scripts immediately issue certified DMCA removal requests directly to server infrastructures and routing hosts.</p>
            </div>
          </div>

          <div className="border border-white/[0.04] bg-white/[0.005] p-8 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase font-bold tracking-widest">
              <AlertCircle className="w-4 h-4" /> Sovereignty Shield Guarantee
            </div>
            <p className="text-xs text-gray-400 leading-normal">
              We cover 100% of the financial and legal costs related to copyright infringement and piracy enforcement for all our active models. Our legal team remains ready to file federal copyright lawsuits if any indexing platform refuses compliance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
