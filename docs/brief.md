# Brief — Sajtpress v3

Izvor istine za sadržaj i brend. Claude čita ovaj fajl pre pisanja copy-ja ili UI-ja.
Popunjeno na osnovu razgovora; stavke označene sa `TODO` treba dopuniti pre/tokom izrade.

---

## 1. Osnovno

- **Naziv brenda:** Sajtpress
- **Domen:** sajtpress.rs
- **Šta Sajtpress radi:** Izrada modernih sajtova po meri (web dizajn i razvoj po narudžbini).
- **Ciljna publika:**
  - Mala preduzeća i zanatlije (lokalne firme kojima treba profesionalan sajt)
  - Agencije i druge firme (B2B saradnja)
  - Startapi / tech (kojima treba brz, moderan sajt)
- **Glavni cilj sajta:** Da posetilac **zakaže poziv / konsultaciju**.
- **Poziv na akciju (CTA):** „Zakaži besplatnu konsultaciju" (predlog — može varijacija: „Zakaži poziv").

## 2. Ton i stil komunikacije

- **Ton:** prijateljski i topao + moderan / „tech". Pristupačno, ljudski, ali samouvereno i savremeno.
- **„Glas brenda":** persiramo — obraćamo se klijentima sa **„Vi"** (poslovno, a ipak toplo).
- **Koristimo:** jasne rečenice, konkretne benefite, bez praznih fraza i žargona.
- **Izbegavamo:** korporativni „bla-bla", preterana obećanja, tehnički žargon bez objašnjenja.

## 3. Vizuelni identitet

Pravac: **čist i moderan**, plava/teal paleta, dosta belog prostora.
Referenca za layout/osećaj: **appwrite.io** (jak hero, čiste sekcije, moderan tech look).

Paleta (verno Appwrite stilu — definisana u `app/globals.css` `@theme`):

- **Pozadina (baza):** `#19191C` (topla near-black) · površine `#232329`, `#2A2A31` · border `#2D2D35`
- **Tekst:** naslovi beli `#FFFFFF`, body sivi `#ACACAF`
- **Brend akcenat (roze):** `#FD366E` (Appwrite pink) · svetlija `#FF5C86` · tamnija `#E01E5A`
- **Topli koral (za gradijente):** `#FE9567`
- **Tamne sekcije:** ceo sajt je taman (Appwrite pristup) — nema smenjivanja sa belim.

Fontovi (preko `next/font`):

- **Naslovi:** Hanken Grotesk — **težina 400** (tanko) + zbijen razmak (`letter-spacing: -0.025em`);
  besplatna zamena za Appwrite „Aeonik Pro".
- **Tekst:** Inter (isto kao Appwrite).

Stil elemenata (Appwrite):

- **Dugmad:** primarno puna roze (`#FD366E`), radius **8px** (ne „pilula"); sekundarno tamno sa borderom.
- **Badge/pill:** zaobljen (`rounded-full`), suptilan border, mali tekst.
- **Naslovi:** veliki, tanki, dvotonski (roze→belo) na ključnoj poruci.

- **Logo:** korisnik ima logo, dostavlja ga kasnije → staviti u `public/` (npr. `public/logo.svg`).
  Za sada koristimo **tekstualni logo „Sajtpress"** (lako se zameni kasnije).
- **Ikone:** `lucide-react`.

## 4. Sekcije landinga (redosled)

1. **Header / navigacija** — logo, linkovi (kotva na sekcije), CTA dugme „Zakaži konsultaciju".
2. **Hero** — glavni naslov, podnaslov, primarni CTA + sekundarni link. Vizual/ilustracija desno.
   - Predlog naslova: „Sajtovi po meri koji prodaju vaš biznis."
   - Predlog podnaslova: „Dizajniramo i razvijamo moderne, brze sajtove — od ideje do objave."
3. **Prednosti / zašto mi** — 3–6 kartica sa ključnim benefitima (npr. brzina, moderan dizajn,
   SEO, podrška, prilagođeno mobilnom). — konkretan tekst: TODO
4. **Kako radi** — proces u koracima (npr. 1. Konsultacija → 2. Dizajn → 3. Razvoj → 4. Objava). — TODO detalji
5. **Portfolio** — grid prethodnih radova. Sadržaj (26 projekata sa opisima, live linkovima i
   slikama) je u [`docs/portfolio.md`](portfolio.md). Predlog: prikazati 6–9 najjačih + „Pogledaj sve".
6. **Utisci klijenata** — testimonijali (ime, firma, citat) i/ili logotipi klijenata. — TODO citati
7. **Završni CTA** — istaknut poziv na zakazivanje konsultacije + forma ili dugme.
8. **Footer** — kontakt, društvene mreže, kratki linkovi, copyright.

> Nema cenovnika ni FAQ sekcije (po dogovoru). Mogu se dodati kasnije.

## 5. Funkcionalnosti

- **Forma za zakazivanje / kontakt:** DA — glavni CTA. Polja (predlog): ime, email, telefon (opciono),
  poruka. **Destinacija prijava: odlučuje se kasnije** (email servis tipa Resend/Formspree ili slično).
  Do tada forma validira i priprema podatke, integracija se dodaje pri izradi.
- **Newsletter:** ne (za sada).
- **Analitika:** ne (za sada) — TODO: razmisliti o Plausible/GA pred objavu.
- **Jezici:** samo srpski (latinica). Bez prebacivača jezika.
- **Integracije:** nijedna za sada.

## 6. SEO

- **Glavne ključne reči:** izrada sajtova, web dizajn, moderni sajtovi po meri, izrada web sajta,
  web razvoj Srbija. — TODO: doraditi/prioritizovati.
- **Meta title (predlog):** „Sajtpress — Izrada modernih sajtova po meri"
- **Meta description (predlog):** „Dizajniramo i razvijamo brze, moderne sajtove po meri za male
  firme, agencije i startape. Zakažite besplatnu konsultaciju."
- **Domen:** sajtpress.rs
- **Jezik/locale:** `sr_RS`, `lang="sr"`.
- OG slika 1200×630 — TODO: napraviti (`public/og-image.png`).

## 7. Ostalo / napomene

- Referentni sajt za stil: https://appwrite.io/
- **Zaključano:** persiranje = „Vi"; tamne sekcije = DA (Appwrite stil); portfolio = `docs/portfolio.md`.
- **Ostaje kasnije (ne blokira izradu):** logo fajl, destinacija forme, izbor analitike,
  konačan izbor projekata za prikaz na landingu.
