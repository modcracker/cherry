"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  RefreshCw,
  Heart,
  Lock,
  ChevronRight,
  Cherry
} from "lucide-react";

// Statically import beautiful luxury assets
import cherryTalentOne from "../src/assets/images/arrival_lofts_gate_1782148611798.jpg";
import cherryTalentTwo from "../src/assets/images/sensual_lounging_bed_1782148626078.jpg";
import exquisiteHero from "../src/assets/images/exquisite_luxury_hero_1782148034521.jpg";

// Atmos Vibes Config for dynamic interactive sensuality shift
const VIBES = [
  {
    id: "boudoir",
    name: "VELVET BOUDOIR",
    description: "Deep cabernet crimson, warm candlelight shadows, and heavy physical satin.",
    themeColor: "#FF2A85",
    ambientClass: "from-[#1a020d] via-[#050104] to-[#020002]",
    accentText: "text-[#FF4A9B]",
    accentBg: "bg-[#FF2A85]/10",
    accentBorder: "border-[#FF2A85]/20",
    glowColor: "rgba(255, 42, 133, 0.15)",
    glassCard: "bg-[#0A0307]/90 border border-white/5 shadow-[0_0_50px_-12px_rgba(255,42,133,0.15)]"
  },
  {
    id: "cyber",
    name: "CYBER CHERRY SUNSET",
    description: "Vibrant electric neon orchid, glowing virtual scanlines, and immersive dark stage.",
    themeColor: "#FF1E82",
    ambientClass: "from-[#110517] via-[#030208] to-[#010103]",
    accentText: "text-[#FF5CAB]",
    accentBg: "bg-[#FF1E82]/12",
    accentBorder: "border-[#FF1E82]/30",
    glowColor: "rgba(255, 30, 130, 0.2)",
    glassCard: "bg-[#07050d]/90 border border-white/5 shadow-[0_0_60px_-15px_rgba(255,30,130,0.18)]"
  },
  {
    id: "whisper",
    name: "WHISPERING ACOUSTICS",
    description: "Muted espresso wood tones, glowing burnished gold halos, and absolute sensory quiet.",
    themeColor: "#E09C3F",
    ambientClass: "from-[#170e06] via-[#050403] to-[#020101]",
    accentText: "text-[#E09C3F]",
    accentBg: "bg-[#E09C3F]/10",
    accentBorder: "border-[#E09C3F]/20",
    glowColor: "rgba(224, 156, 63, 0.12)",
    glassCard: "bg-[#0b0806]/90 border border-white/5 shadow-[0_0_40px_-12px_rgba(224,156,63,0.1)]"
  }
];

interface Particle {
  id: number;
  size: number;
  top: string;
  left: string;
  opacity: number;
  duration: number;
  driftX: number;
}

