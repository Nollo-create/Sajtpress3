"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog";

const INDENT = { 2: "pl-3", 3: "pl-6", 4: "pl-9" } as const;
const SIZE = { 2: "text-foreground/75", 3: "text-muted", 4: "text-xs text-muted" } as const;

export function TableOfContents({ items }: { items: Heading[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      // Aktivna zona počinje odmah ispod sticky menija da bi se naslov
      // označio i kada se do njega dođe klikom iz sadržaja.
      { rootMargin: "-10% 0px -75% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Sadržaj članka" className="text-sm">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Sadržaj</p>
      <ul className="max-h-[calc(100vh-12rem)] space-y-1 overflow-y-auto pr-1">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              data-active={active === i.id}
              className={`toc-link block border-l-2 border-border py-1.5 transition-colors hover:text-foreground ${INDENT[i.level]} ${SIZE[i.level]}`}
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
