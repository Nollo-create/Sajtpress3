"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Usluge", href: "#usluge" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "Radovi", href: "#projekti" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
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
              className="text-base font-semibold text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#kontakt">Zatražite ponudu</Button>
        </div>

        {/* Mobilno dugme */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="text-foreground md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
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
                className="rounded-lg px-3 py-2 text-base font-semibold text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#kontakt" className="mt-2 w-full">
              Zatražite ponudu
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
