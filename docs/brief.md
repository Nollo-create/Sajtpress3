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

## 4. Sekcije landinga (implementirano)

Sadržaj preuzet i prilagođen sa postojećeg sajta **www.sajtpress.rs**. Redosled na landingu:

1. **Header** — logo „Sajtpress", nav (Usluge, Cenovnik, Radovi, Kontakt), CTA „Zatražite ponudu".
2. **Hero** — „Izrada sajtova koja donosi rezultate"; hook „već od 250 € · plaćanje u 2 rate".
3. **Usluge** — 4 kartice: Izrada · Redizajn · Održavanje · Plaćene reklame.
4. **Garancija / Kako radimo** — prepustite dizajn, proverene procedure, WordPress, komunikacija, 2 rate.
5. **Cenovnik** — **svetla sekcija (kontrast, Appwrite pristup)**; 3 paketa (Osnovni €250,
   Standardni €450, Premijum €700) + kartično plaćanje + napomena.
6. **Zašto vam je sajt neophodan** — 4 benefit kartice (više klijenata, vidljivost, podaci, kredibilitet).
7. **Radovi (Portfolio)** — 9 realnih projekata iz [`docs/portfolio.md`](portfolio.md).
8. **Kontakt** — CTA „Imate pitanje?", telefon 065 2004 765, forma (ime, telefon, email, poruka).
9. **Footer** — brend, navigacija, kontakt (telefon, email), copyright.

> Blog/„Aktuelnosti", partneri, društvene mreže i FAQ sa originala nisu uključeni na landing —
> mogu se dodati kasnije po potrebi.

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
