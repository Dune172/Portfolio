import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name} — Learning Architect`,
  },
  description: SITE.description,
  keywords: [
    "learning architect",
    "learning technology architecture",
    "learning experience design",
    "ecosystem design",
    "systems thinking",
    "platform strategy",
    "AI in learning",
    "instructional technology",
    "learning operations",
    "WCAG accessibility",
    "instructional design",
    "learning engineering",
    "course development automation",
    "cross-functional collaboration",
    "strategic roadmap",
    "scalable solutions",
    "enterprise learning",
    "LMS administration",
    "LXP",
    "interoperability standards",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.title,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/*
          Hidden SVG filter used to tint raster org logos to the stone-500 font tone.
          Forces RGB to #8a8578 while passing the source alpha through untouched, so
          PNGs with transparent backgrounds stay transparent and only their visible
          ink gets recolored.
        */}
        <svg
          aria-hidden="true"
          focusable="false"
          width="0"
          height="0"
          style={{ position: "absolute" }}
        >
          <defs>
            <filter
              id="logo-tint"
              colorInterpolationFilters="sRGB"
            >
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.5412
                        0 0 0 0 0.5216
                        0 0 0 0 0.4706
                        0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cobalt focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <PersonJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
