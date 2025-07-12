import type { ProgrammingBlockQueryResult } from "@/sanity.types";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { CustomPortableText } from "./CustomPortableText";

type ProgrammingBlockProps = {
  content: ProgrammingBlockQueryResult["programmingBlock"];
};

export default function ProgrammingBlock({ content }: ProgrammingBlockProps) {
  const { header, programmingCards } = content || {};

  return (
    <div className="flex w-full flex-col bg-yellow py-[100px]">
      <div className="mx-auto flex w-full flex-row items-center justify-center gap-[100px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold underline decoration-1 underline-offset-[20px]">
            {header}
          </h1>

          <div className="w-[436px] text-left"></div>
        </div>
        <div className="flex w-[451px] flex-col"></div>
      </div>
    </div>
  );
}
