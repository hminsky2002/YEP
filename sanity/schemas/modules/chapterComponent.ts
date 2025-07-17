import { defineType, defineField, defineArrayMember } from "sanity";

export const chapterComponent = defineType({
  name: "chapterComponent",
  title: "Chapter Component",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Chapter Image",
      type: "imageAlt",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contactLink",
      title: "Contact Link",
      type: "link",
      description: "Contact Link",
      options: {
        enableText: true,
      },
    }),
    defineField({
      name: "applyLink",
      title: "Apply Link",
      type: "link",
      description: "Apply Link",
      options: {
        enableText: true,
      },
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "timelineItem",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "header",
              title: "Header",
              type: "string",
            }),
            defineField({
              name: "subHeader",
              title: "Sub Header",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "Heading XXL", value: "h1" },
                    { title: "Heading XL", value: "h2" },
                    { title: "Heading L", value: "h3" },
                    { title: "Medium", value: "h4" },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryImage",
          title: "Gallery Image",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "imageAlt",
            }),
            defineField({
              name: "imageColumnStart",
              title: "Image Column Start",
              type: "number",
            }),
            defineField({
              name: "imageColumnEnd",
              title: "Image Column End",
              type: "number",
            }),
            defineField({
              name: "imageRowStart",
              title: "Image Row Start",
              type: "number",
            }),
            defineField({
              name: "imageRowEnd",
              title: "Image Row End",
              type: "number",
            }),
          ],
          preview: {
            select: {
              title: "imageColumnStart",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
});
