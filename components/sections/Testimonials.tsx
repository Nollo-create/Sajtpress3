"use client";

import { useEffect, useRef, useState } from "react";

/*
  NAPOMENA: Ovo su DUMMY (primer) recenzije — nisu prave.
  Zameniti pravim recenzijama sa Google Business profila pre objave
  (i tek tada dodati Schema.org Review/AggregateRating markup).
*/
type Review = {
  name: string;
  company: string;
  city: string;
  rating: number; // 1–5
  date: string;
  text: string;
  gradient: string; // gradijent avatara (inicijali)
  rotate: string; // blagi editorial nagib
};

const reviews: Review[] = [
  {
    name: "Marko Jovanović",
    company: "Pekara Zlatni Klas",
    city: "Beograd",
    rating: 5,
    date: "jun 2026.",
    text: "Sajt je bio gotov za nedelju dana i izgleda fenomenalno. Broj poziva se praktično udvostručio. Sve pohvale za ekipu!",
    gradient: "from-brand to-coral",
    rotate: "-2deg",
  },
  {
    name: "Ivana Petrović",
    company: "Studio lepote Iva",
    city: "Novi Sad",
    rating: 5,
    date: "maj 2026.",
    text: "Profesionalni od prvog kontakta. Sve po dogovoru i u roku, a dizajn je tačno onakav kakav sam želela.",
    gradient: "from-fuchsia-500 to-brand",
    rotate: "1.5deg",
  },
  {
    name: "Nikola Đorđević",
    company: "Auto servis ND",
    city: "Niš",
    rating: 5,
    date: "maj 2026.",
    text: "Konačno imam sajt kojim se ponosim. Klijenti me sada lako pronalaze preko Google-a. Iskrena preporuka.",
    gradient: "from-violet-500 to-brand-light",
    rotate: "-1deg",
  },
  {
    name: "Jelena Marković",
    company: "Cvećara Lala",
    city: "Kragujevac",
    rating: 4,
    date: "april 2026.",
    text: "Odlična komunikacija i puno strpljenja sa svim mojim izmenama. Rado ću ih preporučiti.",
    gradient: "from-coral to-brand",
    rotate: "2deg",
  },
  {
    name: "Stefan Ilić",
    company: "Fitnes centar Puls",
    city: "Beograd",
    rating: 5,
    date: "april 2026.",
    text: "Brzo, moderno i optimizovano za pretragu. Vredelo je svakog dinara — rezultati su vidljivi već prvog meseca.",
    gradient: "from-brand-light to-fuchsia-500",
    rotate: "-1.5deg",
  },
  {
    name: "Ana Kovačević",
    company: "Agencija AK",
    city: "Subotica",
    rating: 5,
    date: "mart 2026.",
    text: "Ljubazni, precizni i uvek dostupni. Sajt radi besprekorno na svim uređajima. Baš onako kako su obećali.",
    gradient: "from-brand to-violet-500",
    rotate: "1deg",
  },
  {
    name: "Miloš Simić",
    company: "Stolarija Simić",
    city: "Čačak",
    rating: 5,
    date: "mart 2026.",
    text: "Od ideje do gotovog sajta bez ijednog stresnog trenutka. Sve su objasnili i ispratili do kraja.",
    gradient: "from-coral to-fuchsia-500",
    rotate: "-2deg",
  },
  {
    name: "Tamara Nikolić",
    company: "Frizerski salon Tamara",
    city: "Zrenjanin",
    rating: 5,
    date: "februar 2026.",
    text: "Rezervacije preko sajta su mi potpuno olakšale posao. Sve pohvale na dizajnu i brzini izrade.",
    gradient: "from-fuchsia-500 to-coral",
    rotate: "1.2deg",
  },
];

