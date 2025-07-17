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
    <div className="pb-8 lg:pb-0">
      <div className="flex flex-col bg-orange px-24 pb-[100px] lg:px-[207px]">
        <div className="my-12 self-end text-white lg:mb-0 lg:max-w-[425px] lg:text-right">
          <h1 className="lg:border-b-2 lg:border-black lg:pb-8">{header}</h1>
          <div></div>
        </div>
        <div className="flex flex-col gap-8">
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
              <h4
                className={`mb-4 text-black lg:mb-0 lg:text-[15px] ${i % 2 === 0 ? "lg:ml-[12px]" : "lg:mr-[12px]"}`}
              >
                {t.testimonialSource}
              </h4>
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
      <span className="mt-[-4px] flex justify-end pr-[10%]">
        <ChatBubbleSVG />
      </span>
    </div>
  );
}
