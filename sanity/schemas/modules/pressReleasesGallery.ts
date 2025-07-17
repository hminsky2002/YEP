import { defineField, defineType, defineArrayMember } from "sanity";

export const pressReleasesGallery = defineType({
  name: "pressReleasesGallery",
  title: "Press Releases Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagText",
      title: "Tag Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagColor",
      title: "Tag Color",
      type: "color",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pressReleases",
      title: "Press Releases List",
      type: "array",
      of: [
        {
          type: "object",
          name: "pressReleases",
          title: "Press Release",
          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "link",
              description: "URL for Press Release",
              options: {
                enableText: true,
              },
            }),
            defineField({
              name: "image",
              title: "Press Release Image",
              type: "imageAlt",
            }),
          ],
          preview: {
            select: {
              title: "link.text",
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },

    prepare: ({ title }) => {
      return {
        title: title ? title : "Photo Gallery",
      };
    },
  },
});
