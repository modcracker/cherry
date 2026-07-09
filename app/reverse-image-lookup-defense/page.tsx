"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EyeOff, Shield, CheckCircle, Sliders, AlertCircle } from "lucide-react";

export default function ReverseImagePage() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <Sliders className="w-3.5 h-3.5" /> Face Recognition Shield
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Reverse Image <br />
            <span className="font-semibold text-rose-500">Lookup Defense</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            In the modern web space, facial recognition crawlers like PIMEyes, SocialCatfish, and Google Lens present a critical risk to private brand creators. Cherry NYC actively manages programmatic opt-out agreements to block facial recognition engines from matching image queries against your likeness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <EyeOff className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Database Filtering</h3>
              <p className="text-xs text-gray-400">We draft and execute formal systemic opt-out requests, removing your face search entries from active commercial web directories.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Shield className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Search Index Blocking</h3>
              <p className="text-xs text-gray-400">Our engineering desk configures meta tagging rules and search console parameters to restrict Google search bots from matching face clusters.</p>
            </div>
          </div>

          <div className="border border-white/[0.04] bg-white/[0.005] p-8 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase font-bold tracking-widest">
              <AlertCircle className="w-4 h-4" /> Algorithmic Sovereignty Lock
            </div>
            <p className="text-xs text-gray-400 leading-normal">
              Digital protection is continuous. Our algorithmic division stays updated with the latest computer vision technologies, providing complete on-site privacy escorts. Enjoy full career success while maintaining total anonymity in your private life.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
