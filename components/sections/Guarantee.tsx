import { Check } from "lucide-react";

const points = [
  {
    title: "Prepustite dizajn nama",
    text: "Nemate ideju kako sajt treba da izgleda — samo želite da bude lep? Na osnovu iskustva i vaših potreba pronalazimo najbolje rešenje.",
  },
  {
    title: "Proverene procedure",
    text: "Držimo se ustaljenih i proverenih procedura jer želimo da održimo kvalitet. Veštine prilagođavamo potrebama svakog klijenta.",
  },
  {
    title: "WordPress kao glavni alat",
    text: "Najviše koristimo WordPress jer govori jezikom koji Google dobro razume — stabilno, fleksibilno i lako za održavanje.",
  },
  {
    title: "Komunikacija na prvom mestu",
    text: "Uspeh projekta zavisi od dobre komunikacije. Slušamo i tačno razumemo vaše potrebe, uz redovno izveštavanje o napretku.",
  },
];

export function Guarantee() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        {/* Levo — poruka */}
        <div>
          <p className="mb-3 text-sm font-medium text-brand">Garancija kvaliteta</p>
          <h2 className="text-3xl sm:text-4xl">
            Izrada sajtova{" "}
            <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
              koja vraća uloženo
            </span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            Za svaki sajt garantujemo funkcionalnost i dizajn koji će se pre svega{" "}
            <span className="text-foreground">Vama</span> svideti. Vi se bavite svojim poslom,
            a mi vodimo računa o vašem onlajn nastupu — od domena i hostinga do održavanja.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-surface/40 p-5">
            <p className="text-base text-muted">
              <span className="text-foreground">Plaćanje u 2 rate.</span> Prvi deo nakon
              definisanja ciljeva, drugi nakon kompletne izrade — da budete sigurni u kvalitet
              koji plaćate.
            </p>
          </div>
        </div>

        {/* Desno — lista */}
        <div className="grid gap-4">
          {points.map(({ title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-border bg-surface/40 p-5"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Check size={14} />
              </span>
              <div>
                <h3 className="text-base text-foreground">{title}</h3>
                <p className="mt-1 text-base leading-relaxed text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
