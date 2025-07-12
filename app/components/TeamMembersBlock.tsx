import type { TeamMembersBlockQueryResult } from "@/sanity.types";
import { CustomPortableText } from "@/app/components/CustomPortableText";
import Image from "next/image";
import { type PortableTextBlock } from "next-sanity";
import { Link } from "./Link";
import { LinkValue } from "sanity-plugin-link-field";
type TeamMembersBlockProps = {
  content: TeamMembersBlockQueryResult["teamMembersBlock"];
};

export function TeamMembersBlock({ content }: TeamMembersBlockProps) {
  const { header, teamMembers } = content || {};
  return (
    <div className="relative mx-auto mt-12 max-w-[1263px] bg-white pb-12">
      <div className="pointer-events-none absolute -right-4 -top-4 hidden size-full border border-black lg:block" />
      <div className="mx-auto max-w-[425px] pb-[50px] text-center">
        <h1 className="text-decoration-thickness-2 pb-8 pt-[50px] underline underline-offset-[10px]">
          {header}
        </h1>
      </div>
      <div className="flex flex-col gap-[100px] px-[80px]">
        {teamMembers?.map((t, i) => (
          <div
            key={i}
            className={`${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse lg:justify-end"} mx-auto flex flex-col gap-12`}
          >
            <div className="flex flex-col">
              {t.image?.assetPath && (
                <Image
                  src={t.image.assetPath}
                  width={1000}
                  height={1000}
                  className="rounded-3xl lg:h-[353px] lg:w-[280px]"
                  alt={t.image.caption || ""}
                />
              )}
              {t.memberLink && (
                <h3 className="mx-auto underline">
                  <Link link={t.memberLink as LinkValue} />
                </h3>
              )}
            </div>
            <div className="flex flex-col gap-8">
              <div className="-mt-8 flex flex-col">
                <h3 className="inline-block w-max border border-black bg-white p-2 text-black">
                  {t.memberTitle}
                </h3>
                <h4 className="inline-block w-max rounded-br-full bg-red p-4 pr-8 text-white">
                  {t.memberName}
                </h4>
              </div>
              {t.memberDescription && (
                <div className={`max-w-[600px]`}>
                  <CustomPortableText
                    value={t.memberDescription as PortableTextBlock[]}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
