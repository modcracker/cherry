"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Cherry, 
  ShieldCheck, 
  Camera, 
  Landmark, 
  Scale, 
  Lock, 
  HelpCircle, 
  FileText, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Video, 
  Sparkles, 
  Coins, 
  Key,
  Shield,
  EyeOff,
  UserCheck
} from "lucide-react";

interface SubItem {
  name: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MenuCategory {
  title: string;
  highlight: string;
  href: string;
  featured: {
    title: string;
    description: string;
    badge: string;
    href: string;
    cta: string;
  };
  items: SubItem[];
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<"sanctuary" | "defense" | "capital" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close menus on path changes safely without cascading/blocking synchronous renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveMenu(null);
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleMouseEnter = (menuType: "sanctuary" | "defense" | "capital") => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveMenu(menuType);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const clearHoverTimeout = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  const menuData: Record<"sanctuary" | "defense" | "capital", MenuCategory> = {
    sanctuary: {
      title: "The Sanctuary",
      highlight: "High-End Physical Media Spaces",
      href: "/tribeca-studio",
      featured: {
        title: "Tribeca Premium Loft Tour",
        description: "Schedule an ironclad physical walk-through of our bespoke suites. Secure keyless code activation included.",
        badge: "EXCLUSIVE LOCATION",
        href: "/contact",
        cta: "Request Invitation"
      },
      items: [
        {
          name: "Tribeca Sanctuary Loft",
          href: "/tribeca-studio",
          description: "Discrete design, marked sound insulation, and luxury furnishings.",
          icon: Landmark
        },
        {
          name: "Soundproof Vocal Chambers",
          href: "/tribeca-studio#broadcasting-suites",
          description: "Acoustically isolated zones custom tailored to 100% comfort.",
          icon: Video
        },
        {
          name: "Sony 4K Camera Hardware",
          href: "/tribeca-studio#equipment-and-hardware",
          description: "Stellar visual optics and capture rigs mapped for flawless details.",
          icon: Camera
        },
        {
          name: "Ambient Light Presets",
          href: "/tribeca-studio#lighting-aesthetics",
          description: "Automated custom backdrops, neon rings, and soft sunset settings.",
          icon: Sparkles
        }
      ]
    },
    defense: {
      title: "Digital Defense",
      highlight: "Intervention & Digital Safehouse",
      href: "/reverse-image-lookup-defense",
      featured: {
        title: "Run Privacy Scan Audit",
        description: "Verify your exposure index across PimEyes, adult-finder scraper bots, and image servers instantly.",
        badge: "SHIELD CONFIGURATION",
        href: "/contact?subject=defense",
        cta: "Analyze My Image Assets"
      },
      items: [
        {
          name: "Reverse-Search Blocker",
          href: "/reverse-image-lookup-defense",
          description: "Intercept crawlers before they reference your digital profiles.",
          icon: EyeOff
        },
        {
          name: "Automated DMCA Strike Panel",
          href: "/dmca-takedown-service",
          description: "Continuous lookup and high-speed takedowns of leaked content.",
          icon: Scale
        },
        {
          name: "IP-Route Virtualization",
          href: "/privacy",
          description: "Mask physical geolocation coordinates beneath redundant VPN proxies.",
          icon: Lock
        },
        {
          name: "Precision Geo-Blocking",
          href: "/privacy#geoblocking",
          description: "Block selected municipal areas, zips, neighbors, and business IPs.",
          icon: Shield
        }
      ]
    },
    capital: {
      title: "Autonomy & Capital",
      highlight: "Contract Sovereignty & Returns",
      href: "/agency-comparison",
      featured: {
        title: "70/30 Split Audit Tool",
        description: "Compare your current commission setup with Cherry's direct payout models. Zero hidden charges.",
        badge: "VERIFIED COMMISSION",
        href: "/agency-comparison#calculator",
        cta: "Run Comm Analysis"
      },
      items: [
        {
          name: "Freedom Model (Retain 70%)",
          href: "/agency-comparison",
          description: "We take just 30% for full penthouse suite and hardware use.",
          icon: Coins
        },
        {
          name: "Zero-Trap Agreements",
          href: "/legal-contracts-autonomy",
          description: "100% operator agency ownership. Free to withdraw any second.",
          icon: FileText
        },
        {
          name: "1099 Accounting Guide",
          href: "/frequently-asked-questions#taxes-write-offs",
          description: "Expert advice on write-offs, LLC setups, and revenue privacy.",
          icon: Key
        },
        {
          name: "NYC Modeling Primer",
          href: "/nyc-webcam-modeling",
          description: "How to operate securely in New York's competitive broadcast space.",
          icon: UserCheck
        }
      ]
    }
  };

  return (
    <header id="cherry-header" className="sticky top-0 z-50 bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2.5 hover:opacity-95 transition-opacity z-50">
          <Cherry className="w-5 h-5 text-[#FF1E82] shrink-0 animate-pulse" />
          <div style={{ fontFamily: "Arial, sans-serif" }} className="flex items-center space-x-2 text-[15px] font-bold tracking-widest text-white">
            <span className="text-[#FF1E82]">CHERRY</span>
            <span className="text-white/65 text-[11px] font-medium tracking-[0.2em] uppercase shrink-0">NYC</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION BAR WITH MEGA MENU INTERACTION */}
        <nav 
          style={{ fontFamily: "Arial, sans-serif" }} 
          className="hidden lg:flex items-center space-x-1 text-[13px] font-bold text-gray-400 h-full"
        >
          {/* Sanctuary Category */}
          <div 
            className="relative h-full flex items-center px-4"
            onMouseEnter={() => handleMouseEnter("sanctuary")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 hover:text-[#FF1E82] cursor-pointer py-2 transition-colors ${activeMenu === "sanctuary" ? "text-white" : ""}`}>
              <span>The Sanctuary</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-250 ${activeMenu === "sanctuary" ? "rotate-180 text-[#FF1E82]" : ""}`} />
            </button>
          </div>

          {/* Defense Category */}
          <div 
            className="relative h-full flex items-center px-4"
            onMouseEnter={() => handleMouseEnter("defense")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 hover:text-[#FF1E82] cursor-pointer py-2 transition-colors ${activeMenu === "defense" ? "text-white" : ""}`}>
              <span>Digital Defense</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-250 ${activeMenu === "defense" ? "rotate-180 text-[#FF1E82]" : ""}`} />
            </button>
          </div>

          {/* Capital Category */}
          <div 
            className="relative h-full flex items-center px-4"
            onMouseEnter={() => handleMouseEnter("capital")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 hover:text-[#FF1E82] cursor-pointer py-2 transition-colors ${activeMenu === "capital" ? "text-white" : ""}`}>
              <span>Autonomy & Split</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-250 ${activeMenu === "capital" ? "rotate-180 text-[#FF1E82]" : ""}`} />
            </button>
          </div>

          {/* Direct Link: FAQ */}
          <Link href="/frequently-asked-questions" className="hover:text-white px-4 py-2 transition-colors">
            FAQ
          </Link>

          {/* Direct Link: Guide */}
          <Link href="/nyc-webcam-modeling" className="hover:text-white px-4 py-2 transition-colors">
            NYC Guide
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center space-x-4 z-50">
          <Link
            href="/contact"
            style={{ fontFamily: "Arial, sans-serif" }}
            className="hidden sm:inline-flex items-center h-10 px-6 text-[13px] font-bold rounded-full bg-white text-[#0B0B0C] hover:bg-[#FF1E82] hover:text-white transition-all cursor-pointer shadow-lg hover:shadow-[#FF1E82]/20"
          >
            Inquire Securely
          </Link>

          {/* Mobile hamburger menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF1E82]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ========================================= */}
        {/* DESKTOP MEGA MENU DROPDOWN PANEL */}
        {/* ========================================= */}
        {activeMenu && (
          <div 
            className="absolute top-20 left-0 w-full bg-[#0E0D11]/98 border-b border-white/5 shadow-2xl z-40 transform origin-top transition-all duration-200"
            onMouseEnter={clearHoverTimeout}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-12 gap-8">
              
              {/* Left Column: Featured Highlight Promo Card */}
              <div className="col-span-4 bg-gradient-to-br from-[#16151B] to-[#0A090C] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#FF1E82]/10 border border-[#FF1E82]/25 text-[#FF1E82] text-[9px] font-mono tracking-widest px-2.5 py-1 rounded-full mb-4">
                    {menuData[activeMenu].featured.badge}
                  </span>
                  <h4 className="text-lg font-light tracking-tight text-white mb-2 font-mono">
                    {menuData[activeMenu].featured.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light mb-6">
                    {menuData[activeMenu].featured.description}
                  </p>
                </div>
                
                <Link 
                  href={menuData[activeMenu].featured.href}
                  className="inline-flex items-center justify-between text-xs font-semibold text-white bg-[#FF1E82] hover:bg-rose-600 transition-colors px-4 py-2.5 rounded-full"
                >
                  <span>{menuData[activeMenu].featured.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Right Column: Grid list of sub-categories */}
              <div className="col-span-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#FF1E82] uppercase">
                      Category Breakdown
                    </span>
                    <h3 className="text-xl font-light tracking-tight text-white mt-1 border-b border-white/5 pb-3">
                      {menuData[activeMenu].highlight}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {menuData[activeMenu].items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={index} 
                          href={item.href}
                          className="flex gap-4 p-3.5 rounded-xl hover:bg-white/5 transition-all duration-200 group text-left"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF1E82]/15 group-hover:text-[#FF1E82] transition-colors text-zinc-400">
                            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                          </div>
                          <div>
                            <span className="font-bold text-[12.5px] text-zinc-200 group-hover:text-white block transition-colors">
                              {item.name}
                            </span>
                            <p className="text-[11px] text-zinc-500 font-light mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Subfooter anchor */}
                <div className="mt-6 border-t border-white/5 pt-4 flex justify-between items-center text-xs text-zinc-500">
                  <span>*Protected by isolated DNS hosting and proxy defense arrays.</span>
                  <Link href={menuData[activeMenu].href} className="text-[#FF1E82] hover:underline flex items-center gap-1 font-bold">
                    <span>View Hub Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

      {/* ========================================= */}
      {/* MOBILE FULL-SCREEN RESPONSIVE DRAWER */}
      {/* ========================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#0B0B0C] border-b border-white/5 z-50 animate-fade-in text-left overflow-y-auto max-h-[calc(100vh-5rem)]">
          <div className="p-6 space-y-8">
            
            {/* Sanctuary Category block */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#FF1E82] uppercase block border-b border-white/5 pb-1.5">
                The Sanctuary
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {menuData.sanctuary.items.map((item, index) => (
                  <Link key={index} href={item.href} className="p-3 bg-white/5 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <Camera className="w-4 h-4 text-[#FF1E82] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">{item.name}</span>
                      <span className="text-[10px] text-zinc-500 line-clamp-1">{item.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Privacy & Defense block */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#FF1E82] uppercase block border-b border-white/5 pb-1.5">
                Digital Defense
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {menuData.defense.items.map((item, index) => (
                  <Link key={index} href={item.href} className="p-3 bg-white/5 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#FF1E82] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">{item.name}</span>
                      <span className="text-[10px] text-zinc-500 line-clamp-1">{item.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sovereign payouts block */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#FF1E82] uppercase block border-b border-white/5 pb-1.5">
                Autonomy & Split
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {menuData.capital.items.map((item, index) => (
                  <Link key={index} href={item.href} className="p-3 bg-white/5 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <Coins className="w-4 h-4 text-[#FF1E82] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">{item.name}</span>
                      <span className="text-[10px] text-zinc-500 line-clamp-1">{item.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Extra direct links */}
            <div className="border-t border-white/5 pt-6 space-y-4">
              <Link href="/frequently-asked-questions" className="block text-sm font-bold text-zinc-300 hover:text-[#FF1E82]">
                Frequently Asked Questions (FAQ)
              </Link>
              <Link href="/nyc-webcam-modeling" className="block text-sm font-bold text-zinc-300 hover:text-[#FF1E82]">
                NYC Webcam Modeling Guide
              </Link>
              <Link href="/about" className="block text-sm font-bold text-zinc-300 hover:text-[#FF1E82]">
                About Cherry NYC
              </Link>
              <Link href="/careers" className="block text-sm font-bold text-zinc-300 hover:text-[#FF1E82]">
                Apply as Staff/Operator
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full h-12 text-sm font-bold rounded-full bg-[#FF1E82] text-white hover:bg-rose-600 transition-all shadow-lg shadow-[#FF1E82]/10"
              >
                Inquire Securely Instantly
              </Link>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
