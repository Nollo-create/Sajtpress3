import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { services } from "@/lib/serviceDetails";

const data = services["placanje-karticama"];

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServiceDetail data={data} />
      </main>
      <Footer />
    </>
  );
}
