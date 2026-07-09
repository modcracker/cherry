import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoHo Webcam Studio Suites | Cherry NYC",
  description: "Explore Cherry NYC's premium webcam modeling suites in SoHo. Discover luxury lofts in zip codes 10012 & 10013 with 4K broadcast technology and state-of-the-art privacy.",
  keywords: [
    "SoHo Webcam Studio",
    "Luxury Webcam Lofts SoHo",
    "Webcam Modeling Agency SoHo",
    "NYC Webcam Studio Suites",
    "Cherry NYC SoHo",
    "Private Modeling NYC"
  ],
  openGraph: {
    title: "SoHo Webcam Studio Suites | Cherry NYC",
    description: "Explore Cherry NYC's premium webcam modeling suites in SoHo. Discover luxury lofts in zip codes 10012 & 10013 with 4K broadcast technology and state-of-the-art privacy.",
    url: "https://www.cherry.nyc/locations/soho",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoHo Webcam Studio Suites | Cherry NYC",
    description: "Explore Cherry NYC's premium webcam modeling suites in SoHo. Discover luxury lofts in zip codes 10012 & 10013 with 4K broadcast technology and state-of-the-art privacy.",
  }
};

export default function SohoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
