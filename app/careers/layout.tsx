import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply as a Webcam Model in NYC | High Payout Splits | Cherry NYC",
  description: "Ready to elevate your digital modeling career? Apply to Cherry NYC today. 85-90% payout splits, high-end Tribeca suites, and 24/7 DMCA copyright protection.",
  keywords: [
    "apply webcam model NYC",
    "webcam model jobs New York",
    "highest paying cam agency",
    "join webcam studio Manhattan",
    "cam model application NYC",
    "Cherry NYC careers",
    "discreet modeling jobs NYC"
  ],
  openGraph: {
    title: "Apply as a Webcam Model in NYC | High Payout Splits | Cherry NYC",
    description: "Ready to elevate your digital modeling career? Apply to Cherry NYC today. 85-90% payout splits, high-end Tribeca suites, and 24/7 DMCA copyright protection.",
    url: "https://www.cherry.nyc/careers",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply as a Webcam Model in NYC | High Payout Splits | Cherry NYC",
    description: "Ready to elevate your digital modeling career? Apply to Cherry NYC today. 85-90% payout splits, high-end Tribeca suites, and 24/7 DMCA copyright protection.",
  }
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
