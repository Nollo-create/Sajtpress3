"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Wand2,
  ShieldCheck,
  Search,
  Target,
  ThumbsUp,
  PenLine,
  Lightbulb,
  Check,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  href: string;
  cta: string;
};

// Sadržaj preuzet i prilagođen sa https://sajtpress.rs/usluge/
const services: Service[] = [
  {
    icon: Code2,
    title: "Izrada sajtova",
    description:
      "U zavisnosti od potreba naših klijenata napravili smo 3 paketa ponude.",
    details: [
      "Paketi: Osnovni, Standardni i Premijum",
      "Responsive dizajn i osnovna SEO optimizacija",
      "Kontakt forma, galerija i Google mape",
      "Mogućnost web prodavnice",
    ],
    href: "/#cenovnik",
    cta: "Pogledajte cenovnik",
  },
  {
    icon: Wand2,
    title: "Redizajn sajtova",
    description:
      "Redizajn starih i nefunkcionalnih sajtova i dodavanje novih funkcionalnosti.",
    details: [
      "Modernizacija zastarelog dizajna",
      "Dodavanje novih funkcionalnosti",
      "Brže učitavanje i mobilna prilagođenost",
    ],
    href: "/#kontakt",
    cta: "Zatražite ponudu",
  },
  {
    icon: ShieldCheck,
    title: "Održavanje sajtova",
    description:
      "Redovno održavanje sajtova, zaštita protiv napada, ažuriranje i backup.",
    details: [
      "Redovno ažuriranje i backup",
      "Zaštita od napada i malware-a",
      "Praćenje dostupnosti i performansi",
    ],
    href: "/#kontakt",
    cta: "Zatražite ponudu",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Za uspešnost svakog sajta jedna od bitnih stavki je i SEO strategija.",
    details: [
      "Analiza ključnih reči i konkurencije",
      "On-page i tehnička optimizacija",
      "Praćenje pozicija na Google-u",
    ],
    href: "/#kontakt",
    cta: "Zatražite ponudu",
  },
  {
    icon: Target,
    title: "Google reklame",
    description:
      "Kreiranje i puštanje plaćenih reklama na Google-u. Budite prvi u pretrazi bez SEO.",
    details: [
      "Postavljanje i optimizacija kampanja",
      "Ciljanje po ključnim rečima i lokaciji",
      "Prvi rezultati bez čekanja na SEO",
    ],
    href: "/#kontakt",
    cta: "Zatražite ponudu",
  },
  {
    icon: ThumbsUp,
    title: "Facebook reklame",
    description:
      "Kreiranje Facebook Business Page za klijente i postavljanje tzv. piksela.",
    details: [
      "Facebook Business Page i piksel",
      "Ciljanje po interesovanjima i publici",
      "Kreativni oglasi i praćenje rezultata",
    ],
    href: "/#kontakt",
    cta: "Zatražite ponudu",
  },
  {
    icon: PenLine,
    title: "Copywriting",
    description: "Umetnost da se prodaja upakuje u dobro ispričanu priču.",
    details: [
      "Prodajni tekstovi i landing kopije",
      "Priča koja gradi poverenje",
      "Tekst prilagođen vašoj publici",
    ],
    href: "/#kontakt",
    cta: "Zatražite ponudu",
  },
  {
    icon: Lightbulb,
    title: "Konsalting",
    description: "Svakodnevno izlazimo u susret klijentima sa najboljim savetima.",
    details: [
      "Saveti o digitalnom nastupu",
      "Strategija i prioriteti",
      "Podrška u svakom koraku",
    ],
    href: "/#kontakt",
    cta: "Zatražite ponudu",
  },
];

export function UslugeGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={visible ? "tc-visible" : ""}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="tc-reveal group relative flex flex-col rounded-2xl border border-border bg-surface/40 p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:bg-surface"
            >
              {/* Suptilan glow na hover */}
              <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-brand/15 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 inline-flex w-fit rounded-xl border border-border bg-background p-3 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:border-brand/50">
                <Icon size={24} />
              </div>

              <h3 className="text-xl text-foreground">{service.title}</h3>
              <p className="mt-2 text-muted">{service.description}</p>

              <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-5">
                {service.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    {d}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand opacity-80 transition-all duration-300 group-hover:opacity-100"
              >
                {service.cta}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
