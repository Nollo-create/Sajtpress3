import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  description: string;
  url: string;
  image: string;
};

// Realni radovi (izvor: sajtpress.rs/projekti). Slike se privremeno učitavaju sa starog
// sajta — kasnije ih preuzeti u public/portfolio/ (vidi docs/portfolio.md).
const projects: Project[] = [
  {
    name: "Vodoinstalater 24",
    description: "Vodoinstalaterske usluge, Beograd",
    url: "https://vodoinstalater24.rs/",
    image: "https://sajtpress.rs/wp-content/uploads/2026/02/SAJTPRESS-vodoinstalatetr.png",
  },
  {
    name: "Slushy Planet",
    description: "Mašine za sladoled, slushy i krofne",
    url: "https://slushyplanet.com/",
    image: "https://sajtpress.rs/wp-content/uploads/2026/02/slushy.png",
  },
  {
    name: "Tempo Plast",
    description: "PVC program",
    url: "https://tempoplast.rs/",
    image: "https://sajtpress.rs/wp-content/uploads/2026/02/SAJTPRESS-tempoplast2.png",
  },
  {
    name: "BIZ Računovodstvo",
    description: "Rešenja iz oblasti računovodstva",
    url: "https://bizracunovodstvo.rs/",
    image: "https://sajtpress.rs/wp-content/uploads/2026/02/SAJTPRESS-biz.png",
  },
  {
    name: "Piran Invest",
    description: "Saveti vezani za investicije",
    url: "https://piran-invest.com/",
    image: "https://sajtpress.rs/wp-content/uploads/2026/02/SAJTPRESS-piran.png",
  },
  {
    name: "TonMaster",
    description: "Iznajmljivanje ozvučenja",
    url: "https://tonmaster.rs/",
    image: "https://sajtpress.rs/wp-content/uploads/2026/02/SAJTPRESS-ton-master.png",
  },
  {
    name: "Del Toros",
    description: "Proizvodnja burgera premium klase",
    url: "https://deltoros.rs/",
    image: "https://sajtpress.rs/wp-content/uploads/2022/06/deltoros-sajtpress.jpg",
  },
  {
    name: "Ivan Keramika",
    description: "Sve za vaše kupatilo",
    url: "https://ivankeramika.com/",
    image: "https://sajtpress.rs/wp-content/uploads/2023/01/ivan-keramika-projekat.png",
  },
  {
    name: "NLP Hipnoterapija",
    description: "Postavljanje i realizacija ciljeva",
    url: "https://nlphipnoterapija.com/",
    image: "https://sajtpress.rs/wp-content/uploads/2026/02/SAJTPRESS-nlp.png",
  },
];

export function Portfolio() {
  return (
    <section id="projekti">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-brand">Naši radovi</p>
          <h2 className="text-3xl sm:text-4xl">Sajtovi koje smo napravili</h2>
          <p className="mt-4 text-lg text-muted">
            Preko 25 izrađenih sajtova za firme u zemlji i inostranstvu — evo nekih od njih.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-border bg-surface/40 transition-colors hover:border-brand/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <Image
                  src={project.image}
                  alt={`Sajt — ${project.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="text-base text-foreground">{project.name}</h3>
                  <p className="mt-1 text-base text-muted">{project.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-brand"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
