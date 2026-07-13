import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our High-Security NYC Webcam Studio | Cherry NYC",
  description: "Learn more about Cherry NYC, New York City's leading secure webcam brand management firm and private studio space. Offering models unparalleled legal defense, custom 4K suites, and financial sovereignty.",
  keywords: [
    "Cherry NYC",
    "About Cherry NYC",
    "Webcam modeling history NYC",
    "Secure modeling network Manhattan",
    "Private model agency New York",
    "Discreet studio suites Manhattan"
  ],
  openGraph: {
    title: "About Our High-Security NYC Webcam Studio | Cherry NYC",
    description: "Learn more about Cherry NYC, New York City's leading secure webcam brand management firm and private studio space.",
    url: "https://www.cherry.nyc/about",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our High-Security NYC Webcam Studio | Cherry NYC",
    description: "Learn more about Cherry NYC, New York City's leading secure webcam brand management firm and private studio space.",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
