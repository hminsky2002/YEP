import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { homepageQuery } from "@/sanity/lib/queries";
import Content from "@/app/components/Content";

export async function generateMetadata(): Promise<Metadata> {
  const data =
    (await sanityFetch({
      query: homepageQuery,
      stega: false,
    })) || {};

  const { SEO } = data.homepage;

  const title = SEO?.metaTitle || "YEP Young Entrepeneurs Program";
  const description = SEO?.metaDescription || "";

  return {
    metadataBase: new URL("https://www.yepprogram.org"),
    title,
    description,
    openGraph: {
      title: SEO?.openGraphTitle,
      description: SEO?.openGraphDescription,
      url: "https://www.yepprogram.org",
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

export default async function Page() {
  const data = await sanityFetch({ query: homepageQuery });

  return (
    <main>
      <Content data={data?.homepage?.content} />
    </main>
  );
}
