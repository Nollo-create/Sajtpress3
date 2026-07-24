"use client";

import { useEffect, useState } from "react";

export function PrivacyToc({ items }: { items: { id: string; n: number; title: string }[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Sadržaj" className="text-sm">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Sadržaj</p>
      <ul className="space-y-0.5">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              title={i.title}
              data-active={active === i.id}
              className="toc-link flex items-center gap-2.5 border-l-2 border-border py-1.5 pl-3 text-muted transition-colors hover:text-foreground"
            >
              <span className="font-mono text-xs text-brand">
                {String(i.n).padStart(2, "0")}
              </span>
              <span className="line-clamp-1">{i.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
