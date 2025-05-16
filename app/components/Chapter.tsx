import { ChapterComponentQueryResult } from "@/sanity.types";
import AtSymbol from "./AtSymbol";
import Image from "next/image";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import { PortableTextBlock } from "next-sanity";
type Props = {
  content: ChapterComponentQueryResult["chapterComponent"];
};

export default function Chapter({ content }: Props) {
  const { header, image, timeline, imageGallery } = content || {};

  return (
    <div className="flex flex-col">
      <div className="flex h-[800px] bg-white">
        <div className="mx-auto flex items-center justify-center">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <div className="flex h-[339px] flex-col justify-end">
                <div className="text-[100px] font-bold">YEP!</div>
              </div>
              {image?.assetPath && (
                <Image
                  src={image?.assetPath}
                  alt={image?.caption || ""}
                  width={1000}
                  height={1000}
                  className="h-[339px] w-[602px] rounded-tl-[100px] shadow-[8px_8px_2px_0px_rgba(0,0,0,0.3)]"
                />
              )}
            </div>
            <div className="flex flex-row items-center gap-4">
              <AtSymbol />
              <div className="text-[120px] font-bold text-red">{header}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[1000px] flex-col items-center justify-center">
        <div className="mb-[200px] flex flex-col gap-4">
          <h1 className="mb-[200px] underline decoration-1">
            A Chapter History
          </h1>
          <div className="flex flex-row">
            {timeline &&
              timeline.map((timelineItem, index) => (
                <div
                  className="w-[400px] text-center"
                  key={index}
                  style={{
                    borderRight:
                      index == timeline.length - 1 ? "none" : "2px solid black",
                  }}
                >
                  <h3 className="mb-2 font-medium">{timelineItem.header}</h3>
                  <div
                    className="h-[31px] w-full bg-red"
                    style={{
                      borderRadius:
                        index == 0
                          ? "100px 0 0 100px"
                          : index == timeline.length - 1
                            ? "0 100px 100px 0"
                            : "0",
                    }}
                  ></div>
                  <h3 className="mt-4 font-medium">{timelineItem.subHeader}</h3>
                  <div className="mx-auto mt-4 w-[220px]">
                    <CustomPortableText
                      value={timelineItem.description as PortableTextBlock[]}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex h-[1342px] flex-col items-center justify-center rounded-tl-[200px] bg-orange">
        <div className="flex w-full max-w-[1263px] flex-col items-center justify-center px-4 md:px-8">
          <h1 className="mb-[100px] text-center text-white underline decoration-1">
            Meet Our Team
          </h1>
          <div className="grid h-[900px] w-full gap-4 border-orange bg-white">
            {imageGallery?.map((galleryImage, index) => {
              if (
                galleryImage.imageColumnEnd &&
                galleryImage.imageColumnStart &&
                galleryImage.imageRowEnd &&
                galleryImage.imageRowStart &&
                galleryImage.image?.assetPath
              ) {
                return (
                  <div
                    key={index}
                    className="relative border-4 border-white"
                    style={{
                      gridColumn: `${galleryImage.imageColumnStart} / ${galleryImage.imageColumnEnd + 1}`,
                      gridRow: `${galleryImage.imageRowStart} / ${galleryImage.imageRowEnd + 1}`,
                    }}
                  >
                    <Image
                      src={galleryImage.image.assetPath}
                      alt={galleryImage.image.caption || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
