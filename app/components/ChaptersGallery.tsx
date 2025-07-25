"use client";
import Image from "next/image";
import type { ChaptersGalleryQueryResult } from "@/sanity.types";
import { Link } from "./Link";
import { LinkValue } from "sanity-plugin-link-field";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ChaptersGalleryProps = {
  content: ChaptersGalleryQueryResult["chaptersGallery"];
};

export default function ChaptersGallery({ content }: ChaptersGalleryProps) {
  const { header, subHeader, chaptersLink, directorsLink, chapters } =
    content || {};

  return (
    <div className="mx-auto mb-[160px] mt-[100px] flex flex-col items-center border-black xl:max-w-[1263px] xl:flex-row xl:items-start">
      <div className="mr-8 hidden h-[409px] bg-black pr-px xl:block" />
      <div className="flex flex-col">
        <div className="flex w-full flex-col justify-start text-center xl:flex-row">
          <h1 className="text-red">{header}</h1>
          <div className="mx-auto mt-4 max-w-[240px] text-center xl:mx-0 xl:mt-0 xl:flex xl:max-w-full xl:flex-col xl:items-start xl:justify-end xl:pl-[20px] xl:text-left">
            <p>{subHeader}</p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            1265: {
              slidesPerView: 5,
              spaceBetween: 24,
              effect: "slide",
            },
          }}
          className="swiper-custom mt-[40px] w-[233px] xl:w-[1265px]"
        >
          {chapters?.map((chapter) => {
            return (
              <SwiperSlide key={chapter._key} className="rounded-b-full">
                <div key={chapter._key}>
                  {chapter.image?.assetPath && (
                    <div>
                      <div className="flex w-[233px] flex-col">
                        <Image
                          src={chapter.image.assetPath}
                          alt={chapter.image.caption || ""}
                          width={500}
                          height={500}
                          className="h-[242px]"
                        />
                        <div className="rounded-b-full bg-orange py-[8px]">
                          <Link
                            link={chapter.link as LinkValue}
                            className="text-center"
                          >
                            <div className="text-[15px] underline underline-offset-4">
                              {chapter.link?.text}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="mt-[40px] flex flex-col items-center justify-center gap-6 xl:flex-row xl:gap-32">
          <Link
            link={chaptersLink as LinkValue}
            className="mt-4 w-[226px] rounded-full border-2 border-black bg-white px-8 text-center text-[15px] font-bold text-black lg:mb-0 lg:mt-6 lg:px-[28px] lg:py-[3px] lg:text-[16px] lg:font-semibold"
          ></Link>
          <Link
            link={directorsLink as LinkValue}
            className="mt-4 w-[226px] rounded-full border-2 border-black bg-white px-8 text-center text-[15px] font-bold text-black lg:mb-0 lg:mt-6 lg:px-[28px] lg:py-[3px] lg:text-[16px] lg:font-semibold"
          ></Link>
        </div>
      </div>
    </div>
  );
}
