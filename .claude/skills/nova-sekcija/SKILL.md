---
name: nova-sekcija
description: Kreiranje nove sekcije landing stranice u Next.js projektu, konzistentno sa postojećim stilom, strukturom i brendom. Koristi kada korisnik traži da se doda/napravi nova sekcija (Hero, Features, CTA, FAQ, Footer, cenovnik i sl.).
---

# Nova sekcija landinga

Vodič za doslednu izradu nove sekcije Sajtpress landinga.

## Pre početka

1. Pročitaj [`docs/brief.md`](../../../docs/brief.md) — ton, boje, sadržaj sekcije.
2. Ako sadržaj sekcije nije definisan (`TODO`), **pitaj korisnika**, ne izmišljaj tekst.
3. Pogledaj postojeće sekcije u `components/sections/` da uskladiš stil.

## Koraci

1. Napravi komponentu u `components/sections/<Naziv>.tsx` (PascalCase).
2. Komponenta prima podatke kroz props kad god ima smisla (lakše menjanje sadržaja).
3. Uveži je u `app/page.tsx` na odgovarajuće mesto u redosledu.
4. Ako sekcija ima ponovljive elemente (kartice, dugmad), izdvoji ih u `components/ui/`.

## Pravila kvaliteta (obavezno)

- **Mobile-first responsivnost** — proveri izgled na mobilnom i desktopu (Tailwind breakpointi).
- **Semantički HTML** — `<section>`, `<h2>`, `<nav>`, `<footer>`… ne „div supa".
- **Pristupačnost** — `alt` na slikama, fokus stanja na interaktivnim elementima, dovoljan kontrast.
- **Slike** kroz `next/image`.
- **Boje/razmaci** iz Tailwind teme (definisane u `@theme` u `app/globals.css` — Tailwind v4),
  bez hardkodovanih hex/px vrednosti.
- **Tekst na srpskom** (latinica), kod na engleskom.

## Šablon komponente

```tsx
type NovaSekcijaProps = {
  naslov: string;
  opis?: string;
};

export function NovaSekcija({ naslov, opis }: NovaSekcijaProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{naslov}</h2>
      {opis ? <p className="mt-4 text-lg text-muted-foreground">{opis}</p> : null}
      {/* sadržaj sekcije */}
    </section>
  );
}
```

## Posle izrade

- Pokreni `npm run dev` i vizuelno proveri sekciju.
- Pokreni `npm run lint`.
