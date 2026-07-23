import Link from "next/link";
import { Check, CreditCard } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  delivery: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Osnovni paket",
    price: "250",
    delivery: "Izrada sajta do 7 dana",
    features: [
      "Do 5 strana",
      "Galerija slika",
      "Kontakt forma",
      "Kontakt strana (Google mape)",
      "Povezivanje sa društvenim mrežama",
      "Osnovna SEO optimizacija",
      "Responsive dizajn",
    ],
  },
  {
    name: "Standardni paket",
    price: "450",
    delivery: "Izrada sajta do 10 dana",
    featured: true,
    features: [
      "Od 5 do 10 strana",
      "Online shop do 10 proizvoda",
      "SEO optimizacija",
      "Google Analitika",
      "Galerija slika",
      "Kontakt forma i Google mape",
      "Povezivanje sa društvenim mrežama",
      "Responsive dizajn",
    ],
  },
  {
    name: "Premijum paket",
    price: "700",
    delivery: "Izrada sajta od 15 i više dana",
    features: [
      "10 i više strana",
      "Online shop 10–20 proizvoda",
      "Višejezični sajt",
      "SEO optimizacija",
      "Google Analitika",
      "Galerija slika",
      "Kontakt forma i Google mape",
      "Povezivanje sa društvenim mrežama",
      "Responsive dizajn",
    ],
  },
];

export function Pricing() {
  return (
    <section id="cenovnik" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        {/* Svetli panel koji lebdi na tamnoj pozadini — sofisticiran kontrast bez mutnog gradijenta */}
        <div className="rounded-[36px] bg-light px-6 py-14 text-ink shadow-2xl shadow-black/40 ring-1 ring-black/5 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-brand">Cenovnik izrade sajtova</p>
          <h2 className="text-3xl text-ink sm:text-4xl">Na osnovu potreba formirali smo 3 paketa</h2>
          <p className="mt-4 text-lg text-ink-muted">
            Izaberite paket koji odgovara vašem biznisu. Sve cene podrazumevaju mogućnost
            plaćanja u 2 rate.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                "relative flex flex-col rounded-2xl border bg-light-surface p-7 " +
                (plan.featured
                  ? "border-brand shadow-xl shadow-brand/10 lg:-mt-4 lg:mb-4"
                  : "border-light-border")
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                  Najpopularniji
                </span>
              )}

              <h3 className="text-xl text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{plan.delivery}</p>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-sm text-ink-muted">od</span>
                <span className="text-4xl font-semibold tracking-tight text-ink">
                  {plan.price}
                </span>
                <span className="mb-1 text-xl text-ink-muted">€</span>
              </div>

              <Link
                href="#kontakt"
                className={
                  "mt-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-colors " +
                  (plan.featured
                    ? "bg-brand text-white hover:bg-brand-light"
                    : "border border-light-border text-ink hover:border-brand hover:text-brand")
                }
              >
                Zatražite ponudu
              </Link>

              <ul className="mt-7 space-y-3 border-t border-light-border pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base text-ink-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Kartično plaćanje + napomena */}
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-light-border bg-light-surface p-6 sm:flex-row sm:items-center">
          <span className="inline-flex rounded-lg bg-brand/10 p-3 text-brand">
            <CreditCard size={22} />
          </span>
          <div>
            <p className="text-ink">
              Spajanje sa platnim karticama svih banaka Srbije — VISA, Mastercard, Maestro,
              DinaCard i PayPal.
            </p>
            <p className="mt-1 text-base text-ink-muted">
              Mogućnost integracije kartičnog plaćanja sa vašom web prodavnicom (usluga se
              dodatno naplaćuje). Cene su informativnog karaktera i mogu varirati u zavisnosti
              od zahteva.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
