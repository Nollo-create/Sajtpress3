import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogList } from "@/components/blog/BlogList";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Saveti i vodiči o izradi sajtova, digitalnom marketingu, veb dizajnu, WordPress-u, SEO-u i IT vestima.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="aurora-center absolute left-1/4 top-[-8%] h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-brand/16 blur-[130px]" />
            <div
              className="aurora-float absolute right-[6%] top-[16%] h-[320px] w-[320px] rounded-full bg-coral/12 blur-[110px]"
              style={{ animationDelay: "-5s" }}
            />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
            {/* Hero */}
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 font-mono text-sm">
                <span className="text-brand">✦</span>
                <span className="h-px w-10 bg-brand/40" />
                <span className="uppercase tracking-[0.25em] text-muted">Blog</span>
              </div>
              <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
                Priče, saveti i <em className="italic text-brand">ideje</em>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted">
                Praktični vodiči o sajtovima, marketingu i dizajnu — iz prve ruke, bez
                komplikovanog žargona.
              </p>
            </div>

            {/* Lista sa filterom */}
            <div className="mt-14">
              <Suspense fallback={<div className="h-96" />}>
                <BlogList />
              </Suspense>
            </div>

            {/* Newsletter */}
            <div className="mt-20">
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
