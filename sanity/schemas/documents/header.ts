import { defineArrayMember, defineField, defineType } from "sanity";

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
    defineField({
      name: "showBanner",
      title: "Show Banner",
      description: "toggle to display announcement",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "announcementBanner",
      title: "Announcement Banner",
      description: "Announcement banner to be displayed on home page",
      type: "object",
      fields: [
        defineField({
          name: "content",
          title: "Content",
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
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                  { title: "Code", value: "code" },
                  { title: "Underline", value: "underline" },
                  { title: "Strike", value: "strike-through" },
                  {
                    title: "Dashed Top Border",
                    value: "dashed-border",
                    icon: () => "-",
                  },
                ],
              },
            }),
            defineField({
              name: "link",
              title: "CTA Button",
              type: "link",
              options: {
                enableText: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare: () => ({ title: "Header" }),
  },
});
