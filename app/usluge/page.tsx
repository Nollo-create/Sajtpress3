import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UslugeGrid } from "@/components/sections/UslugeGrid";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Izrada i redizajn sajtova, održavanje, SEO, Google i Facebook reklame, copywriting i konsalting — sve na jednom mestu.",
};

export default function UslugePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Aurora pozadina */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="aurora-center absolute left-1/4 top-[-8%] h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-brand/16 blur-[130px]" />
            <div
              className="aurora-float absolute right-[6%] top-[24%] h-[320px] w-[320px] rounded-full bg-coral/12 blur-[110px]"
              style={{ animationDelay: "-5s" }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[7rem_1fr] lg:gap-10 xl:grid-cols-[10rem_1fr]">
            {/* Veliki vertikalni naslov (sticky rail) */}
            <aside aria-hidden className="hidden lg:block">
              <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8">
                <span className="h-24 w-px bg-gradient-to-b from-transparent to-brand/70" />
                <span className="rotate-180 bg-gradient-to-b from-brand via-coral to-brand-light bg-clip-text font-mono text-6xl font-bold uppercase tracking-[0.12em] text-transparent [writing-mode:vertical-rl] xl:text-7xl">
                  Usluge
                </span>
                <span className="rotate-180 font-mono text-xs uppercase tracking-[0.4em] text-muted/70 [writing-mode:vertical-rl]">
                  Šta nudimo
                </span>
                <span className="h-24 w-px bg-gradient-to-t from-transparent to-brand/70" />
              </div>
            </aside>

            {/* Glavni sadržaj */}
            <div className="py-20 sm:py-24">
              {/* Hero — asimetričan, levo poravnat */}
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 font-mono text-sm">
                  <span className="text-brand">01</span>
                  <span className="h-px w-10 bg-brand/40" />
                  <span className="uppercase tracking-[0.25em] text-muted">Naše usluge</span>
                </div>

                <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Usluge{" "}
                  <span className="bg-gradient-to-r from-brand via-coral to-brand-light bg-clip-text text-transparent">
                    koje nudimo
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg font-semibold text-muted">
                  Izaberite uslugu koja vas zanima i informišite se o detaljima. Trudili smo se
                  da budemo što jasniji i precizniji — a ako imate nedoumica, pozovite nas ili
                  nam pišite.
                </p>

                {/* Meta oznake */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {["8 usluga", "Od ideje do rezultata", "Okvirne cene po dogovoru"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-surface/50 px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Kartice */}
              <div className="mt-16">
                <UslugeGrid />
              </div>

              <p className="mt-10 text-sm text-muted">
                Navedene cene usluga su okvirnog tipa i variraju u zavisnosti od zahteva
                klijenta.
              </p>

              {/* Završni CTA — panel */}
              <div className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 sm:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/15 blur-[90px]"
                />
                <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl">
                      Ne znate koja usluga vam{" "}
                      <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
                        treba?
                      </span>
                    </h2>
                    <p className="mt-2 max-w-md text-muted">
                      Zakažite besplatnu konsultaciju — poslušaćemo vaše potrebe i predložiti
                      najbolje rešenje.
                    </p>
                  </div>
                  <Link
                    href="/#kontakt"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
                  >
                    Zatražite ponudu
                    <ArrowRight size={16} />
                  </Link>
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
