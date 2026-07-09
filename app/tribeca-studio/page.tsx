"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, MapPin, CheckCircle, Flame, Video } from "lucide-react";

export default function TribecaHQ() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <MapPin className="w-3.5 h-3.5" /> Flagship Manhattan HQ
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            The Tribeca Sanctuary <br />
            <span className="font-semibold text-rose-500">Premium Broadcast HQ</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            Our flagship headquarters is situated discretely in Manhattan's historic Tribeca warehouse district. An expansive, high-ceiling loft designed exclusively to mimic a premium luxury residency. Custom lighting grids, professional photography equipment, and total sound isolation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Video className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">4K Sony Broadcast Lines</h3>
              <p className="text-xs text-gray-400">Equipped with peak DSLR cameras, customizable depth-of-field fields, and professional soft-box ring lights.</p>
            </div>
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <Flame className="text-rose-500 w-6 h-6" />
              <h3 className="text-lg font-semibold text-white">Luxury Vanity & Lounge</h3>
              <p className="text-xs text-gray-400">Spacious make-up counters, warm ring-lighting setups, premium cosmetic accessories, and a sateen lounge room.</p>
            </div>
          </div>

          <div className="border border-white/[0.04] bg-white/[0.005] p-8 rounded-2xl font-sans text-xs text-slate-400 leading-relaxed">
            Tribeca Sanctuary access is granted by scheduling or permanent model residency agreements. Positioned close to elite NYC transit hubs under a highly secure, passcode-locked corporate elevator system. Completely discreet.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
