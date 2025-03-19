import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { pageQuery } from "@/sanity/lib/queries";
import Content from "@/app/components/Content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data =
    (await sanityFetch({
      query: pageQuery,
      params,
      // Metadata should never contain stega
      stega: false,
    })) || {};

  const { SEO } = data.page;

  const title = SEO?.metaTitle;
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

export default async function Page({ params }: Props) {
  const data = await sanityFetch({ query: pageQuery, params });

  return (
    <main>
      <Content data={data?.page?.content} />
    </main>
  );
}
