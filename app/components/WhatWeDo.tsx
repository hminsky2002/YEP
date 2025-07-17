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
          className="h-[80px] object-cover object-center lg:mt-[-2px] lg:h-[120px] lg:w-screen lg:object-cover"
        />
      )}

      <div className="my-32 flex w-full flex-col items-center justify-center lg:mx-auto lg:my-[86px] lg:flex-row lg:gap-[60px] lg:pb-[20px]">
        <h1 className="pb-4 font-bold text-red underline decoration-2 underline-offset-[20px] lg:text-[65px] lg:font-extrabold lg:underline-offset-[30px]">
          {header}
        </h1>

        <div className="mx-8 mt-12 flex max-w-[586px] flex-col gap-[10px] lg:mx-0 lg:mt-0">
          {description && (
            <div className="text-center">
              <CustomPortableText value={description as PortableTextBlock[]} />
            </div>
          )}
          {link && (
            <div className="mx-auto rounded-full border-2 border-red px-8 py-1 text-[15px] font-bold leading-none text-red lg:mt-2">
              <Link link={link as LinkValue} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
