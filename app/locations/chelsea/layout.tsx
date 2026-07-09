import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chelsea Webcam Design Suites | Cherry NYC",
  description: "Cherry NYC's exclusive webcam modeling suites in Chelsea (zip codes 10011 & 10001). High-ceiling acoustics and minimalist white-box setups with elite brand management.",
  keywords: [
    "Chelsea Webcam Studio",
    "Private Design Suites Chelsea",
    "Webcam Modeling Agency Chelsea",
    "NYC Webcam Studio Suites",
    "Cherry NYC Chelsea",
    "Private Modeling NYC"
  ],
  openGraph: {
    title: "Chelsea Webcam Design Suites | Cherry NYC",
    description: "Cherry NYC's exclusive webcam modeling suites in Chelsea (zip codes 10011 & 10001). High-ceiling acoustics and minimalist white-box setups with elite brand management.",
    url: "https://www.cherry.nyc/locations/chelsea",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea Webcam Design Suites | Cherry NYC",
    description: "Cherry NYC's exclusive webcam modeling suites in Chelsea (zip codes 10011 & 10001). High-ceiling acoustics and minimalist white-box setups with elite brand management.",
  }
};

export default function ChelseaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
