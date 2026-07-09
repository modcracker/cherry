import Link from "next/link";
import { Shield, Mail, FileText, Scale } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const neighborhoods = [
    { name: "SoHo Collective", path: "/locations/soho" },
    { name: "Chelsea Suite", path: "/locations/chelsea" },
    { name: "Williamsburg Studio", path: "/locations/williamsburg" },
    { name: "Midtown Manhattan", path: "/locations/midtown" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "DMCA Takedown Services", path: "/dmca-takedown-service" },
    { name: "Model Legal Escrow", path: "/legal-contracts-autonomy" },
    { name: "Terms of Brand Association", path: "/privacy" },
  ];

  return (
    <footer className="border-t border-white/[0.04] bg-[#070708] pt-16 pb-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="text-xl font-display font-light tracking-[0.2em] text-white">
              CHERRY<span className="text-rose-500 font-semibold">.</span>NYC
            </span>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              The premium standard in elite digital brand architecture, luxury webcam modeling residencies, and automated intellectual property defense. Headquartered in Tribeca, Manhattan.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
              <Shield className="w-4.5 h-4.5 text-rose-500/80" />
              <span>Sovereignty Level Protection Locked</span>
            </div>
          </div>

          {/* New York Neighborhoods */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#ef4444] uppercase">New York Studios</h4>
            <ul className="space-y-2">
              {neighborhoods.map((n) => (
                <li key={n.name}>
                  <Link href={n.path} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Protection */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#ef4444] uppercase">Model Safeguards</h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.path} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Support / Apply */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#ef4444] uppercase">Corporate Contact</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Seeking discreet agency consultations or private model registration. Reach our Brand Management Desk directly:
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="flex items-center gap-2 text-xs text-white hover:text-rose-400 transition-colors font-semibold">
                <Shield className="w-4 h-4 text-rose-500 animate-pulse" /> Access Secure Contact Portal
              </Link>
              <span className="text-[10px] text-gray-500 font-mono">Encrypted & Verification Guarded Portal</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-500 font-mono">
            &copy; {currentYear} CHERRY NYC. All Rights Reserved. Built with autonomous contract models and military-grade copyright defense mechanisms. Unique verified digital signature.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-gray-500 font-mono">
            <div className="flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-gray-600" />
              <span>Discreet Billing Assured</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-gray-600" />
              <span>Model Agreement V2.9</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
