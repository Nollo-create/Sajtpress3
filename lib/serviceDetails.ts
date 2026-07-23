// Sadržaj preuzet i prilagođen sa pojedinačnih stranica usluga na sajtpress.rs

export type Pkg = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
};

export type Block =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "list"; heading: string; items: string[] }
  | { type: "steps"; heading: string; steps: { title: string; text?: string }[] }
  | { type: "cards"; heading: string; cards: { title: string; text: string }[] };

export type ServiceDetail = {
  slug: string;
  title: string;
  vertical: string;
  intro: string;
  metaDescription: string;
  blocks: Block[];
  packages?: Pkg[];
  packagesNote?: string;
};

export const services: Record<string, ServiceDetail> = {
  "izrada-sajtova": {
    slug: "izrada-sajtova",
    title: "Izrada sajtova",
    vertical: "Izrada",
    metaDescription:
      "Izrada sajtova po meri — od informativnih prezentacija do web prodavnica. Paketi od 250 €.",
    intro:
      "Proces izrade počinje definisanjem cilja i svrhe sajta. Od informativnih prezentacija do web prodavnica — svaki tip ima svoje zahteve, a mi ih pokrivamo od ideje do objave.",
    blocks: [
      {
        type: "steps",
        heading: "Faze izrade sajta",
        steps: [
          {
            title: "Domen i hosting",
            text: "Kratko i pamtljivo ime, .rs ekstenzija za domaće tržište i hosting paket prema resursima.",
          },
          {
            title: "SSL sertifikat",
            text: "Podaci posetilaca su šifrovani i zaštićeni od napada — poverenje od prvog trenutka.",
          },
          {
            title: "Dizajn",
            text: "Raspored elemenata, boje i fontovi prilagođeni nameni sajta i ciljnoj publici.",
          },
          {
            title: "Sadržaj",
            text: "Tekst i slike usklađeni sa temom; preporučujemo i aktivnu blog stranicu.",
          },
          {
            title: "Aktivacija i praćenje",
            text: "Povezivanje sa društvenim mrežama i instalacija analitike.",
          },
          {
            title: "Promocija",
            text: "Google, Facebook i Instagram oglasi za prve posetioce i klijente.",
          },
        ],
      },
      {
        type: "text",
        heading: "Vremenski okvir",
        paragraphs: [
          "Izrada traje od 10 do 30 dana, u zavisnosti od vrste i kompleksnosti sajta.",
        ],
      },
    ],
    packages: [
      {
        name: "Osnovni paket",
        price: "250 €",
        period: "do 7 dana",
        features: [
          "Do 5 strana",
          "Galerija slika i kontakt forma",
          "Google mape",
          "Osnovna SEO optimizacija",
          "Responsive dizajn",
          "Besplatno održavanje godinu dana",
        ],
      },
      {
        name: "Standardni paket",
        price: "450 €",
        period: "do 10 dana",
        featured: true,
        features: [
          "5–10 strana",
          "Online prodavnica do 10 proizvoda",
          "SEO optimizacija i Google Analitika",
          "Galerija i kontakt forma",
          "Responsive dizajn",
          "Besplatno održavanje godinu dana",
        ],
      },
      {
        name: "Premijum paket",
        price: "700 €",
        period: "15+ dana",
        features: [
          "10+ strana",
          "Online prodavnica 10–20 proizvoda",
          "Višejezični sajt",
          "SEO optimizacija i Google Analitika",
          "Responsive dizajn",
          "Besplatno održavanje godinu dana",
        ],
      },
    ],
    packagesNote:
      "Izrada se kreće od 250 € do 1000–2000 € za veće prodavnice sa plaćanjem karticama. Cene su okvirne.",
  },

  "redizajn-sajtova": {
    slug: "redizajn-sajtova",
    title: "Redizajn sajtova",
    vertical: "Redizajn",
    metaDescription:
      "Redizajn starih i nefunkcionalnih sajtova uz moderne principe estetike. Od 250 €.",
    intro:
      "Trendovi u web dizajnu se brzo menjaju, ali principi estetike ostaju. Nalazimo balans između aktuelnog i etabliranog kako bi vaš sajt ponovo radio za vas.",
    blocks: [
      {
        type: "list",
        heading: "Principi estetike kojih se držimo",
        items: [
          "Pregledni i jasno organizovani elementi",
          "Jasno odvojene sekcije",
          "Kontrast boja i fontova",
          "Jedinstvena vizuelna celina",
          "Sadržaj prijatan za čitanje",
        ],
      },
      {
        type: "text",
        heading: "Kada uraditi redizajn?",
        paragraphs: [
          "Redizajn se posebno preporučuje ako sajt nije održavan 3 i više godina. Može biti sveobuhvatan ili parcijalni, u zavisnosti od potreba.",
          "Vizuelni utisak bitno utiče na ponašanje korisnika — poseta često skače i do duplo nakon kvalitetnog redizajna.",
        ],
      },
    ],
    packages: [
      {
        name: "Redizajn sajta",
        price: "od 250 €",
        period: "10–15 dana",
        featured: true,
        features: [
          "Modernizacija dizajna",
          "Nove funkcionalnosti",
          "Bolje performanse i mobilna prilagođenost",
          "Cena zavisi od broja stranica",
        ],
      },
    ],
    packagesNote: "Cena zavisi od obima redizajna i broja stranica. Cene su okvirne.",
  },

  "odrzavanje-sajtova": {
    slug: "odrzavanje-sajtova",
    title: "Održavanje sajtova",
    vertical: "Održavanje",
    metaDescription:
      "Redovno održavanje sajtova — zaštita, ažuriranje i backup. Od 50 € mesečno.",
    intro:
      "Najvažniji korak nakon izrade. Redovno održavanje je investicija u reputaciju i brend — jer većina neodržavanih sajtova biva zaražena ili hakirana.",
    blocks: [
      {
        type: "cards",
        heading: "Zašto je održavanje važno",
        cards: [
          { title: "Prvi utisak", text: "Pozitivan prvi utisak je od suštinskog značaja za posetioce." },
          { title: "Brzina", text: "Brze stranice zadržavaju posetioce i povećavaju konverzije." },
          { title: "Konkurentnost", text: "Ažuriran sadržaj pomaže da se sajt istakne." },
          { title: "Bezbednost", text: "Redovno ažuriranje čuva podatke i reputaciju." },
        ],
      },
      {
        type: "list",
        heading: "Šta obuhvata održavanje",
        items: [
          "Redovno ažuriranje WordPress platforme",
          "Ažuriranje tema i dodataka (plugin-ova)",
          "Instalacija zaštite",
          "Redovni backup sajta",
          "Vraćanje sajta online ako padne",
        ],
      },
    ],
    packages: [
      {
        name: "Osnovni paket",
        price: "50 €",
        period: "mesečno",
        featured: true,
        features: [
          "Potpuna sigurnost funkcionalnosti i zaštite",
          "Redovna ažuriranja i backup",
          "Praćenje i podrška",
        ],
      },
    ],
    packagesNote:
      "Manje izmene (tekst, slike, baneri) plaćaju se dodatno, odvojeno od osnovnog paketa.",
  },

  seo: {
    slug: "seo",
    title: "SEO optimizacija",
    vertical: "SEO",
    metaDescription:
      "SEO usluge za bolju vidljivost na Google-u — ključne reči, on-page i tehnički SEO. Paketi od 100 €.",
    intro:
      "Profesionalne usluge za veću vidljivost vašeg sajta. Razumemo poslovne potrebe i razvijamo prilagođenu strategiju za bolje rangiranje na pretraživačima.",
    blocks: [
      {
        type: "cards",
        heading: "Šta obuhvataju SEO usluge",
        cards: [
          {
            title: "Istraživanje ključnih reči",
            text: "Najrelevantnije ključne reči za vaše poslovanje i optimizacija meta oznaka.",
          },
          {
            title: "On-page optimizacija",
            text: "Struktura, navigacija i sadržaj — naslovi, meta opisi i zaglavlja.",
          },
          {
            title: "Off-page optimizacija",
            text: "Kvalitetne povratne veze i vidljivost kroz linkove i društvene mreže.",
          },
          {
            title: "Tehnički SEO",
            text: "Analiza strukture uz preporuke za brzinu i mobilnu optimizaciju.",
          },
          {
            title: "Praćenje i izveštavanje",
            text: "Redovni izveštaji o rangiranju, saobraćaju i konverzijama.",
          },
        ],
      },
    ],
    packages: [
      {
        name: "Osnovni",
        price: "100 €",
        period: "jednokratno",
        features: [
          "Istraživanje ključnih reči",
          "On-page optimizacija",
          "Tehnički SEO",
          "Praćenje",
        ],
      },
      {
        name: "Standardni",
        price: "200 €",
        period: "mesečno",
        featured: true,
        features: ["Sve iz Osnovnog", "Off-page optimizacija", "Lokalni SEO", "Sadržaj"],
      },
      {
        name: "Premium",
        price: "350 €",
        period: "mesečno",
        features: [
          "Sve iz Standardnog",
          "Analiza konkurencije",
          "Merenje ROI",
          "Kontinuirana poboljšanja",
        ],
      },
    ],
    packagesNote:
      "SEO revizija: 50 € (jednokratno). Cene se prilagođavaju kompleksnosti sajta, industriji i konkurenciji.",
  },

  "google-reklame": {
    slug: "google-reklame",
    title: "Google reklame",
    vertical: "Google",
    metaDescription:
      "Google Ads kampanje — ciljana promocija i prvi rezultati bez čekanja na SEO. Od 60 €.",
    intro:
      "Efikasan način da ponudite proizvode i usluge pravim ljudima u pravo vreme. Oglasi se aktiviraju kada kupci pretražuju vaše ključne reči — plaćate samo po kliku.",
    blocks: [
      {
        type: "steps",
        heading: "Tri elementa uspešne kampanje",
        steps: [
          { title: "Sajt", text: "Pregledan, brz i mobilno optimizovan, sa dobrim UX/UI." },
          {
            title: "Tekstualni sadržaj",
            text: "Odgovara interesima posetioca i prodajnog je karaktera.",
          },
          {
            title: "Kampanja",
            text: "Naslov i opis oglasa usklađeni sa namerom pretrage (search intent).",
          },
        ],
      },
      {
        type: "list",
        heading: "Vrste Google reklama",
        items: [
          "Search — oglasi u rezultatima pretrage za ključne reči",
          "Display — baneri i slike na partnerskim sajtovima",
          "Video — oglasi pre, tokom ili nakon YouTube videa",
          "App — promocija i preuzimanje aplikacija",
          "Shopping — oglasi za proizvode u pretrazi i kartici Kupovina",
        ],
      },
    ],
    packages: [
      {
        name: "Početni",
        price: "60 €",
        period: "jednokratno + 30% budžeta",
        features: [
          "Podešavanje i optimizacija strukture",
          "Istraživanje ključnih reči",
          "Pisanje oglasa",
          "Praćenje i izveštavanje",
        ],
      },
      {
        name: "Standardni",
        price: "60 € + 250 €/mes",
        period: "+ 30% budžeta",
        featured: true,
        features: [
          "Sve iz Početnog",
          "Napredno ciljanje i A/B testiranje",
          "Optimizacija odredišne stranice",
        ],
      },
      {
        name: "Premium",
        price: "60 € + 450 €/mes",
        period: "+ 30% budžeta",
        features: [
          "Sve iz Standardnog",
          "Napredno izveštavanje i analiza",
          "Kampanje za ponovno ciljanje",
        ],
      },
    ],
    packagesNote: "Dodatne usluge: 50 € po satu.",
  },

  "facebook-reklame": {
    slug: "facebook-reklame",
    title: "Facebook reklame",
    vertical: "Facebook",
    metaDescription:
      "Facebook i Instagram reklame — više posete i novih klijenata uz precizno ciljanje. Od 150 €.",
    intro:
      "Novi sajtovi na početku imaju nisku organsku posetu. Facebook i Instagram reklame povećavaju posetu i otvaraju vrata novim klijentima — uz moćne alate za ciljanje.",
    blocks: [
      {
        type: "list",
        heading: "Tipovi Facebook reklama",
        items: [
          "Slika — proizvod u prvom planu, jednostavno predstavljen",
          "Video — brzo privlači pažnju i dobro konvertuje",
          "Karusel — do 10 slika/videa sa zasebnim pozivom na akciju",
          "Instant Experience — fullscreen reklame na telefonu",
          "Collection — više proizvoda uz otkrivanje i pretragu",
        ],
      },
      {
        type: "cards",
        heading: "Ciljevi kampanje",
        cards: [
          { title: "Awareness", text: "Svest o brendu i doseg." },
          {
            title: "Consideration",
            text: "Saobraćaj, engagement, prikupljanje leadova i poruke.",
          },
          {
            title: "Conversion",
            text: "Konverzije, prodaja iz kataloga i posete lokacijama.",
          },
        ],
      },
    ],
    packages: [
      {
        name: "Osnovni",
        price: "150 €",
        period: "mesečno",
        features: ["Podešavanje naloga", "Istraživanje publike", "Praćenje i upravljanje budžetom"],
      },
      {
        name: "Standardni",
        price: "250 €",
        period: "+ % budžeta",
        featured: true,
        features: ["Sve iz Osnovnog", "Napredno targetiranje", "A/B testiranje i optimizacija"],
      },
      {
        name: "Pro",
        price: "350 €",
        period: "+ % budžeta",
        features: ["Sve iz Standardnog", "Napredna analiza", "Retargeting i dinamički oglasi"],
      },
    ],
    packagesNote: "Dodatne usluge: 50 € po satu. Paketi su prilagodljivi prema potrebama.",
  },
};
