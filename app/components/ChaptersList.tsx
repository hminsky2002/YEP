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
              <div>
                <div className={`flex w-full ${isEven ? "" : "justify-end"}`}>
                  <h3
                    className={`z-10 inline-flex border border-black bg-white px-[40px] py-4 ${isEven ? "rounded-tr-[5rem]" : "rounded-tl-[5rem]"}`}
                  >
                    {chapter.title}
                  </h3>
                </div>
                {chapter.image?.assetPath && (
                  <Image
                    src={chapter.image.assetPath}
                    alt={chapter.image.caption || ""}
                    width={2000}
                    height={2000}
                    className={`h-full min-h-[500px] w-full min-w-[600px] ${isEven ? "drop-shadow-image-left" : "drop-shadow-image-right"}`}
                  />
                )}
              </div>
              <div
                className={`absolute top-[20%] flex h-[349px] w-[560px] flex-col items-center justify-center shadow-lg ${isEven ? "left-[80%] rounded-bl-[5rem] rounded-tr-[5rem]" : "right-[80%] rounded-br-[5rem] rounded-tl-[5rem]"}`}
                style={{ backgroundColor: chapter.descriptionColor || "#fff" }}
              >
                <div className="mx-auto flex max-w-[406px] items-center justify-center p-8 text-center">
                  <CustomPortableText
                    value={chapter.description as PortableTextBlock[]}
                  />
                </div>
                <div
                  className={`rounded-full border-2 border-black bg-white bg-opacity-[70%] px-8 text-center transition-all hover:bg-opacity-[10%]`}
                >
                  <Link
                    link={chapter.link as LinkValue}
                    className="block text-center"
                  >
                    <p>{chapter.link?.text}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
