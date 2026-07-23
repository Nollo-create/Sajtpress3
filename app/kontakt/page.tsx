import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Stupite u kontakt sa Sajtpress timom — telefon, email i lokacija u Beogradu. Pošaljite upit i javljamo se ubrzo.",
};

const MAP_EMBED =
  "https://maps.google.com/maps?q=Beograd%2011000%2C%20Srbija&t=&z=12&ie=UTF8&iwloc=&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Beograd+11000+Srbija";

const contactCards = [
  { icon: Phone, label: "Telefon", value: "065 2004 765", href: "tel:+3810652004765" },
  { icon: Mail, label: "Email", value: "kontakt@sajtpress.rs", href: "mailto:kontakt@sajtpress.rs" },
  { icon: MapPin, label: "Adresa", value: "Beograd 11000, Srbija", href: MAP_LINK },
  { icon: Clock, label: "Vreme odgovora", value: "Obično isti dan" },
];

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Aurora */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="aurora-center absolute left-1/4 top-[-8%] h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-brand/16 blur-[130px]" />
            <div
              className="aurora-float absolute right-[6%] top-[22%] h-[320px] w-[320px] rounded-full bg-coral/12 blur-[110px]"
              style={{ animationDelay: "-5s" }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[7rem_1fr] lg:gap-10 xl:grid-cols-[10rem_1fr]">
            {/* Vertikalni naslov */}
            <aside aria-hidden className="hidden lg:block">
              <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8">
                <span className="h-24 w-px bg-gradient-to-b from-transparent to-brand/70" />
                <span className="rotate-180 bg-gradient-to-b from-brand via-coral to-brand-light bg-clip-text font-mono text-6xl font-bold uppercase tracking-[0.1em] text-transparent [writing-mode:vertical-rl] xl:text-7xl">
                  Kontakt
                </span>
                <span className="rotate-180 font-mono text-xs uppercase tracking-[0.4em] text-muted/70 [writing-mode:vertical-rl]">
                  Javite se
                </span>
                <span className="h-24 w-px bg-gradient-to-t from-transparent to-brand/70" />
              </div>
            </aside>

            {/* Sadržaj */}
            <div className="py-20 sm:py-24">
              {/* Hero */}
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 font-mono text-sm">
                  <span className="text-brand">01</span>
                  <span className="h-px w-10 bg-brand/40" />
                  <span className="uppercase tracking-[0.25em] text-muted">Kontakt</span>
                </div>
                <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Hajde da{" "}
                  <span className="bg-gradient-to-r from-brand via-coral to-brand-light bg-clip-text text-transparent">
                    popričamo
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-semibold text-muted">
                  Imate ideju, pitanje ili vam treba ponuda? Pozovite nas, pišite nam ili
                  popunite formu — odgovaramo brzo, obično isti dan.
                </p>
              </div>

              {/* Info + Mapa */}
              <div className="mt-14 grid gap-8 lg:grid-cols-2">
                {/* Info kolona */}
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {contactCards.map(({ icon: Icon, label, value, href }) => {
                      const inner = (
                        <>
                          <span className="inline-flex rounded-lg bg-brand/15 p-2.5 text-brand">
                            <Icon size={20} />
                          </span>
                          <span className="mt-4 block text-xs uppercase tracking-wider text-muted">
                            {label}
                          </span>
                          <span className="mt-1 block text-foreground">{value}</span>
                        </>
                      );
                      const cls =
                        "rounded-2xl border border-border bg-surface/40 p-5 transition-colors";
                      return href ? (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`${cls} block hover:border-brand/40`}
                        >
                          {inner}
                        </a>
                      ) : (
                        <div key={label} className={cls}>
                          {inner}
                        </div>
                      );
                    })}
                  </div>

                  {/* Podaci firme */}
                  <div className="rounded-2xl border border-border bg-surface/40 p-5">
                    <div className="flex items-center gap-2 text-foreground">
                      <Building2 size={18} className="text-brand" />
                      Podaci firme
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted">
                      <span>PIB: 112590107</span>
                      <span>MB: 66213706</span>
                    </div>
                  </div>

                  {/* Društvene mreže */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted">Pratite nas:</span>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        aria-label="Facebook"
                        className="inline-flex rounded-lg border border-border bg-surface/40 p-2.5 text-muted transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.06c0-.87.24-1.46 1.49-1.46H17V3.93c-.28-.04-1.24-.12-2.35-.12-2.33 0-3.92 1.42-3.92 4.02V10H8v3h2.73v8h2.77z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="inline-flex rounded-lg border border-border bg-surface/40 p-2.5 text-muted transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="inline-flex rounded-lg border border-border bg-surface/40 p-2.5 text-muted transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.08 1.4-2.08 2.85V21H9z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Kreativna Google mapa */}
                <div>
                  <div className="map-card group relative rounded-3xl border border-border bg-surface/40 p-2">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-br from-brand/40 to-coral/25 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative h-[380px] overflow-hidden rounded-[22px] sm:h-[452px]">
                      <iframe
                        title="Sajtpress lokacija — Beograd"
                        src={MAP_EMBED}
                        className="map-dark h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />

                      {/* Pulsirajući brend pin */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
                      >
                        <span className="absolute inset-0 animate-ping rounded-full bg-brand/50" />
                        <span className="absolute inset-0 rounded-full border-2 border-white bg-brand shadow-lg shadow-brand/60" />
                      </div>

                      {/* Adresa čip */}
                      <div className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-xs text-foreground backdrop-blur-md">
                        <MapPin size={13} className="text-brand" />
                        Beograd 11000, Srbija
                      </div>

                      {/* Hint (nestaje na hover) */}
                      <div className="pointer-events-none absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-xs text-muted backdrop-blur-md transition-opacity duration-500 group-hover:opacity-0">
                        Pređite mišem za boje
                      </div>
                    </div>
                  </div>

                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand transition-colors hover:text-brand-light"
                  >
                    Otvori u Google Mapama
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Forma */}
              <div className="mt-16 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl">
                  Pošaljite{" "}
                  <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
                    poruku
                  </span>
                </h2>
                <p className="mt-3 text-muted">
                  Recite nam nešto o svom biznisu, a mi predlažemo najbolje rešenje i okvirnu
                  cenu.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
