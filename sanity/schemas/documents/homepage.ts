import { HomeIcon as icon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon,
  groups: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
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
    prepare: () => {
      return { title: "Homepage" };
    },
  },
});
