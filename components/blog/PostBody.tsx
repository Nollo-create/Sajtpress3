import { Check, Quote, Lightbulb } from "lucide-react";
import { slugifyHeading, type Block } from "@/lib/blog";

export function PostBody({ content }: { content: Block[] }) {
  let firstParagraph = true;

  return (
    <div className="space-y-6">
      {content.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              id={slugifyHeading(block.text)}
              className="scroll-mt-28 pt-4 font-serif text-2xl text-foreground sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "p") {
          const dropcap = firstParagraph;
          firstParagraph = false;
          return (
            <p
              key={i}
              className={`text-lg leading-relaxed text-foreground/85 ${dropcap ? "dropcap" : ""}`}
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-foreground/85">
                  <Check size={20} className="mt-1 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
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
            <p>{block.text}</p>
          </div>
        );
      })}
    </div>
  );
}
