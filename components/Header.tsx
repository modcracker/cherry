"use client";

import { useState } from "react";
import Link from "next/link";
import { Cherry, ChevronDown, Menu, X, Shield, MapPin, Sparkles, Sliders, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const locations = [
    { name: "SoHo Collective", path: "/locations/soho", desc: "Luxury loft experience", zip: "10012" },
    { name: "Chelsea Suite", path: "/locations/chelsea", desc: "High-fashion private suites", zip: "10011" },
    { name: "Williamsburg Studio", path: "/locations/williamsburg", desc: "Industrial chic, New Brooklyn", zip: "11211" },
    { name: "Midtown Manhattan", path: "/locations/midtown", desc: "Penthouse views & high pace", zip: "10018" },
  ];

  const protections = [
    { name: "DMCA Takedown Service", path: "/dmca-takedown-service", icon: Shield, desc: "Automatic copyright removal" },
    { name: "Reverse Image Defense", path: "/reverse-image-lookup-defense", icon: Sliders, desc: "Facial-recognition block lists" },
    { name: "Escrow & Autonomous Contracts", path: "/legal-contracts-autonomy", icon: Sparkles, desc: "Secure autonomous structures" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.04] bg-[#070708]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-rose-600/5 border border-rose-500/20 shadow-lg shadow-rose-500/5 group-hover:border-rose-500/40 group-hover:shadow-rose-500/15 transition-all duration-300">
                <Cherry className="w-5.5 h-5.5 text-rose-500 fill-rose-500/10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="text-xl font-display font-light tracking-[0.25em] text-white">
                CHERRY<span className="text-rose-500 font-semibold group-hover:animate-pulse">.</span>NYC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Home
            </Link>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLocationsOpen(!isLocationsOpen);
                  setIsServicesOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`} />
              </button>

              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-panel rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid gap-4">
                    <p className="text-[10px] font-mono tracking-widest text-[#ef4444] uppercase font-bold">New York City Neighborhoods</p>
                    {locations.map((loc) => (
                      <Link
                        key={loc.name}
                        href={loc.path}
                        onClick={() => setIsLocationsOpen(false)}
                        className="group flex flex-col p-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="text-sm font-semibold text-white flex items-center gap-1 group-hover:text-rose-400 transition-colors">
                          <MapPin className="w-3 h-3 text-rose-500" /> {loc.name}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5">{loc.desc}</span>
                        <span className="text-[10px] text-gray-500 font-mono mt-0.5">Zipcode: {loc.zip}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Protections Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsLocationsOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Privacy Defense</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-panel rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid gap-4">
                    <p className="text-[10px] font-mono tracking-widest text-[#ef4444] uppercase font-bold">Model Sovereign Safeguards</p>
                    {protections.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.name}
                          href={service.path}
                          onClick={() => setIsServicesOpen(false)}
                          className="group flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                        >
                          <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400 mt-0.5 group-hover:bg-rose-500/25 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-white block group-hover:text-rose-400 transition-colors">
                              {service.name}
                            </span>
                            <span className="text-xs text-gray-400 mt-0.5 block">{service.desc}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link href="/tribeca-studio" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Tribeca HQ
            </Link>

            <Link href="/agency-comparison" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Agency Comparison
            </Link>

            <Link href="/nyc-webcam-modeling" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Webcam Modeling
            </Link>

            <Link href="/frequently-asked-questions" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/careers"
              className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-neutral-900 bg-white hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-rose-500/20"
            >
              Apply Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.04] bg-[#070708]/95 backdrop-blur-xl h-screen animate-in fade-in duration-200">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/95 py-2 hover:text-rose-400"
            >
              Home
            </Link>

            {/* Locations Menu Section */}
            <div className="space-y-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-rose-500">Locations</span>
              <div className="pl-4 space-y-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.name}
                    href={loc.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm text-gray-400 py-1 hover:text-white"
                  >
                    {loc.name} ({loc.zip})
                  </Link>
                ))}
              </div>
            </div>

            {/* Protection Programs Section */}
            <div className="space-y-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-rose-500">Privacy Safeguards</span>
              <div className="pl-4 space-y-2">
                {protections.map((p) => (
                  <Link
                    key={p.name}
                    href={p.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm text-gray-400 py-1 hover:text-white"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/tribeca-studio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/95 py-2 hover:text-rose-400"
            >
              Tribeca HQ
            </Link>

            <Link
              href="/agency-comparison"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-semibold text-white/95 py-2 hover:text-rose-400"
            >
              Comparison Guide
            </Link>

            <Link
              href="/careers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-3.5 mt-6 rounded-xl text-sm font-semibold tracking-wider uppercase text-neutral-900 bg-white hover:bg-rose-500 hover:text-white transition-all duration-300 block"
            >
              Apply Online <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
