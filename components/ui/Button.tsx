import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-light",
  secondary:
    "border border-border bg-surface/40 text-foreground hover:border-white/20 hover:bg-surface",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    const { href, ...rest } = props as { href: string };
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
