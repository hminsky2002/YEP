import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "message",
      title: "Footer Message",
      type: "string",
      description: "Message in large font",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "array",
      of: [{ type: "block" }],
      description: "Contact address",
    }),
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "array",
      of: [{ type: "block" }],
      description: "Phone number/emails",
    }),
    defineField({
      name: "socials",
      title: "Social Media Icon List",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          title: "Social Link",
          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "link",
              description: "URL for the social media link",
              options: {
                enableText: true,
              },
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "imageAlt",

              description: "Relevant icon for social media link",
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
    prepare: () => ({ title: "Footer" }),
  },
});
