"use client";

import { LinkValue } from "sanity-plugin-link-field";
import { Link } from "./Link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Footer, FooterQueryResult } from "@/sanity.types";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import { PortableTextBlock } from "next-sanity";

type Props = {
  data: FooterQueryResult["footer"];
};
export function Footer({ data }: Props) {
  const pathname = usePathname();
  let color = "bg-yellow";
  let filter = "";
  let background = "bg-yellow";
  let rounded = "";
  const currentPath = pathname.split("/")[1];

  if (currentPath === "about-us" || currentPath === "our-chapters") {
    color = "bg-red text-white";
    filter = "filter invert";
  } else if (currentPath.includes("affiliate")) {
    color = "bg-yellow";
  } else if (currentPath === "donate") {
    color = "bg-orange";
    background = "bg-white-yellow";
    rounded = "rounded-tl-[8rem]";
  }

  return (
    <div className={`${background}`}>
      <footer
        className={`${color} ${rounded} flex w-full flex-col gap-8 py-[80px] pl-2 md:items-center md:justify-between md:gap-8 md:pl-0`}
      >
        <h1>{data?.message}</h1>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <CustomPortableText value={data?.address as PortableTextBlock[]} />
          <div
            className={`h-[39px] w-[0.5px] bg-black ${filter} hidden md:block`}
          ></div>
          <CustomPortableText value={data?.contact as PortableTextBlock[]} />
          <div
            className={`h-[39px] w-[0.5px] bg-black ${filter} hidden md:block`}
          ></div>
          <div className="flex gap-12">
            {data?.socials &&
              data.socials.map((social) => (
                <Link link={social.link as LinkValue} key={social._key}>
                  <div className="">
                    {social.icon?.assetPath && (
                      <Image
                        src={social.icon?.assetPath}
                        width={80}
                        height={80}
                        alt={social.icon.caption || "social media icon"}
                        className={`size-[40px] ${filter}`}
                      />
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
