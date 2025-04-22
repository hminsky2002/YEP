import { defineQuery } from "next-sanity";

const seoData = `{
    ...,
    'openGraphImage': openGraphImage.asset->url,
}`;

const imageData = `{
    caption,
    'assetId': asset->_id,
    'assetPath': asset->path,
    'aspectRatio': asset->metadata.dimensions.aspectRatio,
}`;

const linkTypeData = `
  _type == "link" => {
    ...,
    internalLink->{_type,slug,title}
  }
`;

const socialLink = `
    {
    ...,
    icon ${imageData},
    ${linkTypeData}
    }
`;

const openerWithCarouselData = defineQuery(`{
    _id,
    _type,
    header,
    subHeader,
    'bgColor': bgColor.hex,
    tagline,
    ${linkTypeData},
    photos[] ${imageData}
}`);

const testimonials = `{
    icon ${imageData},
    testimonialSource,
    testimonialContent[] {
      ...,
      ${linkTypeData},
    },
}`;

const teamMembers = `{
    ...,
    image ${imageData},
    ${linkTypeData}
}`;

const testimonialsBlock = `{
    _id,
    title,
    header,
    testimonials[] ${testimonials}
  }`;

const teamMembersBlock = `{
    ...,
    teamMembers[] ${teamMembers}
}`;

const pressRelease = `{
    ...,
    image ${imageData},
    ${linkTypeData}
}`;

const pressReleasesGallery = `{
    ...,
    'tagColor': tagColor.hex,
    pressReleases[] ${pressRelease}

}`;

const contentData = `{
    ...,
    _type == 'openerWithCarousel' => ${openerWithCarouselData},
    _type == 'testimonialsBlock' => ${testimonialsBlock},
    _type == 'teamMembersBlock' => ${teamMembersBlock},
    _type == 'pressReleasesGallery' => ${pressReleasesGallery},

}`;

export const testimonialsBlockQuery = defineQuery(`{
    'testimonialsBlock': *[_type == 'testimonialsBlock'][0] ${testimonialsBlock}
}`);

export const teamMembersBlockQuery = defineQuery(`{
    'teamMembersBlock': *[_type == 'teamMembersBlock'][0] ${teamMembersBlock}
}`);

export const pressReleasesGalleryQuery = defineQuery(`{
    'pressReleasesGallery': *[_type == 'pressReleasesGallery'][0] ${pressReleasesGallery}
}`);

export const headerQuery = defineQuery(`{
    'header': *[_type == 'header'][0] {
        navList[] {
            ...,
            ${linkTypeData},
        }
    }
}`);

export const footerQuery = defineQuery(`{
    'footer': *[_type == 'footer'][0] {
            ...,
            socials[] ${socialLink}
    }
}`);

export const siteSettingsQuery = defineQuery(`
    *[_type == 'siteSettings'][0] {
        SEO ${seoData},
    }
`);

export const homepageQuery = defineQuery(`{
    'homepage': *[_type == 'homepage'][0] {
        ...,
        content[]->${contentData},
        SEO ${seoData},
    }
}`);

export const pageQuery = defineQuery(`{
    'page': *[_type == 'page' && $slug == slug.current][0] {
        ...,
        title,
        content[]->${contentData},
        SEO ${seoData},
    }
}`);
