import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_DATA } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hyderabadcropscience.com"),
  title: {
    default: `${COMPANY_DATA.legalName} | ${COMPANY_DATA.tagline}`,
    template: `%s | ${COMPANY_DATA.name}`,
  },
  description:
    "Hyderabad Crop Science Pvt. Ltd. delivers science-driven agricultural crop protection and plant nutrition formulations for Indian farmers and agro-professionals.",
  keywords: [
    "Hyderabad Crop Science",
    "Crop Protection India",
    "Insecticides",
    "Fungicides",
    "Herbicides",
    "Plant Nutrition",
    "Agrochemicals",
    "RIDONA",
    "VOLVO herbicide",
    "TUFAN weed killer",
    "SHIMDOR",
    "HAITOR",
    "SYPKAR",
    "Indian Agriculture",
  ],
  authors: [{ name: COMPANY_DATA.legalName }],
  creator: COMPANY_DATA.legalName,
  publisher: COMPANY_DATA.legalName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hyderabadcropscience.com",
    siteName: COMPANY_DATA.name,
    title: `${COMPANY_DATA.legalName} | ${COMPANY_DATA.tagline}`,
    description:
      "Formulating high-purity agricultural crop protection and nutrition solutions. Better Crops, Better Future.",
    images: [
      {
        url: "/images/hero/hero-farm.svg",
        width: 1200,
        height: 630,
        alt: "Hyderabad Crop Science Farmlands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_DATA.name} | ${COMPANY_DATA.tagline}`,
    description:
      "Science-driven solutions for healthier crops and a stronger agricultural future.",
    images: ["/images/hero/hero-farm.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased selection:bg-brand-200 selection:text-agri-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
