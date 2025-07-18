import { DocumentIcon as icon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon,
  groups: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      group: "main",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      group: "main",
      type: "slug",
      options: {
        source: "title",
        maxLength: 150,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content",
      title: "Content",
      group: "main",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "pressReleasesGallery" },
            { type: "openerWithCarousel" },
            { type: "testimonialsBlock" },
            { type: "teamMembersBlock" },
            { type: "chaptersGallery" },
            { type: "chapterComponent" },
            { type: "chaptersList" },
            { type: "directorsList" },
            { type: "donation" },
            { type: "whatWeDo" },
            { type: "ourProgram" },
            { type: "ourHistory" },
            { type: "ourCurriculum" },
            { type: "programmingBlock" },
            { type: "howCanIHelpBlock" },
          ],
        },
      ],
    }),

    defineField({
      name: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },

    prepare({ title }) {
      return { title };
    },
  },
});
