"use client";

import { useEffect, useState } from "react";

export function TableOfContents({ items }: { items: { id: string; text: string }[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
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
      <ul className="space-y-1">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              data-active={active === i.id}
              className="toc-link block border-l-2 border-border py-1.5 pl-3 text-muted transition-colors hover:text-foreground"
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
