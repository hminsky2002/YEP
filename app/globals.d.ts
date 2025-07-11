import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ribbon-donation-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        form_uuid?: string;
        dialog?: string;
      };
    }
  }
}
