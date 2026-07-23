import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Suptilan roze radial glow (Appwrite osećaj — čisto i tamno) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-15%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
        {/* Eyebrow / badge */}
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted">
          <Sparkles size={14} className="text-brand" />
          Preko 25 izrađenih sajtova za firme u zemlji i inostranstvu
        </div>

        {/* Naslov — tanka težina, zbijen razmak, dvotonski (roze → belo) */}
        <h1 className="mx-auto max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-br from-brand via-brand-light to-coral bg-clip-text text-transparent">
            Sajtovi po meri
          </span>{" "}
          <span className="text-foreground">koji prodaju vaš biznis</span>
        </h1>

        {/* Podnaslov */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Dizajniramo i razvijamo moderne, brze sajtove — od ideje do objave. Vi se bavite
          poslom, mi se bavimo vašim onlajn nastupom.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#kontakt" className="w-full sm:w-auto">
            Zakažite besplatnu konsultaciju
            <ArrowRight size={16} />
          </Button>
          <Button href="#projekti" variant="secondary" className="w-full sm:w-auto">
            Pogledajte naše radove
          </Button>
        </div>
      </div>
    </section>
  );
}
