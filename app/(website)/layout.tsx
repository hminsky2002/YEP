import "../globals.css";

import { Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

import AlertBanner from "./alert-banner";
import { Header } from "@/app/components/Header";
import { Footer } from "../components/Footer";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  headerQuery,
  footerQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import type React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const { SEO } =
    (await sanityFetch({
      query: siteSettingsQuery,
      // Metadata should never contain stega
      stega: false,
    })) || {};

  const title = SEO?.metaTitle || "Rhythm & Motion";
  const description = SEO?.metaDescription || "";

  return {
    metadataBase: new URL("https://www.rhythmandmotion.com/"),
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
    openGraph: {
      title: SEO?.openGraphTitle,
      description: SEO?.openGraphDescription,
      url: "https://www.rhythmandmotion.com/",
      siteName: title,
      images: [
        {
          url: SEO?.openGraphImage || "",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();
  const { header } = await sanityFetch({ query: headerQuery });
  const { footer } = await sanityFetch({ query: footerQuery });

  return (
    <html lang="en" className={`${manrope.className} `}>
      <body className="bg-yellow text-black">
        <section className="min-h-screen">
          {isDraftMode && <AlertBanner />}
          <Header data={header} />
          {children}
        </section>
        {isDraftMode && <VisualEditing />}
        <Footer data={footer} />
        <SpeedInsights />
      </body>
    </html>
  );
}
