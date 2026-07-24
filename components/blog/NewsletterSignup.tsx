"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Napomena: povezati sa email servisom (Mailchimp/Resend) kasnije.
    setDone(true);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 blur-[90px]"
      />
      <div className="relative">
        <span className="inline-flex rounded-lg bg-brand/15 p-2.5 text-brand">
          <Mail size={20} />
        </span>
        <h3 className="mt-4 font-serif text-2xl text-foreground sm:text-3xl">
          Zapratite naš newsletter
        </h3>
        <p className="mt-2 max-w-md text-muted">
          Saveti o sajtovima, marketingu i dizajnu — jednom mesečno, bez spama.
        </p>

        {done ? (
          <div className="mt-6 inline-flex items-center gap-2 text-foreground">
            <CheckCircle2 size={20} className="text-brand" />
            Hvala! Prijava je uspešna.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vas@email.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-coral px-5 py-3 text-sm font-medium text-white transition-all hover:brightness-110"
            >
              Prijavite se
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