export default function CherryNYC() {
  // Parallax refs for sensory storytelling rows
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYRow1 } = useScroll({
    target: row1Ref,
    offset: ["start end", "end start"]
  });
  const yRow1 = useTransform(scrollYRow1, [0, 1], ["-12%", "12%"]);

  const { scrollYProgress: scrollYRow2 } = useScroll({
    target: row2Ref,
    offset: ["start end", "end start"]
  });
  const yRow2 = useTransform(scrollYRow2, [0, 1], ["10%", "-10%"]);

  const { scrollYProgress: scrollYRow3 } = useScroll({
    target: row3Ref,
    offset: ["start end", "end start"]
  });
  const yRow3 = useTransform(scrollYRow3, [0, 1], ["6%", "-6%"]);

  // Current active vibe index (automatic breathing atmosphere)
  const [activeVibeIndex, setActiveVibeIndex] = useState<number>(0);
  const currentVibe = VIBES[activeVibeIndex];

  // List of pure generated particles stored securely via lazy initializer to prevent cascading renders
  const [ambientParticles] = useState<Particle[]>(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: (i % 3) + 1.2,
      top: `${(i * 7) % 100}%`,
      left: `${(i * 13) % 100}%`,
      opacity: 0.15 + (i % 5) * 0.05,
      duration: 15 + (i % 4) * 5,
      driftX: -20 + (i % 5) * 10
    }))
  );

  // Let the atmosphere breathe automatically by transitioning slowly every 18 seconds
  useEffect(() => {
    const autoCycle = setInterval(() => {
      setActiveVibeIndex((prev) => (prev + 1) % VIBES.length);
    }, 18000);
    return () => clearInterval(autoCycle);
  }, []);

  // Visual/Atmosphere States
  const [hours, setHours] = useState(25);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    "Private Ambient Lounging",
    "Intimate ASMR Acoustics"
  ]);

  // Calibration overlay glitch states
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [audioLevelL, setAudioLevelL] = useState<number>(38);
  const [timecode, setTimecode] = useState<string>("00:04:19:12");

  // Geoshield interactive states
  const [customZip, setCustomZip] = useState<string>("");
  const [securedZips, setSecuredZips] = useState<string[]>([
    "10013 (Tribeca)",
    "10014 (West Village)",
    "10021 (Upper East Side)",
    "10003 (East Village)"
  ]);
  const [zipSuccessMsg, setZipSuccessMsg] = useState<string | null>(null);

  // Sensory ripple effect state
  const [sensationRipple, setSensationRipple] = useState<boolean>(false);
  const [sensationCoords, setSensationCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  
  // Acoustic simulator telemetry mock updates
  const [resonanceData, setResonanceData] = useState({
    silence: "99.8%",
    rt60: "0.14s",
    temp: "68.4°F",
    lux: "14.2 lx"
  });

  // Channels model
  const broadcasterChannels = [
    { name: "Private Ambient Lounging", highlight: "Quiet, long-form resting broadcasts on velvet chaises.", payoutRate: 85 },
    { name: "Intimate ASMR Acoustics", highlight: "Bespoke whispering, micro-soundscapes, and safe breathing cycles.", payoutRate: 75 },
    { name: "Sartorial Luxury Diaries", highlight: "Exclusive lingerie, satin robes, and cosmetics styling logs.", payoutRate: 65 },
    { name: "Fine Art Silhouette Stage", highlight: "Sophisticated mood lighting, floating shadows, and portraiture.", payoutRate: 90 }
  ];

  // Handle dynamic variables
  useEffect(() => {
    const intervalVU = setInterval(() => {
      setAudioLevelL(Math.floor(Math.random() * 45) + 20);
    }, 200);

    let frameCount = 120;
    const intervalTimecode = setInterval(() => {
      frameCount += 1;
      let frames = frameCount % 24;
      let seconds = Math.floor((frameCount / 24) % 60);
      let minutes = Math.floor((frameCount / 1440) % 60);
      let p_hours = Math.floor(frameCount / 86400);

      const fStr = frames < 10 ? `0${frames}` : `${frames}`;
      const sStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
      const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const hStr = p_hours < 10 ? `0${p_hours}` : `${p_hours}`;

      setTimecode(`${hStr}:${mStr}:${sStr}:${fStr}`);
    }, 41.67);

    return () => {
      clearInterval(intervalVU);
      clearInterval(intervalTimecode);
    };
  }, []);

  // Earning retention system math equations
  const calculateGrossEarnings = () => {
    const defaultHourlyVal = 145; // Baseline hourly earnings
    let combinedPremiumModifiers = 0;
    selectedChannels.forEach(name => {
      const match = broadcasterChannels.find(b => b.name === name);
      if (match) combinedPremiumModifiers += match.payoutRate;
    });
    const finalRate = defaultHourlyVal + combinedPremiumModifiers;
    return hours * finalRate * 4; 
  };

  const grossMonthlyVal = calculateGrossEarnings();
  const directModelRetention70 = Math.floor(grossMonthlyVal * 0.70);
  const commonAgenciesCut50 = Math.floor(grossMonthlyVal * 0.50);

  const toggleChannelSelection = (name: string) => {
    if (selectedChannels.includes(name)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter(item => item !== name));
      }
    } else {
      setSelectedChannels([...selectedChannels, name]);
    }
  };

  const executeZipShieldInjection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customZip.trim()) return;

    if (securedZips.some(zip => zip.toLowerCase().includes(customZip.trim().toLowerCase()))) {
      setZipSuccessMsg(`🛡️ GEOFENCE RESOLVED: ZIP ${customZip} ALREADY COVERED BY SHIELD.`);
    } else {
      setSecuredZips([...securedZips, `${customZip} (Strict Block)`]);
      setZipSuccessMsg(`✨ INJECTION SUCCESSFUL: IP routing for ZIP ${customZip} instantly masked and dropped.`);
      setCustomZip("");
    }

    setTimeout(() => setZipSuccessMsg(null), 5000);
  };

  // Click response
  const handlePhysicalPulse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const parentRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - parentRect.left;
    const y = e.clientY - parentRect.top;
    setSensationCoords({ x, y });
    setSensationRipple(true);

    // Randomize telemetry to make the sensory response feel alive without inline math in render
    setResonanceData({
      silence: `${(99.6 + Math.random() * 0.3).toFixed(1)}%`,
      rt60: `${(0.11 + Math.random() * 0.05).toFixed(2)}s`,
      temp: `${(67.5 + Math.random() * 1.5).toFixed(1)}°F`,
      lux: `${(12.5 + Math.random() * 3).toFixed(1)} lx`
    });

    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
    setTimeout(() => setSensationRipple(false), 900);
  };

  // Custom typography sizing coordinates (Arial 32px, Arial 16px, Arial 13px)
  const textTitle = { fontSize: "32px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textHeader = { fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700 };
  const textBody = { fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: 400, lineHeight: 1.6 };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out bg-[#060608] ${currentVibe.ambientClass} text-zinc-100 selection:bg-[#FF1E82]/30 selection:text-[#FF1E82] overflow-x-hidden font-sans`}>
      
      {/* Absolute floating particulate dust to establish immediate mystique */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {ambientParticles.map((part) => (
          <motion.div
            key={part.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: currentVibe.themeColor,
              width: part.size + "px",
              height: part.size + "px",
              top: part.top,
              left: part.left,
              opacity: part.opacity
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, part.driftX, 0],
              opacity: [part.opacity, part.opacity * 2, part.opacity]
            }}
            transition={{
              duration: part.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Dynamic atmospheric aura glow spot */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[65vh] rounded-full blur-[180px] pointer-events-none transition-all duration-1000 mix-blend-screen opacity-25 z-0"
        style={{
          background: `radial-gradient(circle, ${currentVibe.themeColor} 0%, transparent 70%)`
        }}
      />

      {/* MINIMALIST LUXURY HERO SECTION */}
      <section className="relative w-full h-[95vh] min-h-[650px] overflow-hidden flex items-center justify-center border-b border-white/5 z-10">
        
        {/* Full image background of woman's body lounging */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={exquisiteHero}
            alt="Cherry NYC Sanctuary Room"
            fill
            priority
            className="object-cover object-center scale-[1.01] transition-transform duration-[12s] ease-out select-none"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          {/* Subtle cinematic gradient mask protecting typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/50 to-black/70" />
        </div>

        {/* Minimalist Grid and Frame Overlays mimicking high-end SONY viewport */}
        <div className="absolute inset-0 pointer-events-none z-10 p-6 md:p-12 flex flex-col justify-between">
          
          {/* Top Row: Dynamic Interactive calibration details */}
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center space-x-3 px-4 py-1.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[9px] font-mono tracking-[0.2em] font-bold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E82] animate-pulse" style={{ backgroundColor: currentVibe.themeColor }} />
              <span>STUDIO SECURE_A // LIVE TRACK</span>
            </div>
            
            <div className="flex items-center space-x-3 text-zinc-400 font-mono text-[9px] tracking-widest bg-black/40 px-3 py-1.5 rounded-md border border-white/5">
              <span className="hidden sm:inline text-[#FF2A85]">ATMOSPHERE // {currentVibe.name}</span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-white font-extrabold">{timecode}</span>
            </div>
          </div>

          {/* Symmetrical fine-line bounding crossbars in margins */}
          <div className="absolute inset-10 pointer-events-none opacity-20">
            <span className="absolute top-0 left-0 w-4 h-px bg-white" />
            <span className="absolute top-0 left-0 w-px h-4 bg-white" />
            <span className="absolute top-0 right-0 w-4 h-px bg-white" />
            <span className="absolute top-0 right-0 w-px h-4 bg-white" />
            <span className="absolute bottom-0 left-0 w-4 h-px bg-white" />
            <span className="absolute bottom-0 left-0 w-px h-4 bg-white" />
            <span className="absolute bottom-0 right-0 w-4 h-px bg-white" />
            <span className="absolute bottom-0 right-0 w-px h-4 bg-white" />
          </div>

          {/* Bottom Row metadata stream for realism */}
          <div className="flex justify-between items-end w-full text-[9px] font-mono text-zinc-500 bg-black/10 p-2 rounded backdrop-blur-[2px]">
            <span className="hidden sm:inline">RAW SHUTTER 1/120s • ULTRA PRORES DCI 4K • LENS ANAMORPHIC 35mm</span>
            <span className="tracking-widest">LOCATION // TRIBECA ROOMS // MANHATTAN</span>
          </div>

        </div>

        {/* Interactive Calibration Overlay Indicator */}
        <AnimatePresence>
          {isGlitching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neutral-950/85 z-20 flex flex-col items-center justify-center font-mono space-y-3"
            >
              <RefreshCw className="w-5 h-5 text-[#FF1E82] animate-spin" style={{ color: currentVibe.themeColor }} />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#FF1E82]" style={{ color: currentVibe.themeColor }}>
                Recalibrating Acoustic Resonance...
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Elements */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-8 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase font-mono tracking-[0.35em] font-extrabold text-[#FF1E82] block" style={{ color: currentVibe.themeColor }}>
              CHERRY NYC • TRIBECA BROADCASTER MANOR
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight text-white leading-[1.05]" style={{ fontFamily: "Arial, sans-serif" }}>
              The Space to Exist. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-rose-400 font-normal">
                Private and Unseen.
              </span>
            </h1>
            <p className="text-[14px] sm:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed font-light tracking-wide pt-2">
              An unmarked residential loft parlor in Tribeca designed for elite lifestyle creators, ASMR vocalists, and loungers. Absolute soundproofing, automated high-end SONY optics, and ironclad New York geofencing. Broadcast securely. Retain 70% of gross revenue.
            </p>
          </motion.div>

          {/* Quick Clear Interactive CTAs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 z-30"
          >
            <a
              href="/contact"
              className="h-12 px-8 bg-white hover:bg-[#FF1E82] hover:text-white text-zinc-950 font-mono text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center rounded-xs shadow-xl cursor-pointer"
            >
              Apply Online Securely
            </a>
            <a
              href="#income-projector-station"
              className="h-12 px-8 border border-white/10 hover:border-white/30 text-white font-mono text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center bg-black/45 backdrop-blur-md rounded-xs cursor-pointer"
            >
              Simulate Payouts
            </a>
          </motion.div>

        </div>

      </section>

      {/* ASYMMETRICAL STORYTELLING PORTAL */}
      <section className="py-28 relative border-y border-zinc-200/50 bg-[#F4F4F6] overflow-hidden">
        
        {/* Large Logo Watermark of Cherry */}
        <div className="absolute right-[-120px] top-[15%] opacity-[0.06] text-zinc-400 pointer-events-none z-0">
          <Cherry className="w-[550px] h-[550px]" />
        </div>

        {/* Abstract background graphics representing structural lines */}
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-zinc-200 pointer-events-none z-0 hidden lg:block" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-zinc-200/40 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="max-w-2xl text-left mb-24 space-y-4">
            <span style={{ ...textHeader, color: currentVibe.themeColor }} className="uppercase tracking-[0.25em] block font-mono">
              SENSORY STORYTELLING ROUTE
            </span>
            <h2 style={textTitle} className="text-zinc-900 tracking-tight leading-tight">
              A Day Inside the Sanctuary
            </h2>
            <p style={textBody} className="text-zinc-600 font-light max-w-xl">
              We did not configure a standard commercial workplace. Cherry NYC is an editorial living environment where absolute physical comfort matches secure, unmapped proxy routing.
            </p>
          </div>

          {/* Asymmetric overlapping rows showing real narrative and custom layout */}
          <div className="space-y-36">

            {/* Row 1: The velvet walkthrough */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7" ref={row1Ref}>
                <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black aspect-[16/10]">
                  <div className="absolute inset-0 overflow-hidden w-full h-full">
                    <motion.div style={{ y: yRow1, height: "124%", top: "-12%" }} className="absolute inset-0 w-full h-full">
                      <Image
                        src={cherryTalentOne}
                        alt="Entering Tribeca private suite unmarked"
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-[2.5s] ease-out"
                        sizes="700px"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Fine-line luxury details inside overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/5">
                    <span>TRIBECA INDUSTRIAL CODES: SEC_01</span>
                    <span>DOOR INGRESS // ENGAGED</span>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 space-y-6 text-left"
              >
                <div className="inline-flex items-center space-x-2 bg-white/80 border border-zinc-200 shadow-sm px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-widest text-[#FF1E82]" style={{ color: currentVibe.themeColor }}>
                  <span>01 / UNMARKED IMMIGRATION</span>
                </div>
                <h3 className="text-3xl font-extralight tracking-tight text-zinc-900 leading-tight">
                  Seamless Entry. <br />
                  <span className="font-semibold text-rose-600" style={{ color: currentVibe.themeColor }}>Unmarked Privacy.</span>
                </h3>
                <p style={textBody} className="text-zinc-650 font-light">
                  Your afternoon initiates with a quiet walk down a peaceful Tribeca street. No flashing neon signs, no corporate receptions, and absolutely no shared lobby registries. You enter your encrypted rotation keycode directly onto our beautifully secure velvet gate entrance. You are completely independent.
                </p>
                <div className="flex gap-8 pt-2 font-mono text-[10px] text-zinc-550">
                  <div>
                    <span className="text-zinc-900 block font-bold">14%</span>
                    <span>OPTICAL INDEX</span>
                  </div>
                  <div className="border-r border-zinc-300 h-8 self-center" />
                  <div>
                    <span className="text-zinc-900 block font-bold">AUTOMATED</span>
                    <span>VISITOR LOG CLEANSE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: The velvet parlor */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 lg:order-2" ref={row2Ref}>
                <div className="relative group overflow-hidden rounded-3xl border border-zinc-300/30 shadow-2xl bg-black aspect-[16/10]">
                  <div className="absolute inset-0 overflow-hidden w-full h-full">
                    <motion.div style={{ y: yRow2, height: "124%", top: "-12%" }} className="absolute inset-0 w-full h-full">
                      <Image
                        src={cherryTalentTwo}
                        alt="Sensual lounging room setups camera tracking"
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-[2.5s] ease-out"
                        sizes="700px"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/5">
                    <span>FOCUS LENS // BOKEH ACTIVE</span>
                    <span>APERTURE F/1.4 HIGH-FIDELITY</span>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 lg:order-1 space-y-6 text-left"
              >
                <div className="inline-flex items-center space-x-2 bg-white/80 border border-zinc-200 shadow-sm px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-widest text-[#FF1E82]" style={{ color: currentVibe.themeColor }}>
                  <span>02 / SATIN STUDIO RESIDENCY</span>
                </div>
                <h3 className="text-3xl font-extralight tracking-tight text-zinc-900 leading-tight">
                  Velvet Lounging. <br />
                  <span className="font-semibold text-rose-600" style={{ color: currentVibe.themeColor }}>Hands-Free SONY Optics.</span>
                </h3>
                <p style={textBody} className="text-zinc-650 font-light">
                  Step in, leave your heavy street coat behind, slip into our premium silk loungewear, and recline on deep-plush velvet chaises. Ambient candlelight or daylight curves are fully program-shifted for your skin tone. Professional cameras auto-track your movements with gorgeous luxury depth-of-field, leaving you to focus completely on your guests.
                </p>
                <div className="flex gap-8 pt-2 font-mono text-[10px] text-zinc-550">
                  <div>
                    <span className="text-[#FF1E82] block font-bold" style={{ color: currentVibe.themeColor }}>90mm SPOT</span>
                    <span>CREAMY BOKEH</span>
                  </div>
                  <div className="border-r border-zinc-300 h-8 self-center" />
                  <div>
                    <span className="text-zinc-900 block font-bold">ENCAPSULATED</span>
                    <span>SOUNDPROOF SHELL</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Secure geoshield hardware console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6" ref={row3Ref}>
                
                {/* Ultra high-fashion hardware model for geoshield */}
                <motion.div 
                  style={{ y: yRow3 }}
                  className="p-8 rounded-3xl bg-[#09090b] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden" 
                  id="geoshield-luxury-hardware-dashboard"
                >
                  <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundImage: `linear-gradient(to right, ${currentVibe.themeColor}, #F43F5E, #E11D48)` }} />
                  
                  <div className="flex justify-between items-center pb-4 border-b border-white/10 font-mono text-xs">
                    <span className="text-white flex items-center gap-2 font-extrabold tracking-widest">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> SECURITY GEOSHIELD ENGINE
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-950/55 text-emerald-400 border border-emerald-800/40 text-[9px] font-black tracking-widest uppercase">
                      ACTIVE PROTECT
                    </span>
                  </div>

                  <div className="py-6 space-y-4 text-left font-mono text-xs">
                    <p className="text-zinc-400 text-[11.5px] leading-relaxed">
                      Inject any local New York postal code, home state abbreviation, or coordinate below to verify immediate geofence mask installation.
                    </p>

                    <form onSubmit={executeZipShieldInjection} className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          maxLength={12}
                          placeholder="NYC ZIP CODE (e.g., 10014)"
                          value={customZip}
                          onChange={(e) => setCustomZip(e.target.value)}
                          className="w-full h-11 px-4 bg-black text-white rounded-xl border border-white/10 text-[11.5px] font-mono focus:border-[#FF1E82] focus:outline-none placeholder-zinc-700 font-bold"
                          id="geoshield-shield-code-input"
                        />
                      </div>
                      <button
                        type="submit"
                        className="h-11 px-6 bg-[#FF1E82] hover:bg-rose-500 rounded-xl text-xs font-black text-white transition-all cursor-pointer shadow-lg shadow-[#FF1E82]/30 uppercase tracking-widest shrink-0"
                        style={{ backgroundColor: currentVibe.themeColor }}
                      >
                        SHIELD COORD
                      </button>
                    </form>

                    {zipSuccessMsg && (
                      <motion.div 
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-emerald-950/30 text-emerald-400 text-[10px] rounded-lg border border-emerald-800/30 leading-snug"
                      >
                        {zipSuccessMsg}
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-black block">Active Structural Geoblocks:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {securedZips.map((z, i) => (
                          <span key={i} className="text-[9.5px] px-2.5 py-1 bg-black rounded-lg text-zinc-400 border border-white/5 block font-bold">
                            📍 {z}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 p-3 rounded-xl border border-white/5 text-[9.5px] text-zinc-500 font-mono flex items-center justify-between">
                    <span>CRAWLER SCANNERS: BLOCKED</span>
                    <span>PIMEYES INDEX: MASKED [OK]</span>
                  </div>
                </motion.div>

              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-6 space-y-6 text-left"
              >
                <div className="inline-flex items-center space-x-2 bg-white/80 border border-zinc-200 shadow-sm px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-widest text-[#FF1E82]" style={{ color: currentVibe.themeColor }}>
                  <span>03 / MILITARY-GRADE INTERCEPT</span>
                </div>
                <h3 className="text-3xl font-extralight tracking-tight text-zinc-900 leading-tight">
                  Ironclad Geofence <br />
                  <span className="font-semibold text-rose-600" style={{ color: currentVibe.themeColor }}>IP Armoring.</span>
                </h3>
                <p style={textBody} className="text-zinc-650 font-light">
                  Our private routing nodes intercept prospective traffic before it reaches the parlor. It blocks selected municipal areas, custom coordinates, neighbor networks, and physical company IPs. Full protection shields you against reverse-image scrapes, image scrapers, and local directory listings—guaranteeing 100% comfort.
                </p>
                <div className="h-px bg-zinc-200/60 pt-2" />
                <p className="text-[11.5px] text-zinc-500 italic">
                  *Your physical presence is masked beneath multiple layers of custom VPN proxies and isolated sub-servers.
                </p>
              </motion.div>
            </div>

          </div>

        </div>

      </section>

      {/* DETAILED LUXURY INCOME PROJECTOR */}
      <section id="income-projector-station" className="py-28 relative border-b border-white/5 text-zinc-100 bg-radial from-[#090204] via-[#060608] to-[#060608]">
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Sliders with neon custom design */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <span style={{ ...textHeader, color: currentVibe.themeColor }} className="uppercase tracking-[0.25em] block font-mono">
                FINANCIAL INDEPENDENCE MATRIX
              </span>
              <h2 style={textTitle} className="text-white leading-none tracking-tight font-extralight">
                Reclaim Your Output. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-white font-normal">
                  Maintain a Pristine 70% Cut.
                </span>
              </h2>
              <p style={textBody} className="text-zinc-400 font-light">
                Why allow a legacy studio or corporate operator to redirect 50% or 60% of your broadcast donations? We maintain transparent billing: <strong className="text-white font-semibold">you receive 70% direct split</strong>. The rest finances gorgeous rent in physical Tribeca Manhattan suites, custom lighting rigs, safe LLC proxies, and beautiful gourmet snack layouts.
              </p>

              {/* Slider Input with micro-metrics */}
              <div className="p-8 rounded-3xl bg-black/60 border border-white/10 space-y-5 shadow-2xl relative">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-[10.5px] font-extrabold text-zinc-400 tracking-widest uppercase">
                    ESTIMATED HOURS / WEEK:
                  </span>
                  <span className="text-2xl font-black text-white px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                    {hours} Hrs
                  </span>
                </div>
                
                {/* Simulated Custom Track */}
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="5"
                    max="45"
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-900 rounded-lg cursor-pointer appearance-none focus:outline-none"
                    style={{ accentColor: currentVibe.themeColor }}
                    id="weekly-hours-scroller"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold pt-3">
                    <span>Part-Time / Casual (5 Hrs)</span>
                    <span>Dedicated Creator (45 Hrs)</span>
                  </div>
                </div>
              </div>

              {/* Checkbox matrices representing style slots */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-zinc-500 font-mono tracking-widest block uppercase">
                  CHOOSE YOUR BOUTIQUE CHANNELS (PROJECTS ADDITIONAL ESTIMATE):
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="selection-broadcaster-suite-grid">
                  {broadcasterChannels.map(b => {
                    const active = selectedChannels.includes(b.name);
                    return (
                      <button
                        key={b.name}
                        onClick={() => toggleChannelSelection(b.name)}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                          active 
                            ? "bg-white/5 text-white" 
                            : "bg-[#09090b]/80 border-white/5 text-zinc-500 hover:text-zinc-300"
                        }`}
                        style={{
                          borderColor: active ? currentVibe.themeColor : "rgba(255, 255, 255, 0.05)",
                          boxShadow: active ? `0 0 25px -5px ${currentVibe.themeColor}33` : "none"
                        }}
                        id={`suite-toggle-${b.name.replace(/\s+/g, '')}`}
                      >
                        <div className="flex justify-between items-center text-[13px] font-bold text-white">
                          <span>{b.name}</span>
                          <span 
                            className="w-2 h-2 rounded-full transition-all" 
                            style={{ 
                              backgroundColor: active ? currentVibe.themeColor : "rgba(255,255,255,0.1)",
                              boxShadow: active ? `0 0 10px ${currentVibe.themeColor}` : "none"
                            }} 
                          />
                        </div>
                        <p className="text-[11px] text-zinc-500 mt-2 font-normal leading-normal">{b.highlight}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Luminous Ledger */}
            <div className="lg:col-span-6">
              <div className="p-8 md:p-10 rounded-3xl bg-[#09090b] border border-white/10 relative overflow-hidden shadow-2xl" id="luminous-yield-ledger-card">
                
                <div 
                  className="absolute top-0 right-0 w-64 h-64 blur-3xl pointer-events-none transition-all duration-1000 opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${currentVibe.themeColor}, transparent 70%)`
                  }}
                />

                <div className="space-y-8 relative z-10 text-left">
                  
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 font-mono text-xs">
                    <span className="text-[#FF1E82] font-black uppercase tracking-widest" style={{ color: currentVibe.themeColor }}>
                      Luminous Yield Ledger
                    </span>
                    <span className="text-zinc-600 block">[ 70% SPLIT AUDIT ]</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9.5px] text-zinc-500 font-extrabold uppercase tracking-widest block font-mono">
                      NET MONTHLY RETENTION KEEP:
                    </span>
                    <div className="text-5xl md:text-6xl font-extralight text-white tracking-tighter leading-none flex items-baseline">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#FF2A85]">${directModelRetention70.toLocaleString()}</span>
                      <span className="text-sm font-mono text-zinc-500 ml-2">/mo</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono block">
                      ✦ Safe settlement directly through local LLC structures.
                    </span>
                  </div>

                  <div className="h-px bg-white/5" />

                  <div className="space-y-4 font-mono text-xs text-zinc-400">
                    <div className="flex justify-between">
                      <span>Pro-forma Gross Proceeds</span>
                      <span className="text-white font-bold">${grossMonthlyVal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-rose-400/90">
                      <span>Legacy Modeling Agency Deduct (50%)</span>
                      <span>-${commonAgenciesCut50.toLocaleString()}</span>
                    </div>
                    
                    <div className="p-4 bg-zinc-950 rounded-xl border border-white/5 flex justify-between items-center text-emerald-400/90 font-bold text-xs">
                      <span>CHERRY 70% DIRECT ADVANTAGE:</span>
                      <span className="font-mono text-sm tracking-tight">+${(directModelRetention70 - commonAgenciesCut50).toLocaleString()} / mo</span>
                    </div>
                  </div>

                  <div className="h-px bg-white/5" />

                  {/* Discretion Notice */}
                  <div className="p-5 rounded-2xl bg-black border border-white/10 space-y-2.5">
                    <div className="text-[11px] font-bold text-white flex items-center gap-2 font-mono">
                      <Lock className="w-3.5 h-3.5 text-[#FF2A85]" style={{ color: currentVibe.themeColor }} />
                      SECURE BILLING AUTONOMY
                    </div>
                    <p className="text-[11.5px] text-zinc-500 leading-relaxed font-light">
                      Transactions route privately through local Manhattan LLC entities with no reference to webcam modeling, agency structures, or broadcast chambers on bank details. Completely quiet.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* TOUCH OF VELVET: ACOUSTIC RESONANCE UNIT */}
      <section className="py-32 bg-[#0C0B0E] border-y border-white/5 text-center relative overflow-hidden" id="acoustic-vibe-actuator-deck">
        
        {/* Large Logo Watermark of Cherry */}
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 opacity-[0.04] text-zinc-650 pointer-events-none z-0">
          <Cherry className="w-[500px] h-[500px]" />
        </div>

        {/* Underlaying large scale aesthetic lettering */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black text-white/2 select-none tracking-widest font-mono pointer-events-none uppercase">
          RESONANCE
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-10">
          
          <div className="space-y-3">
            <span style={{ ...textHeader, color: currentVibe.themeColor }} className="uppercase tracking-[0.25em] block font-mono">
              SENSORY RESONANCE CHAMBER
            </span>
            <h2 style={textTitle} className="text-white tracking-tight font-extralight">
              Experience the Acoustic Silent Core
            </h2>
            <p style={textBody} className="text-zinc-400 max-w-md mx-auto font-light">
              Tap the golden/crimson resonance core below to test real-time sound dampening and tactile calibration loops installed in our Tribeca suites.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            
            {/* Interactive Pulse Chamber Core */}
            <button
              onClick={handlePhysicalPulse}
              className="relative h-24 w-24 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(0,0,0,0.8)] cursor-pointer group"
              style={{
                borderColor: currentVibe.themeColor,
                backgroundColor: `${currentVibe.themeColor}12`,
                boxShadow: `0 0 45px -5px ${currentVibe.themeColor}33`
              }}
              id="sensory-touch-actuator-main"
            >
              <Heart className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
              
              {/* Dynamic Absolute Ripple Trigger */}
              {sensationRipple && (
                <span 
                  className="absolute bg-white/20 rounded-full block animate-ping pointer-events-none"
                  style={{
                    left: sensationCoords.x - 48,
                    top: sensationCoords.y - 48,
                    width: "96px",
                    height: "96px"
                  }}
                />
              )}
            </button>

            {/* Seductive live-feedback metrics card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto w-full pt-4">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] text-zinc-500 text-left">
                <span>ROOM AC SILENCE</span>
                <span className="text-white text-xs block font-bold mt-1">{resonanceData.silence}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] text-zinc-500 text-left cursor-pointer" style={{ borderColor: `${currentVibe.themeColor}30` }}>
                <span>REVERB DECAY RT60</span>
                <span className="text-xs block font-bold mt-1" style={{ color: currentVibe.themeColor }}>{resonanceData.rt60}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] text-zinc-500 text-left">
                <span>TEMPERATURE READ</span>
                <span className="text-white text-xs block font-bold mt-1">{resonanceData.temp}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] text-zinc-500 text-left">
                <span>LUX LIGHT METRIC</span>
                <span className="text-white text-xs block font-bold mt-1">{resonanceData.lux}</span>
              </div>
            </div>

            {/* Dynamic Interactive VU indicator */}
            <div className="flex gap-1.5 h-10 items-center justify-center pt-2">
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full transition-all duration-300 opacity-60"
                  style={{
                    backgroundColor: currentVibe.themeColor,
                    height: sensationRipple 
                      ? `${((i * 6) % 20) + (audioLevelL % 15) + 12}px`
                      : `${((i * 4) % 10) + i + 4}px`
                  }}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* EDITORIAL PORTFOLIO SHOWCASE */}
      <section className="py-28 relative overflow-hidden bg-[#060608]">
        
        {/* Decorative graphic background word rotated */}
        <div className="absolute top-1/3 left-0 -translate-x-[40%] rotate-90 text-[10vw] font-black text-white/5 font-mono tracking-[0.5em] select-none uppercase pointer-events-none">
          DIARIES
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="space-y-4 text-left">
              <span style={{ ...textHeader, color: currentVibe.themeColor }} className="uppercase tracking-[0.25em] block font-mono">
                HIGH-Contrast EDITORIAL LOOKBOOKS
              </span>
              <h2 style={textTitle} className="text-white tracking-tight font-extralight">
                Reflections of Luxury Autonomy
              </h2>
            </div>
            <p style={textBody} className="text-zinc-500 max-w-sm font-light text-left leading-relaxed">
              Read how New York ASMR practitioners, beauty vocalists, and loungers leverage our customized suites to expand yields securely with zero municipal trace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" id="lookbook-deck-asymmetrical-cards">
            
            {/* Showroom 1 */}
            <div className="bg-[#0b0709] border border-white/5 p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-8 group hover:border-[#FF1E82]/20 transition-all text-left">
              <div className="relative w-40 h-52 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-2xl bg-black">
                <Image
                  src={cherryTalentOne}
                  alt="Maya Santana custom styling diaries"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1s]"
                  sizes="180px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight leading-none">Maya Santana</h4>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mt-1.5">Cosmetics & Styling Diaries</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#FF1E82] bg-[#FF1E82]/10 border border-[#FF1E82]/30 px-2.5 py-0.5 rounded-full shrink-0" style={{ color: currentVibe.themeColor, borderColor: `${currentVibe.themeColor}30` }}>
                    70/30 SPLIT
                  </span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal italic">
                  &ldquo;Completing my morning custom styling diaries from their quiet parlor is incredibly peaceful. The cinematic Bokeh and customized lights make my broadcasts look amazingly premium, converting into much larger weekly yields.&rdquo;
                </p>
                <div className="text-[8.5px] font-mono text-emerald-400 block tracking-widest font-bold">
                  ● STATUS: GEOFENCE ARMORED ACTIVE
                </div>
              </div>
            </div>

            {/* Showroom 2 */}
            <div className="bg-[#0a070c] border border-white/5 p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-8 group hover:border-[#FF1E82]/20 transition-all text-left">
              <div className="relative w-40 h-52 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-2xl bg-black">
                <Image
                  src={cherryTalentTwo}
                  alt="Yuki Lin acoustic studio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1s]"
                  sizes="180px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight leading-none">Yuki Lin</h4>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mt-1.5">Intimate Vocal Whispering</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#FF1E82] bg-[#FF1E82]/10 border border-[#FF1E82]/30 px-2.5 py-0.5 rounded-full shrink-0" style={{ color: currentVibe.themeColor, borderColor: `${currentVibe.themeColor}30` }}>
                    70/30 SPLIT
                  </span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal italic">
                  &ldquo;Acoustic silence in my soundproof suite allows beautiful soundscapes. With no footprints in local search indices or Reverse lookup, I can broadcast with absolute pristine comfort.&rdquo;
                </p>
                <div className="text-[8.5px] font-mono text-emerald-400 block tracking-widest font-bold">
                  ● PIMEYES & ROOT DEFENSE IN ACTION
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COMPLIANCE TUTELAGE (Directives FAQ) */}
      <section className="py-28 bg-[#F4F4F6] relative border-y border-zinc-200/50 overflow-hidden">
        
        {/* Large Logo Watermark of Cherry */}
        <div className="absolute right-[-150px] bottom-[10%] opacity-[0.06] text-zinc-400 pointer-events-none z-0">
          <Cherry className="w-[600px] h-[600px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center space-y-4 mb-20">
            <span style={{ ...textHeader, color: currentVibe.themeColor }} className="uppercase tracking-[0.25em] block font-mono">
              COMPLIANCE DIRECTIONS
            </span>
            <h2 style={textTitle} className="text-zinc-900 tracking-tight font-extralight">
              Secure Directives & Legal Audits
            </h2>
            <p style={textBody} className="text-zinc-600 font-light max-w-sm mx-auto text-center">
              Our code of practice outlines extreme safety and physical discretion.
            </p>
          </div>

          <div className="space-y-6" id="compliance-checklist-luxury-cards">
            
            <div className="p-8 rounded-3xl bg-white/80 border border-zinc-200 hover:border-zinc-350 hover:shadow-md transition-all text-left flex gap-6 items-start">
              <span className="font-mono text-lg font-bold text-rose-600 opacity-80" style={{ color: currentVibe.themeColor }}>01</span>
              <div>
                <h4 style={textHeader} className="text-zinc-900 tracking-tight leading-normal font-bold">
                  How is physical safety and security guaranteed?
                </h4>
                <p style={textBody} className="text-zinc-600 font-light mt-2">
                  Each parlor operates in a residential-gated loft structure with unmarked street entrances, rotating digital passcode entry systems, and regular camera safety checks. No public directory list, signs, or visitor registries are kept—ensuring your physical coordinates stay fully isolated.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/80 border border-zinc-200 hover:border-zinc-350 hover:shadow-md transition-all text-left flex gap-6 items-start">
              <span className="font-mono text-lg font-bold text-rose-600 opacity-80" style={{ color: currentVibe.themeColor }}>02</span>
              <div>
                <h4 style={textHeader} className="text-zinc-900 tracking-tight leading-normal font-bold">
                  Does the municipal geoblocker shield against coworkers?
                </h4>
                <p style={textBody} className="text-zinc-600 font-light mt-2">
                  Yes. Our routing engine lets you intercept connections originating from any target NYC zips, surrounding towns, or entire states. In addition, we hard-block search scanner crawlers, Pim-Eyes scraping bots, and commercial adult profiles spiders entirely.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/80 border border-zinc-200 hover:border-zinc-350 hover:shadow-md transition-all text-left flex gap-6 items-start">
              <span className="font-mono text-lg font-bold text-rose-600 opacity-80" style={{ color: currentVibe.themeColor }}>03</span>
              <div>
                <h4 style={textHeader} className="text-zinc-900 tracking-tight leading-normal font-bold">
                  Am I constrained to work default shifts or schedules?
                </h4>
                <p style={textBody} className="text-zinc-600 font-light mt-2">
                  Never. Total autonomy is our absolute core promise. You schedule suites via our private web calendar system whenever you feel inspired. Zero minimum weekly hours targets are required, giving you sole control of when you rest and broadcast.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRIVATE GEOPORTAL SYSTEM */}
      <section className="py-36 relative overflow-hidden bg-radial from-[#150409] via-[#060608] to-[#060608]">
        
        {/* Glowing concentric orbits represent structural security */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[600px] border border-white/5 rounded-full pointer-events-none animate-[spin_100s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[450px] border border-dashed border-white/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite_reverse]" />
        
        {/* Soft centered light behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-2xl mx-auto px-6 space-y-8 relative z-10 text-center">
          
          <span style={{ ...textHeader, color: currentVibe.themeColor }} className="uppercase tracking-[0.3em] block font-mono">
            SECURE PORTAL ENTRY
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight leading-tight">
            Verify Your Private <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF1E82] via-rose-300 to-white">Gate Access</span>
          </h2>
          
          <p style={textBody} className="text-zinc-400 font-light max-w-lg mx-auto">
            To protect our physical New York suites and safeguard our custom IP routers against crawler bots, our direct coordination channels and secure communication desk reside strictly on our Private Contact page.
          </p>

          <div className="pt-6 flex justify-center">
            <a
              href="/contact"
              className="inline-flex h-14 px-10 rounded-full font-black text-xs uppercase tracking-[0.2em] text-white hover:scale-103 transition-transform duration-300 shadow-2xl items-center cursor-pointer"
              style={{
                backgroundColor: currentVibe.themeColor,
                boxShadow: `0 10px 45px -10px ${currentVibe.themeColor}`
              }}
              id="entrance-vault-redirect"
            >
              Verify Securely & Apply Now <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
            </a>
          </div>

        </div>

      </section>

    </div>
  );
}
