"use client";
import type { ImageData } from "../types";
import { LinkValue } from "sanity-plugin-link-field";
import { Link } from "./Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type OpenerWithCarouselProps = {
  content: {
    header: string;
    subHeader: string;
    tagline: string;
    bgColor: string;
    link: LinkValue;
    photos: Array<ImageData>;
  };
};

export function OpenerWithCarousel({ content }: OpenerWithCarouselProps) {
  const { header, subHeader, tagline, bgColor, photos, link } = content;

  return (
    <div
      className="mx-auto mt-[100px] flex flex-col items-center lg:mt-0 lg:flex-row lg:gap-[109px]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="swiper-custom w-full lg:h-full lg:w-[663px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          className="lg:h-full lg:w-[663px]"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.assetPath} className="">
              <div className="relative h-[300px] md:h-[400px] w-full lg:h-[663px]">
                <Image
                  src={photo.assetPath}
                  fill
                  alt={photo?.caption || "missing alt"}
                  className="object-cover object-center lg:rounded-r-[2rem]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mx-auto w-full pl-8 lg:flex lg:flex-col lg:items-start lg:justify-start">
        <h1 className="my-4 text-red lg:my-0 lg:max-w-screen-md lg:text-[60px] lg:leading-[121.6%]">
          {header}
        </h1>
        <div className="my-8 flex md:flex-col lg:mb-0 lg:mt-4 lg:items-center lg:gap-4 xl:flex-row">
          <h4 className="font-bold lg:my-0 lg:text-[14px] lg:font-bold lg:leading-[117.6%]">
            {subHeader}
          </h4>
          <h4 className="hidden lg:block lg:text-[13px] lg:italic">
            {tagline}
          </h4>
        </div>
        <div className="mb-12 mt-4 inline-flex rounded-full bg-red px-8 text-[15px] font-bold text-white lg:mb-0 lg:mt-6 lg:px-[28px] lg:py-[3px] lg:text-center lg:text-[16px] lg:font-semibold">
          <Link link={link} />
        </div>
      </div>
    </div>
  );
}
