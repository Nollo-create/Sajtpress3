import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteForm } from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Zatražite ponudu",
  description:
    "Recite nam o svom projektu — usluga, budžet i rok — a mi pripremamo besplatnu ponudu po meri. Bez obaveza.",
};

export default function ZatrazitePonuduPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative">
          {/* Aurora (isečena u svom kontejneru da sekcija ne lomi sticky) */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
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
                  Ponuda
                </span>
                <span className="rotate-180 font-mono text-xs uppercase tracking-[0.4em] text-muted/70 [writing-mode:vertical-rl]">
                  Besplatno
                </span>
                <span className="h-24 w-px bg-gradient-to-t from-transparent to-brand/70" />
              </div>
            </aside>

            {/* Sadržaj */}
            <div className="py-20 sm:py-24">
              {/* Hero */}
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 font-mono text-sm">
                  <span className="text-brand">✦</span>
                  <span className="h-px w-10 bg-brand/40" />
                  <span className="uppercase tracking-[0.25em] text-muted">Zatražite ponudu</span>
                </div>
                <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Recite nam o{" "}
                  <span className="bg-gradient-to-r from-brand via-coral to-brand-light bg-clip-text text-transparent">
                    projektu
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-semibold text-muted">
                  Popunite kratak upit — što više detalja podelite, to je naša ponuda preciznija.
                  Besplatno je i bez obaveza, a javljamo se obično isti dan.
                </p>
              </div>

              {/* Napredna forma */}
              <div className="mt-14">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
