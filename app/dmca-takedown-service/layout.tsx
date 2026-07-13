import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated DMCA Takedowns & Leak Protection for Cam Models | Cherry NYC",
  description: "Tired of leaks, pirated video feeds, or unapproved re-uploads? Cherry NYC provides high-priority, 24/7 automated DMCA takedown services to protect our models' intellectual property.",
  keywords: [
    "DMCA takedown for webcam models",
    "remove cam leaks",
    "copyright defense for cam models",
    "stop video re-uploads",
    "Cherry NYC piracy protection",
    "dmca removal services NYC",
    "protect cam model content"
  ],
  openGraph: {
    title: "Automated DMCA Takedowns & Leak Protection for Cam Models | Cherry NYC",
    description: "Tired of leaks, pirated video feeds, or unapproved re-uploads? Cherry NYC provides high-priority, 24/7 automated DMCA takedown services to protect our models' intellectual property.",
    url: "https://www.cherry.nyc/dmca-takedown-service",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated DMCA Takedowns & Leak Protection for Cam Models | Cherry NYC",
    description: "Tired of leaks, pirated video feeds, or unapproved re-uploads? Cherry NYC provides high-priority, 24/7 automated DMCA takedown services to protect our models' intellectual property.",
  }
};

export default function DmcaTakedownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
