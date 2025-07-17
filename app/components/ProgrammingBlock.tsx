import type { ProgrammingBlockQueryResult } from "@/sanity.types";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { CustomPortableText } from "./CustomPortableText";

type ProgrammingBlockProps = {
  content: ProgrammingBlockQueryResult["programmingBlock"];
};

export default function ProgrammingBlock({ content }: ProgrammingBlockProps) {
  const { header, programmingCards } = content || {};

  return (
    <div className="flex flex-col bg-yellow lg:mx-[14%]">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="mx-auto mt-[9.8rem] flex max-w-[500px] text-center lg:mx-0 lg:block lg:max-w-full lg:text-left lg:underline lg:decoration-1 lg:underline-offset-[29px]">
          {header}
        </h1>
        <div className="my-36 flex flex-col items-center justify-center gap-[107px] lg:flex-row lg:items-start lg:justify-normal">
          {programmingCards?.map((card, index) => (
            <div className="flex flex-col" key={index}>
              {card?.image?.assetPath && (
                <Image
                  src={card.image.assetPath}
                  alt={card.image.caption || ""}
                  width={1000}
                  height={1000}
                  className="drop-shadow-image-right size-[300px] object-cover"
                />
              )}
              <div className="mx-auto mt-[3.4rem] w-[226px] rounded-full border border-black bg-red py-1 text-center text-[15px] font-bold text-white">
                {card.title}
              </div>
              <div className="mt-14 max-w-[300px] text-center">
                <CustomPortableText
                  value={card.description as PortableTextBlock[]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
