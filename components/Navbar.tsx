"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the dark hero video the text is cream; once scrolled the bar
  // turns solid sand and the text turns ink.
  const text = scrolled ? "text-[#2B211C]" : "text-[#FBF6EF]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "border-b border-[#E5D3C0] bg-[#FBF6EF]/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2" aria-label="La Rosa Canggu — home">
          <span className="flex h-9 w-9 items-center justify-center bg-[#DE6B1F] font-display text-xl font-bold text-[#FBF6EF]">
            L
          </span>
          <span className={`font-display text-xl font-bold sm:text-2xl ${text}`}>
            La Rosa
          </span>
          <span className={`hidden text-[11px] font-semibold uppercase tracking-[0.2em] sm:inline ${scrolled ? "text-[#6D5A4E]" : "text-[#FBF6EF]/70"}`}>
            Canggu
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`smallcaps text-[11px] transition-colors duration-500 hover:text-[#DE6B1F] ${scrolled ? "text-[#2B211C]/80" : "text-[#FBF6EF]/80"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="inline-flex min-h-[44px] items-center justify-center bg-[#A84A12] px-5 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#7E3608]"
          >
            Book a table
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-[5px] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-[22px] ${scrolled ? "bg-[#2B211C]" : "bg-[#FBF6EF]"}`} />
          <span className={`block h-[2px] w-[22px] ${scrolled ? "bg-[#2B211C]" : "bg-[#FBF6EF]"}`} />
          <span className={`block h-[2px] w-[22px] ${scrolled ? "bg-[#2B211C]" : "bg-[#FBF6EF]"}`} />
        </button>
      </nav>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-[#E5D3C0] bg-[#FBF6EF] px-5 pb-4 pt-2 md:hidden"
          aria-label="Mobile"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#E5D3C0] py-3 font-semibold text-[#2B211C]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-[52px] items-center justify-center bg-[#A84A12] px-5 font-bold text-white"
          >
            Book a table
          </a>
        </nav>
      )}
    </header>
  );
}
