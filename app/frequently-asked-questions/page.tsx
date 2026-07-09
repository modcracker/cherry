"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "How does the split structure work in detail?",
      a: "Unlike traditional agencies that take up to 45% of earnings, Cherry NYC guarantees models keep 85% to 90% of their raw broadcast revenue. No surprise desk fees, platform overhead splits, or hidden deductions.",
    },
    {
      q: "Can I remain completely anonymous to my friends and family?",
      a: "Yes. Anonymity is our primary priority. We actively integrate automated DMCA takedown scripts and execute coordinate-level opt-outs with public computer facial search databases like PIMEyes, making it virtually impossible for your streams to correlate with your private life.",
    },
    {
      q: "What equipment are the New York studios loaded with?",
      a: "Our spaces are equipped with premium 4K DSLR camera setups, professional warm ring-grids, fully soundproof walls, separate dressing rooms, sateen linens, and dedicated hardware routers running private high-speed business fibers.",
    },
    {
      q: "Am I locked into long-term contracts?",
      a: "Absolutely not. All agreement models feature a zero-penalty 'Immediate Dissolution Option.' If you wish to transition to independent broadcasting, you retain 100% of your broadcast channels, fans, and data.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#070708] text-gray-200">
      <Header />
      <main className="pt-36 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/15 text-rose-400 text-xs font-mono rounded-full uppercase tracking-widest font-bold">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-white leading-tight">
            Clear Integrity <br />
            <span className="font-semibold text-rose-500">And Support</span>
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            We operate structures designed purely to empower modern creators. Review standard inquiries below, or connect with our corporate desk directly at contact@cherry.nyc.
          </p>

          <div className="space-y-6 pt-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl space-y-3">
                <h3 className="text-base font-semibold text-white font-display flex items-start gap-2">
                  <span className="text-rose-500 font-mono">Q.</span> {faq.q}
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
