import { TrendingUp, Search, BarChart3, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Više klijenata",
    text: "Kontakt forme i alatke za konverziju lako se postavljaju na sajt i šire vašu bazu klijenata.",
  },
  {
    icon: Search,
    title: "Bolja vidljivost",
    text: "SEO optimizacija pomaže ljudima da vas pronađu na Google-u kada traže vaše proizvode i usluge.",
  },
  {
    icon: BarChart3,
    title: "Uvid u podatke",
    text: "Analitika daje uvid u posete, ponašanje korisnika i ono što posetioci najčešće traže.",
  },
  {
    icon: BadgeCheck,
    title: "Kredibilitet brenda",
    text: "Profesionalan sajt odmah pokazuje ozbiljnost i gradi poverenje kod novih i postojećih kupaca.",
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-1/2 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-brand/8 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-brand">Zašto vam je sajt neophodan</p>
          <h2 className="text-3xl sm:text-4xl">
            Posmatrajte izradu sajta{" "}
            <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
              kao investiciju
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Skoro 53% malih preduzeća nema sajt — a većina velikih ga ima. Sajt je ključan za
            rast u digitalnom dobu.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:border-brand/40"
            >
              <div className="mb-5 inline-flex rounded-lg border border-border bg-background p-3 text-brand">
                <Icon size={22} />
              </div>
              <h3 className="text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
