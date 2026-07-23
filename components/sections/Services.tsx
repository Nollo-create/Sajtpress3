import Link from "next/link";
import { Code2, RefreshCw, ShieldCheck, Megaphone, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Izrada sajtova",
    description:
      "U zavisnosti od potreba naših klijenata napravili smo 3 paketa ponude — od jednostavne prezentacije do web prodavnice.",
  },
  {
    icon: RefreshCw,
    title: "Redizajn sajtova",
    description:
      "Redizajn starih i nefunkcionalnih sajtova i dodavanje novih funkcionalnosti u skladu sa savremenim standardima.",
  },
  {
    icon: ShieldCheck,
    title: "Održavanje sajtova",
    description:
      "Redovno održavanje, zaštita protiv napada, ažuriranje i backup — vaš sajt je uvek bezbedan i ažuran.",
  },
  {
    icon: Megaphone,
    title: "Plaćene reklame",
    description:
      "Kreiranje i puštanje plaćenih reklama na Google-u i Facebook-u kako biste stigli do pravih klijenata.",
  },
];

export function Services() {
  return (
    <section id="usluge">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-brand">Naše usluge</p>
          <h2 className="text-3xl sm:text-4xl">Sve što vašem biznisu treba na internetu</h2>
          <p className="mt-4 text-lg text-muted">
            Od ideje do objave i dalje — pokrivamo ceo životni ciklus vašeg sajta.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:border-brand/40 hover:bg-surface"
            >
              <div className="mb-5 inline-flex rounded-lg border border-border bg-background p-3 text-brand transition-colors group-hover:border-brand/40">
                <Icon size={22} />
              </div>
              <h3 className="text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/usluge"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/50 hover:text-brand"
          >
            Pogledajte sve usluge
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
