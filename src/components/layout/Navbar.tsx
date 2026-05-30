"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink, Globe } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "var(--ica-teal)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Placeholder logo — reemplaza con tu imagen real */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 overflow-hidden">
              <span className="text-xs font-black text-center leading-tight" style={{ color: "var(--ica-teal)", fontSize: "10px" }}>
                ICA
              </span>
            </div>
            <div className="text-white">
              <div className="text-2xl font-black leading-none tracking-tight">
                ICA <span className="font-light">Languages</span>
              </div>
              <div className="text-xs text-white/70 font-light tracking-wide">
                Learn, grow, communicate
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors rounded-md ${
                      pathname.startsWith(link.href)
                        ? "text-orange-400 underline underline-offset-4"
                        : "text-white hover:text-orange-300"
                    }`}
                  >
                    {link.label.toUpperCase()}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 ${
                      openDropdown === link.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:text-white transition-colors"
                        style={{ ["--hover-bg" as string]: "var(--ica-teal)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--ica-teal)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
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
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-orange-400 underline underline-offset-4"
                      : "text-white hover:text-orange-300"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.campus}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-full transition-all shadow-md hover:shadow-lg"
              style={{ backgroundColor: "var(--ica-orange)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--ica-orange-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--ica-orange)")}
            >
              ACCESO CAMPUS
            </a>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-md">
              <span>🇲🇽</span>
              <span>Español</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-orange-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ backgroundColor: "var(--ica-teal-dark)" }}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-white hover:text-orange-300 transition-colors"
                  >
                    {link.label.toUpperCase()}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 border-l-2 border-white/20 pl-4 space-y-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-white/80 hover:text-white transition-colors"
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
                  className="block px-3 py-3 text-sm font-bold text-white hover:text-orange-300 transition-colors"
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
              className="flex items-center justify-center w-full py-3 text-sm font-bold text-white rounded-full"
              style={{ backgroundColor: "var(--ica-orange)" }}
            >
              ACCESO CAMPUS
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
