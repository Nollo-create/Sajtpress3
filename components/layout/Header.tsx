"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  ChevronDown,
  LayoutGrid,
  Tag,
  Briefcase,
  Star,
  Mail,
  Code2,
  Wand2,
  ShieldCheck,
  Search,
  Target,
  ThumbsUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: { label: string; href: string; icon: LucideIcon }[];
};

// Ikonice se boje gradijentom kao reč „press" (#press-gradient def ispod).
const GRAD = "url(#press-gradient)";

const serviceLinks = [
  { label: "Izrada sajtova", href: "/usluge/izrada-sajtova", icon: Code2 },
  { label: "Redizajn sajtova", href: "/usluge/redizajn-sajtova", icon: Wand2 },
  { label: "Održavanje sajtova", href: "/usluge/odrzavanje-sajtova", icon: ShieldCheck },
  { label: "SEO", href: "/usluge/seo", icon: Search },
  { label: "Google reklame", href: "/usluge/google-reklame", icon: Target },
  { label: "Facebook reklame", href: "/usluge/facebook-reklame", icon: ThumbsUp },
];

const navLinks: NavLink[] = [
  { label: "Usluge", href: "/usluge", icon: LayoutGrid, children: serviceLinks },
  { label: "Cenovnik", href: "/#cenovnik", icon: Tag },
  { label: "Radovi", href: "/#projekti", icon: Briefcase },
  { label: "Utisci", href: "/#utisci", icon: Star },
  { label: "Kontakt", href: "/kontakt", icon: Mail },
];

// Brend ikone (lucide ih ne izvozi) — inline SVG.
const socials = [
  {
    label: "Facebook",
    path: "M13.5 21v-8h2.7l.4-3h-3.1V8.06c0-.87.24-1.46 1.49-1.46H17V3.93c-.28-.04-1.24-.12-2.35-.12-2.33 0-3.92 1.42-3.92 4.02V10H8v3h2.73v8h2.77z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.08 1.4-2.08 2.85V21H9z",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  // Zaključaj skrol i zatvori na Escape dok je meni otvoren
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setSubOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Gradijent za ikonice (kao reč „press") */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="press-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fd366e" />
            <stop offset="100%" stopColor="#fe9567" />
          </linearGradient>
        </defs>
      </svg>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/40 shadow-lg shadow-black/20 backdrop-blur-2xl backdrop-saturate-150">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="relative z-50 flex items-center gap-1 font-display text-2xl font-semibold uppercase"
          >
            <span className="text-foreground">Sajt</span>
            <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
              press
            </span>
          </Link>

          {/* Desktop navigacija */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                  onFocus={openServices}
                  onBlur={scheduleCloseServices}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-base font-light tracking-wide text-foreground transition-colors hover:text-brand"
                  >
                    <Icon size={17} color={GRAD} />
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                    className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="w-72 rounded-2xl border border-white/10 bg-background/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                      {link.children.map((c) => {
                        const CIcon = c.icon;
                        return (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                          >
                            <span className="flex items-center gap-2.5">
                              <CIcon size={17} color={GRAD} />
                              {c.label}
                            </span>
                            <ArrowUpRight size={15} className="text-muted/50" />
                          </Link>
                        );
                      })}
                      <div className="my-1 h-px bg-white/10" />
                      <Link
                        href={link.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-surface"
                      >
                        Sve usluge
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-base font-light tracking-wide text-foreground transition-colors hover:text-brand"
                >
                  <Icon size={17} color={GRAD} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button href="/zatrazite-ponudu" className="uppercase tracking-wide">
              Zatražite ponudu
            </Button>
          </div>

          {/* Mobilno dugme — animirani hamburger koji se pretvara u „X" */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            className="group relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/40 backdrop-blur-sm transition-colors hover:border-brand/50 md:hidden"
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
      </header>

      {/* Full-screen mobilni meni */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "visible" : "invisible"
        } transition-[visibility] duration-500`}
      >
        {/* Pozadina: tamna + backdrop + animirana aurora */}
        <div
          className={`absolute inset-0 bg-background/95 backdrop-blur-2xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="aurora-center absolute left-1/2 top-[6%] h-[380px] w-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
          <div
            className="aurora-float absolute -right-16 bottom-[6%] h-[320px] w-[320px] rounded-full bg-coral/15 blur-[110px]"
            style={{ animationDelay: "-5s" }}
          />
        </div>

        {/* Sadržaj */}
        <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28">
          <nav className="flex flex-col">
            {navLinks.map((link, i) => {
              const Icon = link.icon;
              const stagger = { transitionDelay: open ? `${120 + i * 60}ms` : "0ms" };
              const reveal = open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0";

              if (link.children) {
                return (
                  <div
                    key={link.href}
                    style={stagger}
                    className={`border-b border-white/10 transition-all duration-500 ease-out ${reveal}`}
                  >
                    <button
                      type="button"
                      onClick={() => setSubOpen((v) => !v)}
                      aria-expanded={subOpen}
                      className="group flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span className="font-mono text-sm text-brand">0{i + 1}</span>
                      <Icon size={26} color={GRAD} className="shrink-0" />
                      <span className="font-display text-4xl font-light text-foreground transition-colors group-hover:text-brand">
                        {link.label}
                      </span>
                      <ChevronDown
                        size={26}
                        className={`ml-auto text-muted transition-transform duration-300 ${
                          subOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>

                    {/* Podmeni (accordion) */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        subOpen ? "max-h-96 pb-4" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pl-11">
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-lg font-medium text-brand transition-colors hover:text-brand-light"
                        >
                          Sve usluge
                        </Link>
                        {link.children.map((c) => {
                          const CIcon = c.icon;
                          return (
                            <Link
                              key={c.href}
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 py-2 text-lg text-muted transition-colors hover:text-foreground"
                            >
                              <CIcon size={18} color={GRAD} className="shrink-0" />
                              {c.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={stagger}
                  className={`group flex items-center gap-4 border-b border-white/10 py-5 transition-all duration-500 ease-out ${reveal}`}
                >
                  <span className="font-mono text-sm text-brand">0{i + 1}</span>
                  <Icon size={26} color={GRAD} className="shrink-0" />
                  <span className="font-display text-4xl font-light text-foreground transition-colors group-hover:text-brand">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={24}
                    className="ml-auto text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Dno: CTA + kontakt + društvene mreže */}
          <div
            style={{ transitionDelay: open ? `${120 + navLinks.length * 60}ms` : "0ms" }}
            className={`mt-auto space-y-6 pt-8 transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <Button
              href="/zatrazite-ponudu"
              onClick={() => setOpen(false)}
              className="w-full justify-center py-4 text-base uppercase tracking-wide"
            >
              Zatražite ponudu
            </Button>

            <div className="flex items-center justify-between">
              <a
                href="tel:+3810652004765"
                className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Phone size={16} className="text-brand" />
                065 2004 765
              </a>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="inline-flex rounded-lg border border-border bg-surface/40 p-2.5 text-muted transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
