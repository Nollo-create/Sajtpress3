import { seoPosts } from "@/lib/posts/seo";

export const categories = [
  { name: "Izrada sajtova", gradient: "from-brand to-coral" },
  { name: "Dig. marketing", gradient: "from-violet-500 to-brand" },
  { name: "Veb dizajn", gradient: "from-fuchsia-500 to-coral" },
  { name: "WordPress", gradient: "from-sky-500 to-indigo-500" },
  { name: "SEO", gradient: "from-amber-500 to-coral" },
  { name: "IT vesti", gradient: "from-brand to-fuchsia-500" },
] as const;

export type CategoryName = (typeof categories)[number]["name"];

// U `text` poljima linkovi se pišu markdown sintaksom: [tekst](url)
export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryName;
  author: { name: string; role: string; initials: string };
  date: string;
  readTime: number;
  gradient: string;
  /** Naslovna slika; ako nema, koristi se gradijent. */
  cover?: string;
  tags: string[];
  content: Block[];
};

const marko = { name: "Marko Petrović", role: "Web developer", initials: "MP" };
const ana = { name: "Ana Jovanović", role: "Digital marketer", initials: "AJ" };

// Dummy članci — zameniti pravim tekstovima kada budu spremni.
const dummyPosts: Post[] = [
  {
    slug: "koliko-kosta-izrada-sajta-2026",
    title: "Koliko zaista košta izrada sajta u 2026?",
    excerpt:
      "Od jednostavne prezentacije do web prodavnice — razlažemo cene, skrivene troškove i kako da dobijete najbolju vrednost za novac.",
    category: "Izrada sajtova",
    author: marko,
    date: "18. jul 2026.",
    readTime: 6,
    gradient: "from-brand to-coral",
    tags: ["cene", "izrada sajtova", "budžet"],
    content: [
      {
        type: "p",
        text: "Cena izrade sajta jedno je od prvih pitanja svakog vlasnika biznisa — i jedno od najčešće pogrešno shvaćenih. Nije reč o jednoj cifri, već o rasponu koji zavisi od obima, funkcionalnosti i dugoročnih ciljeva. U ovom tekstu razlažemo šta zapravo plaćate.",
      },
      { type: "h2", text: "Od čega se sastoji cena" },
      {
        type: "p",
        text: "Sajt nije samo dizajn. Cena obuhvata planiranje, dizajn, razvoj, sadržaj, testiranje i objavu — plus domen i hosting koji se plaćaju godišnje.",
      },
      {
        type: "list",
        items: [
          "Domen i hosting — godišnji trošak, obično 40–80 € godišnje",
          "Dizajn i razvoj — najveći deo, zavisi od broja strana",
          "Sadržaj (tekst i slike) — često potcenjen, a presudan",
          "Održavanje — bezbednost, ažuriranja i backup",
        ],
      },
      { type: "callout", text: "Savet: uvek tražite da ponuda jasno navede šta je uključeno, a šta se dodatno naplaćuje." },
      { type: "h2", text: "Kako dobiti najbolju vrednost" },
      {
        type: "p",
        text: "Najjeftinija opcija retko je i najisplativija. Fokusirajte se na jasne ciljeve: šta sajt treba da postigne za vaš biznis. Dobar sajt se vremenom isplati kroz nove upite i prodaju.",
      },
      {
        type: "quote",
        text: "Sajt nije trošak — to je alat koji radi za vas 24 sata dnevno.",
        cite: "Sajtpress tim",
      },
    ],
  },
  {
    slug: "google-ads-za-pocetnike",
    title: "Google Ads za početnike: prvi rezultati bez SEO-a",
    excerpt:
      "Plaćene reklame vam donose posetioce od prvog dana. Objašnjavamo kako da postavite kampanju koja ne troši budžet uzalud.",
    category: "Dig. marketing",
    author: ana,
    date: "12. jul 2026.",
    readTime: 7,
    gradient: "from-violet-500 to-brand",
    tags: ["google ads", "PPC", "marketing"],
    content: [
      {
        type: "p",
        text: "Dok SEO gradi rezultate mesecima, Google Ads vam može dovesti prve klijente već istog dana. Ali bez dobre strukture, budžet nestaje brzo. Evo kako da krenete pametno.",
      },
      { type: "h2", text: "Tri stuba uspešne kampanje" },
      {
        type: "list",
        items: [
          "Ključne reči koje pokazuju nameru kupovine",
          "Oglas koji odgovara tome što korisnik traži",
          "Odredišna strana koja pretvara klik u upit",
        ],
      },
      { type: "h2", text: "Najčešće greške" },
      {
        type: "p",
        text: "Početnici često ciljaju previše široko i šalju posetioce na početnu stranu umesto na relevantnu. Uže ciljanje i namenske strane drastično poboljšavaju rezultat.",
      },
      { type: "callout", text: "Počnite sa malim dnevnim budžetom, merite, pa skalirajte ono što radi." },
    ],
  },
  {
    slug: "trendovi-veb-dizajna-2026",
    title: "5 trendova veb dizajna koji dominiraju 2026.",
    excerpt:
      "Od izražajne tipografije do tamnih tema i mikro-interakcija — pregled onoga što danas izdvaja moderne sajtove.",
    category: "Veb dizajn",
    author: marko,
    date: "5. jul 2026.",
    readTime: 5,
    gradient: "from-fuchsia-500 to-coral",
    tags: ["dizajn", "trendovi", "UX"],
    content: [
      {
        type: "p",
        text: "Veb dizajn se menja brže nego ikad, ali dobri principi ostaju. Ove godine izdvajaju se sajtovi koji spajaju smelu estetiku sa besprekornim korisničkim iskustvom.",
      },
      { type: "h2", text: "Šta je in ove godine" },
      {
        type: "list",
        items: [
          "Izražajna, velika tipografija kao glavni element",
          "Tamne teme sa suptilnim gradijentima",
          "Mikro-interakcije i animacije na skrol",
          "Glassmorphism i slojevita dubina",
          "Brzina i pristupačnost kao standard",
        ],
      },
      {
        type: "quote",
        text: "Dobar dizajn je nevidljiv — primetite ga tek kada nedostaje.",
      },
      { type: "h2", text: "Kako primeniti" },
      {
        type: "p",
        text: "Ne jurite svaki trend. Izaberite one koji podržavaju vašu poruku i publiku. Doslednost i jasnoća uvek pobeđuju puko efektiranje.",
      },
    ],
  },
  {
    slug: "wordpress-ili-custom-sajt",
    title: "WordPress ili custom sajt — šta izabrati?",
    excerpt:
      "Obe opcije imaju mesto. Poredimo fleksibilnost, cenu, održavanje i brzinu da biste doneli pravu odluku.",
    category: "WordPress",
    author: marko,
    date: "28. jun 2026.",
    readTime: 6,
    gradient: "from-sky-500 to-indigo-500",
    tags: ["wordpress", "razvoj", "CMS"],
    content: [
      {
        type: "p",
        text: "WordPress pokreće ogroman deo interneta — i to s razlogom. Ali nije uvek najbolji izbor. Odluka zavisi od vaših potreba, budžeta i planova za rast.",
      },
      { type: "h2", text: "Kada WordPress" },
      {
        type: "p",
        text: "Ako želite lako uređivanje sadržaja, blog i brzu izradu uz razumnu cenu, WordPress je odličan izbor. Ogroman ekosistem tema i dodataka ubrzava sve.",
      },
      { type: "h2", text: "Kada custom" },
      {
        type: "p",
        text: "Za specifične funkcionalnosti, maksimalne performanse i jedinstveno iskustvo, custom rešenje daje potpunu kontrolu — uz veći početni trošak.",
      },
      { type: "callout", text: "Naš pristup: biramo alat prema projektu, a ne obrnuto." },
    ],
  },
  {
    slug: "vestacka-inteligencija-i-izrada-sajtova",
    title: "Kako veštačka inteligencija menja izradu sajtova",
    excerpt:
      "AI alati ubrzavaju dizajn, sadržaj i kod. Gde pomažu, a gde ljudski dodir i dalje pravi razliku.",
    category: "IT vesti",
    author: marko,
    date: "10. jun 2026.",
    readTime: 5,
    gradient: "from-brand to-fuchsia-500",
    tags: ["AI", "budućnost", "alati"],
    content: [
      {
        type: "p",
        text: "Veštačka inteligencija više nije naučna fantastika — ona je deo svakodnevnog rada u izradi sajtova. Ali umesto da zamenjuje ljude, najbolji rezultati dolaze iz saradnje.",
      },
      { type: "h2", text: "Gde AI blista" },
      {
        type: "list",
        items: [
          "Brzi nacrti dizajna i varijacije",
          "Generisanje i doterivanje tekstova",
          "Ubrzavanje ponavljajućih zadataka u kodu",
        ],
      },
      { type: "h2", text: "Gde je čovek nezamenljiv" },
      {
        type: "p",
        text: "Strategija, ukus, razumevanje brenda i emocija — to AI ne može da odglumi. Zato spajamo brzinu alata sa ljudskim iskustvom i pažnjom prema detaljima.",
      },
      { type: "callout", text: "AI je alat u rukama majstora — a ne zamena za majstora." },
    ],
  },
];

