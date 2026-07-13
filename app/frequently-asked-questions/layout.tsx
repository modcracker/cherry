import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webcam Modeling FAQs & Support Center | Cherry NYC",
  description: "Have questions about splits, payouts, camera technology, or DMCA copyright protection? Find comprehensive answers in the Cherry NYC Webcam Modeling FAQ directory.",
  keywords: [
    "webcam model faq",
    "cam agency questions",
    "webcam splits guide",
    "how webcam modeling works",
    "Cherry NYC support",
    "frequently asked questions webcam model"
  ],
  openGraph: {
    title: "Webcam Modeling FAQs & Support Center | Cherry NYC",
    description: "Have questions about splits, payouts, camera technology, or DMCA copyright protection? Find comprehensive answers in the Cherry NYC Webcam Modeling FAQ directory.",
    url: "https://www.cherry.nyc/frequently-asked-questions",
    siteName: "Cherry NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcam Modeling FAQs & Support Center | Cherry NYC",
    description: "Have questions about splits, payouts, camera technology, or DMCA copyright protection? Find comprehensive answers in the Cherry NYC Webcam Modeling FAQ directory.",
  }
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
