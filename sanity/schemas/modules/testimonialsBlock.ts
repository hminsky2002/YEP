import { defineField, defineType, defineArrayMember } from "sanity";

export const testimonialsBlock = defineType({
  name: "testimonialsBlock",
  title: "Testimonials Block",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          title: "Social Link",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "imageAlt",
              options: {
                hotspot: true,
              },
              description: "Relevant icon for social media link",
            }),
            defineField({
              name: "testimonialSource",
              title: "Testimonial Source",
              type: "string",
            }),
            defineField({
              name: "testimonialContent",
              title: "Testimonial Content",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [
                    { title: "Heading L", value: "h3" },
                    { title: "Yellow Heading L", value: "yellowH3" },
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "testimonialSource",
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
        title: title ? title : "Testimonials",
      };
    },
  },
});
