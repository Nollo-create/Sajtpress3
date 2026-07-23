import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const links = [
  { label: "Usluge", href: "#usluge" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "Radovi", href: "#projekti" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brend */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 font-display text-lg font-semibold">
              <span className="text-foreground">Sajt</span>
              <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
                press
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Izrada modernih sajtova po meri koji donose rezultate. Od ideje do objave — i
              dalje.
            </p>
          </div>

          {/* Navigacija */}
          <div>
            <h3 className="text-sm text-foreground">Navigacija</h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm text-foreground">Kontakt</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:+3810652004765" className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
                  <Phone size={15} className="text-brand" />
                  065 2004 765
                </a>
              </li>
              <li>
                <a href="mailto:info@sajtpress.rs" className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
                  <Mail size={15} className="text-brand" />
                  info@sajtpress.rs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Sajtpress. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
