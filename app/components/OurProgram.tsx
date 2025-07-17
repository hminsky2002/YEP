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
          className="desktop-banner hidden size-full h-auto object-cover object-center lg:block"
        />
      )}
      <div className="mobile-banner relative after:absolute after:inset-0 after:z-0 after:bg-black after:bg-opacity-[50%] lg:hidden">
        {image?.assetPath && (
          <Image
            src={image.assetPath}
            alt={image.caption || ""}
            width={2000}
            height={2000}
            className="h-[300px] object-cover"
          />
        )}
        <h1 className="absolute bottom-0 left-10 z-10 pb-12 font-bold text-white">
          {header}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-[100px] rounded-br-[8rem] bg-white py-[90px] lg:w-full lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h1 className="hidden w-full pb-12 font-bold underline decoration-1 underline-offset-[20px] lg:block lg:mb-[40px]">
            {header}
          </h1>
          {description && (
            <div className="mx-[3.7rem] text-left lg:mx-0 lg:max-w-[436px]">
              <CustomPortableText value={description as PortableTextBlock[]} />
              <div className="mt-12 flex flex-col lg:hidden">
                <p className="pb-4">{missionHeader}</p>
                {mission && (
                  <div className="flex flex-col gap-[40px]">
                    {mission.map((item) => (
                      <div
                        key={item._key}
                        className="gap flex flex-row items-center gap-4"
                      >
                        <span className="text-[48px] font-extrabold text-red">
                          {item.number}.
                        </span>
                        <p className="body">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="hidden flex-col lg:flex lg:max-w-[451px]">
          <p className="pb-12">{missionHeader}</p>
          {mission && (
            <div className="flex flex-col gap-[55px]">
              {mission.map((item) => (
                <div
                  key={item._key}
                  className="gap flex flex-row items-center justify-center"
                >
                  <div className="w-[100px] text-[58px] font-extrabold text-red lg:mt-[30px]">
                    {item.number}.
                  </div>
                  <p className="body w-[300px]">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
