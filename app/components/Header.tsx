"use client";

import { isInternalLink, LinkValue } from "sanity-plugin-link-field";
import LogoPrimary from "./LogoPrimary";
import NextLink from "next/link";
import { Link } from "./Link";
import { usePathname } from "next/navigation";

type Props = {
  data: {
    navList: any[] | null;
  } | null;
};

export function Header({ data }: Props) {
  const navList = data?.navList;
  const pathname = usePathname();
  let bgColor = "";
  const currentPath = pathname.split("/")[1];

  if (currentPath === "about-us" || currentPath === "our-chapters") {
    bgColor = "bg-yellow pb-2";
  } else if (currentPath.includes("affiliate")) {
    bgColor = "bg-red";
  }

  return (
    <nav
      className={`${bgColor} fixed top-0 z-10 flex w-full items-center justify-between text-white`}
    >
      <NextLink href={`/`}>
        <div className="ml-[1.6rem] mt-[1.6rem] w-80">
          <LogoPrimary />
        </div>
      </NextLink>
      <div className="flex gap-12 p-[1.6rem]">
        {navList?.map((link) => {
          let linkUnderline = "";
          if (link && isInternalLink(link as LinkValue)) {
            linkUnderline =
              link.internalLink?.slug?.current != currentPath &&
              currentPath != "/"
                ? ""
                : "border-b pb-1 border-black";
          }

          return (
            <span key={link._key} className={`menu text-black`}>
              <Link className={`${linkUnderline}`} link={link as LinkValue}>
                {link.text}
              </Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
}
