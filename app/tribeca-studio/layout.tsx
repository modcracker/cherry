import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Tribeca Webcam Studio Suites & Loft | Cherry NYC",
  description: "Tour Cherry NYC's flagship private studio in Tribeca. A luxury, high-ceiling loft equipped with 4K broadcast systems, custom professional lighting, and total soundproof anonymity.",
  keywords: [
    "Tribeca webcam studio",
    "luxury cam loft Manhattan",
    "NYC webcam studio suites",
    "premium broadcast space New York",
    "Cherry NYC Tribeca",
    "private model studio Manhattan",
    "Tribeca loft modeling"
  ],
  openGraph: {
    title: "Premium Tribeca Webcam Studio Suites & Loft | Cherry NYC",
    description: "Tour Cherry NYC's flagship private studio in Tribeca. A luxury, high-ceiling loft equipped with 4K broadcast systems, custom professional lighting, and total soundproof anonymity.",
    url: "https://www.cherry.nyc/tribeca-studio",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Tribeca Webcam Studio Suites & Loft | Cherry NYC",
    description: "Tour Cherry NYC's flagship private studio in Tribeca. A luxury, high-ceiling loft equipped with 4K broadcast systems, custom professional lighting, and total soundproof anonymity.",
  }
};

export default function TribecaStudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
