import type { Metadata } from "next";
import { ScrollText } from "lucide-react";
import { LegalDoc } from "@/components/LegalDoc";
import { intro, sections, introHeading } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
  description:
    "Pravila i odredbe za korišćenje veb stranice Sajtpress — licenca, hiperlinkovi, odgovornost i odricanje odgovornosti.",
};

export default function UsloviKoriscenjaPage() {
  return (
    <LegalDoc
      icon={ScrollText}
      title="Uslovi korišćenja"
      subtitle="Pravila igre, bez pravničke magle. Evo šta važi kada koristite naš sajt i sadržaj."
      introHeading={introHeading}
      intro={intro}
      sections={sections}
    />
  );
}
