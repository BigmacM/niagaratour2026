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
      "Private Niagara Falls Tours from Toronto | GoTourNiagara — From $400",
    template: "%s | GoTourNiagara",
  },
  description:
    "Private luxury SUV tours from Toronto to Niagara Falls. Door-to-door pickup in our Mazda CX-90 for 1-6 guests. Wineries, Falls, and more. From $400 flat rate. Rated 5 stars.",
  keywords: [
    "private Niagara tour",
    "Niagara Falls tour from Toronto",
    "luxury SUV tour Niagara",
    "private tour Niagara Falls",
    "GTA Niagara tour",
    "Niagara Falls private driver",
    "Niagara Falls day trip from Toronto",
    "private Niagara Falls tour",
    "Niagara-on-the-Lake wine tour",
    "FIFA World Cup 2026 Niagara tour",
    "Toronto to Niagara Falls private tour",
  ],
  openGraph: {
    title: "Private Niagara Falls Tours from $400 | GoTourNiagara",
    description:
      "Skip the crowded buses. Private Mazda CX-90 tours from the GTA to Niagara Falls for 1-6 guests. Rated 5 stars. From $400.",
    url: "https://gotourniagara.com",
    siteName: "GoTourNiagara",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512351735230-a07ebdf5b5e1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Niagara Falls Horseshoe Falls panoramic view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Niagara Falls Tours from $400 | GoTourNiagara",
    description:
      "Private Mazda CX-90 tours from the GTA to Niagara Falls. Rated 5 stars. From $400 flat rate.",
    images: ["https://images.unsplash.com/photo-1512351735230-a07ebdf5b5e1?w=1200&q=80"],
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
