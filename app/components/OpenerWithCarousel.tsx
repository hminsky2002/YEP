"use client";
import type { ImageData } from "../types";
import { LinkValue } from "sanity-plugin-link-field";
import { Link } from "./Link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
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
      className="mx-auto mt-[100px] flex flex-col items-center lg:mt-0 lg:flex-row lg:gap-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="swiper-custom w-full lg:w-[663px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.assetPath}>
              <Image
                src={photo.assetPath}
                width={1200}
                height={1200}
                alt={photo?.caption || "missing alt"}
                className="size-full object-contain object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mx-auto w-full pl-8 lg:block lg:max-w-[738px]">
        <h1 className="my-4 text-red lg:my-0">{header}</h1>
        <div className="my-8 flex lg:mb-0 lg:mt-4 lg:gap-6">
          <h4 className="font-semibold lg:my-0">{subHeader}</h4>
          <h4 className="hidden italic lg:block">{tagline}</h4>
        </div>
        <div className="mb-12 mt-4 inline-flex rounded-full bg-red px-8 text-[15px] font-bold text-white lg:mb-0 lg:mt-6 lg:px-10 lg:py-4">
          <Link link={link} />
        </div>
      </div>
    </div>
  );
}
