import "@/app/globals.css";
import { Inter, Outfit } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Cherry NYC | Elite Webcam Modeling Agency & Brand Management",
  description: "The ultra-exclusive webcam development studio in NYC. High-end Tribeca suites, premium technology, and world-class face-search and DMCA privacy defense.",
  keywords: [
    "New York Webcam Agency",
    "Tribeca Model Studios",
    "Private Modeling NYC",
    "Cherry NYC",
    "Elite Webcam Modeling",
    "Webcam Brand Management",
    "High-end Model Studio NYC",
    "DMCA Takedown Service NYC",
    "Reverse Image Lookup Defense",
    "NYC Webcam Studio Suites"
  ],
  metadataBase: new URL("https://www.cherry.nyc"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cherry NYC | Elite Webcam Modeling Agency & Brand Management",
    description: "The ultra-exclusive webcam development studio in NYC. High-end Tribeca suites, premium technology, and world-class face-search and DMCA privacy defense.",
    url: "https://www.cherry.nyc",
    siteName: "Cherry NYC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cherry NYC - Elite Webcam Modeling Agency & Brand Management",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherry NYC | Elite Webcam Modeling Agency & Brand Management",
    description: "The ultra-exclusive webcam development studio in NYC. High-end Tribeca suites, premium technology, and world-class face-search and DMCA privacy defense.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-gray-200 bg-[#070708] min-h-screen selection:bg-rose-500/20 selection:text-rose-400">
        {children}
      </body>
    </html>
  );
}
