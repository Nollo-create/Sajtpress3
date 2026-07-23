"use client";

import { useState } from "react";
import {
  Code2,
  ShoppingCart,
  Wand2,
  ShieldCheck,
  Search,
  Target,
  ThumbsUp,
  Lightbulb,
  Check,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const serviceOptions: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "sajt", label: "Izrada sajta", icon: Code2 },
  { id: "shop", label: "Web prodavnica", icon: ShoppingCart },
  { id: "redizajn", label: "Redizajn", icon: Wand2 },
  { id: "odrzavanje", label: "Održavanje", icon: ShieldCheck },
  { id: "seo", label: "SEO", icon: Search },
  { id: "google", label: "Google reklame", icon: Target },
  { id: "facebook", label: "Facebook reklame", icon: ThumbsUp },
  { id: "konsalting", label: "Konsalting", icon: Lightbulb },
];

const budgetOptions = [
  "Do 300 €",
  "300–500 €",
  "500–1000 €",
  "1000–2000 €",
  "Preko 2000 €",
  "Nisam siguran",
];
const timelineOptions = ["Što pre", "U roku od mesec dana", "1–3 meseca", "Fleksibilno"];
const heardOptions = ["Google pretraga", "Društvene mreže", "Preporuka", "Već sam klijent", "Ostalo"];

const pill = (active: boolean) =>
  "rounded-full border px-4 py-2 text-sm transition-colors " +
  (active
    ? "border-brand bg-brand text-white"
    : "border-border bg-surface/40 text-muted hover:border-brand/40 hover:text-foreground");

