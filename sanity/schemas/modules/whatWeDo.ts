import { defineField, defineType, defineArrayMember } from "sanity";

export const whatWeDo = defineType({
  name: "whatWeDo",
  title: "What We Do",
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
      name: "link",
      title: "About Us Link",
      type: "link",
      description: "About Us Link",
      options: {
        enableText: true,
      },
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
      name: "image",
      title: "Banner",
      type: "imageAlt",
      description: "The banner image should be a transparent png",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
    },

    prepare: ({ title }) => {
      return {
        title: title ? title : "What We Do",
      };
    },
  },
});
