import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discreet Cam Model Contracts & Escrow Payouts | Cherry NYC",
  description: "Explore the contract and financial autonomy standard at Cherry NYC. Legally-binding 85-90% splits, escrow-backed weekly direct payouts, and zero-penalty termination.",
  keywords: [
    "cam model contracts",
    "legal agreement webcam agency",
    "escrow payout webcam models",
    "model agency splits NYC",
    "Cherry NYC contracts",
    "fair agreements cam modeling"
  ],
  openGraph: {
    title: "Discreet Cam Model Contracts & Escrow Payouts | Cherry NYC",
    description: "Explore the contract and financial autonomy standard at Cherry NYC. Legally-binding 85-90% splits, escrow-backed weekly direct payouts, and zero-penalty termination.",
    url: "https://www.cherry.nyc/legal-contracts-autonomy",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discreet Cam Model Contracts & Escrow Payouts | Cherry NYC",
    description: "Explore the contract and financial autonomy standard at Cherry NYC. Legally-binding 85-90% splits, escrow-backed weekly direct payouts, and zero-penalty termination.",
  }
};

export default function LegalContractsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
