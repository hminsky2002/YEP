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
      <div className="w-full rounded-t-[8rem] bg-white py-12 lg:pt-0">
        <div className="flex items-center justify-center lg:mx-auto lg:h-[764px] lg:max-w-[1100px] lg:flex-row">
          <div className="flex flex-col gap-12 lg:block lg:w-[500px] lg:gap-0">
            <h1 className="text-center text-red">{header}</h1>
            {image?.assetPath && (
              <Image
                src={image?.assetPath || ""}
                width={1200}
                height={1200}
                alt={image?.caption || "missing alt"}
                className="mx-auto max-w-[300px] lg:hidden"
              />
            )}
            <div className="flex max-w-[300px] flex-col lg:block lg:max-w-[400px] lg:px-0 lg:text-right">
              <div className="text-center lg:text-left">
                <CustomPortableText
                  value={description as PortableTextBlock[]}
                />
              </div>
              <div className="mx-auto mt-12 inline-flex rounded-full border-2 border-red px-6 font-bold text-red lg:mt-6 lg:block lg:px-10">
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