const AVERAGE = 4.9;
const REVIEW_COUNT = 30;
const CLIENTS = 25;

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function StarIcon({ filled, className = "" }: { filled: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"
        fill={filled ? "#fbbf24" : "none"}
        stroke={filled ? "#fbbf24" : "#5a5a63"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ rating, animate }: { rating: number; animate: boolean }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`Ocena ${rating} od 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={animate ? "tc-star" : ""}
          style={animate ? { animationDelay: `${0.15 + i * 0.08}s` } : undefined}
        >
          <StarIcon filled={i < rating} className="h-4 w-4" />
        </span>
      ))}
    </div>
  );
}

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div
      className="tc-reveal break-inside-avoid pb-6"
      style={{ transitionDelay: `${index * 0.09}s` }}
    >
      <div
        className="group relative rounded-[24px] bg-gradient-to-br from-white/15 via-white/5 to-transparent p-px transition-transform duration-300 hover:-translate-y-1.5"
        style={{ rotate: review.rotate }}
      >
        {/* Glow na hover */}
        <div className="pointer-events-none absolute -inset-px rounded-[24px] bg-brand/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:bg-brand/20 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-[23px] bg-surface/60 p-6 backdrop-blur-xl">
          {/* Veliki navodnik u pozadini */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-2 -top-6 font-display text-[120px] leading-none text-white/[0.04]"
          >
            &rdquo;
          </span>

          {/* Header: avatar + ime + Google */}
          <div className="relative flex items-center gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.gradient} text-sm font-semibold text-white`}
              aria-hidden
            >
              {initials(review.name)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="truncate font-medium text-foreground">{review.name}</p>
                {/* Google verified badge */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-label="Verifikovano">
                  <path
                    fill="#4285F4"
                    d="M12 2l2.4 1.8 3-.2 1 2.8 2.6 1.5-.9 2.9.9 2.9-2.6 1.5-1 2.8-3-.2L12 22l-2.4-1.8-3 .2-1-2.8L3 16.3l.9-2.9L3 10.5 5.6 9l1-2.8 3 .2L12 2z"
                  />
                  <path
                    fill="#fff"
                    d="M10.6 14.6l-2.3-2.3 1.1-1.1 1.2 1.2 3.1-3.1 1.1 1.1-4.2 4.2z"
                  />
                </svg>
              </div>
              <p className="truncate text-sm text-muted">
                {review.company} · {review.city}
              </p>
            </div>
          </div>

          {/* Zvezdice + datum */}
          <div className="relative mt-4 flex items-center justify-between">
            <Stars rating={review.rating} animate />
            <span className="text-xs text-muted">{review.date}</span>
          </div>

          {/* Tekst */}
          <p className="relative mt-4 text-[15px] leading-relaxed text-foreground/85">
            {review.text}
          </p>

          {/* Footer: Google verified */}
          <div className="relative mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
            <GoogleG className="h-4 w-4" />
            <span className="text-xs text-muted">Verifikovana Google recenzija</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [avg, setAvg] = useState(0);
  const [clients, setClients] = useState(0);

  // Scroll-reveal
  useEffect(() => {
    const el = sectionRef.current;
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Animirani brojači
  useEffect(() => {
    if (!visible) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Bez animacije — krajnje vrednosti se postavljaju u sledećem frejmu,
      // da se izbegne lančani render iz tela efekta.
      const skip = requestAnimationFrame(() => {
        setAvg(AVERAGE);
        setClients(CLIENTS);
      });
      return () => cancelAnimationFrame(skip);
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      setAvg(+(ease * AVERAGE).toFixed(1));
      setClients(Math.round(ease * CLIENTS));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  const marquee = [...reviews, ...reviews];

  return (
    <section
      id="utisci"
      ref={sectionRef}
      aria-labelledby="utisci-naslov"
      className={`relative overflow-hidden ${visible ? "tc-visible" : ""}`}
    >
      {/* Kreativna pozadina: glow krugovi + mreža + marquee */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-[8%] right-[8%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        {/* Marquee trake sa citatima */}
        <div className="absolute top-[18%] flex w-max whitespace-nowrap opacity-[0.05]">
          <div className="marquee-track flex gap-10 pr-10 font-display text-5xl">
            {marquee.map((r, i) => (
              <span key={`m1-${i}`}>&ldquo;{r.text.slice(0, 42)}…&rdquo;</span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[16%] flex w-max whitespace-nowrap opacity-[0.05]">
          <div className="marquee-track-rev flex gap-10 pr-10 font-display text-5xl">
            {marquee.map((r, i) => (
              <span key={`m2-${i}`}>{r.company} — ★★★★★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Vertikalni naslov (levo) */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] font-mono text-xs uppercase tracking-[0.4em] text-muted/60 lg:block"
      >
        Client Voices · Utisci klijenata
      </span>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        {/* Top blok sa animiranim brojačem */}
        <div className="animate-fade-up mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <Stars rating={5} animate={false} />
          </div>
          <h2 id="utisci-naslov" className="text-4xl sm:text-5xl">
            Poverenje koje se{" "}
            <span className="bg-gradient-to-r from-brand via-coral to-brand-light bg-clip-text text-transparent">
              vidi u rezultatima
            </span>
          </h2>

          <div className="mt-8 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="flex items-end justify-center gap-1 font-display text-5xl text-foreground">
                {avg.toFixed(1)}
                <span className="mb-1 text-2xl text-muted">/ 5</span>
              </div>
              <p className="mt-1 text-sm text-muted">Prosečna ocena</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="font-display text-5xl text-foreground">{clients}+</div>
              <p className="mt-1 text-sm text-muted">Zadovoljnih klijenata</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Na osnovu {REVIEW_COUNT}+ recenzija na Google-u
          </p>
        </div>

        {/* Masonry kartice */}
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {/* Donji CTA */}
        <div className="animate-fade-up mt-16 text-center">
          <h3 className="mx-auto max-w-2xl text-3xl sm:text-4xl">
            Spremni da postanete naš sledeći klijent sa 5 zvezdica?
          </h3>
          <a
            href="#kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
          >
            Hajde da napravimo nešto izuzetno
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
