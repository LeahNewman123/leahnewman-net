import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Leah Newman | Engineer, Researcher and Builder",
    template: "%s | Leah Newman"
  },
  description:
    "Leah Newman is an engineer and researcher working across assistive technology, robotics, neurological rehabilitation, hardware and STEM outreach.",
  openGraph: {
    title: "Leah Newman | Engineer, Researcher and Builder",
    description:
      "Engineering, research, assistive technology, hardware, ventures and STEM outreach.",
    type: "website",
    images: ["/images/social-preview.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
