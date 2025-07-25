"use client";
import type { OurCurriculumQueryResult } from "@/sanity.types";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { CustomPortableText } from "./CustomPortableText";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type OurCurriculumProps = {
  content: OurCurriculumQueryResult["ourCurriculum"];
};
function NumberComponent({
  num,
  className,
  topClipY,
  bottomClipY,
  size,
  topClipId,
  bottomClipId,
}: {
  num: number;
  className: string;
  topClipY: number;
  bottomClipY: number;
  size: number;
  topClipId: string;
  bottomClipId: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={`absolute font-bold ${className}`}
    >
      <defs>
        <clipPath id={topClipId}>
          <rect x={0} y={topClipY} width={size} height={size} />
        </clipPath>
        <clipPath id={bottomClipId}>
          <rect x={0} y={bottomClipY} width={size} height={size} />
        </clipPath>
      </defs>

      {/* top half, clipped */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        clipPath={`url(#${topClipId})`}
        className="fill-black stroke-none"
        fontSize={size}
      >
        {num}
      </text>

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        clipPath={`url(#${bottomClipId})`}
        className="fill-transparent stroke-black stroke-1"
        fontSize={size}
      >
        {num}
      </text>
    </svg>
  );
}

function Number({ index, className }: { index: number; className?: string }) {
  switch (index % 3) {
    case 0:
      return (
        <NumberComponent
          num={index + 1}
          className={`bottom-[-125px] left-0 ${className}`}
          topClipY={125}
          bottomClipY={0}
          size={250}
          topClipId={`clip-top-${index}`}
          bottomClipId={`clip-bottom-${index}`}
        />
      );
    case 1:
      return (
        <NumberComponent
          num={index + 1}
          className={`bottom-[-150px] right-0 ${className}`}
          topClipY={100}
          bottomClipY={0}
          size={250}
          topClipId={`clip-top-${index}`}
          bottomClipId={`clip-bottom-${index}`}
        />
      );
    case 2:
      return (
        <NumberComponent
          num={index + 1}
          className={`left-0 top-[-125px] ${className}`}
          topClipY={-125}
          bottomClipY={0}
          size={250}
          topClipId={`clip-top-${index}`}
          bottomClipId={`clip-bottom-${index}`}
        />
      );
    default:
      return null;
  }
}

function MobileNumber({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  switch (index % 3) {
    case 0:
      return (
        <NumberComponent
          num={index + 1}
          className={`left-[-80px] top-[-100px] ${className}`}
          topClipY={-150}
          bottomClipY={0}
          size={250}
          topClipId={`clip-top-mobile-${index}`}
          bottomClipId={`clip-bottom-mobile-${index}`}
        />
      );
    case 1:
      return (
        <NumberComponent
          num={index + 1}
          className={`right-[-50px] top-[-131px] ${className}`}
          topClipY={130}
          bottomClipY={0}
          size={250}
          topClipId={`clip-top-mobile-${index}`}
          bottomClipId={`clip-bottom-mobile-${index}`}
        />
      );
    case 2:
      return (
        <NumberComponent
          num={index + 1}
          className={`left-[-55px] top-[-125px] ${className}`}
          topClipY={-125}
          bottomClipY={0}
          size={250}
          topClipId={`clip-top-mobile-${index}`}
          bottomClipId={`clip-bottom-mobile-${index}`}
        />
      );
  }
}

function Carousel({
  carousel,
}: {
  carousel:
    | {
        photo: {
          caption: string | null;
          assetId: string | null;
          assetPath: string | null;
          aspectRatio: number | null;
        } | null;
        caption: string | null;
        _type: "carouselPhoto";
        _key: string;
      }[]
    | null;
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      className="swiper-curriculum-custom w-[600px]"
      navigation={true}
    >
      {carousel?.map(
        (item) =>
          item.photo?.assetPath && (
            <SwiperSlide key={item.photo?.assetPath} className="">
              <Image
                src={item.photo?.assetPath}
                width={1200}
                height={1200}
                alt={item.photo?.caption || "missing alt"}
                className="relative w-[600px] object-contain object-center lg:rounded-[2rem]"
              />
              <div className="absolute bottom-0 left-0 flex w-full items-start justify-center bg-[#D9D9D9] bg-opacity-80 leading-[110%] lg:h-1/5">
                <div className="mb-[50px] mt-[10px] text-center text-black">
                  {item.caption}
                </div>
              </div>
            </SwiperSlide>
          ),
      )}
    </Swiper>
  );
}

export default function OurCurriculum({ content }: OurCurriculumProps) {
  const { header, curriculumCards } = content || {};

  return (
    <div className="flex w-full flex-col overflow-x-hidden bg-orange py-[140px] transition-all duration-300">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-[100px] lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold underline decoration-1 underline-offset-[20px]">
            {header}
          </h1>

          <div className="hidden w-[436px] text-left lg:block"></div>
        </div>
        <div className="hidden w-[451px] flex-col lg:flex"></div>
      </div>
      <div className="mx-auto mt-[150px] flex w-[350px] flex-col gap-[150px] lg:mx-0 lg:mt-0 lg:w-full lg:gap-[100px]">
        {curriculumCards?.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col border border-black lg:flex-row lg:border-none ${index % 2 != 0 ? "lg:justify-end" : "lg:justify-start"} `}
          >
            <div
              className={`relative z-10 flex flex-col-reverse justify-end bg-white lg:h-[524px] lg:w-[1300px] lg:flex-row lg:gap-[80px] lg:py-[70px] ${index % 2 != 0 ? "lg:flex-row-reverse lg:rounded-l-[20px]" : "lg:flex-row lg:rounded-r-[20px]"} ${index % 2 == 0 ? "lg:mt-[100px]" : ""}`}
            >
              <Number index={index} className="hidden xl:block" />

              <div className="flex flex-col">
                {card?.icon?.assetPath && (
                  <Image
                    src={card.icon.assetPath}
                    alt={card.icon.caption || ""}
                    width={1000}
                    height={1000}
                    className="mx-auto hidden size-[120px] object-contain lg:block"
                  />
                )}
                <div className="mx-auto max-w-[400px] px-4 py-[20px] text-center lg:px-0 lg:pb-0 lg:pt-[44px]">
                  <CustomPortableText
                    value={card.description as PortableTextBlock[]}
                  />
                </div>
              </div>
              <div
                className={`flex justify-center ${index % 2 != 0 ? "lg:ml-[20px] lg:justify-end" : "lg:mr-[20px] lg:justify-start"} `}
              >
                {card.carousel ? (
                  <Carousel carousel={card.carousel} />
                ) : (
                  card?.image?.assetPath && (
                    <Image
                      src={card.image.assetPath}
                      alt={card.image.caption || ""}
                      width={1000}
                      height={1000}
                      className="object-cover lg:max-w-[600px]"
                    />
                  )
                )}
              </div>
              <div
                className={`relative mx-auto flex size-full flex-row items-center justify-center gap-6 py-8 font-bold lg:hidden`}
              >
                <MobileNumber index={index} />
                {card?.icon?.assetPath && (
                  <Image
                    src={card.icon.assetPath}
                    alt={card.icon.caption || ""}
                    width={1000}
                    height={1000}
                    className="size-[60px] object-contain lg:hidden"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
