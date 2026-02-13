import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceAreaSchema } from "@/components/TourSchema";
import { FloatingCTA } from "@/components/FloatingCTA";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:
      "GoTourNiagara | Private Luxury SUV Tours to Niagara Falls from the GTA",
    template: "%s | GoTourNiagara",
  },
  description:
    "Book a private luxury Mazda CX-90 SUV tour from Toronto, Mississauga, Brampton & the GTA to Niagara Falls. Door-to-door pickup for groups of 1-6. From $400 flat rate.",
  keywords: [
    "private Niagara tour",
    "Niagara Falls tour from Toronto",
    "luxury SUV tour Niagara",
    "private tour Niagara Falls",
    "GTA Niagara tour",
    "Mazda CX-90 tour",
    "Niagara Falls private driver",
  ],
  openGraph: {
    title: "GoTourNiagara | Private Luxury SUV Tours to Niagara Falls",
    description:
      "Skip the crowded buses. Private Mazda CX-90 tours from the GTA to Niagara Falls for 1-6 guests. From $400.",
    url: "https://gotourniagara.com",
    siteName: "GoTourNiagara",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoTourNiagara | Private Luxury Niagara Tours",
    description:
      "Private Mazda CX-90 tours from the GTA to Niagara Falls. From $400 flat rate.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gotourniagara.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ServiceAreaSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
