import Image from "next/image";
import type { ChaptersListQueryResult } from "@/sanity.types";
import { Link } from "./Link";
import { LinkValue } from "sanity-plugin-link-field";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import { PortableTextBlock } from "next-sanity";

type ChaptersListProps = {
  content: ChaptersListQueryResult["chaptersList"];
};
export default function ChaptersList({ content }: ChaptersListProps) {
  const { header, chapters } = content || {};
  return (
    <div className="flex flex-col items-center bg-white py-20">
      <h1 className="mb-16 mt-[85px] underline decoration-1">{header}</h1>

      {chapters?.map((chapter, i) => {
        const isEven = i % 2 === 0;

        return (
          <div
            key={chapter._key}
            className={`mb-20 flex w-[1122px] items-center justify-between ${
              !isEven ? "flex-row-reverse" : ""
            }`}
          >
            <div className="relative">
              <div className="h-[500px] w-[600px]">
                <h3 className="z-10 inline-block rounded-tl-lg rounded-tr-lg border border-black bg-white px-4 py-1 font-semibold">
                  {chapter.title}
                </h3>
                {chapter.image?.assetPath && (
                  <Image
                    src={chapter.image.assetPath}
                    alt={chapter.image.caption || ""}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </div>

            <div
              className={`relative flex h-[349px] w-[560px] flex-col justify-between shadow-lg`}
              style={{ backgroundColor: chapter.descriptionColor || "#fff" }}
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${
                  isEven ? "right-10" : "left-10"
                }`}
                style={{ width: 0, height: 0 }}
              />
              <div className="max-w-[406px] p-8">
                <CustomPortableText
                  value={chapter.description as PortableTextBlock[]}
                />
              </div>
              <div
                className={`w-[233px] rounded-full border-2 border-black bg-white px-4 py-6 text-center`}
              >
                <Link
                  link={chapter.link as LinkValue}
                  className="block text-center"
                >
                  <h4>{chapter.link?.text}</h4>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
