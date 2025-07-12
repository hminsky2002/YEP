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
    <div className="mx-[14%] flex w-full flex-col bg-yellow">
      <h1 className="mt-[9.8rem] underline decoration-1 underline-offset-[29px]">
        {header}
      </h1>
      <div className="my-36 flex flex-row gap-[107px]">
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
  );
}
