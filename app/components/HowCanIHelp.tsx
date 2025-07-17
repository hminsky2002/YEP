import Image from "next/image";
import type { HowCanIHelpBlockQueryResult } from "@/sanity.types";
import { Link } from "./Link";
import { LinkValue } from "sanity-plugin-link-field";
import { CustomPortableText } from "./CustomPortableText";
import type { PortableTextBlock } from "@portabletext/types";
type HowCanIHelpProps = {
  content: HowCanIHelpBlockQueryResult["howCanIHelpBlock"];
};

export default function HowCanIHelp({ content }: HowCanIHelpProps) {
  const { header, description, image, link } = content || {};

  return (
    <>
      <div className="w-full rounded-t-[8rem] bg-white py-24 lg:py-0">
        <div className="flex items-center justify-center lg:mx-auto lg:h-[764px] lg:max-w-[1100px] lg:flex-row lg:gap-[41px]">
          <div className="flex flex-col gap-12 lg:block lg:w-[500px] lg:justify-end lg:gap-0">
            <h1 className="text-center text-red lg:text-right">{header}</h1>
            {image?.assetPath && (
              <Image
                src={image?.assetPath || ""}
                width={1200}
                height={1200}
                alt={image?.caption || "missing alt"}
                className="mx-auto max-w-[300px] lg:hidden"
              />
            )}
            <div className="max-w-[300px] text-center lg:flex lg:max-w-full lg:justify-end lg:text-right">
              <div className="lg:max-w-[400px] lg:p-4">
                <CustomPortableText
                  value={description as PortableTextBlock[]}
                />
              </div>
            </div>
            <div className="mx-auto flex lg:mx-0 lg:w-full lg:justify-end">
              <div className="rounded-full border-2 border-red px-8 py-4 text-[15px] font-bold leading-none text-red lg:mt-8">
                <Link link={link as LinkValue} />
              </div>
            </div>
          </div>
          {image?.assetPath && (
            <Image
              src={image?.assetPath || ""}
              width={1200}
              height={1200}
              alt={image?.caption || "missing alt"}
              className="hidden lg:block lg:max-h-[500px] lg:max-w-[596px]"
            />
          )}
        </div>
      </div>
    </>
  );
}
