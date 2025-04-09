"use client";
import type { ImageData } from "../types";
import { LinkValue } from "sanity-plugin-link-field";
import { Link } from "./Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
      className="mx-auto flex flex-col gap-12 md:gap-0 md:flex-row items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full md:w-[663px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
      <div className="mx-auto w-full md:max-w-[738px] pl-8">
        <h1 className="text-red">{header}</h1>
        <div className="mt-4 flex gap-6">
          <h4 className="font-semibold">{subHeader}</h4>
          <h4 className="italic hidden md:block">{tagline}</h4>
        </div>
        <button className="mt-6 rounded-full bg-red px-10 py-4 text-white">
          <Link link={link} />
        </button>
      </div>
    </div>
  );
}
