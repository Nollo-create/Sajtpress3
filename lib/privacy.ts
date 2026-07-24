// Ceo tekst preuzet verbatim sa https://sajtpress.rs/politika-privatnosti/

export type PBlock =
  | { type: "p"; text: string }
  | { type: "callout"; text: string }
  | { type: "list"; items: string[] };

export type PSection = { n: number; id: string; title: string; blocks: PBlock[] };

export const updated = "12.02.2023.";

export const intro: PBlock[] = [
  {
    type: "p",
    text: "Hvala vam što ste izabrali da budete deo naše zajednice na Sajtpress-u („Kompanija“, „mi“ ili „naše“). Posvećeni smo zaštiti vaših ličnih podataka i vašem pravu na privatnost. Ako imate bilo kakvih pitanja ili nedoumica u vezi sa ovim obaveštenjem o privatnosti ili našom praksom u vezi sa vašim ličnim podacima, kontaktirajte nas na kontakt@sajtpress.rs.",
  },
  { type: "p", text: "Ovo obaveštenje o privatnosti opisuje kako bismo mogli da koristimo vaše podatke ako:" },
  {
    type: "list",
    items: [
      "Posetite našu veb stranicu na adresi http://www.sajtpress.rs",
      "Sarađujte sa nama na druge povezane načine – uključujući bilo koju prodaju, marketing ili događaje",
    ],
  },
  { type: "p", text: "U ovom obaveštenju o privatnosti, ako se pozivamo na:" },
  {
    type: "list",
    items: [
      "„Veb sajt“, pozivamo se na bilo koju našu veb stranicu koja upućuje ili vodi do politike privatnosti;",
      "„Usluge„, mislimo na našu veb stranicu i druge srodne usluge, uključujući izradu sajtova i digitalni marketing.",
    ],
  },
  {
    type: "p",
    text: "Svrha ovog obaveštenja o privatnosti je da vam na što jasniji način objasni koje podatke prikupljamo, kako ih koristimo i koja prava imate u vezi s tim. Ako u ovoj napomeni o privatnosti postoje neki uslovi sa kojima se ne slažete, molimo vas da odmah prekinete korišćenje naših Usluga.",
  },
  {
    type: "p",
    text: "Pažljivo pročitajte ovo obaveštenje o privatnosti jer će vam pomoći da razumete šta radimo sa podacima koje prikupljamo.",
  },
];

