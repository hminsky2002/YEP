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
      <h1 className="mb-16 mt-[85px] pb-20 underline decoration-1">{header}</h1>
      <div className="flex flex-col gap-20">
        {directorsByGroup?.map((directorGroup) => {
          return (
            <div key={directorGroup.directorGroupName}>
              <div className="flex pb-[48px]">
                <h2 className="inline-block border border-black px-[60px] py-[10px] font-semibold">
                  {directorGroup.directorGroupName}
                </h2>
              </div>
              <div className="flex flex-col gap-32">
                {directorGroup.directors?.map((director) => {
                  return (
                    <div
                      key={director.directorName}
                      className="flex flex-row gap-[60px]"
                    >
                      <div className="flex flex-col pl-[40px]">
                        {director.image?.assetPath && (
                          <Image
                            src={director.image.assetPath}
                            alt={director.image.caption || ""}
                            width={2000}
                            height={2000}
                            className="h-[368px] w-[257px] object-cover"
                          />
                        )}
                        <div className="rounded-b-[8rem] border border-black text-center">
                          <h3 className="py-2">{director.directorName}</h3>
                        </div>
                      </div>
                      <div className="flex max-w-[657px] flex-col gap-4">
                        <h3 className="underline decoration-1 underline-offset-[10px]">
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
