import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Quote, Lightbulb, Hash } from "lucide-react";
import { getHeadings, type Block } from "@/lib/blog";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Pretvara markdown linkove u React elemente; ostatak teksta ostaje netaknut. */
function richText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const m of text.matchAll(LINK_RE)) {
    const [full, label, href] = m;
    const start = m.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));

    const cls =
      "font-medium text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand";
    parts.push(
      href.startsWith("/") ? (
        <Link key={start} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={start} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {label}
        </a>
      ),
    );
    last = start + full.length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts.map((p, i) => <Fragment key={i}>{p}</Fragment>) : text;
}

/** Naslov kao sidro — klik vodi na sekciju, „#“ se pojavljuje na hover. */
function AnchoredHeading({
  as: Tag,
  id,
  className,
  iconSize,
  children,
}: {
  as: "h2" | "h3" | "h4";
  id: string;
  className: string;
  iconSize: number;
  children: string;
}) {
  return (
    <Tag id={id} className={`group scroll-mt-28 ${className}`}>
      <a href={`#${id}`} className="inline-flex items-start gap-2 transition-colors hover:text-brand">
        <span>{children}</span>
        <Hash
          size={iconSize}
          aria-hidden
          className="mt-[0.35em] shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-70"
        />
      </a>
    </Tag>
  );
}

export function PostBody({ content }: { content: Block[] }) {
  // Prvi pasus dobija drop-cap; indeks se računa unapred da se tokom
  // rendera ništa ne menja.
  const firstParagraph = content.findIndex((b) => b.type === "p");
  const headings = getHeadings(content);
  let headingIndex = 0;

  return (
    <div className="space-y-6">
      {content.map((block, i) => {
        if (block.type === "lead") {
          return (
            <p
              key={i}
              className="border-l-2 border-brand pl-5 font-serif text-xl italic leading-snug text-foreground sm:text-2xl"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "h2" || block.type === "h3" || block.type === "h4") {
          const { id } = headings[headingIndex++];
          const style = {
            h2: { className: "pt-6 font-serif text-2xl text-foreground sm:text-3xl", iconSize: 18 },
            h3: { className: "pt-3 font-display text-xl text-foreground", iconSize: 16 },
            h4: { className: "pt-2 font-mono text-sm uppercase tracking-wider text-brand", iconSize: 13 },
          }[block.type];

          return (
            <AnchoredHeading key={i} as={block.type} id={id} {...style}>
              {block.text}
            </AnchoredHeading>
          );
        }

        if (block.type === "p") {
          const dropcap = i === firstParagraph;
          return (
            <p
              key={i}
              className={`text-lg leading-relaxed text-foreground/85 ${dropcap ? "dropcap" : ""}`}
            >
              {richText(block.text)}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-foreground/85">
                  <Check size={20} className="mt-1 shrink-0 text-brand" />
                  <span>{richText(item)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "img") {
          return (
            <figure key={i} className="my-8">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={1280}
                  height={720}
                  className="h-auto w-full"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-3 text-center text-sm text-muted">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="relative rounded-2xl border border-border bg-surface/40 p-6 pl-14"
            >
              <Quote size={22} className="absolute left-5 top-6 text-brand" />
              <p className="font-serif text-xl italic text-foreground">{block.text}</p>
              {block.cite && <cite className="mt-3 block text-sm not-italic text-muted">— {block.cite}</cite>}
            </blockquote>
          );
        }

        // callout
        return (
          <div
            key={i}
            className="flex items-start gap-3 rounded-2xl border border-brand/30 bg-brand/10 p-5 text-foreground"
          >
            <Lightbulb size={20} className="mt-0.5 shrink-0 text-brand" />
            <p>{richText(block.text)}</p>
          </div>
        );
      })}
    </div>
  );
}
