import Image from "next/image";
import type { PressReleasesGalleryQueryResult } from "@/sanity.types";
import { Link } from "./Link";
import { LinkValue } from "sanity-plugin-link-field";
type PressReleasesGalleryProps = {
  content: PressReleasesGalleryQueryResult["pressReleasesGallery"];
};

export default function PressReleasesGallery({
  content,
}: PressReleasesGalleryProps) {
  const { header, tagColor, tagText, pressReleases } = content || {};

  return (
    <div className="relative flex flex-col justify-center p-4 py-[100px] lg:gap-2">
      <h2 className="mx-auto my-8 flex lg:mb-[40px] lg:ml-[48.8%]">{header}</h2>
      <div className="flex flex-col justify-center gap-2 lg:flex-row">
        <div
          style={{ backgroundColor: tagColor || "#E55937" }}
          className="hidden w-[40px] items-center justify-center self-stretch overflow-hidden rounded-l-full text-white lg:flex"
        >
          <div className="-rotate-90 whitespace-nowrap text-[19px] font-bold">
            {tagText}
          </div>
        </div>
        <div
          style={{ backgroundColor: tagColor || "#E55937" }}
          className="mx-auto w-[250px] items-center rounded-t-full py-4 text-white lg:hidden"
        >
          <div className="text-center text-[19px] font-bold">{tagText}</div>
        </div>

        {pressReleases?.map((pr) => {
          return (
            <div
              key={pr._key}
              className="mx-auto h-auto w-[250px] bg-white lg:mx-0 lg:h-[197px] lg:w-auto"
            >
              {pr.link && pr?.image?.assetPath ? (
                <Link link={pr.link as LinkValue}>
                  <Image
                    src={pr.image.assetPath}
                    width={550}
                    height={550}
                    alt={pr.image?.caption || "missing alt"}
                    className="size-full object-contain object-center"
                  />
                </Link>
              ) : pr?.image?.assetPath ? (
                <Image
                  src={pr.image.assetPath}
                  width={550}
                  height={550}
                  alt={pr.image?.caption || "missing alt"}
                  className="size-full object-contain object-center"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
