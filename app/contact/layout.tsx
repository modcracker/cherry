import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discreet Contact & Inquiries | Cherry NYC Studio Network",
  description: "Connect with our corporate office discreetly. Secure, encrypted channels for talent acquisition, brand partnerships, and studio scheduling in Manhattan.",
  keywords: [
    "Contact Cherry NYC",
    "Secure modeling inquiry NYC",
    "Tribeca studio booking",
    "Webcam agency contact",
    "Discreet modeling agency",
    "Apply webcam agency Manhattan"
  ],
  openGraph: {
    title: "Discreet Contact & Inquiries | Cherry NYC Studio Network",
    description: "Connect with our corporate office discreetly. Secure, encrypted channels for talent acquisition, brand partnerships, and studio scheduling in Manhattan.",
    url: "https://www.cherry.nyc/contact",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discreet Contact & Inquiries | Cherry NYC Studio Network",
    description: "Connect with our corporate office discreetly. Secure, encrypted channels for talent acquisition, brand partnerships, and studio scheduling in Manhattan.",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
