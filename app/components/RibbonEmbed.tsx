"use client";

import Script from "next/script";
export default function RibbonEmbed() {
  return (
    <div className="mx-auto my-[40px] w-[340px] border lg:w-auto border-black lg:h-[600px] lg:max-w-[500px]">
      <link
        rel="stylesheet"
        precedence="default"
        href="https://aarib-public-bucket.s3.amazonaws.com/donation-embed-v3/ribbon-donation-embed.css"
      />
      <div id="app"></div>

      <div className="ribbon-donation-embed-container">
        <ribbon-donation-embed
          id="ribbon-donation-embed"
          form_uuid="chem_NvLZxgIQcDJNgnVo"
          dialog="false"
        />

        <Script
          type="module"
          crossOrigin="anonymous"
          src="https://aarib-public-bucket.s3.amazonaws.com/donation-embed-v3/ribbon-donation-embed.js"
        ></Script>
      </div>
    </div>
  );
}
