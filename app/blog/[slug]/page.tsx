import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { BlogComments } from "@/components/blog/BlogComments";
import { PostBody } from "@/components/blog/PostBody";
import { getPost, getToc, getRelated, posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Članak nije pronađen" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = getToc(post);
  const related = getRelated(post, 3);

  return (
    <>
      <ReadingProgress />
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          {/* Nazad */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Blog
          </Link>

          {/* Zaglavlje */}
          <header className="mt-6 max-w-3xl">
            <span
              className={`inline-block rounded-full bg-gradient-to-r ${post.gradient} px-3 py-1 text-xs font-medium text-white`}
            >
              {post.category}
            </span>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-coral text-xs font-semibold text-white">
                  {post.author.initials}
                </span>
                <span className="text-foreground/80">{post.author.name}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} min čitanja
              </span>
            </div>
          </header>

          {/* Cover */}
          <div
            className={`relative mt-10 aspect-[21/9] overflow-hidden rounded-3xl bg-gradient-to-br ${post.gradient}`}
          >
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:18px_18px]" />
            <span className="pointer-events-none absolute -bottom-10 right-6 font-serif text-[12rem] font-semibold leading-none text-white/15">
              {post.category.charAt(0)}
            </span>
          </div>

          {/* Telo + sadržaj (TOC) */}
          <div className="mt-12 lg:grid lg:grid-cols-[1fr_15rem] lg:gap-14">
            <div className="min-w-0 max-w-2xl">
              <PostBody content={post.content} />

              {/* Tagovi */}
              <div className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface/40 px-3 py-1 text-xs text-muted"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Podeli */}
              <div className="mt-8 border-y border-border/60 py-5">
                <ShareButtons title={post.title} />
              </div>

              {/* Autor */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-surface/40 p-6">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-coral text-lg font-semibold text-white">
                  {post.author.initials}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Autor</p>
                  <p className="mt-0.5 text-foreground">{post.author.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {post.author.role} u Sajtpress timu. Piše o sajtovima, marketingu i dizajnu.
                  </p>
                </div>
              </div>

              {/* Komentari */}
              <div className="mt-12">
                <BlogComments />
              </div>
            </div>

            {/* Sticky sadržaj */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents items={toc} />
              </div>
            </aside>
          </div>

          {/* Newsletter */}
          <div className="mt-16">
            <NewsletterSignup />
          </div>

          {/* Povezani članci */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl text-foreground sm:text-3xl">Pročitajte i…</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-surface/40 transition-colors hover:border-brand/40"
                  >
                    <div className={`aspect-[16/10] bg-gradient-to-br ${r.gradient}`} />
                    <div className="p-5">
                      <span className="text-xs text-brand">{r.category}</span>
                      <h3 className="mt-1.5 font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-brand">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
