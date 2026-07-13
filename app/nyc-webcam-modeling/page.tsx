"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, CheckCircle, Shield, Sliders, MapPin, Key, Heart, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function WebcamModelingPage() {
  const benefits = [
    {
      title: "Geofencing & Privacy Blocks",
      description: "Complete coordinate-level IP geoblocking. We mask your stream broadcast from entire states, specific NYC zip codes, or targeted foreign regions to guarantee absolute social privacy."
    },
    {
      title: "Industry-Leading 85% to 90% Splits",
      description: "While traditional agencies pocket 40% to 50% of your hard-earned revenue, Cherry NYC secures a guaranteed high-yield split, maximizing your professional return."
    },
    {
      title: "No Upfront Hardware Cost",
      description: "We supply peak-performance 4K Sony DSLR camera lines, customizable ring grids, and professional soundproofing. Zero financial risk or capital layout is required from you."
    },
    {
      title: "Continuous DMCA Takedowns",
      description: "Our autonomous crawler engines index the web 24/7 to file immediate, high-priority, binding legal takedowns on model content leaks, forum re-uploads, or stream recordings."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Secure Application",
      description: "Apply through our encrypted talent form. Your actual identity is completely protected, requiring only a preferred stage name and contact channel."
    },
    {
      num: "02",
      title: "Discreet Consultation",
      description: "Meet with our director via secure, end-to-end encrypted messaging to outline your brand concept, hours, and geographical blocklist settings."
    },
    {
      num: "03",
      title: "Studio Matching & Onboarding",
      description: "Tour our luxury suites in Tribeca, SoHo, Chelsea, or Williamsburg. Pick your broadcast aesthetic or opt for our premium remote tech-suit kits."
    },
    {
      num: "04",
      title: "Sovereign Earning",
      description: "Broadcast on top platforms under our corporate shield. Retain 100% ownership of your channels, fan data, and receive weekly escrow payouts."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-rose-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <Header />
      
      <main className="pt-36 max-w-5xl mx-auto px-4 sm:px-6 pb-24 relative z-10">
        <div className="space-y-16">
          
          {/* Hero Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" /> High-End Webcam Modeling Overview
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
              Webcam Modeling <br />
              <span className="font-semibold text-rose-500">In New York City</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed max-w-3xl">
              New York City is the global epicenter of fashion, digital branding, and luxury entertainment. Webcam modeling with Cherry NYC merges this creative supremacy with modern security protocols, establishing an elite, highly polished digital workspace where models generate sustainable, high-income careers securely.
            </p>
          </div>

          {/* Deep Content Section 1: The Modern Standard */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-light text-white">
                The Shift to <span className="font-semibold text-rose-500">Professional Brand Architecture</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                For too long, the digital webcam modeling industry has been flooded by amateur setups and predatory agencies charging high administrative fees. Cherry NYC was founded to disrupt this model. We treat our models as sovereign business partners, equipping them with the exact tools, spaces, and legal frameworks needed to build a premium brand.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Whether you are a seasoned content creator looking to optimize your traffic channels or an ambitious newcomer seeking a secure, high-end starting environment, our studio network offers an unparalleled launchpad.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/careers" className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
                  Apply Today
                </Link>
                <Link href="/tribeca-studio" className="px-6 py-3 border border-white/10 hover:border-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors">
                  Explore Tribeca HQ
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border-rose-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full filter blur-xl" />
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-rose-500" /> Key Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">4K DSLR Broadcast Feeds</p>
                    <p className="text-[11px] text-gray-400">Crystal clear streams that outshine 99% of competitors.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Guaranteed Discretion</p>
                    <p className="text-[11px] text-gray-400">Encrypted IP routing and zero public directory listings.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Immediate Escrow Payouts</p>
                    <p className="text-[11px] text-gray-400">Direct weekly transfers via independent, secure trust lines.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Deep Content Section 2: Benefits Grid */}
          <section className="space-y-8 pt-6">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-light text-white">
                Why Elite Models Choose <span className="font-semibold text-rose-500">Cherry NYC</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans">
                We have engineered every detail of our studio environments and corporate defenses to protect your identity, preserve your peace of mind, and maximize your revenue.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl space-y-3 border-white/[0.03]">
                  <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-lg w-fit">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Deep Content Section 3: The Step-by-Step Roadmap */}
          <section className="space-y-8 pt-6">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-light text-white">
                How to Build Your Career <span className="font-semibold text-rose-500">Step-by-Step</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans">
                Starting a high-end digital modeling career shouldn't be confusing. We provide a streamlined, supportive path from initial application to full sovereignty.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border-white/[0.03] space-y-4 relative group">
                  <div className="absolute top-4 right-4 text-3xl font-bold text-white/[0.02] group-hover:text-rose-500/5 transition-colors font-mono select-none">
                    {step.num}
                  </div>
                  <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest">
                    Step {step.num}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Localized Neighborhood Section */}
          <section className="border border-white/[0.04] bg-white/[0.005] p-8 rounded-2xl space-y-4 font-sans text-xs text-gray-400 leading-relaxed">
            <div className="flex items-center gap-2 text-rose-400 font-mono uppercase font-bold tracking-widest text-[10px]">
              <MapPin className="w-4 h-4 text-rose-500 animate-pulse" /> Neighborhood-Specific Luxury Studio Suites
            </div>
            <p>
              Whether you wish to broadcast from our flagship <Link href="/tribeca-studio" className="text-white hover:text-rose-400 underline transition-colors">Tribeca Sanctuary lofts</Link>, our artistic <Link href="/locations/soho" className="text-white hover:text-rose-400 underline transition-colors">SoHo premium suites</Link>, the acoustically optimized <Link href="/locations/chelsea" className="text-white hover:text-rose-400 underline transition-colors">Chelsea white-box lofts</Link>, our industrial-chic <Link href="/locations/williamsburg" className="text-white hover:text-rose-400 underline transition-colors">Williamsburg waterfront rooms</Link>, or from the comfort of your private residence with our custom remote hardware configurations, Cherry NYC supports your journey. Experience high-end tech-stack setups backed by professional, elite protection.
            </p>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

