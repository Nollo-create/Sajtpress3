import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { LegalDoc } from "@/components/LegalDoc";
import { intro, sections, updated } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Kako Sajtpress prikuplja, koristi i štiti vaše lične podatke — uz kratke sažetke uz svaku sekciju.",
};

export default function PolitikaPrivatnostiPage() {
  return (
    <LegalDoc
      icon={ShieldCheck}
      title="Politika privatnosti"
      subtitle="Bez sitnih slova — evo kako prikupljamo, koristimo i štitimo vaše podatke. Uz kratak „Ukratko“ sažetak uz svaku sekciju."
      updated={updated}
      intro={intro}
      sections={sections}
    />
  );
}