export function QuoteForm() {
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [hasSite, setHasSite] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [heard, setHeard] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) =>
    setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const selectedLabels = services
    .map((id) => serviceOptions.find((s) => s.id === id)?.label)
    .filter(Boolean) as string[];

  const checks = [
    services.length > 0,
    !!budget,
    !!timeline,
    description.trim().length > 10,
    name.trim().length > 0,
    email.trim().length > 0,
  ];
  const completeness = Math.round((checks.filter(Boolean).length / checks.length) * 100);

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Napomena: destinacija forme se određuje kasnije (email servis / CRM).
    setSubmitted(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface/40 p-8 text-center sm:p-10">
        <CheckCircle2 size={48} className="mx-auto text-brand" />
        <h3 className="mt-4 text-2xl">Upit je poslat!</h3>
        <p className="mt-3 text-muted">
          Hvala{name ? `, ${name}` : ""}. Pregledaćemo detalje i javiti se ubrzo
          {email ? ` na ${email}` : ""}.
        </p>
        {selectedLabels.length > 0 && (
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {selectedLabels.map((l) => (
              <span
                key={l}
                className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs text-foreground"
              >
                {l}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      {/* Leva kolona — polja */}
      <div className="space-y-10">
        {/* Usluge */}
        <fieldset>
          <legend className="text-lg text-foreground">Šta vam je potrebno?</legend>
          <p className="mt-1 text-sm text-muted">Izaberite jednu ili više usluga.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((s) => {
              const Icon = s.icon;
              const selected = services.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleService(s.id)}
                  aria-pressed={selected}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                    selected
                      ? "border-brand bg-brand/10"
                      : "border-border bg-surface/40 hover:border-brand/40"
                  }`}
                >
                  <span
                    className={`inline-flex rounded-lg p-2 transition-colors ${
                      selected ? "bg-brand text-white" : "bg-background text-brand"
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className={selected ? "text-sm text-foreground" : "text-sm text-muted"}>
                    {s.label}
                  </span>
                  <span
                    className={`ml-auto text-brand transition-all duration-200 ${
                      selected ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  >
                    <Check size={18} />
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Budžet */}
        <fieldset>
          <legend className="text-lg text-foreground">Okvirni budžet</legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {budgetOptions.map((b) => (
              <button key={b} type="button" onClick={() => setBudget(b)} className={pill(budget === b)}>
                {b}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Rok */}
        <fieldset>
          <legend className="text-lg text-foreground">Kada želite da krenemo?</legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {timelineOptions.map((t) => (
              <button key={t} type="button" onClick={() => setTimeline(t)} className={pill(timeline === t)}>
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Postojeći sajt */}
        <fieldset>
          <legend className="text-lg text-foreground">Imate li postojeći sajt?</legend>
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <button type="button" onClick={() => setHasSite("da")} className={pill(hasSite === "da")}>
              Da
            </button>
            <button type="button" onClick={() => setHasSite("ne")} className={pill(hasSite === "ne")}>
              Ne
            </button>
            {hasSite === "da" && (
              <input
                type="url"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                placeholder="https://vas-sajt.rs"
                className={`${inputClass} sm:max-w-xs`}
              />
            )}
          </div>
        </fieldset>

        {/* Opis */}
        <fieldset>
          <legend className="text-lg text-foreground">Opišite projekat</legend>
          <p className="mt-1 text-sm text-muted">
            Čime se bavite, šta želite da postignete, primeri koji vam se sviđaju…
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            required
            placeholder="Recite nam nešto o svom biznisu i projektu…"
            className={`${inputClass} mt-4`}
          />
        </fieldset>

        {/* Kontakt */}
        <fieldset>
          <legend className="text-lg text-foreground">Vaši podaci</legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="q-ime" className="mb-1.5 block text-sm text-foreground">
                Ime i prezime *
              </label>
              <input id="q-ime" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} placeholder="Vaše ime" />
            </div>
            <div>
              <label htmlFor="q-firma" className="mb-1.5 block text-sm text-foreground">
                Naziv firme
              </label>
              <input id="q-firma" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} placeholder="Opciono" />
            </div>
            <div>
              <label htmlFor="q-email" className="mb-1.5 block text-sm text-foreground">
                Email *
              </label>
              <input id="q-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} placeholder="vas@email.com" />
            </div>
            <div>
              <label htmlFor="q-tel" className="mb-1.5 block text-sm text-foreground">
                Telefon
              </label>
              <input id="q-tel" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="06x xxx xxxx" />
            </div>
          </div>
        </fieldset>

        {/* Kako ste čuli */}
        <fieldset>
          <legend className="text-lg text-foreground">Kako ste čuli za nas?</legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {heardOptions.map((h) => (
              <button key={h} type="button" onClick={() => setHeard(h)} className={pill(heard === h)}>
                {h}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Desna kolona — živi pregled upita (cool trik) */}
      <aside className="h-fit lg:sticky lg:top-24">
        <div className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-brand" />
            <h3 className="text-base text-foreground">Pregled upita</h3>
          </div>

          {/* Merač popunjenosti */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-muted">
              <span>Popunjenost</span>
              <span className="text-foreground">{completeness}%</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-background">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-coral transition-all duration-500"
                style={{ width: `${completeness}%` }}
              />
            </div>
          </div>

          {/* Sažetak */}
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Usluge</dt>
              <dd className="mt-1.5">
                {selectedLabels.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {selectedLabels.map((l) => (
                      <span
                        key={l}
                        className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 text-xs text-foreground"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-muted">—</span>
                )}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Budžet</dt>
              <dd className={budget ? "text-foreground" : "text-muted"}>{budget || "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Rok</dt>
              <dd className={timeline ? "text-foreground" : "text-muted"}>{timeline || "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Postojeći sajt</dt>
              <dd className={hasSite ? "text-foreground" : "text-muted"}>
                {hasSite === "da" ? "Da" : hasSite === "ne" ? "Ne" : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Kontakt</dt>
              <dd className={name || email ? "truncate text-foreground" : "text-muted"}>
                {name || email ? [name, email].filter(Boolean).join(" · ") : "—"}
              </dd>
            </div>
          </dl>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-light"
          >
            Pošaljite upit
            <Send size={16} />
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            Bez obaveza. Javljamo se obično isti dan.
          </p>
        </div>
      </aside>
    </form>
  );
}
