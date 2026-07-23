"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { Block, ServiceDetail as ServiceDetailData } from "@/lib/serviceDetails";

function BlockView({ block, index }: { block: Block; index: number }) {
  const delay = { transitionDelay: `${index * 90}ms` };

  if (block.type === "text") {
    return (
      <div className="tc-reveal" style={delay}>
        {block.heading && <h2 className="text-2xl sm:text-3xl">{block.heading}</h2>}
        <div className="mt-4 space-y-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="max-w-2xl text-lg text-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="tc-reveal" style={delay}>
        <h2 className="text-2xl sm:text-3xl">{block.heading}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3 text-muted"
            >
              <Check size={18} className="mt-0.5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "steps") {
    return (
      <div className="tc-reveal" style={delay}>
        <h2 className="text-2xl sm:text-3xl">{block.heading}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.steps.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-brand/40"
            >
              <span className="font-mono text-sm text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg text-foreground">{s.title}</h3>
              {s.text && <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // cards
  return (
    <div className="tc-reveal" style={delay}>
      <h2 className="text-2xl sm:text-3xl">{block.heading}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {block.cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-brand/40"
          >
            <div className="mb-3 h-1.5 w-8 rounded-full bg-gradient-to-r from-brand to-coral" />
            <h3 className="text-lg text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceDetail({ data }: { data: ServiceDetailData }) {
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
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pkgCount = data.packages?.length ?? 0;

  return (
    <section ref={ref} className={`relative overflow-hidden ${visible ? "tc-visible" : ""}`}>
      {/* Aurora pozadina */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-center absolute left-1/4 top-[-8%] h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-brand/16 blur-[130px]" />
        <div
          className="aurora-float absolute right-[6%] top-[22%] h-[320px] w-[320px] rounded-full bg-coral/12 blur-[110px]"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-[7rem_1fr] lg:gap-10 xl:grid-cols-[10rem_1fr]">
        {/* Vertikalni naslov (sticky rail) */}
        <aside aria-hidden className="hidden lg:block">
          <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8">
            <span className="h-24 w-px bg-gradient-to-b from-transparent to-brand/70" />
            <span className="rotate-180 bg-gradient-to-b from-brand via-coral to-brand-light bg-clip-text font-mono text-6xl font-bold uppercase tracking-[0.1em] text-transparent [writing-mode:vertical-rl] xl:text-7xl">
              {data.vertical}
            </span>
            <span className="rotate-180 font-mono text-xs uppercase tracking-[0.4em] text-muted/70 [writing-mode:vertical-rl]">
              Usluga
            </span>
            <span className="h-24 w-px bg-gradient-to-t from-transparent to-brand/70" />
          </div>
        </aside>

        {/* Sadržaj */}
        <div className="py-20 sm:py-24">
          {/* Hero */}
          <div className="max-w-3xl">
            <Link
              href="/usluge"
              className="tc-reveal group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
              Sve usluge
            </Link>

            <div className="tc-reveal mt-6 mb-6 inline-flex items-center gap-3 font-mono text-sm">
              <span className="text-brand">01</span>
              <span className="h-px w-10 bg-brand/40" />
              <span className="uppercase tracking-[0.25em] text-muted">Usluga</span>
            </div>

            <h1 className="tc-reveal text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-brand via-coral to-brand-light bg-clip-text text-transparent">
                {data.title}
              </span>
            </h1>

            <p className="tc-reveal mt-6 max-w-2xl text-lg font-semibold text-muted">
              {data.intro}
            </p>
          </div>

          {/* Blokovi */}
          <div className="mt-16 space-y-16">
            {data.blocks.map((block, i) => (
              <BlockView key={i} block={block} index={i} />
            ))}

            {/* Cenovnik */}
            {data.packages && data.packages.length > 0 && (
              <div className="tc-reveal">
                <h2 className="text-2xl sm:text-3xl">Cenovnik</h2>
                <div
                  className={
                    "mt-6 grid gap-6 " +
                    (pkgCount === 1
                      ? "max-w-md"
                      : pkgCount === 2
                        ? "sm:grid-cols-2"
                        : "md:grid-cols-3")
                  }
                >
                  {data.packages.map((p) => (
                    <div
                      key={p.name}
                      className={
                        "relative flex flex-col rounded-2xl border p-6 " +
                        (p.featured
                          ? "border-brand bg-surface/60 shadow-xl shadow-brand/10"
                          : "border-border bg-surface/40")
                      }
                    >
                      {p.featured && (
                        <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                          Preporuka
                        </span>
                      )}
                      <h3 className="text-lg text-foreground">{p.name}</h3>
                      <div className="mt-3 flex items-end gap-1.5">
                        <span className="font-display text-3xl font-semibold text-foreground">
                          {p.price}
                        </span>
                      </div>
                      {p.period && <p className="mt-1 text-sm text-muted">{p.period}</p>}
                      <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                            <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {data.packagesNote && (
                  <p className="mt-6 text-sm text-muted">{data.packagesNote}</p>
                )}
              </div>
            )}
          </div>

          {/* CTA panel */}
          <div className="tc-reveal relative mt-16 overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/15 blur-[90px]"
            />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl">
                  Spremni da{" "}
                  <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
                    započnemo?
                  </span>
                </h2>
                <p className="mt-2 max-w-md text-muted">
                  Pošaljite upit — predlažemo najbolje rešenje i okvirnu cenu za vaš slučaj.
                </p>
              </div>
              <Link
                href="/zatrazite-ponudu"
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
  );
}
