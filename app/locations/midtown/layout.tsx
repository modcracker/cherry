import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midtown Webcam Penthouse Suites | Cherry NYC",
  description: "Reach new heights at Cherry NYC's luxury webcam penthouses in Midtown Manhattan (zip codes 10018, 10001, & 10036). Lightning-fast fiber feeds & corporate-grade anonymity.",
  keywords: [
    "Midtown Webcam Penthouse",
    "Luxury Webcam Suites Midtown",
    "Webcam Modeling Agency Midtown",
    "NYC Webcam Studio Suites",
    "Cherry NYC Midtown",
    "Private Modeling NYC"
  ],
  openGraph: {
    title: "Midtown Webcam Penthouse Suites | Cherry NYC",
    description: "Reach new heights at Cherry NYC's luxury webcam penthouses in Midtown Manhattan (zip codes 10018, 10001, & 10036). Lightning-fast fiber feeds & corporate-grade anonymity.",
    url: "https://www.cherry.nyc/locations/midtown",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midtown Webcam Penthouse Suites | Cherry NYC",
    description: "Reach new heights at Cherry NYC's luxury webcam penthouses in Midtown Manhattan (zip codes 10018, 10001, & 10036). Lightning-fast fiber feeds & corporate-grade anonymity.",
  }
};

export default function MidtownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
