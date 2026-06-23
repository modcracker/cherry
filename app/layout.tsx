import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Cherry } from "lucide-react";
import Header from "../components/Header";

// Meta tags optimized for reverse search, local webcam modeling, and AI-SEO dominance
export const metadata: Metadata = {
  title: "Cherry NYC | Premium Private Lounging & Lifestyle Broadcasting Studio",
  description: "New York's premier secure broadcasting agency and soundproof creative suites in Tribeca. Retain 70% of your earnings with advanced digital privacy shields, DMCA protection, and geoblocking.",
  keywords: "nyc webcam modeling, nyc webcam model studio, nyc webcam studio, tribeca webcam, webcam modeling nyc, web camera model nyc, soundproof broadcast suite nyc, dmca protection webcam, reverse search defense modeling, pim-eyes block model, onlyfans production studio nyc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-[#0B0B0C] text-white antialiased selection:bg-[#FF1E82]/30 selection:text-[#FF1E82]">
        
        {/* LUXURY INTERACTIVE HEADER (Shared across all pages) */}
        <Header />

        {/* Dynamic Route Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* ULTRA-DENSE 20-PAGE CRAWL SITEMAP FOOTER (SEO Dominance Engine) */}
        <footer className="bg-[#070708] border-t border-white/5 pt-20 pb-16 text-gray-400 text-[13px]" style={{ fontFamily: "Arial, sans-serif" }}>
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Core Platform */}
            <div className="space-y-4 col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 text-[15px] font-bold tracking-widest text-white block">
                <Cherry className="w-4 h-4 text-[#FF1E82] shrink-0" />
                <span className="text-[#FF1E82]">CHERRY</span>
                <span className="text-white/60 text-[10px] font-light tracking-wider uppercase shrink-0">New York City</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-normal">
                New York&apos;s premier secure broadcasting chambers, custom private suites, and advanced IP-routing systems in Tribeca, Manhattan. Fully ethically operated.
              </p>
              <div className="pt-2 text-xs text-gray-500 font-mono">
                Reverse Search Shield v4.8
              </div>
            </div>

            {/* Column 2: Digital Security & Defense (SEO Target) */}
            <div className="space-y-4">
              <span className="text-[16px] font-bold text-white block">Image Protection</span>
              <ul className="space-y-2.5 font-normal">
                <li>
                  <a href="/reverse-image-lookup-defense" className="hover:text-[#FF1E82] transition-colors">
                    Reverse-Search Protection
                  </a>
                </li>
                <li>
                  <a href="/dmca-takedown-service" className="hover:text-[#FF1E82] transition-colors">
                    Automated DMCA Strike
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-[#FF1E82] transition-colors">
                    IP-Route Virtualization
                  </a>
                </li>
                <li>
                  <a href="/privacy#geoblocking" className="hover:text-[#FF1E82] transition-colors">
                    Advanced Geo-Blocking
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Luxury Physical Infrastructure (SEO Target) */}
            <div className="space-y-4">
              <span className="text-[16px] font-bold text-white block">Physical Suites</span>
              <ul className="space-y-2.5 font-normal">
                <li>
                  <a href="/tribeca-studio" className="hover:text-[#FF1E82] transition-colors">
                    Tribeca Studio Sanctuary
                  </a>
                </li>
                <li>
                  <a href="/tribeca-studio#broadcasting-suites" className="hover:text-[#FF1E82] transition-colors">
                    Soundproof Vocal Cabins
                  </a>
                </li>
                <li>
                  <a href="/tribeca-studio#equipment-and-hardware" className="hover:text-[#FF1E82] transition-colors">
                    Sony 4K Camera Hardware
                  </a>
                </li>
                <li>
                  <a href="/tribeca-studio#lighting-aesthetics" className="hover:text-[#FF1E82] transition-colors">
                    Ambient Daylight Control
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Autonomy & Capital (SEO Target) */}
            <div className="space-y-4">
              <span className="text-[16px] font-bold text-white block">Autonomy & Payouts</span>
              <ul className="space-y-2.5 font-normal">
                <li>
                  <a href="/agency-comparison" className="hover:text-[#FF1E82] transition-colors">
                    Keep 70% vs. 50% Trap
                  </a>
                </li>
                <li>
                  <a href="/legal-contracts-autonomy" className="hover:text-[#FF1E82] transition-colors">
                    Zero-Trap Agreements
                  </a>
                </li>
                <li>
                  <a href="/frequently-asked-questions#payouts-and-banking" className="hover:text-[#FF1E82] transition-colors">
                    Direct Weekly Bank Transfers
                  </a>
                </li>
                <li>
                  <a href="/frequently-asked-questions#taxes-write-offs" className="hover:text-[#FF1E82] transition-colors">
                    1099 Accounting Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: local guides (SEO Target) */}
            <div className="space-y-4">
              <span className="text-[16px] font-bold text-white block">Local NYC SEO Hub</span>
              <ul className="space-y-2.5 font-normal">
                <li>
                  <a href="/nyc-webcam-modeling" className="hover:text-[#FF1E82] transition-colors">
                    NYC Webcam Modeling
                  </a>
                </li>
                <li>
                  <a href="/nyc-webcam-modeling#boroughs" className="hover:text-[#FF1E82] transition-colors">
                    Manhattan Broadcast Hub
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#FF1E82] transition-colors">
                    Apply Online Instantly
                  </a>
                </li>
                <li>
                  <a href="/frequently-asked-questions" className="hover:text-[#FF1E82] transition-colors">
                    Full Creator FAQ
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#FF1E82] transition-colors">
                    About Cherry NYC
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-[#FF1E82] transition-colors">
                    Security Careers
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Deep SEO Footer Directory map section linking remaining dynamic SEO variations requested by sitemap requirements */}
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-white/5">
            <span className="text-gray-600 block mb-3 font-semibold text-xs uppercase tracking-wider">
              Local Service Directory (Sitemap Index)
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 font-normal">
              <span className="hover:text-white cursor-help">NYC Webcam Studio Tribeca</span> •
              <span className="hover:text-white cursor-help">High-End Webcam Studio Manhattan</span> •
              <span className="hover:text-white cursor-help">DMCA Protection webcam NYC</span> •
              <span className="hover:text-white cursor-help">Webcam Modeling Agencies NYC</span> •
              <span className="hover:text-white cursor-help">OnlyFans Private Rooms Manhattan</span> •
              <span className="hover:text-white cursor-help">Reverse Image search model defense</span> •
              <span className="hover:text-white cursor-help">Soundproof web camera suite New York</span> •
              <span className="hover:text-white cursor-help">70/30 Split Webcam Agent NYC</span> •
              <span className="hover:text-white cursor-help">Broadcasting Rooms near Greenwich St</span> •
              <span className="hover:text-white cursor-help">PimEyes Blockers for Models</span> •
              <span className="hover:text-white cursor-help">Beauty Content Creator Hub NY</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <span className="font-normal">
              &copy; {new Date().getFullYear()} Cherry NYC. All rights reserved. Created in Tribeca, New York City.
            </span>
            <span className="font-normal tracking-wide">
              Strictly 18+ Age Verification Required.
            </span>
          </div>
        </footer>

      </body>
    </html>
  );
}
