import Image from "next/image";
import type { OurProgramQueryResult } from "@/sanity.types";
import { CustomPortableText } from "./CustomPortableText";
import { PortableTextBlock } from "next-sanity";
type OurProgramProps = {
  content: OurProgramQueryResult["ourProgram"];
};

export default function OurProgram({ content }: OurProgramProps) {
  const { header, description, image, missionHeader, mission } = content || {};

  return (
    <div className="flex w-full flex-col items-center bg-yellow pt-[80px]">
      {image?.assetPath && (
        <Image
          src={image.assetPath}
          alt={image.caption || "What We Do"}
          width={2000}
          height={2000}
          className="size-full object-contain object-center"
        />
      )}

      <div className="mx-auto flex w-full flex-row items-center justify-center gap-[100px] bg-white py-[40px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-12 font-bold underline decoration-1 underline-offset-[20px]">
            {header}
          </h1>
          {description && (
            <div className="max-w-[436px] text-left">
              <CustomPortableText value={description as PortableTextBlock[]} />
            </div>
          )}
        </div>
        <div className="flex max-w-[451px] flex-col">
          <p className="pb-4">{missionHeader}</p>
          {mission && (
            <div className="flex flex-col gap-[20px]">
              {mission.map((item) => (
                <div
                  key={item._key}
                  className="gap flex flex-row items-center gap-4"
                >
                  <span className="h1 font-bold text-red">{item.number}.</span>
                  <p className="body">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
