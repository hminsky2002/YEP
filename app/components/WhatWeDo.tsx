import Image from "next/image";
import type { WhatWeDoQueryResult } from "@/sanity.types";
import { Link } from "./Link";
import { LinkValue } from "sanity-plugin-link-field";
import { CustomPortableText } from "./CustomPortableText";
import { PortableTextBlock } from "next-sanity";
type WhatWeDoProps = {
  content: WhatWeDoQueryResult["whatWeDo"];
};

export default function WhatWeDo({ content }: WhatWeDoProps) {
  const { header, description, image, link } = content || {};

  return (
    <div className="flex w-full flex-col items-center gap-12 bg-yellow md:gap-0">
      {image?.assetPath && (
        <Image
          src={image.assetPath}
          alt={image.caption || "What We Do"}
          width={2000}
          height={2000}
          className="size-full object-contain object-center"
        />
      )}

      <div className="mx-auto flex w-full flex-row items-center justify-center gap-[100px] py-[100px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-4 font-bold text-red">{header}</h1>
          <div className="h-1 w-full bg-red"></div>
        </div>
        <div className="flex max-w-[586px] flex-col">
          {description && (
            <div className="text-center">
              <CustomPortableText value={description as PortableTextBlock[]} />
            </div>
          )}
          {link && (
            <div className="mx-auto mt-2 rounded-full border-2 border-red px-8 py-1 text-[15px] leading-none text-red">
              <Link link={link as LinkValue} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
