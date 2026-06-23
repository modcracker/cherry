"use client";

import React from "react";
import { MapPin, Shield, Tv, Sparkles, VolumeX, ArrowRight, Video, Sun, Cherry } from "lucide-react";
import Image from "next/image";
import heroBg from "../../src/assets/images/sensual_lounging_bed_1782148626078.jpg";

export default function TribecaStudio() {
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  return (
    <div className="relative min-h-screen bg-[#070708] text-white overflow-hidden">
      
      {/* EXQUISITE VISUAL HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={heroBg}
            alt="Cherry NYC Tribeca Studio Suite"
            fill
            priority
            className="object-cover object-center scale-[1.01] brightness-55 contrast-115 select-none"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          {/* Seductive luxury gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-black/80" />
          <div className="absolute inset-0 bg-radial from-[#FF1E82]/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Hero content aligned in standard grid */}
        <div className="max-w-4xl w-full mx-auto px-6 relative z-10 text-center space-y-6">
          <span style={textHeader} className="text-[#FF1E82] uppercase tracking-widest block font-bold flex items-center justify-center gap-2">
            <Cherry className="w-4 h-4 shrink-0" />
            <span>Physical Sanctuary</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight uppercase font-extralight block">
            Inside the <span className="font-bold text-[#FF1E82]">Tribeca Studio</span> Ecosystem
          </h1>
          <p style={textBody} className="text-zinc-300 max-w-xl font-light mx-auto backdrop-blur-sm bg-black/10 py-2 rounded-xl">
            Headquartered in hidden, premium Manhattan, Cherry NYC provides unmatched physical safety, soundproof isolation, styling accessories, and cutting-edge 4K DSLR optics to ensure our Independent Broadcasters broadcast at peak status.
          </p>
        </div>
      </div>

      {/* Giant Cherry Watermark Logo */}
      <div className="absolute right-[-100px] top-[45%] opacity-[0.03] text-[#FF1E82] pointer-events-none z-0">
        <Cherry className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <span style={textHeader} className="text-[#FF1E82] uppercase tracking-widest block font-bold flex items-center justify-center gap-2">
            <Cherry className="w-4 h-4 shrink-0" />
            <span>Physical Sanctuary</span>
          </span>
          <h1 style={textTitle} className="text-white leading-tight">
            Inside the Tribeca Studio Ecosystem
          </h1>
          <p style={textBody} className="text-gray-400">
            Headquartered in hidden, premium Manhattan, Cherry NYC provides unmatched physical safety, soundproof isolation, styling accessories, and cutting-edge 4K DSLR optics to ensure our Independent Broadcasters broadcast at peak status.
          </p>
        </div>

        {/* Studio Specs Grill */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <VolumeX className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">
              Acoustic Isolation & Soundproofing
            </span>
            <p style={textBody} className="text-gray-400 font-normal">
              Each room uses professional dual-layer acoustic paneling and isolated drywall boundaries to ensure 99.8% ambient dampening. Broadcast in complete tranquility with zero external city sounds, traffic feedback, or sound leaks from sister suites.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <Video className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">
              DSLR & Mirrorless 4K Capture
            </span>
            <p style={textBody} className="text-gray-400 font-normal">
              Ditch low-quality laptop webcams. All chambers are fitted with professional Sony mirrorless DSLR equipment, fast prime glass lenses, and direct server connections for ultra-high-definition, lag-free streaming at 60 frames per second.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <Sun className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">
              Soft Daylight Lighting Control
            </span>
            <p style={textBody} className="text-gray-400 font-normal">
              Lighting makes or breaks a digital broadcast. Every bedroom sanctuary features custom-positioned soft LED rings, adjustable daylight tubes, and smart color controllers. Toggle between warm golden skin hues or clean morning white setups easily.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 space-y-4">
            <Shield className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">
              Physical Safety & Discrete Entry
            </span>
            <p style={textBody} className="text-gray-400 font-normal">
              Located within a secure building featuring double keycard portals and discrete, double-back exit lanes near Greenwich Street. Our physical studio operates with zero outdoor signage, nameplates, or logo banners to protect your identity.
            </p>
          </div>

        </div>

        {/* Detailed Suite Specs Room by Room */}
        <div className="space-y-6 pt-10 border-t border-white/5 font-normal">
          <h2 style={textTitle} className="text-white">
            Available Broadcasting Environments
          </h2>

          <div className="space-y-6">
            
            {/* Environment 1 */}
            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span className="text-[#FF1E82] text-xs font-mono font-bold uppercase tracking-wider block">CHAMBER 01</span>
              <span style={textHeader} className="text-white block font-bold">The Luxury Day Bed Suite</span>
              <p style={textBody} className="text-gray-400">
                Outfitted with high-fashion linen, custom-stitched velvet frames, and warm natural brick accents. Ideal for cozy morning lookbooks, style chats, and ambient skincare streams.
              </p>
            </div>

            {/* Environment 2 */}
            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span className="text-[#FF1E82] text-xs font-mono font-bold uppercase tracking-wider block">CHAMBER 02</span>
              <span style={textHeader} className="text-white block font-bold">The Clean Skincare & Bath Sanctuary</span>
              <p style={textBody} className="text-gray-400">
                Features designer freestanding baths, luxurious ceramic tiles, large mirrors, and adjustable dimmers to record premium lotion applications, sensory pedicures, and beauty routines.
              </p>
            </div>

            {/* Environment 3 */}
            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span className="text-[#FF1E82] text-xs font-mono font-bold uppercase tracking-wider block">CHAMBER 03</span>
              <span style={textHeader} className="text-white block font-bold">The Soundproof ASMR Acoustic Capsule</span>
              <p style={textBody} className="text-gray-400">
                Built strictly around audio frequency response. Featuring premium condenser microphones, zero reverberation wall absorption blocks, and ultra-high gain soundboards for sound sensory creations and whisper feeds.
              </p>
            </div>

          </div>
        </div>

        {/* CTA Contact */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#FF1E82]/10 to-transparent border border-[#FF1E82]/20 text-center space-y-4">
          <span style={textHeader} className="text-white block font-bold">
            Inquire Privately for Booking Availability
          </span>
          <p style={textBody} className="text-gray-300 max-w-xl mx-auto font-normal">
            To prevent unsolicited walk-ins and protect current creators on-air, our physical Tribeca block is fully anonymous. Solve the secure verification gate on our Contact page to speak directly to a studio coordinator.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-[#FF1E82] text-white hover:bg-white hover:text-black transition-all text-xs font-bold items-center"
            >
              Verify & View Coordinating Map <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
