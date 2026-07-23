import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animirana aurora pozadina (Appwrite osećaj, ali živo) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-center absolute left-1/2 top-[-15%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" />
        <div className="aurora-float absolute right-[8%] top-[8%] h-[360px] w-[360px] rounded-full bg-coral/15 blur-[110px]" />
        <div
          className="aurora-float absolute left-[6%] top-[28%] h-[320px] w-[320px] rounded-full bg-brand-light/12 blur-[110px]"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      {/* Postepen prelaz (blend) ka sledećoj sekciji — aurora se meko utapa u pozadinu */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-b from-transparent to-background"
      />

      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
        {/* Eyebrow / badge */}
        <div
          className="animate-fade-up mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted backdrop-blur-sm"
          style={{ animationDelay: "0.05s" }}
        >
          <Sparkles size={14} className="text-brand" />
          Web sajt već od 250 € · Plaćanje u 2 rate
        </div>

        {/* Naslov — tanka težina, zbijen razmak, dvotonski (roze → belo) + shimmer */}
        <h1
          className="animate-fade-up mx-auto max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="text-shimmer bg-gradient-to-r from-brand via-coral to-brand-light bg-clip-text text-transparent">
            Izrada sajtova
          </span>{" "}
          <span className="text-foreground">koja donosi rezultate</span>
          <span className="hero-cursor ml-1 font-normal text-brand">_</span>
        </h1>

        {/* Podnaslov */}
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-xl font-semibold text-muted"
          style={{ animationDelay: "0.25s" }}
        >
          Imate biznis i znate da vam treba sajt, ali nemate vremena da se bavite domenom,
          hostingom i održavanjem? Mi preuzimamo sve — vi dobijate sajt koji otvara nove
          poslovne prilike.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.35s" }}
        >
          <Button href="#cenovnik" className="w-full sm:w-auto">
            Pogledajte cenovnik
            <ArrowRight size={16} />
          </Button>
          <Button
            href="/zatrazite-ponudu"
            variant="secondary"
            className="w-full uppercase tracking-wide sm:w-auto"
          >
            Zatražite ponudu
          </Button>
        </div>
      </div>
    </section>
  );
}
