import { defineField, defineType, defineArrayMember } from "sanity";

export const ourHistory = defineType({
  name: "ourHistory",
  title: "Our History",
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
      name: "timelineItems",
      title: "Timeline Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "header",
              title: "Header",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                }),
              ],
            }),
            defineField({
              name: "icon",
              title: "Icon",
              description:
                "Upload a png or svg icon to appear on the timeline section",
              type: "imageAlt",
            }),
            defineField({
              name: "year",
              title: "Year Icon",
              description:
                "For maximizing compatibility, upload an svg of the year as a curved number(reference the figma about us timeline section)",
              type: "imageAlt",
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },

    prepare: ({ title }) => {
      return {
        title: title ? title : "Our History",
      };
    },
  },
});