export const sections: PSection[] = [
  {
    n: 1,
    id: "koje-informacije-prikupljamo",
    title: "KOJE INFORMACIJE PRIKUPLJAMO?",
    blocks: [
      { type: "p", text: "Lične podatke koje nam otkrivate" },
      { type: "callout", text: "Ukratko: Prikupljamo lične podatke koje nam pružate." },
      {
        type: "p",
        text: "Prikupljamo lične podatke koje nam dobrovoljno pružate kada izrazite interes za dobijanje informacija o nama ili našim proizvodima i uslugama, kada učestvujete u aktivnostima na veb stranici ili na drugi način kada nas kontaktirate.",
      },
      {
        type: "p",
        text: "Lični podaci koje prikupljamo zavise od konteksta vaše interakcije sa nama i našim sajtom, izbora koje donosite i proizvoda i funkcija koje koristite. Lični podaci koje prikupljamo mogu uključivati sledeće:",
      },
      {
        type: "list",
        items: [
          "Lične podatke koje ste dali. Prikupljamo adrese e -pošte; brojeve telefona; imena; i druge slične informacije.",
        ],
      },
      {
        type: "p",
        text: "Svi lični podaci koje nam date moraju biti istiniti, potpuni i tačni i morate nas obavestiti o svim promenama takvih ličnih podataka.",
      },
      { type: "p", text: "Podaci se automatski prikupljaju." },
      {
        type: "callout",
        text: "Ukratko: Neke informacije – poput adrese vašeg Internet protokola (IP) i/ili karakteristika pregledača i uređaja – prikupljaju se automatski kada posetite našu veb lokaciju.",
      },
      {
        type: "p",
        text: "Automatski prikupljamo određene podatke kada posetite, koristite ili se krećete po Veb lokaciji. Ove informacije ne otkrivaju vaš specifičan identitet (poput vašeg imena ili podataka za kontakt), ali mogu uključivati informacije o uređaju i korišćenju, kao što su vaša IP adresa, karakteristike pregledača i uređaja, operativni sistem, jezičke postavke, URL -ovi upućivanja, naziv uređaja, država, lokacija , informacije o tome kako i kada koristite našu veb stranicu i druge tehničke informacije. Ove informacije su prvenstveno potrebne za održavanje sigurnosti i funkcionisanja naše veb stranice, kao i za potrebe interne analize i izveštavanja.",
      },
      {
        type: "p",
        text: "Kao i mnoga druga preduzeća, i mi prikupljamo informacije putem kolačića i sličnih tehnologija.",
      },
      { type: "p", text: "Podaci koje prikupljamo uključuju:" },
      {
        type: "list",
        items: [
          "Evidencija i podaci o upotrebi. Dnevnici i podaci o upotrebi su informacije o uslugama, dijagnostici, upotrebi i performansama koje naši serveri automatski prikupljaju kada pristupite ili koristite našu Veb lokaciju i koje snimamo u datoteke evidencije. U zavisnosti od toga kako sarađujete sa nama, ovi podaci dnevnika mogu uključivati vašu IP adresu, podatke o uređaju, tip pregledača i podešavanja i podatke o vašim aktivnostima na Veb lokaciji (kao što su oznake datuma/vremena povezane sa vašom upotrebom, pregledane stranice i datoteke, pretrage i druge radnje koje preduzimate, kao što su funkcije koje koristite), informacije o događajima na uređaju (kao što su sistemske aktivnosti, izveštaji o greškama (ponekad se nazivaju i „otkazivanja pri padu“) i postavke hardvera)).",
          "Podaci o uređaju. Prikupljamo podatke o uređaju, kao što su podaci o vašem računaru, telefonu, tabletu ili drugom uređaju koji koristite za pristup veb lokaciji. U zavisnosti od uređaja koji se koristi, ovi podaci o uređaju mogu uključivati informacije kao što su vaša IP adresa (ili proki server), identifikacioni brojevi uređaja i aplikacije, lokacija, tip pregledača, model hardvera dobavljač Internet usluga i/ili mobilni operater, operativni sistem i konfiguracija sistema informacije.",
          "Podaci o lokaciji. Prikupljamo podatke o lokaciji, kao što su podaci o lokaciji vašeg uređaja, koji mogu biti precizni ili neprecizni. Koliko informacija prikupljamo zavisi od vrste i postavki uređaja koji koristite za pristup veb lokaciji. Na primer, možemo koristiti GPS i druge tehnologije za prikupljanje podataka o geolokaciji koji nam govore o vašoj trenutnoj lokaciji (na osnovu vaše IP adrese). Možete onemogućiti da nam dozvolite da prikupljamo ove podatke odbijanjem pristupa informacijama ili onemogućavanjem postavke lokacije na vašem uređaju. Imajte na umu, međutim, ako odlučite da se odjavite, možda nećete moći da koristite određene aspekte Usluga.",
        ],
      },
    ],
  },
  {
    n: 2,
    id: "kako-koristimo-vase-informacije",
    title: "KAKO KORISTIMO VAŠE INFORMACIJE?",
    blocks: [
      {
        type: "callout",
        text: "Ukratko: Vaše podatke obrađujemo u svrhe zasnovane na legitimnim poslovnim interesima, ispunjenju našeg ugovora sa vama, poštovanju naših zakonskih obaveza i/ili vašem pristanku.",
      },
      {
        type: "p",
        text: "Lične podatke prikupljene putem naše veb stranice koristimo u razne poslovne svrhe opisane u nastavku. Obrađujemo vaše lične podatke u ove svrhe oslanjajući se na naše legitimne poslovne interese, kako bismo sa vama, uz vašu saglasnost, sklopili ili izvršili ugovor sa vama i/ili radi poštovanja naših zakonskih obaveza. Pored svake dole navedene svrhe navodimo specifične osnove obrade na koje se oslanjamo.",
      },
      { type: "p", text: "Koristimo podatke koje prikupljamo ili primamo:" },
      {
        type: "p",
        text: "Ispunjavajte i upravljajte svojim narudžbama. Možemo koristiti vaše podatke za ispunjavanje i upravljanje vašim narudžbama, uplatama, povratima i razmenama napravljenim putem Veb lokacije.",
      },
      {
        type: "p",
        text: "Da isporuči i olakša isporuku usluga korisniku. Možemo koristiti vaše podatke da bismo vam pružili traženu uslugu.",
      },
      {
        type: "p",
        text: "Da biste odgovorili na upite korisnika/ponudili podršku korisnicima. Možemo koristiti vaše podatke da bismo odgovorili na vaše upite i rešili potencijalna pitanja koja biste mogli imati sa korišćenjem naših usluga.",
      },
      {
        type: "p",
        text: "Za slanje marketinške i promotivne komunikacije. Mi i/ili naši nezavisni marketinški partneri možemo koristiti lične podatke koje nam šaljete u naše marketinške svrhe, ako je to u skladu sa vašim marketinškim preferencijama. Na primer, kada iskažete interes za dobijanje informacija o nama ili našoj veb stranici, pretplatite se na marketing ili nas na drugi način kontaktirate, prikupljaćemo vaše lične podatke. U svakom trenutku možete da se odjavite iz naše marketinške e-pošte (pogledajte „ŠTA SU VAŠA PRAVA PRIVATNOSTI?“ Ispod)",
      },
      {
        type: "p",
        text: "Ciljano oglašavanje. Vaše podatke možemo koristiti za razvoj i prikazivanje personalizovanog sadržaja i oglašavanja (i za rad sa trećim stranama koje to rade) prilagođene vašim interesima i/ili lokaciji i za merenje njegove efikasnosti.",
      },
    ],
  },
  {
    n: 3,
    id: "da-li-ce-vasi-podaci-biti-podeljeni",
    title: "DA LI ĆE VAŠI PODACI BITI PODELJENI SA BILO KIM?",
    blocks: [
      {
        type: "callout",
        text: "Ukratko: Mi delimo informacije samo uz vašu saglasnost, radi poštovanja zakona, pružanja usluga, zaštite vaših prava ili ispunjavanja poslovnih obaveza.",
      },
      { type: "p", text: "Možemo obrađivati ili deliti vaše podatke koje imamo na osnovu sledeće pravne osnove:" },
      { type: "p", text: "Pristanak: Možemo obraditi vaše podatke ako ste nam dali posebnu saglasnost da vaše lične podatke koristimo u određene svrhe." },
      { type: "p", text: "Legitimni interesi: Možemo obrađivati vaše podatke kada je to razumno potrebno za postizanje naših legitimnih poslovnih interesa." },
      { type: "p", text: "Izvršenje ugovora: Kada smo zaključili ugovor sa vama, možemo obrađivati vaše lične podatke kako bismo ispunili uslove našeg ugovora." },
      {
        type: "p",
        text: "Zakonske obaveze: Možemo otkriti vaše podatke tamo gde to zakonski zahtevamo da bismo se pridržavali važećeg zakona, vladinih zahteva, sudskog postupka, sudskog naloga ili pravnog postupka, kao što je odgovor na sudski nalog ili poziv na sud ( uključujući odgovor javnim vlastima da ispune zahteve nacionalne bezbednosti ili sprovođenja zakona).",
      },
      {
        type: "p",
        text: "Vitalni interesi: Možemo otkriti vaše podatke tamo gde smatramo da je potrebno istražiti, sprečiti ili preduzeti mere u vezi sa potencijalnim kršenjem naših smernica, sumnjom na prevaru, situacijama koje uključuju potencijalne pretnje po bezbednost bilo koje osobe i nezakonite aktivnosti, ili kao dokaz u parnice u koje smo uključeni.",
      },
      { type: "p", text: "Tačnije, možda ćemo morati da obradimo vaše podatke ili podelimo vaše lične podatke u sledećim situacijama:" },
      {
        type: "p",
        text: "Poslovni transferi. Možemo deliti ili preneti vaše podatke u vezi sa, ili tokom pregovora, o bilo kom spajanju, prodaji imovine kompanije, finansiranju ili sticanju celog ili dela našeg poslovanja drugom preduzeću.",
      },
      {
        type: "p",
        text: "Prodavci, konsultanti i drugi pružaoci usluga trećih strana. Vaše podatke možemo deliti sa nezavisnim dobavljačima, dobavljačima usluga, izvođačima ili agentima koji za nas ili u naše ime obavljaju usluge i zahtevaju pristup takvim podacima za obavljanje tog posla. Primeri uključuju: obradu plaćanja, analizu podataka, isporuku e -pošte, usluge hostinga, korisničku podršku i marketinške napore. Možemo dozvoliti odabranim trećim stranama da koriste tehnologiju praćenja na Veb lokaciji, što će im omogućiti da u naše ime prikupljaju podatke o vašoj interakciji sa našom veb lokacijom tokom vremena.",
      },
      {
        type: "p",
        text: "Ove informacije se mogu koristiti za, između ostalog, analizu i praćenje podataka, utvrđivanje popularnosti određenog sadržaja, stranica ili funkcija i bolje razumevanje mrežnih aktivnosti. Osim ako nije opisano u ovom obaveštenju, ne delimo, prodajemo, iznajmljujemo ili trgujemo bilo kojim vašim podacima sa trećim stranama u njihove promotivne svrhe. Imamo ugovore sa našim procesorima podataka, koji su osmišljeni da pomognu u zaštiti vaših ličnih podataka. To znači da oni ne mogu učiniti ništa s vašim ličnim podacima ako im mi to ne naložimo. Takođe neće deliti vaše lične podatke ni sa jednom organizacijom osim sa nama. Takođe se obavezuju da će štititi podatke koje drže u naše ime i da ih čuvaju tokom perioda koji mi uputimo.",
      },
    ],
  },
  {
    n: 4,
    id: "kome-cete-podeliti-vase-informacije",
    title: "KOME ĆETE PODELITI VAŠE INFORMACIJE?",
    blocks: [
      { type: "callout", text: "Ukratko: Delimo informacije samo sa sledećim kategorijama trećih strana." },
      {
        type: "p",
        text: "Vaše podatke delimo i otkrivamo samo sa sledećim kategorijama trećih strana. Ako smo vaše podatke obradili na osnovu vaše saglasnosti i želite da opozovete saglasnost, kontaktirajte nas koristeći podatke za kontakt navedene u donjem odeljku pod naslovom „KAKO NAS MOŽETE KONTAKTIRATI O OVOM OBAVEŠTENJU?“.",
      },
      { type: "p", text: "Oglasne mreže" },
      { type: "p", text: "Platforme za ponovno ciljanje" },
      { type: "p", text: "Alati za prodaju i marketing" },
    ],
  },
  {
    n: 5,
    id: "kolacici-i-tehnologije-pracenja",
    title: "KORISTIMO LI KOLAČIĆE I DRUGE TEHNOLOGIJE ZA PRAĆENJE?",
    blocks: [
      { type: "callout", text: "Ukratko: Možemo koristiti kolačiće i druge tehnologije praćenja za prikupljanje i čuvanje vaših podataka." },
      {
        type: "p",
        text: "Možemo koristiti kolačiće i slične tehnologije praćenja (poput Google Lighthouse i piksela) za pristup ili skladištenje informacija. Posebne informacije o tome kako koristimo takve tehnologije i kako možete odbiti određene kolačiće navedene su u našem Obaveštenju o kolačićima.",
      },
    ],
  },
  {
    n: 6,
    id: "koliko-dugo-cuvamo-informacije",
    title: "KOLIKO DUGO ČUVAMO VAŠE INFORMACIJE?",
    blocks: [
      { type: "callout", text: "Ukratko: Vaše podatke čuvamo onoliko koliko je potrebno da bismo ispunili svrhe navedene u ovom obaveštenju o privatnosti, osim ako zakonom nije drugačije određeno." },
      {
        type: "p",
        text: "Čuvaćemo vaše lične podatke onoliko koliko je potrebno za svrhe navedene u ovom obaveštenju o privatnosti, osim ako je duži period čuvanja zahtevan ili dozvoljen zakonom (kao što su porezi, računovodstvo ili drugi zakonski zahtevi). Nijedna svrha u ovom obaveštenju neće zahtevati da čuvamo vaše lične podatke duže od 6 meseci.",
      },
      {
        type: "p",
        text: "Kada nemamo stalnu legitimnu poslovnu potrebu za obradom vaših ličnih podataka, mi ćemo ili izbrisati ili anonimizirati te podatke.",
      },
    ],
  },
  {
    n: 7,
    id: "kako-cuvamo-informacije",
    title: "KAKO ČUVAMO VAŠE INFORMACIJE?",
    blocks: [
      { type: "callout", text: "Ukratko: Cilj nam je da zaštitimo vaše lične podatke kroz sistem organizacionih i tehničkih mera bezbednosti." },
      {
        type: "p",
        text: "Implementirali smo odgovarajuće tehničke i organizacione mere bezbednosti osmišljene da zaštite bezbednost svih ličnih podataka koje obrađujemo. Međutim, uprkos našim merama zaštite i naporima da zaštitimo vaše podatke, nijedan elektronski prenos putem Interneta ili tehnologija za skladištenje informacija ne može biti garantovano 100% siguran, tako da ne možemo obećati niti garantovati da hakeri, sajber kriminalci ili druge neovlašćene treće strane neće biti u stanju da uništi našu bezbednost i nepravilno prikupi, pristupi, ukrade ili izmeni vaše podatke. Iako ćemo se potruditi da zaštitimo vaše lične podatke, prenos ličnih podataka na i sa naše veb stranice je na vašu vlastitu odgovornost. Veb lokaciji treba da pristupite samo u zaštićenom okruženju.",
      },
    ],
  },
  {
    n: 8,
    id: "vasa-prava-privatnosti",
    title: "KOJA SU VAŠA PRAVA PRIVATNOSTI?",
    blocks: [
      { type: "callout", text: "Ukratko: U nekim regionima, poput Evropskog ekonomskog prostora (EEA) i Ujedinjenog Kraljevstva (UK), imate prava koja vam omogućavaju veći pristup i kontrolu nad vašim ličnim podacima. U bilo kom trenutku možete pregledati, promeniti ili ukinuti svoj nalog." },
      {
        type: "p",
        text: "U nekim regijama (poput EGP -a i Velike Britanije) imate određena prava prema važećim zakonima o zaštiti podataka. Ovo može uključivati pravo (i) da zahteva pristup i dobije kopiju vaših ličnih podataka, (ii) da zahteva ispravljanje ili brisanje; (iii) da ograničite obradu vaših ličnih podataka; i (iv) ako je primenljivo, na prenosivost podataka. U određenim okolnostima, takođe možete imati pravo na prigovor na obradu vaših ličnih podataka. Da biste uputili takav zahtev, koristite dole navedene kontakt podatke. Mi ćemo razmotriti i postupiti po svakom zahtevu u skladu sa važećim zakonima o zaštiti podataka.",
      },
      {
        type: "p",
        text: "Ako se oslanjamo na vašu saglasnost za obradu vaših ličnih podataka, imate pravo da u bilo kom trenutku povučete saglasnost. Međutim, imajte na umu da ovo neće uticati na zakonitost obrade pre njenog povlačenja, niti će uticati na obradu vaših ličnih podataka koja se obavlja na osnovu zakonitih osnova obrade, osim pristanka. Ako imate prebivalište u EGP -u ili Velikoj Britaniji i mislite da nezakonito obrađujemo vaše lične podatke, takođe imate pravo da se žalite lokalnom nadzornom organu za zaštitu podataka. Njihove kontakt podatke možete pronaći ovde: https://ec.europa.eu/justice/data-protection/bodies/authorities/indek_en.htm.",
      },
      { type: "p", text: "Ako imate prebivalište u Švajcarskoj, podaci za kontakt organa za zaštitu podataka dostupni su ovde: https://vvv.edoeb.admin.ch/edoeb/en/home.html." },
      {
        type: "p",
        text: "Kolačići i slične tehnologije: Većina veb pregledača je podrazumevano podešena da prihvata kolačiće. Ako želite, obično možete izabrati da podesite pregledač tako da uklanja kolačiće i odbija kolačiće. Ako odlučite da uklonite kolačiće ili odbijete kolačiće, to bi moglo uticati na određene funkcije ili usluge naše veb stranice. Da biste onemogućili oglašavanje zasnovano na interesovanjima oglašavača na našoj veb stranici, posetite http://www.aboutads.info/choices/.",
      },
    ],
  },
  {
    n: 9,
    id: "ne-prati-kontrole",
    title: "KONTROLA ZA „NE PRATI“ FUNKCIJE U PRETRAŽIVAČIMA",
    blocks: [
      {
        type: "p",
        text: "Većina veb pregledača i neki mobilni operativni sistemi i mobilne aplikacije uključuju funkciju „Ne prati“ („DNT“) ili podešavanje koje možete aktivirati da biste signalizirali svoju sklonost privatnosti da se ne prate i prikupljaju podaci o vašim aktivnostima pregledanja na mreži. U ovoj fazi nije dovršen jedinstveni tehnološki standard za prepoznavanje i implementaciju DNT signala. Kao takvi, trenutno ne reagujemo na signale DNT pregledača ili bilo koji drugi mehanizam koji automatski saopštava vaš izbor da se ne prati na mreži. Ako se usvoji standard za praćenje na mreži koji moramo poštovati u budućnosti, obavestićemo vas o toj praksi u revidiranoj verziji ovog obaveštenja o privatnosti.",
      },
    ],
  },
  {
    n: 10,
    id: "azuriranje-obavestenja",
    title: "DA LI AŽURIRAMO OBAVEŠTENJE O POLITICI PRIVATNOSTI?",
    blocks: [
      { type: "callout", text: "Ukratko: Da, ažuriraćemo ovo obaveštenje po potrebi kako bismo ostali u skladu sa relevantnim zakonima." },
      {
        type: "p",
        text: "Možemo s vremena na vreme ažurirati ovo obaveštenje o privatnosti. Ažurirana verzija će biti označena ažuriranim datumom „Revidirani“, a ažurirana verzija će stupiti na snagu čim bude dostupna. Ako unesemo bitne izmene u ovo obaveštenje o privatnosti, možemo vas obavestiti ili vidnim objavljivanjem obaveštenja o takvim promenama ili direktnim slanjem obaveštenja. Predlažemo vam da često pregledavate ovo obaveštenje o privatnosti kako biste bili informisani o tome kako štitimo vaše podatke.",
      },
    ],
  },
  {
    n: 11,
    id: "kako-nas-kontaktirati",
    title: "KAKO NAS MOŽETE KONTAKTIRATI O OVOM OBAVEŠTENJU?",
    blocks: [
      { type: "p", text: "Ako imate pitanja ili komentare u vezi sa ovim obaveštenjem, možete nam poslati e -mail na kontakt@sajtpress.rs ili poštom na:" },
      { type: "p", text: "Sajtpress Lipovički put 110 Beograd, Barajevo/Lipovica 11460 Srbija" },
    ],
  },
  {
    n: 12,
    id: "pregled-azuriranje-brisanje",
    title: "KAKO MOŽETE PREGLEDATI, AŽURIRATI ILI BRISATI PODATKE KOJE PRIKUPLJAMO OD VAS?",
    blocks: [
      {
        type: "p",
        text: "Na osnovu važećih zakona vaše zemlje, možda ćete imati pravo da zatražite pristup ličnim podacima koje prikupljamo od vas, da u nekim okolnostima promenite te podatke ili ih izbrišete. Da biste zatražili pregled, ažuriranje ili brisanje vaših ličnih podataka, pošaljite obrazac za zahtev klikom ovde.",
      },
    ],
  },
];

export const toc = sections.map((s) => ({ id: s.id, text: `${s.n}. ${s.title}` }));
