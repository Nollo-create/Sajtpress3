import type { Metadata } from "next";
import {
  Inter,
  Hanken_Grotesk,
  JetBrains_Mono,
  Space_Grotesk,
  Fraunces,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sajtpress.rs"),
  title: {
    default: "Sajtpress — Izrada modernih sajtova po meri",
    template: "%s | Sajtpress",
  },
  description:
    "Dizajniramo i razvijamo brze, moderne sajtove po meri za male firme, agencije i startape. Zakažite besplatnu konsultaciju.",
  openGraph: {
    title: "Sajtpress — Izrada modernih sajtova po meri",
    description:
      "Dizajniramo i razvijamo brze, moderne sajtove po meri. Zakažite besplatnu konsultaciju.",
    url: "https://sajtpress.rs",
    siteName: "Sajtpress",
    locale: "sr_RS",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${inter.variable} ${hanken.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
