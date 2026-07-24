import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Sparkles, CalendarClock, Mail } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { PrivacyToc } from "@/components/PrivacyToc";
import type { PBlock, PSection } from "@/lib/privacy";

function Blocks({ blocks }: { blocks: PBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "callout") {
          return (
            <div key={i} className="flex gap-3 rounded-2xl border border-brand/30 bg-brand/10 p-5">
              <Sparkles size={18} className="mt-0.5 shrink-0 text-brand" />
              <p className="text-foreground/90">{b.text}</p>
            </div>
          );
        }
        if (b.type === "list") {
          return (
            <ul key={i} className="space-y-3">
              {b.items.map((it) => (
                <li key={it} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {it}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-foreground/80">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}

type LegalDocProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  updated?: string;
  introHeading?: string;
  intro: PBlock[];
  sections: PSection[];
};

export function LegalDoc({
  icon: Icon,
  title,
  subtitle,
  updated,
  introHeading,
  intro,
  sections,
}: LegalDocProps) {
  return (
    <>
      <ReadingProgress />
      <Header />
      <main className="flex-1">
        {/* Hero — drugačiji od ostalih stranica */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="aurora-center absolute left-1/2 top-[-25%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/12 blur-[130px]" />
          </div>
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-coral text-white shadow-lg shadow-brand/30">
              <Icon size={30} />
            </div>
            <h1 className="mt-7 font-serif text-5xl text-foreground sm:text-6xl">{title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{subtitle}</p>
            {updated && (
              <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
                <CalendarClock size={13} className="text-brand" />
                Ažurirano {updated}
              </div>
            )}
          </div>
        </section>

        {/* Sadržaj */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="lg:grid lg:grid-cols-[1fr_16rem] lg:gap-14">
              <div className="min-w-0 max-w-3xl">
                {/* Uvod */}
                {introHeading && (
                  <h2 className="mb-5 font-serif text-2xl text-foreground sm:text-3xl">
                    {introHeading}
                  </h2>
                )}
                <Blocks blocks={intro} />

                {/* Pregled sadržaja — index kartica */}
                <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-6">
                  <h2 className="font-serif text-xl text-foreground">Pregled sadržaja</h2>
                  <ol className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="group flex gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
                        >
                          <span className="font-mono text-xs text-brand">
                            {String(s.n).padStart(2, "0")}
                          </span>
                          <span>{s.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Sekcije */}
                <div className="mt-14 space-y-14">
                  {sections.map((s) => (
                    <section key={s.id} id={s.id} className="scroll-mt-28">
                      <div className="flex items-baseline gap-4">
                        <span className="bg-gradient-to-br from-brand to-coral bg-clip-text font-serif text-4xl font-semibold text-transparent">
                          {String(s.n).padStart(2, "0")}
                        </span>
                        <h2 className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                          {s.title}
                        </h2>
                      </div>
                      <div className="mt-6">
                        <Blocks blocks={s.blocks} />
                      </div>
                    </section>
                  ))}
                </div>

                {/* Kontakt CTA */}
                <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-lg bg-brand/15 p-2.5 text-brand">
                      <Mail size={20} />
                    </span>
                    <div>
                      <p className="text-foreground">Imate pitanje?</p>
                      <p className="text-sm text-muted">Pišite nam na kontakt@sajtpress.rs</p>
                    </div>
                  </div>
                  <Link
                    href="/kontakt"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-coral px-6 py-3 text-sm font-medium text-white transition-all hover:brightness-110"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>

              {/* Sticky sadržaj */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <PrivacyToc
                    items={sections.map((s) => ({ id: s.id, n: s.n, title: s.title }))}
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
