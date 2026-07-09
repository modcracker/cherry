import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Williamsburg Webcam Studio Lofts | Cherry NYC",
  description: "Elevate your career at Cherry NYC's industrial waterfront webcam lofts in Williamsburg, Brooklyn (zip codes 11211 & 11249) featuring panoramic views and DMCA privacy protection.",
  keywords: [
    "Williamsburg Webcam Studio",
    "Brooklyn Webcam Lofts",
    "Webcam Modeling Agency Brooklyn",
    "NYC Webcam Studio Suites",
    "Cherry NYC Williamsburg",
    "Private Modeling NYC"
  ],
  openGraph: {
    title: "Williamsburg Webcam Studio Lofts | Cherry NYC",
    description: "Elevate your career at Cherry NYC's industrial waterfront webcam lofts in Williamsburg, Brooklyn (zip codes 11211 & 11249) featuring panoramic views and DMCA privacy protection.",
    url: "https://www.cherry.nyc/locations/williamsburg",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Williamsburg Webcam Studio Lofts | Cherry NYC",
    description: "Elevate your career at Cherry NYC's industrial waterfront webcam lofts in Williamsburg, Brooklyn (zip codes 11211 & 11249) featuring panoramic views and DMCA privacy protection.",
  }
};

export default function WilliamsburgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
