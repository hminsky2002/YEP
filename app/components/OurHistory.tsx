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
      <div className="mx-auto flex w-full flex-row items-center justify-center gap-[100px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-12 font-bold underline decoration-1 underline-offset-[20px]">
            {header}
          </h1>

          <div className="w-[436px] text-left"></div>
        </div>
        <div className="flex w-[451px] flex-col"></div>
      </div>

      <ol className="relative mx-auto items-start gap-[80px] sm:flex">
        <div className="absolute top-[204px] h-px w-full bg-black"></div>
        {timelineItems?.map((item, index) => (
          <li className="relative mb-6 sm:mb-0" key={index}>
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
                className={`z-10 mb-[-8px] flex size-6 shrink-0 items-center justify-center rounded-full bg-red ${
                  index % 2 === 0 ? "bg-red" : "bg-white"
                }`}
              ></div>
              <div className="mt-[50px] flex flex-col items-center justify-center text-center">
                <div className="">
                  <h4 className="font-semibold">{item.header}</h4>
                  <div className="mt-[30px] max-w-[246px] font-normal">
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
