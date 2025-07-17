import { defineField, defineType, defineArrayMember } from "sanity";

export const teamMembersBlock = defineType({
  name: "teamMembersBlock",
  title: "Team Members Block",
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
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "teamMember",
          title: "Team Member",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "imageAlt",
             
            }),
            defineField({
              name: "memberTitle",
              title: "Member Title",
              type: "string",
            }),
            defineField({
              name: "memberName",
              title: "Member Name",
              type: "string",
            }),
            defineField({
              name: "memberDescription",
              title: "Member Description",
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
                }),
              ],
            }),
            defineField({
              name: "memberLink",
              title: "Member Contact Link",
              type: "link",
              options: {
                enableText: true,
              },
            }),
          ],
          preview: {
            select: {
              title: "memberTitle",
            },
          },
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
        title: title ? title : "Team Members",
      };
    },
  },
});
