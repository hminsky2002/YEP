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
  const {
    header,
    tagColor,
    tagText,
    pressReleases,
    helpImage,
    helpHeader,
    helpText,
  } = content || {};

  return (
    <>
      <div className="relative flex flex-col justify-center p-4 pb-[80px] md:gap-2">
        <h2 className="mx-auto my-8 flex">{header}</h2>
        <div className="flex flex-col justify-center gap-2 md:flex-row">
          <div
            style={{ backgroundColor: tagColor || "#E55937" }}
            className="hidden w-[40px] items-center justify-center self-stretch overflow-hidden rounded-l-full text-white md:flex"
          >
            <p className="-rotate-90 whitespace-nowrap">{tagText}</p>
          </div>
          <div
            style={{ backgroundColor: tagColor || "#E55937" }}
            className="mx-auto w-[250px] items-center rounded-t-full py-4 text-white md:hidden"
          >
            <p className="text-center">{tagText}</p>
          </div>

          {pressReleases?.map((pr) => {
            return (
              <div
                key={pr._key}
                className="mx-auto size-[197px] w-[250px] bg-white md:mx-0"
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
      <div className="w-full rounded-t-[8rem] bg-white">
        <div className="r flex h-[764px] flex-col items-center justify-center md:mx-auto md:max-w-[1100px] md:flex-row">
          <div className="w-[500px]">
            <h1 className="py-12 text-red">{helpHeader}</h1>
            <p className="max-w-[400px] text-right">
              {helpText} <br />
              <p className="py-4 text-right text-red">
                <a
                  className="mt-6 rounded-full border-2 border-red px-10 text-center text-red"
                  href="/donate"
                >
                  DONATE TODAY
                </a>
              </p>
            </p>
          </div>
          {helpImage?.assetPath && (
            <Image
              src={helpImage?.assetPath || ""}
              width={1200}
              height={1200}
              alt={helpImage?.caption || "missing alt"}
              className="max-h-[500px] max-w-[596px]"
            />
          )}
        </div>
      </div>
    </>
  );
}
