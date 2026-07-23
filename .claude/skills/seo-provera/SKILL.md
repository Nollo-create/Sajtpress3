---
name: seo-provera
description: SEO provera i podešavanje za Next.js landing stranicu — metadata, Open Graph, semantika, slike, performanse. Koristi kada korisnik traži SEO optimizaciju, dodavanje meta tagova, deljenje na društvenim mrežama ili proveru pre objave.
---

# SEO provera

Kontrolna lista za SEO na Sajtpress landingu (Next.js App Router).

## Metadata (obavezno)

U `app/layout.tsx` ili po stranici izvezi `metadata`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sajtpress — <kratak, jasan naslov>",
  description: "<opis do ~155 znakova, sa ključnom rečju>",
  openGraph: {
    title: "Sajtpress",
    description: "<isti/sličan opis>",
    url: "https://<domen>",
    siteName: "Sajtpress",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "sr_RS",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
```

> Vrednosti povuci iz [`docs/brief.md`](../../../docs/brief.md), sekcija „SEO". Ako fale (`TODO`), pitaj.

## Kontrolna lista

- [ ] `title` jedinstven, do ~60 znakova, sadrži ključnu reč.
- [ ] `description` do ~155 znakova, opisuje vrednost.
- [ ] Tačno jedan `<h1>` po stranici; logična hijerarhija `h2`/`h3`.
- [ ] Open Graph slika (`/og-image.png`, 1200×630) postoji u `public/`.
- [ ] `lang="sr"` na `<html>` (u `layout.tsx`).
- [ ] Sve slike imaju smislen `alt`; koriste `next/image`.
- [ ] Interne i eksterne veze imaju jasan tekst (ne „klikni ovde").
- [ ] `robots.txt` i `sitemap.xml` postoje (Next: `app/robots.ts`, `app/sitemap.ts`).
- [ ] `favicon` i `apple-touch-icon` podešeni.
- [ ] Semantički landmarks: `header`, `main`, `footer`, `nav`.

## Performanse (utiču na SEO)

- Optimizuj slike (`next/image`, moderni formati).
- Izbegavaj nepotreban client-side JS; koristi Server Components gde može.
- Proveri Core Web Vitals (npr. Lighthouse u Chrome DevTools).

## Provera pre objave

- Pokreni `npm run build` — bez grešaka/upozorenja.
- Testiraj OG pregled (npr. alat za pregled deljenja linka).
