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
import { Link } from "@/app/components/Link";
import { LinkValue } from "sanity-plugin-link-field";

gsap.registerPlugin(ScrollTrigger);
type Props = {
  content: ChapterComponentQueryResult["chapterComponent"];
};

export default function Chapter({ content }: Props) {
  const {
    header,
    image,
    timeline,
    imageGallery,
    contactLink,
    applyLink,
    timelineHeight,
  } = content || {};
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
    <div className="flex flex-col bg-yellow lg:mt-[80px]">
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
      <div className="mobile-chapter-heading h-screen bg-yellow lg:hidden">
        <div className="relative h-full after:absolute after:inset-0 after:z-0 after:bg-black after:bg-opacity-[25%]">
          {image?.assetPath && (
            <Image
              src={image.assetPath}
              alt={image.caption || ""}
              fill
              className="h-screen object-cover"
            />
          )}

          <div className="absolute left-[5%] top-1/2 z-10">
            <div className="flex flex-col">
              <div className="text-[50px] font-bold leading-[80%] text-white">
                YEP!
              </div>
              <div className="flex max-w-[380px] flex-row items-start gap-4">
                <div className="text-[65px] leading-[100%] text-white">@</div>
                <div className="max-w-[280px] whitespace-normal break-words text-[65px] font-bold leading-[100%] text-red md:max-w-[450px]">
                  {header}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col lg:flex">
        <div className="flex flex-col gap-4 lg:items-center lg:justify-center">
          <h1 className="mx-auto my-[80px] w-fit underline decoration-1 underline-offset-[20px]">
            A Chapter History
          </h1>

          <div className="timeline flex flex-col items-center justify-center gap-32 pb-[80px] lg:flex-row lg:items-center">
            <div className="absolute h-4/5 w-1 max-w-[1300px] bg-black lg:h-1 lg:w-3/5"></div>
            {timeline &&
              timeline.map((timelineItem, index) => (
                <div
                  className={`timeline-item relative mb-2 w-[340px] border border-black bg-white-yellow text-center lg:w-[400px]`}
                  key={`timeline-${index}`}
                  style={{
                    height: `${timelineHeight ? `${timelineHeight}px` : "325px"}`,
                  }}
                >
                  <div className="mx-8 mt-8 flex flex-col gap-4">
                    <h4 className="lg:h4 text-[20px] font-semibold">
                      {timelineItem.header}
                    </h4>
                    <h3 className="text-[20px] font-bold text-red lg:text-[23px]">
                      {timelineItem.subHeader}
                    </h3>
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

      <div className="contact-links mb-[40px] flex-row items-center justify-center border-black lg:flex">
        <div className="flex flex-row items-center justify-center lg:gap-16">
          <Link
            link={contactLink as LinkValue}
            className="border-r-none lg:0 flex h-[80px] w-[180px] items-center justify-center rounded-l-full border-y-2 border-l-2 border-black bg-orange px-8 py-[28px] text-center text-[20px] font-bold text-black hover:opacity-50 lg:h-auto lg:w-[226px] lg:rounded-full lg:border-2 lg:py-0 lg:text-[23px]"
          ></Link>
          <Link
            link={applyLink as LinkValue}
            className="border-l-none flex h-[80px] w-[180px] items-center justify-center rounded-r-full border-y-2 border-r-2 border-black bg-red py-[28px] text-center text-[20px] font-bold text-white hover:opacity-50 lg:h-auto lg:w-[226px] lg:rounded-full lg:border-2 lg:py-0 lg:text-[23px]"
          ></Link>
        </div>
      </div>

      <div className="flex h-[1342px] flex-col items-center justify-center rounded-tl-[200px] bg-orange">
        <div className="flex w-full max-w-[1263px] flex-col items-center justify-center px-4 md:px-8">
          <h1 className="mb-[100px] w-full text-center text-white underline decoration-1 underline-offset-[20px] lg:flex lg:justify-start">
            Meet Our Team
          </h1>
          <div className="relative h-[900px] w-full">
            <div className="grid size-full gap-2 overflow-hidden border-orange">
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
                      className="relative cursor-pointer"
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
