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
      <div className="flex flex-row">
        <div className="flex w-3/5 items-end justify-end bg-white-yellow">
          <div className="mb-[80px] mr-[40px]">
            <h2 className="max-w-[650px]">
              <span className="text-red">{redHeader}</span> {plainHeader}
            </h2>
            <div className="ml-4 mt-4 flex max-w-[550px] flex-col gap-4">
              <CustomPortableText value={description as PortableTextBlock[]} />
            </div>
          </div>
        </div>

        <div className="w-2/5 bg-red pt-[150px]">
          {image?.assetPath && (
            <Image
              src={image.assetPath}
              alt={image.caption || ""}
              width={2000}
              height={2000}
              className="size-[539px] rounded-tr-[200px] object-cover"
            />
          )}
        </div>
      </div>
      <div className="flex w-full bg-yellow py-[10px]">
        <div className="mx-auto flex flex-row items-center gap-[200px] text-red">
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
      <div>
        <RibbonEmbed />
      </div>
    </div>
  );
}
