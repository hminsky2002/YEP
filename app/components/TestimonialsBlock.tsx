import type { TestimonialsBlockQueryResult } from "@/sanity.types";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import Image from "next/image";
import { type PortableTextBlock } from "next-sanity";
import ChatBubbleSVG from "./ChatBubbleSVG";
type TestimonialsBlockProps = {
  content: TestimonialsBlockQueryResult["testimonialsBlock"];
};

export function TestimonialsBlock({ content }: TestimonialsBlockProps) {
  const { header, testimonials } = content || {};
  return (
    <div className="bg-orange pb-8 lg:pb-0">
      <div className="flex flex-col space-y-8 px-32">
        <div className="mb-32 mt-12 max-w-[398px] self-end text-right text-white lg:mb-0">
          <h1 className="border-b-2 border-black pb-8">{header}</h1>
        </div>
        {testimonials?.map((t, i) => (
          <div
            key={i}
            className={`${i % 2 === 0 ? "self-start" : "items-end self-end"} flex flex-col gap-4`}
          >
            {t.icon?.assetPath && (
              <Image
                src={t.icon.assetPath}
                width={300}
                height={300}
                className="h-[76px] w-[80px]"
                alt={t.icon.caption || ""}
              />
            )}
            <h4 className="mb-4 text-black lg:mb-0">{t.testimonialSource}</h4>
            {t.testimonialContent && (
              <div
                className={`${i % 2 === 0 ? "border-l pl-4 text-left" : "border-r pr-4 text-right"} border-black text-white`}
              >
                <CustomPortableText
                  value={t.testimonialContent as PortableTextBlock[]}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <span className="hidden lg:block">
        <ChatBubbleSVG />
      </span>
    </div>
  );
}
