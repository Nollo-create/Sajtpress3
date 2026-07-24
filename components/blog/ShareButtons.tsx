"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

function openShare(url: string) {
  window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
}

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const currentUrl = () => (typeof window !== "undefined" ? window.location.href : "");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/40 text-muted transition-colors hover:border-brand/40 hover:text-brand";

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm text-muted">Podeli:</span>

      <button
        type="button"
        aria-label="Facebook"
        onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl())}`)}
        className={btn}
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.06c0-.87.24-1.46 1.49-1.46H17V3.93c-.28-.04-1.24-.12-2.35-.12-2.33 0-3.92 1.42-3.92 4.02V10H8v3h2.73v8h2.77z" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="X (Twitter)"
        onClick={() =>
          openShare(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl())}&text=${encodeURIComponent(title)}`,
          )
        }
        className={btn}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="LinkedIn"
        onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl())}`)}
        className={btn}
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.08 1.4-2.08 2.85V21H9z" />
        </svg>
      </button>

      <button type="button" aria-label="Kopiraj link" onClick={copy} className={btn}>
        {copied ? <Check size={17} className="text-brand" /> : <Link2 size={17} />}
      </button>
    </div>
  );
}
