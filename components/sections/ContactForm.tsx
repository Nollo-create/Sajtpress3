"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Napomena: destinacija forme se određuje kasnije (email servis).
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
      {submitted ? (
        <div className="flex flex-col items-center py-10 text-center">
          <CheckCircle2 size={44} className="text-brand" />
          <h3 className="mt-4 text-xl text-foreground">Hvala na poruci!</h3>
          <p className="mt-2 text-sm text-muted">Primili smo vaš upit i javićemo se ubrzo.</p>
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
            <textarea id="poruka" name="poruka" rows={5} required className={inputClass} placeholder="Ukratko o vašem biznisu i sajtu koji želite…" />
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
  );
}
