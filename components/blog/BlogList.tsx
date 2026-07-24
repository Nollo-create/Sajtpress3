"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Clock } from "lucide-react";
import { posts, categories, categorySlug, categoryFromSlug, type Post } from "@/lib/blog";

function Card({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40"
    >
      {/* Cover — slika ili gradijent + kategorija */}
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${post.gradient}`}>
        {post.cover && (
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent)]" />
        {!post.cover && (
          <>
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:14px_14px]" />
            <span className="pointer-events-none absolute -bottom-4 right-3 font-serif text-7xl font-semibold text-white/15">
              {post.category.charAt(0)}
            </span>
          </>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      {/* Sadržaj */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>

        <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4 text-xs text-muted">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand to-coral text-[10px] font-semibold text-white">
            {post.author.initials}
          </span>
          <span className="text-foreground/80">{post.author.name}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span className="ml-auto inline-flex items-center gap-1">
            <Clock size={12} />
            {post.readTime} min
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogList() {
  // Aktivna kategorija se čita iz URL-a (npr. /blog?kategorija=seo),
  // pa meni, filter-dugmad i deljenje linka rade istu stvar.
  const active = categoryFromSlug(useSearchParams().get("kategorija"));
  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  const pill = (selected: boolean) =>
    "rounded-full border px-4 py-1.5 text-sm transition-colors " +
    (selected
      ? "border-brand bg-brand text-white"
      : "border-border bg-surface/40 text-muted hover:border-brand/40 hover:text-foreground");

  return (
    <div>
      {/* Filter kategorija — menja i URL da se izbor može podeliti */}
      <div id="clanci" className="flex scroll-mt-28 flex-wrap gap-2.5">
        <Link href="/blog" scroll={false} className={pill(active === null)}>
          Sve
        </Link>
        {categories.map((c) => (
          <Link
            key={c.name}
            href={`/blog?kategorija=${categorySlug(c.name)}`}
            scroll={false}
            className={pill(active === c.name)}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted">Nema članaka u ovoj kategoriji.</p>
      )}
    </div>
  );
}
