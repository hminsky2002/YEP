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
    <>
      <div
        className="mx-auto flex flex-col items-center gap-12 md:flex-row md:gap-0"
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
        <div className="mx-auto w-full pl-8 md:max-w-[738px]">
          <h1 className="text-red">{header}</h1>
          <div className="mt-4 flex gap-6">
            <h4 className="font-semibold">{subHeader}</h4>
            <h4 className="hidden italic md:block">{tagline}</h4>
          </div>
          <button className="mt-6 rounded-full bg-red px-10 py-4 text-white">
            <Link link={link} />
          </button>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center gap-12 bg-yellow md:gap-0">
        <Image
          src="/yepbanner.png"
          alt="What We Do"
          width={2000}
          height={2000}
          className="size-full object-contain object-center"
        />
        <div className="mx-auto flex w-full flex-row items-center justify-center gap-[100px] py-[100px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="pb-4 text-red">What We Do</h1>
            <div className="h-1 w-full bg-red"></div>
          </div>
          <div>
            <p className="max-w-[500px] text-center">
              YEP! is an entirely free entrepreneurship program for high school
              students. By inviting local students onto campus to participate in
              an entrepreneurship incubator, YEP! hopes to develop the next
              generation of entrepreneurs and strengthen town-gown relations.
            </p>
            <p className="py-4 text-center">
              <a
                className="mt-6 rounded-full border-2 border-red px-10 text-center text-red"
                href="/about"
              >
                ABOUT US
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
