import { defineType, defineField } from "sanity";

export const chaptersGallery = defineType({
  name: "chaptersGallery",
  title: "Chapters Gallery",
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
      name: "subHeader",
      title: "Sub Header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "chapters",
      title: "Chapters List",
      type: "array",
      of: [
        {
          type: "object",
          name: "chapter",
          title: "Chapter",
          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "link",
              description:
                "link for chapter page, text should be the chapter title",
              options: {
                enableText: true,
              },
            }),
            defineField({
              name: "image",
              title: "Chapter Image",
              type: "imageAlt",
            }),
          ],
          preview: {
            select: {
              title: "chapterTitle",
            },
          },
        },
      ],
    }),
    defineField({
      name: "chaptersLink",
      title: "Chapters Link",
      type: "link",
      description: "Donation Button Link",
      options: {
        enableText: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "directorsLink",
      title: "Directors Link",
      type: "link",
      description: "Directors Link",
      options: {
        enableText: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
