import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import type { SVGProps } from "react";

const usluge = [
  "Izrada sajtova",
  "Redizajn sajtova",
  "Održavanje sajtova",
  "Google reklame",
  "Facebook reklame",
];

const navigacija = [
  { label: "Usluge", href: "#usluge" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "Radovi", href: "#projekti" },
  { label: "Kontakt", href: "#kontakt" },
];

// Brend ikone (lucide-react ih više ne izvozi) — inline SVG.
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.06c0-.87.24-1.46 1.49-1.46H17V3.93c-.28-.04-1.24-.12-2.35-.12-2.33 0-3.92 1.42-3.92 4.02V10H8v3h2.73v8h2.77z" />
    </svg>
  );
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  );
}

const mreze = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brend */}
          <div>
            <Link href="/" className="flex items-center gap-1 font-display text-2xl font-semibold">
              <span className="text-foreground">Sajt</span>
              <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
                press
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Izrada modernih sajtova po meri koji donose rezultate. Pridružite se digitalnoj
              revoluciji.
            </p>
            <div className="mt-5 flex gap-3">
              {mreze.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex rounded-lg border border-border bg-surface/40 p-2.5 text-muted transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Usluge */}
          <div>
            <h3 className="text-sm text-foreground">Usluge</h3>
            <ul className="mt-4 space-y-2.5">
              {usluge.map((u) => (
                <li key={u}>
                  <Link href="#usluge" className="text-sm text-muted transition-colors hover:text-foreground">
                    {u}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigacija */}
          <div>
            <h3 className="text-sm text-foreground">Navigacija</h3>
            <ul className="mt-4 space-y-2.5">
              {navigacija.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt / podaci firme */}
          <div>
            <h3 className="text-sm text-foreground">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand" />
                Beograd 11000, Srbija
              </li>
              <li>
                <a href="tel:+3810652004765" className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                  <Phone size={15} className="text-brand" />
                  +381 65 2004 765
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@sajtpress.rs" className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                  <Mail size={15} className="text-brand" />
                  kontakt@sajtpress.rs
                </a>
              </li>
            </ul>
            <div className="mt-4 space-y-1 text-sm text-muted">
              <p>PIB: 112590107</p>
              <p>MB: 66213706</p>
            </div>
          </div>
        </div>

        {/* Donja traka */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            © 2026 Sajtpress. Sva prava zadržana.
          </p>
          <div className="flex gap-5 text-xs text-muted">
            <Link href="#" className="transition-colors hover:text-foreground">
              Politika privatnosti
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Uslovi korišćenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
