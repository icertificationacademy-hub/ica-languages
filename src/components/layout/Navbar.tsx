"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";

const TEAL = "#296570";
const TEAL_DARK = "#1e4f58";
const ORANGE = "#FD7C46";
const ORANGE_DARK = "#e06535";

const languages = [
  { code: "es", label: "ES", fullLabel: "Español" },
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "fr", label: "FR", fullLabel: "Français" },
];

function FlagIcon({ code }: { code: string }) {
  if (code === "es") {
    return (
      <svg className="w-[28px] h-[18px] rounded-sm shadow-sm shrink-0" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="20" fill="#006847" />
        <rect x="10" width="10" height="20" fill="#FFFFFF" />
        <rect x="20" width="10" height="20" fill="#C8102E" />
        <circle cx="15" cy="10" r="1.5" fill="#C5A059" />
      </svg>
    );
  }
  if (code === "en") {
    return (
      <svg className="w-[28px] h-[18px] rounded-sm shadow-sm shrink-0" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#B22234" />
        <path d="M0,1.5 H30 M0,4.5 H30 M0,7.5 H30 M0,10.5 H30 M0,13.5 H30 M0,16.5 H30" stroke="#FFFFFF" strokeWidth="1.5" />
        <rect width="12" height="11" fill="#3C3B6E" />
        <circle cx="2" cy="2" r="0.4" fill="#FFFFFF" />
        <circle cx="6" cy="2" r="0.4" fill="#FFFFFF" />
        <circle cx="10" cy="2" r="0.4" fill="#FFFFFF" />
        <circle cx="4" cy="4" r="0.4" fill="#FFFFFF" />
        <circle cx="8" cy="4" r="0.4" fill="#FFFFFF" />
        <circle cx="2" cy="6" r="0.4" fill="#FFFFFF" />
        <circle cx="6" cy="6" r="0.4" fill="#FFFFFF" />
        <circle cx="10" cy="6" r="0.4" fill="#FFFFFF" />
        <circle cx="4" cy="8" r="0.4" fill="#FFFFFF" />
        <circle cx="8" cy="8" r="0.4" fill="#FFFFFF" />
      </svg>
    );
  }
  if (code === "fr") {
    return (
      <svg className="w-[28px] h-[18px] rounded-sm shadow-sm shrink-0" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="20" fill="#0055A5" />
        <rect x="10" width="10" height="20" fill="#FFFFFF" />
        <rect x="20" width="10" height="20" fill="#EF4135" />
      </svg>
    );
  }
  return null;
}

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);

  const activeLang = languages.find((l) => l.code === locale) ?? languages[0];

  const navLinks = [
    { label: t("inicio"), href: "/" },
    {
      label: t("cursos"),
      href: "/cursos",
      children: [
        { label: t("ingles"), href: "/cursos/ingles" },
        { label: t("inglesNinos"), href: "/cursos/ingles-ninos" },
        { label: t("frances"), href: "/cursos/frances" },
        { label: t("inglesEmpresa"), href: "/cursos/ingles-empresa" },
      ],
    },
    {
      label: t("certificaciones"),
      href: "/certificaciones",
      children: [
        { label: t("cambridge"), href: "/certificaciones/cambridge" },
        { label: t("alianzaFrancesa"), href: "/certificaciones/alianza-francesa" },
        { label: t("constanciaNivel"), href: "/certificaciones/constancia-de-nivel" },
      ],
    },
    {
      label: t("nosotros"),
      href: "/nosotros",
      children: [
        { label: t("quienesSomos"), href: "/nosotros" },
        { label: t("uneteAlEquipo"), href: "/nosotros/unete-al-equipo" },
      ],
    },
  ];

  // Close lang dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
    setIsOpen(false);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: TEAL }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] sm:h-[90px] lg:h-[100px]">

          {/* ── LOGO ── */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="ICA Languages — Learn, grow, communicate"
              width={300}
              height={76}
              className="h-[48px] sm:h-[60px] lg:h-[68px] w-auto object-contain"
              priority
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-bold tracking-wide transition-colors ${
                      pathname.includes(link.href) && link.href !== "/"
                        ? "text-orange-400"
                        : "text-white hover:text-orange-300"
                    }`}
                  >
                    {link.label.toUpperCase()}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown menu */}
                  <div
                    className={`absolute top-full left-0 w-52 bg-white rounded-b-xl shadow-xl overflow-hidden transition-all duration-200 ${
                      openDropdown === link.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm font-semibold text-slate-800 border-b border-slate-100 last:border-0 transition-colors"
                        style={{ borderLeft: "3px solid transparent" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = TEAL;
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.borderLeftColor = ORANGE;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "";
                          e.currentTarget.style.color = "";
                          e.currentTarget.style.borderLeftColor = "transparent";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors ${
                    pathname.endsWith("/") || pathname === `/${locale}`
                      ? link.href === "/"
                        ? "text-orange-400 underline underline-offset-4 decoration-2"
                        : "text-white hover:text-orange-300"
                      : "text-white hover:text-orange-300"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              )
            )}
          </nav>

          {/* ── CAMPUS ACCESS + LANGUAGE ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Campus button */}
            <a
              href={siteConfig.campus}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-black text-white rounded-full transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              style={{ backgroundColor: ORANGE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ORANGE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
            >
              {t("accesoCampus")}
            </a>

            {/* ── LANGUAGE SELECTOR ── */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
              >
                <FlagIcon code={activeLang.code} />
                <span>{activeLang.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language dropdown */}
              <div
                className={`absolute top-full right-0 w-40 rounded-b-xl shadow-xl overflow-hidden transition-all duration-200 ${
                  langOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                style={{ backgroundColor: TEAL }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-left border-b transition-colors ${
                      locale === lang.code
                        ? "text-white bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    } last:border-0`}
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <FlagIcon code={lang.code} />
                    <span>{lang.fullLabel}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ backgroundColor: TEAL_DARK }}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-white"
                  >
                    {link.label.toUpperCase()}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 border-l-2 border-white/20 pl-4 space-y-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm font-medium text-white/80 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-sm font-bold text-white"
                >
                  {link.label.toUpperCase()}
                </Link>
              )}
            </div>
          ))}

          {/* Language in mobile */}
          <div className="pt-2 border-t border-white/20">
            <p className="px-3 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider">
              {t("idioma")}
            </p>
            <div className="flex gap-2 px-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    locale === lang.code
                      ? "bg-white/20 text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <FlagIcon code={lang.code} />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/20">
            <a
              href={siteConfig.campus}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 text-sm font-black text-white rounded-full"
              style={{ backgroundColor: ORANGE }}
            >
              {t("accesoCampus")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
