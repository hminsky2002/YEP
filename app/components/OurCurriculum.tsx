import type { OurCurriculumQueryResult } from "@/sanity.types";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { CustomPortableText } from "./CustomPortableText";

type OurCurriculumProps = {
  content: OurCurriculumQueryResult["ourCurriculum"];
};

export default function OurCurriculum({ content }: OurCurriculumProps) {
  const { header, curriculumCards } = content || {};

  return (
    <div className="flex w-full flex-col bg-orange py-[100px]">
      <div className="mx-auto flex w-full flex-row items-center justify-center gap-[100px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold underline decoration-1 underline-offset-[20px]">
            {header}
          </h1>

          <div className="w-[436px] text-left"></div>
        </div>
        <div className="flex w-[451px] flex-col"></div>
      </div>
      <div className="mt-[95px] flex flex-col gap-[100px]">
        {curriculumCards?.map((card, index) => (
          <div
            key={index}
            className={`flex ${index % 2 != 0 ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex h-[524px] w-[1300px] justify-end gap-[80px] bg-white py-[70px] ${index % 2 != 0 ? "flex-row-reverse rounded-l-[20px]" : "flex-row rounded-r-[20px]"}`}
            >
              <div className="flex flex-col">
                {card?.icon?.assetPath && (
                  <Image
                    src={card.icon.assetPath}
                    alt={card.icon.caption || ""}
                    width={1000}
                    height={1000}
                    className="mx-auto size-[120px] object-contain"
                  />
                )}
                <div className="mx-auto max-w-[400px] pt-[44px] text-center">
                  <CustomPortableText
                    value={card.description as PortableTextBlock[]}
                  />
                </div>
              </div>
              <div
                className={`flex ${index % 2 != 0 ? "ml-[20px] justify-end" : "mr-[20px] justify-start"} `}
              >
                {card?.image?.assetPath && (
                  <Image
                    src={card.image.assetPath}
                    alt={card.image.caption || ""}
                    width={1000}
                    height={1000}
                    className="max-w-[600px] object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
