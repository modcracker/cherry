import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Webcam Modeling Agency & Brand Architecture | Cherry NYC",
  description: "Discover professional webcam modeling in New York City with Cherry NYC. We provide luxury studio spaces, 4K camera gear, and elite privacy defense for creators.",
  keywords: [
    "NYC webcam modeling",
    "webcam agency New York",
    "cam model studio Manhattan",
    "become a webcam model NYC",
    "webcam development NYC",
    "Cherry NYC webcam modeling",
    "private modeling NYC",
    "Manhattan cam modeling"
  ],
  openGraph: {
    title: "NYC Webcam Modeling Agency & Brand Architecture | Cherry NYC",
    description: "Discover professional webcam modeling in New York City with Cherry NYC. We provide luxury studio spaces, 4K camera gear, and elite privacy defense for creators.",
    url: "https://www.cherry.nyc/nyc-webcam-modeling",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Webcam Modeling Agency & Brand Architecture | Cherry NYC",
    description: "Discover professional webcam modeling in New York City with Cherry NYC. We provide luxury studio spaces, 4K camera gear, and elite privacy defense for creators.",
  }
};

export default function WebcamModelingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
