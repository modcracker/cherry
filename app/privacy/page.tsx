"use client";

import React from "react";
import { EyeOff, ShieldCheck, Mail, ArrowRight, Server, Globe, Key } from "lucide-react";

export default function PrivacyNetwork() {
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  return (
    <div className="min-h-screen bg-[#070708] py-20 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16 text-center max-w-2xl mx-auto">
          <span style={textHeader} className="text-[#FF1E82] uppercase tracking-widest block font-bold">
            Security Core
          </span>
          <h1 style={textTitle} className="text-white leading-tight">
            Advanced IP Virtualization & Regional Geoblocking
          </h1>
          <p style={textBody} className="text-gray-400">
            At Cherry NYC, we treat privacy as a hard engineering discipline. The digital landscape requires robust server structures, geofencing blockages, and solid legal NDAs to block snooping, local discovery, and identity leaks.
          </p>
        </div>

        {/* Feature blocks (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-6 bg-[#0A0A0C] border border-white/5 rounded-xl space-y-4">
            <Server className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">Multi-VPN Server Virtualization</span>
            <p style={textBody} className="text-gray-500 font-normal">
              We never broadcast from raw residential or studio connections. All video packets are routed through high-performance, private middle servers that replace physical New York geolocation tags with anonymized static codes.
            </p>
          </div>

          <div className="p-6 bg-[#0A0A0C] border border-white/5 rounded-xl space-y-4">
            <Globe id="geoblocking" className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">Regional Geofencing blackout</span>
            <p style={textBody} className="text-gray-500 font-normal">
              Blacklist entire countries, territories, zipcodes, or states. Visitors querying your channel from blocked locations are met with a completely blank profile, preventing family or acquaintances from accessing your streams.
            </p>
          </div>

          <div className="p-6 bg-[#0A0A0C] border border-white/5 rounded-xl space-y-4">
            <Key className="w-8 h-8 text-[#FF1E82]" />
            <span style={textHeader} className="text-white block">Absolute NDAs & Discretion</span>
            <p style={textBody} className="text-gray-500 font-normal">
              All staff, moderators, and support technicians sign strict, lifetime commercial NDAs. No details of your real identity, schedules, or payout records are ever saved in cloud databases.
            </p>
          </div>

        </div>

        {/* Technical breakdown in Swiss Style typography */}
        <div className="space-y-6 pt-10 border-t border-white/5 font-normal">
          <h2 style={textTitle} className="text-white">
            Digital Shield: How It Works Behind the Scenes
          </h2>
          
          <div className="space-y-6">
            
            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span style={textHeader} className="text-white font-bold block">1. Dedicated Residential Proxy IPs</span>
              <p style={textBody} className="text-gray-400">
                Data centers are easily flagged by content hubs. We use clean, dedicated residential proxy addresses located in separate safe states (e.g., Texas, Illinois) to mask your streaming feed originating location, tricking indexing scrapers and local queries.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span style={textHeader} className="text-white font-bold block">2. Advanced WebGL & Canvas Fingerprinting Blocks</span>
              <p style={textBody} className="text-gray-400">
                Modern website code can scan your local browser settings, hardware parameters, and monitor indices to tag your ID. Our studio-provisioned broadcasting computers run specialized open-source sandboxed hardware environments that completely scramble target fingerprint metrics.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E11] border border-white/5 rounded-xl space-y-2">
              <span style={textHeader} className="text-white font-bold block">3. Strict Compliance & Verified Age-Check Rings</span>
              <p style={textBody} className="text-gray-400">
                We strictly enforce 18+ identity verification at onboarding. By adhering perfectly with local regulations, we hold highly authoritative standing to automatically strike any unauthorized screen captures down from indexing platforms instantly.
              </p>
            </div>

          </div>
        </div>

        {/* CTA Contact */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#FF1E82]/10 to-transparent border border-[#FF1E82]/20 text-center space-y-4 font-normal">
          <span style={textHeader} className="text-white block font-bold">
            Formulate Your Custom Geoblock Ring Today
          </span>
          <p style={textBody} className="text-gray-300 max-w-xl mx-auto">
            You determine the geographic limits of your digital audience. Meet our Tribeca specialists to customize your dynamic shield profile, block local zipcodes, and stream with tranquility.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex h-11 px-8 rounded-full bg-white text-black hover:bg-[#FF1E82] hover:text-white transition-all text-xs font-bold items-center"
            >
              Verify & Plan Geo-Blocking <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
