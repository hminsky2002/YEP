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
    <div className="flex w-full flex-col items-center bg-yellow lg:gap-0">
      {image?.assetPath && (
        <Image
          src={image.assetPath}
          alt={image.caption || "What We Do"}
          width={2000}
          height={2000}
          className="h-[80px] object-cover object-center lg:size-full lg:object-contain"
        />
      )}

      <div className="lg:my-0lg:gap-[100px] my-32 flex w-full flex-col items-center justify-center lg:mx-auto lg:flex-row lg:py-[100px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-4 font-bold text-red">{header}</h1>
          <div className="h-1 w-full bg-red"></div>
        </div>
        <div className="mx-8 mt-12 flex flex-col lg:mt-0 lg:max-w-[586px]">
          {description && (
            <div className="text-center">
              <CustomPortableText value={description as PortableTextBlock[]} />
            </div>
          )}
          {link && (
            <div className="mx-auto mt-12 rounded-full border-2 border-red px-8 py-1 text-[15px] leading-none text-red lg:mt-2">
              <Link link={link as LinkValue} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
