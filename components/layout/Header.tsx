"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Usluge", href: "#usluge" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "Radovi", href: "#projekti" },
  { label: "Utisci", href: "#utisci" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/40 shadow-lg shadow-black/20 backdrop-blur-2xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo (tekstualni — zameniti pravim logom kasnije) */}
        <Link href="/" className="flex items-center gap-1 text-2xl font-semibold font-display">
          <span className="text-foreground">Sajt</span>
          <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
            press
          </span>
        </Link>

        {/* Desktop navigacija */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#kontakt" className="uppercase tracking-wide">
            Zatražite ponudu
          </Button>
        </div>

        {/* Mobilno dugme — animirani hamburger koji se pretvara u „X" */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/40 backdrop-blur-sm transition-colors hover:border-brand/50 md:hidden"
        >
          <span
            className={`absolute h-0.5 rounded-full bg-foreground transition-all duration-300 ease-out group-hover:bg-brand ${
              open ? "w-5 rotate-45" : "w-5 -translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute h-0.5 w-3.5 rounded-full bg-foreground transition-all duration-200 ease-out group-hover:bg-brand ${
              open ? "scale-x-0 opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 rounded-full bg-foreground transition-all duration-300 ease-out group-hover:bg-brand ${
              open ? "w-5 -rotate-45" : "w-5 translate-y-[6px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobilni meni */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-foreground transition-colors hover:bg-surface hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#kontakt" className="mt-2 w-full uppercase tracking-wide">
              Zatražite ponudu
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
