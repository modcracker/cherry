import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Webcam Modeling Agency in New York | Cherry NYC Comparison",
  description: "See how Cherry NYC compares to standard, predatory cam model agencies. We offer 85-90% splits, complete copyright protection, and no hidden fees.",
  keywords: [
    "best webcam modeling agency",
    "webcam agency comparison NYC",
    "cam model payout splits",
    "top cam studio New York",
    "Cherry NYC vs other agencies",
    "professional webcam studio review",
    "fair model contracts NYC"
  ],
  openGraph: {
    title: "Best Webcam Modeling Agency in New York | Cherry NYC Comparison",
    description: "See how Cherry NYC compares to standard, predatory cam model agencies. We offer 85-90% splits, complete copyright protection, and no hidden fees.",
    url: "https://www.cherry.nyc/agency-comparison",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Webcam Modeling Agency in New York | Cherry NYC Comparison",
    description: "See how Cherry NYC compares to standard, predatory cam model agencies. We offer 85-90% splits, complete copyright protection, and no hidden fees.",
  }
};

export default function AgencyComparisonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
