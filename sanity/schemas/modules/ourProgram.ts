import { defineField, defineType, defineArrayMember } from "sanity";

export const ourProgram = defineType({
  name: "ourProgram",
  title: "Our Program",
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
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "missionHeader",
      title: "Mission Header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mission",
      title: "Mission Bullet Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "text", title: "Text" },
            { type: "number", name: "number", title: "Number" },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Banner Image",
      type: "imageAlt",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
    },

    prepare: ({ title }) => {
      return {
        title: title ? title : "Our Program",
      };
    },
  },
});
