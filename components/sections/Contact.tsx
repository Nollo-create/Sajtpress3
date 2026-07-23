"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Napomena: destinacija forme se određuje kasnije (email servis).
    // Za sada prikazujemo potvrdu bez stvarnog slanja.
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  return (
    <section id="kontakt" className="relative overflow-hidden">
      {/* Animirana aurora (isti efekat kao Hero) — meko lebdi, bez naglog reza */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-center absolute left-1/2 top-[12%] h-[440px] w-[820px] -translate-x-1/2 rounded-full bg-brand/16 blur-[140px]" />
        <div
          className="aurora-float absolute bottom-[10%] right-[10%] h-[340px] w-[340px] rounded-full bg-coral/12 blur-[120px]"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        {/* Levo — poziv na akciju */}
        <div>
          <p className="mb-3 text-sm font-medium text-brand">Kontakt</p>
          <h2 className="text-3xl sm:text-4xl">Imate pitanje?</h2>
          <p className="mt-4 max-w-md text-lg text-muted">
            Pošaljite nam poruku i očekujte odgovor ubrzo. Recite nam nešto o svom biznisu, a
            mi predlažemo najbolje rešenje i okvirnu cenu.
          </p>

          <a
            href="tel:+3810652004765"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-border bg-surface/40 px-5 py-4 transition-colors hover:border-brand/40"
          >
            <span className="inline-flex rounded-lg bg-brand/15 p-2.5 text-brand">
              <Phone size={20} />
            </span>
            <span>
              <span className="block text-xs text-muted">Pozovite i saznajte cenu sajta</span>
              <span className="block text-lg text-foreground">065 2004 765</span>
            </span>
          </a>
        </div>

        {/* Desno — forma */}
        <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 size={44} className="text-brand" />
              <h3 className="mt-4 text-xl text-foreground">Hvala na poruci!</h3>
              <p className="mt-2 text-sm text-muted">
                Primili smo vaš upit i javićemo se ubrzo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="ime" className="mb-1.5 block text-sm text-foreground">
                    Ime i prezime
                  </label>
                  <input id="ime" name="ime" type="text" required className={inputClass} placeholder="Vaše ime" />
                </div>
                <div>
                  <label htmlFor="telefon" className="mb-1.5 block text-sm text-foreground">
                    Telefon
                  </label>
                  <input id="telefon" name="telefon" type="tel" className={inputClass} placeholder="06x xxx xxxx" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-foreground">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputClass} placeholder="vas@email.com" />
              </div>
              <div>
                <label htmlFor="poruka" className="mb-1.5 block text-sm text-foreground">
                  Poruka
                </label>
                <textarea id="poruka" name="poruka" rows={4} required className={inputClass} placeholder="Ukratko o vašem biznisu i sajtu koji želite…" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-light"
              >
                Pošaljite upit
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
