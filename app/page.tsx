"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, MapPin, Radio, Sparkles, Flame, EyeOff, Lock, Landmark, CheckCircle, ArrowRight, UserCheck, Play } from "lucide-react";
import Link from "next/link";

// High-fashion model static assets
import heroImg from "@/src/assets/images/luxury_tribeca_loft_model_1782184143879.jpg";
import portraitImg from "@/src/assets/images/elite_model_studio_portrait_1782184157024.jpg";
import sohoModelImg from "@/src/assets/images/soho_loft_webcam_model_1782184168315.jpg";
import chelseaModelImg from "@/src/assets/images/chelsea_studio_model_1782184184344.jpg";
import williamsburgModelImg from "@/src/assets/images/williamsburg_loft_model_1782184198866.jpg";
import midtownModelImg from "@/src/assets/images/midtown_penthouse_model_1782184211147.jpg";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialLink: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in the required fields to apply.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070708] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-10 w-[500px] h-[500px] bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-500/10 bg-rose-500/5 text-rose-400 text-xs font-semibold uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" /> High-End Brand Architecture for Elite Models
              </div>

              <h1 className="text-5xl sm:text-7xl font-display font-light tracking-tight text-white leading-none">
                Webcam Modeling <br />
                <span className="font-semibold text-rose-500">Refined & Protected</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-400 font-sans max-w-2xl leading-relaxed">
                We operate exclusively deep inside New York City's sovereign brand space. Offering luxury Tribeca studio residencies, maximum technology, and military-grade copyright defense.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#apply-form"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-white text-neutral-950 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl shadow-rose-500/10 hover:shadow-rose-500/25 cursor-pointer"
                >
                  Apply As Model
                </a>
                <Link
                  href="/agency-comparison"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/10 hover:border-white/20 hover:bg-white/[0.02] text-white transition-all duration-300"
                >
                  Why Cherry NYC?
                </Link>
              </div>

              {/* Status Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.04] max-w-lg">
                <div>
                  <div className="text-2xl font-semibold text-white">85-90%</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-rose-400">Model Split</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">4 Studio</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-rose-400">NYC Districts</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Zero</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-rose-400">Leak Rate</div>
                </div>
              </div>
            </div>

            {/* Right Picture Column */}
            <div className="lg:col-span-12 xl:col-span-5 relative mt-8 xl:mt-0">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-500/30 via-transparent to-rose-500/10 rounded-3xl blur-xl opacity-70 pointer-events-none" />
              
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl group w-full max-w-md mx-auto">
                <Image
                  src={heroImg}
                  alt="Elite High-Fashion Professional Model"
                  fill
                  placeholder="blur"
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700 filter brightness-[0.9] group-hover:brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Broadcast Frame Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 pointer-events-none" />
                
                {/* Upper Status Ribbon */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.05] z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-[10px] font-mono tracking-widest text-[#ef4444] uppercase font-bold">HQ STREAM ACTIVE</span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">TRIBECA_01</span>
                </div>

                {/* Lower Model ID Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md p-4 rounded-xl border border-white/[0.05] z-10 space-y-2">
                  <p className="text-xs font-mono text-rose-400 tracking-wider font-semibold">CHERRY PROFESSIONAL MODEL</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-semibold text-white">Broadcast Suite Alpha</p>
                      <p className="text-[10px] text-gray-400 font-sans">Empowered, Sovereign, Creative</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-rose-500/15 text-rose-400 px-2 py-1 rounded-md border border-rose-500/25 text-[9px] font-mono uppercase tracking-wider">
                      <Play className="w-2.5 h-2.5 fill-rose-400" /> Live Web
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Pillars / Bento Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Tribeca HQ */}
          <div className="glass-panel rounded-2xl p-8 hover:border-rose-500/20 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full filter blur-2xl group-hover:bg-rose-500/15 transition-all duration-300" />
            <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400 w-fit mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-display">Tribeca Loft Studios</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Full private access to architectural design suites in Tribeca, Manhattan. Equipped with high-definition broadcast technologies, professional light-grids, and sateen linen setups.
            </p>
            <Link href="/tribeca-studio" className="text-xs text-rose-400 font-mono flex items-center gap-1 group-hover:text-rose-300">
              Explore Spaces <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: DMCA Defenses */}
          <div className="glass-panel rounded-2xl p-8 hover:border-[#10b981]/20 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-2xl group-hover:bg-emerald-500/15 transition-all duration-300" />
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-display">Instant DMCA Shield</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Never worry about leaks, search indexing, or re-uploads. Our autonomous content scans index the web 24/7 to file immediate, high-priority, binding legal takedowns on model content.
            </p>
            <Link href="/dmca-takedown-service" className="text-xs text-emerald-400 font-sans flex items-center gap-1 group-hover:text-emerald-300">
              Copyright Defenses <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Reverse Image Face search block */}
          <div className="glass-panel rounded-2xl p-8 hover:border-sky-500/20 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full filter blur-2xl group-hover:bg-sky-500/15 transition-all duration-300" />
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 w-fit mb-6">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-display">Deep Facial Masking</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Advanced reverse-image defense. We actively coordinate with PIMEyes, SocialCatfish, and Google Lens algorithms to opt-out and mask model facial structures within public databases.
            </p>
            <Link href="/reverse-image-lookup-defense" className="text-xs text-sky-400 font-sans flex items-center gap-1 group-hover:text-sky-300">
              Algorithmic Shields <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Geographic Neighborhood Showcase */}
      <section className="py-20 border-t border-b border-white/[0.03] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white">
              Sovereign Studio Space <span className="font-semibold text-rose-500">In NYC</span>
            </h2>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              We manage ultra-discreet, modern workspaces positioned strategic-deep inside Manhattan and Brooklyn. Custom setups designed purely for peak luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* SoHo */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-rose-500/35 transition-all duration-500 group aspect-[3/4] flex flex-col justify-end p-6 bg-[#0c0c0e]">
              <div className="absolute inset-0 z-0">
                <Image
                  src={sohoModelImg}
                  alt="SoHo Elite Creator"
                  fill
                  placeholder="blur"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.55]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-1" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold block">Zipcode 10012</span>
                <h3 className="text-lg font-semibold text-white font-display">SoHo Collective</h3>
                <p className="text-xs text-gray-300 font-sans line-clamp-2">Loft architectures overlooking dynamic high-fashion spaces.</p>
                <div className="pt-2">
                  <Link href="/locations/soho" className="inline-flex items-center gap-1.5 text-xs text-white group-hover:text-rose-400 font-mono transition-colors">
                    Enter Location <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Chelsea */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-rose-500/35 transition-all duration-500 group aspect-[3/4] flex flex-col justify-end p-6 bg-[#0c0c0e]">
              <div className="absolute inset-0 z-0">
                <Image
                  src={chelseaModelImg}
                  alt="Chelsea Elite Creator"
                  fill
                  placeholder="blur"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.55]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-1" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold block">Zipcode 10011</span>
                <h3 className="text-lg font-semibold text-white font-display">Chelsea Suite</h3>
                <p className="text-xs text-gray-300 font-sans line-clamp-2">Gallery district spaces designed for modern performance.</p>
                <div className="pt-2">
                  <Link href="/locations/chelsea" className="inline-flex items-center gap-1.5 text-xs text-white group-hover:text-rose-400 font-mono transition-colors">
                    Enter Location <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Williamsburg */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-rose-500/35 transition-all duration-500 group aspect-[3/4] flex flex-col justify-end p-6 bg-[#0c0c0e]">
              <div className="absolute inset-0 z-0">
                <Image
                  src={williamsburgModelImg}
                  alt="Williamsburg Elite Creator"
                  fill
                  placeholder="blur"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.55]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-1" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold block">Zipcode 11211</span>
                <h3 className="text-lg font-semibold text-white font-display">Williamsburg</h3>
                <p className="text-xs text-gray-300 font-sans line-clamp-2">Industrial iron framework, waterfront luxury of Brooklyn.</p>
                <div className="pt-2">
                  <Link href="/locations/williamsburg" className="inline-flex items-center gap-1.5 text-xs text-white group-hover:text-rose-400 font-mono transition-colors">
                    Enter Location <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Midtown */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-rose-500/35 transition-all duration-500 group aspect-[3/4] flex flex-col justify-end p-6 bg-[#0c0c0e]">
              <div className="absolute inset-0 z-0">
                <Image
                  src={midtownModelImg}
                  alt="Midtown Elite Creator"
                  fill
                  placeholder="blur"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.55]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-1" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold block">Zipcode 10018</span>
                <h3 className="text-lg font-semibold text-white font-display">Midtown Manhattan</h3>
                <p className="text-xs text-gray-300 font-sans line-clamp-2">Penthouse views over the iconic city skyline.</p>
                <div className="pt-2">
                  <Link href="/locations/midtown" className="inline-flex items-center gap-1.5 text-xs text-white group-hover:text-rose-400 font-mono transition-colors">
                    Enter Location <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Structure Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white leading-tight">
              Higher Standards for <br />
              <span className="font-semibold text-rose-500">Absolute Career Sovereignty</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Traditional web modeling networks operate on bloated, unchecked overhead fee architectures. Cherry NYC is different. We align under automated legal agreements and smart scheduling scripts guaranteeing that you control 85% to 90% of your raw broadcast earnings directly.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Escrow-Backed Payout Guarantee</h4>
                  <p className="text-xs text-gray-400">All earnings are routed electronically via independent financial escrow, ensuring immediate clearance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full IP Ownership Rights</h4>
                  <p className="text-xs text-gray-400">You retain 100% intellectual property rights over all generated media, broadcast, and logs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Frame Representation */}
          <div className="relative rounded-2xl overflow-hidden border border-rose-500/15 aspect-[4/3] flex flex-col justify-end p-8 group shadow-2xl bg-neutral-950">
            <div className="absolute inset-0 z-0">
              <Image
                src={portraitImg}
                alt="Tribeca Live Stream Model"
                fill
                placeholder="blur"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.8]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/95 backdrop-blur-md border border-white/[0.05] relative z-10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#ef4444] uppercase font-bold">Primary Tribeca HQ Live Stream</span>
              </div>
              <p className="text-sm font-semibold text-white">Ultra-HD Broadcast Suite Alpha Activated</p>
              <div className="flex gap-4 text-[10px] font-mono text-gray-400">
                <span>FPS: 60</span>
                <span>Bitrate: 8500kbps</span>
                <span>Latency: ~1.2s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Application Form */}
      <section id="apply-form" className="py-20 border-t border-white/[0.03] bg-white/[0.005]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glass-panel rounded-3xl p-10 sm:p-12 relative overflow-hidden border-rose-500/10">
            
            {isSubmitted ? (
              <div className="text-center space-y-6 py-12">
                <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-400 mx-auto border border-rose-500/35 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">Application Received</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
                  Thank you for applying to Cherry NYC. Our director will reach out to you discreetly within 24 hours at the email provided. Check your spam and folders.
                </p>
                <div className="text-[10px] text-gray-500 font-mono">Reference ID: CHERRY-AP-{(Math.random()*100000).toFixed(0)}</div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="inline-block text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold">Model Career Entrance</span>
                  <h2 className="text-3xl font-display font-light text-white">Apply For <span className="font-semibold text-rose-500">Cherry NYC</span> Residency</h2>
                  <p className="text-xs text-gray-400 font-sans max-w-sm mx-auto">Absolute luxury, guaranteed shielding, higher split, 24/7 legal guardianship.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">Stage Name or Preferred Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexis"
                        className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white placeholder-gray-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">Discreet Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alexis@proton.me"
                        className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white placeholder-gray-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">Social / Instagram / Twitter Handle (Optional)</label>
                    <input
                      type="text"
                      value={formData.socialLink}
                      onChange={(e) => setFormData({ ...formData, socialLink: e.target.value })}
                      placeholder="@handle"
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">Tell Us About Yourself / Inquiries</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Your broadcast preferences, experience level, scheduling requests..."
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/5 focus:border-rose-500 focus:outline-none rounded-xl text-sm text-white placeholder-gray-600 transition-colors resize-none"
                    />
                  </div>

                  <p className="text-[10px] text-gray-500 leading-normal">
                    * By clicking submit, you agree to our privacy encryption policy. Your information is encrypted at transit and rest. It is never sold, shared, or leaked under penalty of law.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-neutral-900 bg-white hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl"
                  >
                    Submit Encrypted Application
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
