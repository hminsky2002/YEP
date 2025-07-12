import Image from "next/image";
import type { ChaptersGalleryQueryResult } from "@/sanity.types";
import { Link } from "./Link";
import { LinkValue } from "sanity-plugin-link-field";
type ChaptersGalleryProps = {
  content: ChaptersGalleryQueryResult["chaptersGallery"];
};

export default function ChaptersGallery({ content }: ChaptersGalleryProps) {
  const { header, subHeader, chaptersLink, directorsLink, chapters } =
    content || {};

  return (
    <div className="mx-auto my-[50px] flex flex-col items-center border-black lg:max-w-[1263px] lg:flex-row lg:items-start">
      <div className="mr-8 hidden h-[509px] bg-black pr-px lg:block" />
      <div className="flex flex-col">
        <div className="flex w-full flex-col justify-start text-center lg:flex-row">
          <h1 className="text-red">{header}</h1>
          <div className="mx-auto mt-4 max-w-[240px] text-center lg:mt-0 lg:flex lg:max-w-full lg:flex-col lg:justify-end lg:text-left">
            <p>{subHeader}</p>
          </div>
        </div>
        <div className="mt-[40px] flex flex-col items-center gap-6 lg:flex-row">
          {chapters?.map((chapter) => {
            return (
              <div key={chapter._key}>
                {chapter.image?.assetPath && (
                  <div>
                    <div className="flex flex-col">
                      <Image
                        src={chapter.image.assetPath}
                        alt={chapter.image.caption || ""}
                        width={500}
                        height={500}
                        className="h-[242px] w-[233px]"
                      />
                    </div>
                    <div className="w-[233px] rounded-b-full bg-orange p-8">
                      <Link
                        link={chapter.link as LinkValue}
                        className="text-center"
                      >
                        <h4 className="underline underline-offset-4">
                          {chapter.link?.text}
                        </h4>
                      </Link>
                    </div>
                    <div className="mt-4 text-center">
                      <p>{chapter.chapterTitle}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-[40px] flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-32">
          <Link
            link={chaptersLink as LinkValue}
            className="w-[226px] rounded-full border-2 border-black bg-white px-4 py-6 text-center"
          >
            <h4 className="">{chaptersLink?.text}</h4>
          </Link>
          <Link
            link={directorsLink as LinkValue}
            className="w-[226px] rounded-full border-2 border-black bg-white px-4 py-6 text-center"
          >
            <h4 className="">{directorsLink?.text}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