export const posts: Post[] = [...seoPosts, ...dummyPosts];

/** Uklanja markdown linkove iz teksta — za TOC, meta opise i sl. */
export function stripLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[čć]/g, "c")
    .replace(/š/g, "s")
    .replace(/ž/g, "z")
    .replace(/đ/g, "dj")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export type Heading = { id: string; text: string; level: 2 | 3 | 4 };

const HEADING_LEVEL = { h2: 2, h3: 3, h4: 4 } as const;

/**
 * Svi naslovi članka sa jedinstvenim ID-jem — koristi ga i `PostBody` i
 * `TableOfContents` da bi se sidrišta uvek poklapala.
 */
export function getHeadings(content: Block[]): Heading[] {
  const seen = new Map<string, number>();

  return content.flatMap((b) => {
    if (b.type !== "h2" && b.type !== "h3" && b.type !== "h4") return [];
    const base = slugifyHeading(b.text) || "naslov";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return [{ id: count ? `${base}-${count + 1}` : base, text: b.text, level: HEADING_LEVEL[b.type] }];
  });
}

export function getToc(post: Post) {
  return getHeadings(post.content);
}

export function getRelated(post: Post, count = 3) {
  return posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1) - (b.category === post.category ? -1 : 1))
    .slice(0, count);
}

export function categoryGradient(name: CategoryName) {
  return categories.find((c) => c.name === name)?.gradient ?? "from-brand to-coral";
}
