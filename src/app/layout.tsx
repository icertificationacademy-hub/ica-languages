import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Cursos de Inglés y Francés en Apizaco`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Aprende inglés y francés con confianza en ICA Languages, Apizaco Tlaxcala. Grupos pequeños, enfoque conversacional y certificaciones Cambridge y Alianza Francesa.",
  keywords: [
    "cursos de inglés Apizaco",
    "cursos de francés Tlaxcala",
    "certificaciones Cambridge",
    "Alianza Francesa",
    "inglés para niños",
    "inglés para empresas",
    "ICA Languages",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Cursos de Inglés y Francés en Apizaco`,
    description:
      "Aprende inglés y francés en ICA Languages. Grupos pequeños, certificaciones internacionales y horarios flexibles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
