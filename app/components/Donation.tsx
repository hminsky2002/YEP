import Image from "next/image";
import type { DonationQueryResult } from "@/sanity.types";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import { PortableTextBlock } from "next-sanity";
import RibbonEmbed from "./RibbonEmbed";
type DonationProps = {
  content: DonationQueryResult["donation"];
};
export default function Donation({ content }: DonationProps) {
  const { redHeader, plainHeader, description, image, stats } = content || {};

  return (
    <div className="flex flex-col bg-white-yellow">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden bg-white-yellow lg:flex lg:w-3/5 lg:items-end lg:justify-end">
          <div className="lg:mb-[80px] lg:mr-[40px]">
            <h2 className="lg:max-w-[650px]">
              <span className="text-red">{redHeader}</span> {plainHeader}
            </h2>
            <div className="ml-4 mt-4 flex flex-col gap-4 lg:max-w-[550px]">
              <CustomPortableText value={description as PortableTextBlock[]} />
            </div>
          </div>
        </div>
        <div className="lg:static lg:w-2/5 lg:bg-red lg:pt-[150px]">
          {image?.assetPath && (
            <Image
              src={image.assetPath}
              alt={image.caption || ""}
              width={2000}
              height={2000}
              className="hidden object-cover lg:block lg:size-[539px] lg:rounded-tr-[200px]"
            />
          )}
        </div>
        <div className="relative pt-12 after:absolute after:inset-0 after:z-0 after:bg-black after:bg-opacity-[50%] lg:hidden">
          {image?.assetPath && (
            <Image
              src={image.assetPath}
              alt={image.caption || ""}
              width={2000}
              height={2000}
              className="object-cover lg:size-[539px] lg:rounded-tr-[200px]"
            />
          )}
          <div className="absolute bottom-10 left-10 z-10 lg:hidden">
            <h1>
              <span className="text-red">{redHeader} </span>
              <span className="text-white">{plainHeader}</span>
            </h1>
          </div>
        </div>

        <div className="mobile-donation-description mx-8 my-4 flex flex-col gap-4 lg:hidden">
          <CustomPortableText value={description as PortableTextBlock[]} />
        </div>
      </div>
      <div className="desktop-donation-stats hidden w-full bg-yellow py-[10px] lg:flex">
        <div className="mx-auto flex flex-col text-red lg:flex-row lg:items-center lg:gap-[200px]">
          <div className="flex flex-row items-end">
            <h2>{stats?.years?.number}</h2>
            <p className="font-bold">{stats?.years?.text}</p>
          </div>
          <div className="flex flex-row items-end">
            <h2>{stats?.chapters?.number}</h2>
            <p className="font-bold">{stats?.chapters?.text}</p>
          </div>
          <div className="flex flex-row items-end">
            <h2>{stats?.studentsSupported?.number}</h2>
            <p className="font-bold">{stats?.studentsSupported?.text}</p>
          </div>
        </div>
      </div>
      <div className="mobile-donation-stats flex w-full bg-yellow py-[10px] lg:hidden">
        <div className="mx-8 flex flex-col gap-6 text-red">
          <h1>
            {stats?.years?.number}{" "}
            <span className="text-[28px]">{stats?.years?.text}</span>
          </h1>
          <h1>
            {stats?.chapters?.number}{" "}
            <span className="text-[28px]">{stats?.chapters?.text}</span>
          </h1>
          <h1>
            {stats?.studentsSupported?.number}{" "}
            <span className="text-[28px]">
              {stats?.studentsSupported?.text}
            </span>
          </h1>
        </div>
      </div>
      <div>
        <RibbonEmbed />
      </div>
    </div>
  );
}
