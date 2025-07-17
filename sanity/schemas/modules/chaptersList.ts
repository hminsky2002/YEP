import { defineType, defineField, defineArrayMember } from "sanity";

export const chaptersList = defineType({
  name: "chaptersList",
  title: "Chapters List",
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
      name: "chapters",
      title: "Chapters",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "chapter",
          title: "Chapter",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "imageAlt",
     
            }),
            defineField({
              name: "descriptionColor",
              title: "Background Color",
              description: "Background color for chapterDescription",
              type: "color",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
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
              name: "link",
              title: "Link",
              type: "link",
              options: {
                enableText: true,
              },
            }),
            defineField({
              name: "linkColor",
              title: "Link Color",
              type: "color",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
