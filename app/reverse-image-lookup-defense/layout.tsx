import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PimEyes & Reverse Image Search Opt-Out for Models | Cherry NYC",
  description: "Shield your private life with Cherry NYC's advanced reverse-image lookup defense. We actively coordinate facial recognition database opt-outs across PimEyes, SocialCatfish, and Google Lens.",
  keywords: [
    "PimEyes opt-out for models",
    "reverse image search defense",
    "mask face public search",
    "facial recognition block",
    "Cherry NYC privacy shield",
    "remove photos from Google Lens",
    "model search engine anonymity"
  ],
  openGraph: {
    title: "PimEyes & Reverse Image Search Opt-Out for Models | Cherry NYC",
    description: "Shield your private life with Cherry NYC's advanced reverse-image lookup defense. We actively coordinate facial recognition database opt-outs across PimEyes, SocialCatfish, and Google Lens.",
    url: "https://www.cherry.nyc/reverse-image-lookup-defense",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PimEyes & Reverse Image Search Opt-Out for Models | Cherry NYC",
    description: "Shield your private life with Cherry NYC's advanced reverse-image lookup defense. We actively coordinate facial recognition database opt-outs across PimEyes, SocialCatfish, and Google Lens.",
  }
};

export default function ReverseImageLookupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
