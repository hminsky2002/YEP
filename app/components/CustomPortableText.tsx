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

      leftBorder: ({ children }) => {
        return (
          <p
            className={
              "body leading-[225.1%] lg:border-l lg:border-black lg:pl-4"
            }
          >
            {children}
          </p>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.url} target="_blank" rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
    types: {
      link: ({ value }) => {
        return (
          <div className="mt-[5.5rem]">
            <span className="button">
              <Link link={value}>{value.text}</Link>
            </span>
          </div>
        );
      },
    },
  };

  return <PortableText components={components} value={value} />;
}
