"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

type Comment = {
  id: number;
  name: string;
  date: string;
  text: string;
  initials: string;
};

function toInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Jelena Marković",
    date: "pre 2 dana",
    text: "Odličan tekst! Konačno mi je jasno na šta ide budžet. Hvala na jasnom objašnjenju.",
    initials: "JM",
  },
  {
    id: 2,
    name: "Stefan Ilić",
    date: "pre 5 dana",
    text: "Baš korisno, delim sa kolegama. Nadam se još ovakvih članaka!",
    initials: "SI",
  },
];

export function BlogComments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setComments((prev) => [
      { id: Date.now(), name, date: "upravo sada", text, initials: toInitials(name) },
      ...prev,
    ]);
    setName("");
    setText("");
  }

  return (
    <section id="komentari" className="scroll-mt-28">
      <div className="flex items-center gap-2">
        <MessageCircle size={20} className="text-brand" />
        <h2 className="font-serif text-2xl text-foreground">
          Komentari <span className="text-muted">({comments.length})</span>
        </h2>
      </div>

      {/* Forma */}
      <form onSubmit={handleSubmit} className="mt-6 rounded-2xl border border-border bg-surface/40 p-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vaše ime"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="Napišite komentar…"
          className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <div className="mt-3 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
          >
            Objavi komentar
            <Send size={15} />
          </button>
        </div>
      </form>

      {/* Lista */}
      <div className="mt-8 space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-coral text-xs font-semibold text-white">
              {c.initials}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-foreground">{c.name}</span>
                <span className="text-xs text-muted">· {c.date}</span>
              </div>
              <p className="mt-1 text-muted">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
