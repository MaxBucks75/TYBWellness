import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
// ── AUTH (Clerk) — disabled for now, uncomment to re-enable ──
// import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Train Your Brain Wellness | Dr. Amber Bucks",
    template: "%s | Train Your Brain Wellness",
  },
  description:
    "From survival to healing. Where your mental health is my priority. Psychiatry, therapy, and wellness services with Dr. Amber Bucks.",
  keywords: ["psychiatry", "mental health", "therapy", "TMS", "wellness", "Dr. Amber Bucks"],
  openGraph: {
    title: "Train Your Brain Wellness",
    description: "From survival to healing. Where your mental health is my priority.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
    // </ClerkProvider>
  );
}