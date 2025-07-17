import Image from "next/image";
import type { DirectorsListQueryResult } from "@/sanity.types";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import { PortableTextBlock } from "next-sanity";

type DirectorsListProps = {
  content: DirectorsListQueryResult["directorsList"];
};
export default function DirectorsList({ content }: DirectorsListProps) {
  const { header, directorsByGroup } = content || {};
  return (
    <div className="flex flex-col items-center bg-white py-20">
      <h1 className="mb-16 mt-[85px] pb-20 underline decoration-1 underline-offset-[20px]">{header}</h1>
      <div className="flex flex-col gap-32 lg:gap-20">
        {directorsByGroup?.map((directorGroup) => {
          return (
            <div key={directorGroup.directorGroupName}>
              <div className="flex pb-[48px] lg:max-w-full">
                <h2 className="mx-auto inline-block max-w-[350px] border border-black px-12 py-[10px] font-semibold lg:mx-0 lg:max-w-full lg:px-[60px]">
                  {directorGroup.directorGroupName}
                </h2>
              </div>
              <div className="flex flex-col gap-32">
                {directorGroup.directors?.map((director) => {
                  return (
                    <div
                      key={director.directorName}
                      className="flex flex-col items-center justify-center lg:w-auto lg:flex-row lg:items-start lg:justify-normal lg:gap-[60px]"
                    >
                      <div className="flex flex-col lg:pl-[40px]">
                        {director.image?.assetPath && (
                          <Image
                            src={director.image.assetPath}
                            alt={director.image.caption || ""}
                            width={2000}
                            height={2000}
                            className="h-3/4 w-[275px] object-cover lg:h-[368px] lg:w-[257px]"
                          />
                        )}
                        <div className="rounded-b-[8rem] border border-black text-center">
                          <h4 className="py-4">{director.directorName}</h4>
                        </div>
                      </div>
                      <div className="flex max-w-[350px] flex-col gap-4 lg:max-w-[657px]">
                        <h3 className="lg:h3 mx-auto my-8 text-[20px] underline decoration-1 underline-offset-[10px] lg:m-0">
                          {director.directorTitle}
                        </h3>
                        <CustomPortableText
                          value={director.description as PortableTextBlock[]}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
