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

const chapter = `{
    ...,
    chapterTitle,
    image ${imageData},
    ${linkTypeData}
}`;

const pressReleasesGallery = `{
    ...,
    'tagColor': tagColor.hex,
    pressReleases[] ${pressRelease},
    helpImage ${imageData},
    helpHeader,
    helpText
}`;

const chaptersGallery = `{
    ...,
    title,
    header,
    subHeader,
    chaptersLink {..., ${linkTypeData}},
    directorsLink {..., ${linkTypeData}},
    chapters[] ${chapter}
}`;

const chapterComponent = `{
    ...,
    title,
    header,
    image ${imageData},
    timeline[] {
        ...,
        title,
        header,
        subHeader,
        description[] {
            ...,
            ${linkTypeData},
        },
        
    },
    imageGallery[] {
        ...,
        image ${imageData},
        imageColumnStart,
        imageColumnEnd,
        imageRowStart,
        imageRowEnd,
    }
}`;

const chaptersList = `{
    ...,
    header,
    chapters[] {
        ...,
        title,
        description,
        'descriptionColor': descriptionColor.hex,
        image ${imageData},
        'linkColor': linkColor.hex,
        link {..., ${linkTypeData}},
    }
}`;

const directorsList = `{
    ...,
    header,
    directorsByGroup[] {
        directorGroupName,
        directors[] {
            directorName,
            directorTitle,
            image ${imageData},
            description[] {
                ...,
                ${linkTypeData},
            },
        },
    },
}`;

const donation = `{
    ...,
    title,
    redHeader,
    plainHeader,
    description[] {
            ...,
            ${linkTypeData},
    },
    image ${imageData},
    stats {
        ...,
        years {
            ...,
            number,
            text,
        },
        chapters {
            ...,
            number,
            text,
        },
        studentsSupported {
            ...,
            number,
            text,
        },
    }
}`;

const whatWeDo = `{
    ...,
    title,
    header,
    description,
    image ${imageData},
    ${linkTypeData},
}`;

const ourProgram = `{
    ...,
    title,
    header,
    description,
    missionHeader,
    mission[] {
        ...,
        number,
        text,
    },
    image ${imageData},
}`;

const ourHistory = `{
    ...,
    title,
    header,
    timelineItems[] {
        ...,
        header,
        description,
        icon ${imageData},
        year ${imageData},
    }
}`;

const ourCurriculum = `{
    ...,
    title,
    header,
    curriculumCards[] {
        ...,
        title,
        icon ${imageData},
        description[] {
            ...,
            ${linkTypeData},
        },
        image ${imageData},
        carousel[] {
            ...,
            photo ${imageData},
            caption,
        },
    }
}`;

const programmingBlock = `{
    ...,
    title,
    header,
    programmingCards[] {
        ...,
        title,
        description,
        image ${imageData},
    }
}`;

const contentData = `{
    ...,
    _type == 'openerWithCarousel' => ${openerWithCarouselData},
    _type == 'testimonialsBlock' => ${testimonialsBlock},
    _type == 'teamMembersBlock' => ${teamMembersBlock},
    _type == 'pressReleasesGallery' => ${pressReleasesGallery},
    _type == 'chaptersGallery' => ${chaptersGallery},
    _type == 'chapterComponent' => ${chapterComponent},
    _type == 'chaptersList' => ${chaptersList},
    _type == 'directorsList' => ${directorsList},
    _type == 'donation' => ${donation},
    _type == 'whatWeDo' => ${whatWeDo},
    _type == 'ourProgram' => ${ourProgram},
    _type == 'ourHistory' => ${ourHistory},
    _type == 'ourCurriculum' => ${ourCurriculum}
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

export const chaptersGalleryQuery = defineQuery(`{
    'chaptersGallery': *[_type == 'chaptersGallery'][0] ${chaptersGallery}
}`);

export const chapterComponentQuery = defineQuery(`{
    'chapterComponent': *[_type == 'chapterComponent'][0] ${chapterComponent}
}`);

export const chaptersListQuery = defineQuery(`{
    'chaptersList': *[_type == 'chaptersList'][0] ${chaptersList}
}`);

export const directorsListQuery = defineQuery(`{
    'directorsList': *[_type == 'directorsList'][0] ${directorsList}
}`);

export const donationQuery = defineQuery(`{
    'donation': *[_type == 'donation'][0] ${donation}
}`);

export const whatWeDoQuery = defineQuery(`{
    'whatWeDo': *[_type == 'whatWeDo'][0] ${whatWeDo}
}`);

export const ourProgramQuery = defineQuery(`{
    'ourProgram': *[_type == 'ourProgram'][0] ${ourProgram}
}`);

export const ourHistoryQuery = defineQuery(`{
    'ourHistory': *[_type == 'ourHistory'][0] ${ourHistory}
}`);

export const ourCurriculumQuery = defineQuery(`{
    'ourCurriculum': *[_type == 'ourCurriculum'][0] ${ourCurriculum}
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
