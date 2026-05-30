"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

const TEAL = "#296570";
const TEAL_DARK = "#1e4f58";
const ORANGE = "#FD7C46";
const ORANGE_DARK = "#e06535";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: TEAL }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── LOGO ── */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="ICA Languages — Learn, grow, communicate"
              width={220}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-0">
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
                      pathname.startsWith(link.href)
                        ? "text-orange-400"
                        : "text-white hover:text-orange-300"
                    }`}
                  >
                    {link.label.toUpperCase()}
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-52 bg-white rounded-b-xl shadow-xl overflow-hidden transition-all duration-200 ${
                      openDropdown === link.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    {link.children.map((child, i) => (
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
                    pathname === link.href
                      ? "text-orange-400 underline underline-offset-4 decoration-2"
                      : "text-white hover:text-orange-300"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              )
            )}
          </nav>

          {/* ── ACCESO CAMPUS + IDIOMA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.campus}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-black text-white rounded-full transition-all shadow-md hover:shadow-lg"
              style={{ backgroundColor: ORANGE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ORANGE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
            >
              ACCESO CAMPUS
            </a>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
              <span>🇲🇽</span>
              <span>Español</span>
              <ChevronDown className="w-3 h-3" />
            </button>
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

          <div className="pt-3 border-t border-white/20">
            <a
              href={siteConfig.campus}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 text-sm font-black text-white rounded-full"
              style={{ backgroundColor: ORANGE }}
            >
              ACCESO CAMPUS
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
