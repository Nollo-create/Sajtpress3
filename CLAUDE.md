# Sajtpress v3

Landing / marketing sajt za **Sajtpress**. Napravljen sa Next.js + React.
Ovaj fajl je glavni izvor pravila za rad na projektu — pročitaj ga pre svake veće izmene.

@AGENTS.md

---

## Jezik

- **Dokumentacija, komentari, UI tekst, poruke za korisnika:** srpski (latinica).
- **Kod** (nazivi varijabli, funkcija, komponenti, fajlova): engleski, po React/TS konvencijama
  (komponente `PascalCase`, funkcije/varijable `camelCase`, fajlovi komponenti `PascalCase.tsx`).
- **Commit poruke:** srpski, kratko i u imperativu (npr. „Dodaj hero sekciju").

## Tehnološki stack (instalirano)

- **Framework:** Next.js **16** (App Router) — ⚠️ nova verzija sa breaking changes; vidi `AGENTS.md`
  i po potrebi čitaj `node_modules/next/dist/docs/` pre pisanja koda (ne oslanjaj se na staro znanje).
- **Jezik:** TypeScript
- **UI:** React **19**
- **Stilizovanje:** Tailwind CSS **v4** — konfiguracija je **CSS-first** (`@theme` u `app/globals.css`),
  **nema** `tailwind.config.js`. Boje/fontovi teme se definišu kao CSS varijable u `@theme`.
- **Fontovi:** `next/font` (planirano: Space Grotesk + Inter). **Ikone:** `lucide-react` (dodati po potrebi).
- **Deploy:** Vercel (predlog).

## Struktura projekta

```
app/                # App Router — stranice i layout
  layout.tsx        # Root layout (fontovi, meta, globalni stil)
  page.tsx          # Landing (početna)
  globals.css       # Tailwind (@import "tailwindcss") + @theme + globalni stilovi
components/          # (kreira se) Reusable UI komponente
  sections/         # Sekcije landinga (Hero, Features, CTA, Footer...)
  ui/               # Sitni gradivni elementi (Button, Card...)
lib/                # (kreira se) Helper funkcije, konstante
public/             # Slike, favicon, statički fajlovi
docs/               # Brief (brief.md), portfolio (portfolio.md)
```

## Komande

```bash
npm run dev      # Lokalni razvoj (http://localhost:3000)
npm run build    # Produkcioni build
npm run start    # Pokretanje produkcionog builda
npm run lint     # ESLint provera
```

## Konvencije i pravila

- **Sekcije landinga** su zasebne komponente u `components/sections/` i sastavljaju se u `app/page.tsx`.
- Drži komponente male i fokusirane; izdvoji ponovljive delove u `components/ui/`.
- **Responsivnost je obavezna** — mobile-first (Tailwind breakpointi). Testiraj na mobilnom i desktopu.
- **Pristupačnost (a11y):** semantički HTML, `alt` na slikama, dovoljan kontrast, fokus stanja.
- **SEO:** svaka stranica ima `metadata` (title, description, Open Graph). Vidi skill `seo-provera`.
- **Slike:** koristi `next/image`; optimizovane, sa `alt` tekstom.
- Bez „magičnih" vrednosti — boje/fontovi/razmaci teme se definišu u `@theme` bloku u `app/globals.css`
  (Tailwind v4), pa se koriste kao Tailwind klase.
- Ne uvodi nove biblioteke bez potrebe; prvo proveri da li Next/Tailwind već rešava problem.

## Sadržaj i brend

Detalji o brendu, bojama, sekcijama i tekstovima su u [`docs/brief.md`](docs/brief.md).
**Pre pisanja copy-ja ili UI-ja, pročitaj brief.** Ako neki podatak nedostaje (označen sa `TODO`),
pitaj korisnika umesto da izmišljaš.
