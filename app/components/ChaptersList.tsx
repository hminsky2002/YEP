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
            className={`mb-20 flex items-center justify-between lg:w-[1122px] ${
              !isEven ? "flex-row-reverse" : ""
            }`}
          >
            <div className="relative max-w-[350px] lg:max-w-full">
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
                    className={`size-full h-[300px] w-full object-cover lg:size-auto lg:min-h-[500px] lg:min-w-[600px] lg:object-fill ${isEven ? "lg:drop-shadow-image-left" : "lg:drop-shadow-image-right"}`}
                  />
                )}
              </div>
              <div
                className={`top-[20%] flex flex-col items-center justify-center shadow-lg lg:absolute lg:h-[349px] lg:w-[560px] ${isEven ? "left-[80%] rounded-bl-[5rem] lg:rounded-tr-[5rem]" : "right-[80%] rounded-br-[5rem] lg:rounded-tl-[5rem]"}`}
                style={{ backgroundColor: chapter.descriptionColor || "#fff" }}
              >
                <div className="mx-auto flex max-w-[406px] items-center justify-center p-8 text-center">
                  <CustomPortableText
                    value={chapter.description as PortableTextBlock[]}
                  />
                </div>
                <div
                  className={`mb-4 rounded-full border-2 border-black bg-white bg-opacity-[70%] px-8 text-center transition-all hover:bg-opacity-[10%] lg:mb-0`}
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
