"use client";
import { ChapterComponentQueryResult } from "@/sanity.types";
import AtSymbol from "./AtSymbol";
import Image from "next/image";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import { PortableTextBlock } from "next-sanity";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
type Props = {
  content: ChapterComponentQueryResult["chapterComponent"];
};

export default function Chapter({ content }: Props) {
  const { header, image, timeline, imageGallery } = content || {};
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;

    const handleClick = () => setLightboxImage(null);

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [lightboxImage]);

  useGSAP(() => {
    gsap.fromTo(
      ".mobile-chapter-heading .absolute.z-10",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
      },
    );

    gsap.fromTo(
      ".timeline .absolute",
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scaleY: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mobile-timeline",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: 1.0,
      },
    );

    gsap.fromTo(
      ".timeline-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".mobile-timeline",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: 1.0,
      },
    );
  }, []);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="flex flex-col lg:mt-[80px]">
      <div className="desktop-chapter-heading hidden bg-white py-[100px] lg:flex">
        <div className="mx-auto flex items-center justify-center">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <div className="flex h-[339px] flex-col justify-end">
                <div className="text-[100px] font-bold leading-[125%]">
                  YEP!
                </div>
              </div>
              {image?.assetPath && (
                <Image
                  src={image?.assetPath}
                  alt={image?.caption || ""}
                  width={1000}
                  height={1000}
                  className="mb-[10px] h-[339px] w-[602px] rounded-tl-[100px] shadow-[8px_8px_2px_0px_rgba(0,0,0,0.3)]"
                />
              )}
            </div>
            <div className="mt-[20px] flex flex-row items-center gap-4">
              <AtSymbol fill="black" />
              <div className="text-[120px] font-bold text-red">{header}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-chapter-heading h-screen bg-white lg:hidden">
        <div className="h-full after:absolute after:inset-0 after:z-0 after:bg-black after:bg-opacity-[25%]">
          {image?.assetPath && (
            <Image
              src={image?.assetPath}
              alt={image?.caption || ""}
              fill
              className="h-screen object-cover"
            />
          )}

          <div className="absolute left-[5%] top-1/2 z-10">
            <div className="flex flex-col">
              <div className="text-[60px] font-bold leading-[125%] text-white">
                YEP!
              </div>
              <div className="flex flex-row items-center gap-4 fill-white">
                <AtSymbol fill="white" />
                <div className="text-[80px] font-bold text-red">{header}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col lg:flex">
        <div className="flex flex-col gap-4 lg:items-center lg:justify-center">
          <h1 className="mx-auto my-[100px] w-fit underline decoration-1 underline-offset-[20px]">
            A Chapter History
          </h1>

          <div className="timeline flex flex-col items-center justify-center gap-32 pb-[100px]">
            <div className="absolute h-4/5 w-1 bg-black"></div>
            {timeline &&
              timeline.map((timelineItem, index) => (
                <div
                  className={`timeline-item relative mb-2 w-[340px] border-[5px] border-yellow bg-white-yellow text-center lg:w-auto lg:max-w-[600px]`}
                  key={`timeline-${index}`}
                >
                  <div className="pointer-events-none absolute -right-2 -top-2 size-full border border-black" />

                  <div className="mx-8 mt-4 flex flex-col gap-4">
                    <h3 className="font-semibold">{timelineItem.header}</h3>
                    <h2 className="font-bold text-red">
                      {timelineItem.subHeader}
                    </h2>
                    <div className="mb-4">
                      <CustomPortableText
                        value={timelineItem.description as PortableTextBlock[]}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex h-[1342px] flex-col items-center justify-center rounded-tl-[200px] bg-orange">
        <div className="flex w-full max-w-[1263px] flex-col items-center justify-center px-4 md:px-8">
          <h1 className="mb-[100px] w-full text-center text-white underline decoration-1 underline-offset-[20px] lg:flex lg:justify-start">
            Meet Our Team
          </h1>
          <div className="relative h-[900px] w-full">
            <div className="grid size-full gap-2 border-orange bg-white">
              {imageGallery?.map((galleryImage, index) => {
                if (
                  galleryImage.imageColumnEnd &&
                  galleryImage.imageColumnStart &&
                  galleryImage.imageRowEnd &&
                  galleryImage.imageRowStart &&
                  galleryImage.image?.assetPath
                ) {
                  return (
                    <div
                      key={index}
                      className="relative cursor-pointer border-white"
                      style={{
                        gridColumnStart: galleryImage.imageColumnStart,
                        gridColumnEnd: galleryImage.imageColumnEnd,
                        gridRowStart: galleryImage.imageRowStart,
                        gridRowEnd: galleryImage.imageRowEnd,
                      }}
                      onClick={() =>
                        galleryImage.image?.assetPath &&
                        openLightbox(galleryImage.image.assetPath)
                      }
                    >
                      <Image
                        src={galleryImage.image.assetPath}
                        alt={galleryImage.image.caption || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeLightbox}
        >
          <Image
            src={lightboxImage}
            alt="Lightbox"
            width={2000}
            height={2000}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
