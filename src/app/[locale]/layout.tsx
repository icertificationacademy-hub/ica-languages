import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Cursos de Inglés y Francés en Apizaco`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Aprende inglés y francés con confianza en ICA Languages, Apizaco Tlaxcala. Grupos pequeños, enfoque conversacional y certificaciones Cambridge y Alianza Francesa.",
  icons: {
    icon: "/images/logo.png",
  },
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
