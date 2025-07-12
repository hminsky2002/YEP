import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "navList",
      title: "Navigation Link List",
      type: "array",
      of: [
        {
          type: "link",
          options: {
            enableText: true,
          },
        },
      ],
    }),
    defineField({
      name: "mobileNavList",
      title: "Mobile Navigation Link List",
      description: "This is the navigation link list for the mobile header",
      type: "array",
      of: [
        {
          type: "link",
          options: {
            enableText: true,
          },
        },
      ],
    }),
  ],

  preview: {
    prepare: () => ({ title: "Header" }),
  },
});
