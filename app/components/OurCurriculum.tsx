import type { OurCurriculumQueryResult } from "@/sanity.types";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { CustomPortableText } from "./CustomPortableText";

type OurCurriculumProps = {
  content: OurCurriculumQueryResult["ourCurriculum"];
};

function NumberComponent({
  num,
  className,
  topClipY,
  bottomClipY,
  topClipX,
  bottomClipX,
  topClipId,
  bottomClipId,
}: {
  num: number;
  className: string;
  topClipY: number;
  bottomClipY: number;
  topClipX: number;
  bottomClipX: number;
  topClipId: string;
  bottomClipId: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute size-[250px] font-bold ${className}`}
    >
      <defs>
        <clipPath id={topClipId}>
          <rect x={topClipX} y={topClipY} className="size-[250px]" />
        </clipPath>

        <clipPath id={bottomClipId}>
          <rect x={bottomClipX} y={bottomClipY} className="size-[250px]" />
        </clipPath>
      </defs>

      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        clip-path={`url(#${topClipId})`}
        className="fill-black stroke-none text-[250px]"
      >
        {num}
      </text>

      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        clip-path={`url(#${bottomClipId})`}
        className="fill-transparent stroke-black stroke-1 text-[250px]"
      >
        {num}
      </text>
    </svg>
  );
}

function Number({ index }: { index: number }) {
  switch (index % 3) {
    case 0:
      return (
        <NumberComponent
          num={index + 1}
          className="bottom-[-125px] left-0"
          topClipY={125}
          bottomClipY={0}
          topClipX={0}
          bottomClipX={0}
          topClipId={`clip-top-${index}`}
          bottomClipId={`clip-bottom-${index}`}
        />
      );
    case 1:
      return (
        <NumberComponent
          num={index + 1}
          className="bottom-[-150px] right-0"
          topClipY={100}
          bottomClipY={0}
          topClipX={0}
          bottomClipX={0}
          topClipId={`clip-top-${index}`}
          bottomClipId={`clip-bottom-${index}`}
        />
      );
    case 2:
      return (
        <NumberComponent
          num={index + 1}
          className="left-0 top-[-125px]"
          topClipY={-125}
          bottomClipY={0}
          topClipX={0}
          bottomClipX={0}
          topClipId={`clip-top-${index}`}
          bottomClipId={`clip-bottom-${index}`}
        />
      );
    default:
      return null;
  }
}

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
              className={`relative z-10 flex h-[524px] w-[1300px] justify-end gap-[80px] bg-white py-[70px] ${index % 2 != 0 ? "flex-row-reverse rounded-l-[20px]" : "flex-row rounded-r-[20px]"} ${index % 2 == 0 ? "mt-[100px]" : ""}`}
            >
              <Number index={index} />

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
