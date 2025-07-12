import { defineField, defineType, defineArrayMember } from "sanity";

export const howCanIHelpBlock = defineType({
  name: "howCanIHelpBlock",
  title: "How Can I Help Block",
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
      name: "link",
      title: "Donate Link",
      type: "link",
      description: "Donate Link",
      options: {
        enableText: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
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
        title: title ? title : "How Can I Help Block",
      };
    },
  },
});
