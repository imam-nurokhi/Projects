"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LangContext";

const NAV_LINKS = {
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  id: [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Keahlian", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = NAV_LINKS[lang];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "px-6 md:px-12 py-3 border-b border-white/10 bg-[rgba(8,8,15,0.9)] backdrop-blur-[20px]"
            : "px-6 md:px-12 py-5 bg-[rgba(8,8,15,0.6)] backdrop-blur-[20px] border-b border-white/[0.08]"
        }`}
      >
        <a
          href="#home"
          className="text-xl font-semibold gradient-text-primary"
          style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}
        >
          MIN.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[#94a3b8] hover:text-[#e2e8f0] text-[0.85rem] font-medium uppercase tracking-widest transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6366f1] to-[#f472b6] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Lang toggle */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px]">
            {(["en", "id"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  lang === l
                    ? "text-white"
                    : "text-[#94a3b8] hover:text-[#e2e8f0]"
                }`}
                style={
                  lang === l
                    ? { background: "linear-gradient(135deg, #6366f1, #f472b6)" }
                    : {}
                }
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#e2e8f0] rounded-sm transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e2e8f0] rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e2e8f0] rounded-sm transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </motion.nav>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            exit={{ opacity: 0, visibility: "hidden" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(8,8,15,0.98)] backdrop-blur-[30px]"
          >
            <ul className="flex flex-col items-center gap-6 list-none">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#e2e8f0] text-3xl font-semibold hover:text-[#818cf8] transition-colors duration-300"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1 mt-4 p-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
              {(["en", "id"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMenuOpen(false); }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    lang === l ? "text-white" : "text-[#94a3b8]"
                  }`}
                  style={
                    lang === l
                      ? { background: "linear-gradient(135deg, #6366f1, #f472b6)" }
                      : {}
                  }
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile lang toggle (fixed bottom-right) */}
      <div className="md:hidden fixed bottom-6 right-6 z-[200] flex items-center gap-1 p-1 rounded-full bg-[rgba(8,8,15,0.9)] border border-white/[0.08] backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {(["en", "id"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              lang === l ? "text-white" : "text-[#94a3b8]"
            }`}
            style={
              lang === l
                ? { background: "linear-gradient(135deg, #6366f1, #f472b6)" }
                : {}
            }
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
}
