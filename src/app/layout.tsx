import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shimanzu Chemicals Pvt. Ltd. | SHIMANZU JAPAN - Growing with trust",
    template: "%s | Shimanzu Chemicals",
  },
  description:
    "Shimanzu Chemicals Pvt. Ltd. (SHIMANZU JAPAN) is an ISO 9001:2015 certified manufacturer of high-performance Insecticides, Fungicides, Herbicides, Plant Growth Regulators, and Water Soluble Fertilizers serving Indian agriculture.",
  keywords: [
    "Shimanzu Chemicals",
    "Shimanzu Japan",
    "Agrochemicals India",
    "Insecticides",
    "Fungicides",
    "Herbicides",
    "PGR",
    "Water Soluble Fertilizers",
    "Hitachu",
    "Wireless",
    "Polher",
    "Simiza",
    "Growing with trust",
  ],
  authors: [{ name: "Shimanzu Chemicals Pvt. Ltd." }],
  creator: "Shimanzu Chemicals Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shimanzu.com",
    title: "Shimanzu Chemicals Pvt. Ltd. | SHIMANZU JAPAN",
    description:
      "Japanese precision formulation engineered for Indian agriculture. High-efficacy crop protection and plant nutrition solutions.",
    siteName: "Shimanzu Chemicals",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col justify-between bg-[#fafbf9] text-slate-800 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
