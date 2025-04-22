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
    <div className="bg-orange pb-8 md:relative md:bg-transparent md:pb-0">
      <span className="hidden md:block">
        <ChatBubbleSVG />
      </span>
      <div className="flex flex-col space-y-8 px-32 md:absolute md:inset-0">
        <div className="mt-12 max-w-[398px] self-end text-right text-white">
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
            <h4 className="text-black">{t.testimonialSource}</h4>
            {t.testimonialContent && (
              <div
                className={`${i % 2 === 0 ? "border-l-2 pl-4 text-left" : "border-r-2 pr-4 text-right"} border-black text-white`}
              >
                <CustomPortableText
                  value={t.testimonialContent as PortableTextBlock[]}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
