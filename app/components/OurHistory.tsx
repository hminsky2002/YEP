import type { OurHistoryQueryResult } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";

type OurHistoryProps = {
  content: OurHistoryQueryResult["ourHistory"];
};

export default function OurHistory({ content }: OurHistoryProps) {
  const { header, timelineItems } = content || {};

  return (
    <div className="flex w-full flex-col py-[100px]">
      <div className="mx-auto mb-[60px] flex w-full items-center justify-center gap-[100px] lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h1 className="ml-[45px] w-full pb-12 font-bold underline decoration-1 underline-offset-[20px]">
            {header}
          </h1>

          <div className="hidden w-[436px] text-left lg:block"></div>
        </div>
        <div className="hidden w-[451px] flex-col lg:flex"></div>
      </div>

      <ol className="relative mx-auto items-start gap-[80px] lg:flex">
        <div className="absolute top-[204px] ml-[10%] hidden h-px w-4/5 bg-black lg:block"></div>

        {timelineItems?.map((item, index) => (
          <li className="relative mb-6 sm:mb-0 lg:px-12" key={index}>
            <div className="mb-[20px] flex flex-col items-center justify-center">
              {item?.year?.assetPath && (
                <Image
                  src={item.year.assetPath}
                  alt={item.year.caption || ""}
                  width={1000}
                  height={1000}
                  className="mb-[-20px] size-[80px] object-contain"
                />
              )}
              {item?.icon?.assetPath && (
                <div className="pb-[46px]">
                  <div className="flex size-[91px] items-center justify-center justify-self-center rounded-full bg-red">
                    <Image
                      src={item.icon.assetPath}
                      alt={item.icon.caption || ""}
                      width={1000}
                      height={1000}
                      className="size-[60px] object-contain"
                    />
                  </div>
                </div>
              )}
              <div
                className={`z-10 mb-[-8px] hidden size-6 shrink-0 items-center justify-center rounded-full bg-white lg:flex`}
              ></div>
              <div className="flex flex-col items-center justify-center text-center lg:mt-[50px]">
                <div className="">
                  <h4 className="font-semibold">{item.header}</h4>
                  <div className="mt-[30px] max-w-[246px] font-normal lg:text-[14px]">
                    <PortableText
                      value={item.description as PortableTextBlock[]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
