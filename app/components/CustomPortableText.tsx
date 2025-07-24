import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";

import { Link } from "./Link";

export function CustomPortableText({ value }: { value: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => {
        return <h1 className={"h1"}>{children}</h1>;
      },
      h2: ({ children }) => {
        return <h2 className={"h2"}>{children}</h2>;
      },
      h3: ({ children }) => {
        return <h3 className={"h3"}>{children}</h3>;
      },
      h4: ({ children }) => {
        return <h4 className={"h4"}>{children}</h4>;
      },
      normal: ({ children }) => {
        return <p className={"body leading-[225.1%]"}>{children}</p>;
      },
      yellowTestimonial: ({ children }) => {
        return (
          <div className={"text-[23px] font-bold leading-[125%] text-yellow"}>
            {children}
          </div>
        );
      },
      testimonial: ({ children }) => {
        return (
          <div className={"text-[20px] font-bold leading-[125%] text-white"}>
            {children}
          </div>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline underline-offset-4"
            href={value?.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
      "dashed-border": ({ children }) => {
        return (
          <div className="mt-24 border-t border-dashed pt-24">{children}</div>
        );
      },
    },
    types: {
      link: ({ value }) => {
        return (
          <div className="mt-[5.5rem]">
            <Link link={value}>
              <button className="button">{value.text}</button>
            </Link>
          </div>
        );
      },
    },
  };

  return <PortableText components={components} value={value} />;
}
