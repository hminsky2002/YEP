"use client";

import { isInternalLink, LinkValue } from "sanity-plugin-link-field";
import LogoPrimary from "./LogoPrimary";
import NextLink from "next/link";
import { Link } from "./Link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { HeaderQueryResult } from "@/sanity.types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CustomPortableText } from "./CustomPortableText";
import { PortableTextBlock } from "next-sanity";

type HeaderProps = {
  data: HeaderQueryResult["header"];
};

export function Header({ data }: HeaderProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showDeleteDiv, setShowDeleteDiv] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const navList = data?.navList;
  const mobileNavList = data?.mobileNavList;
  const pathname = usePathname();
  let bgColor = "";
  let textColor = "text-black";
  let linkUnderlineColor = "border-black";
  const currentPath = pathname.split("/")[1];
  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleDeleteClick = () => {
    setShowDeleteDiv(false);
  };

  useEffect(() => {
    setMenuIsOpen(false);
  }, [pathname]);

  useGSAP(
    () => {
      if (menuIsOpen) {
        gsap.to(".menu-drawer", { autoAlpha: 1 });
        gsap.to(".menu-text", { autoAlpha: 0 });
        document.body.classList.add("overflow-hidden");
      } else {
        gsap.to(".menu-drawer", { autoAlpha: 0 });
        gsap.to(".menu-text", { autoAlpha: 1 });
        document.body.classList.remove("overflow-hidden");
      }
    },
    { dependencies: [menuIsOpen] },
  );

  if (
    currentPath.includes("about-us") ||
    currentPath.includes("our-chapters")
  ) {
    bgColor = "bg-yellow pb-2";
  } else if (currentPath.includes("chapter")) {
    bgColor = "bg-red";
    textColor = "text-white";
  } else if (currentPath.includes("donate")) {
    bgColor = "bg-yellow lg:bg-transparent";
    textColor = "text-white";
    linkUnderlineColor = "border-white";
  } else if (currentPath === "") {
    bgColor = "bg-yellow lg:bg-transparent";
  }

  return (
    <div
      className={`${bgColor} fixed top-0 z-20 w-full items-center justify-between`}
    >
      {showDeleteDiv &&
        data?.announcementBanner?.content &&
        data?.showBanner &&
        currentPath === "" && (
          <div className="relative flex flex-row items-center justify-center bg-red py-8 text-white">
            <div className="flex flex-row items-center justify-center text-center">
              <CustomPortableText
                value={data?.announcementBanner?.content as PortableTextBlock[]}
              />
            </div>
            <button
              onClick={handleDeleteClick}
              className="absolute right-2 top-2 z-30 flex size-6 items-center justify-center rounded-full text-white lg:size-12"
              aria-label="Delete"
            >
              <XMarkIcon className="size-6 lg:size-12" />
            </button>
          </div>
        )}
      <nav className={`${bgColor} flex w-full items-center justify-between`}>
        <NextLink href={`/`}>
          <div className="ml-[1.6rem] mt-[1.6rem] w-80">
            <LogoPrimary />
          </div>
        </NextLink>
        <div className="hidden gap-12 p-[1.6rem] lg:flex">
          {navList?.map((link) => {
            let linkUnderline = "";
            if (link && isInternalLink(link as LinkValue)) {
              linkUnderline =
                link.internalLink?.slug?.current != currentPath &&
                currentPath != "/"
                  ? ""
                  : `${linkUnderlineColor} border-b pb-1`;
            }

            return (
              <span key={link._key} className={`menu ${textColor}`}>
                <Link className={`${linkUnderline}`} link={link as LinkValue}>
                  {link.text}
                </Link>
              </span>
            );
          })}
        </div>
        <div className="lg:hidden">
          <div className="lg:hidden" ref={container}>
            <div
              className={`menu-text menu opacity-1 cursor-pointer p-[1.6rem] ${textColor}`}
              onClick={handleMenuClick}
            >
              Menu
            </div>
          </div>
        </div>
        <div
          className={`menu-drawer fixed left-0 top-0 z-40 flex h-screen w-full flex-col justify-between bg-red p-[1.6rem] pb-[3.4rem] opacity-0`}
        >
          <div>
            <div className="flex w-full justify-between">
              <div className="w-80 cursor-pointer" onClick={handleMenuClick}>
                <LogoPrimary />
              </div>
              <div
                className={`close-text menu ml-auto w-fit cursor-pointer text-white`}
                onClick={handleMenuClick}
              >
                Close
              </div>
            </div>
            <div className="mt-[16.8rem] flex flex-col gap-[1.6rem]">
              {mobileNavList?.map((link) => (
                <span
                  key={link._key}
                  className={`ml-auto text-[20px] font-bold text-white`}
                >
                  <Link link={link as LinkValue} onClick={handleMenuClick}>
                    {link.text}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
