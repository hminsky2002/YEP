import { defineType, defineField } from "sanity";

export const donation = defineType({
  name: "donation",
  title: "Donation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the donation page",
    }),
    defineField({
      name: "redHeader",
      title: "Red Header",
      type: "string",
      description: "Main heading text that is red",
    }),
    defineField({
      name: "plainHeader",
      title: "Plain Header",
      type: "string",
      description: "Main heading text that is not red",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading XXL", value: "h1" },
            { title: "Heading XL", value: "h2" },
            { title: "Heading L", value: "h3" },
            { title: "Medium", value: "h4" },
            { title: "Left Border", value: "leftBorder" },
          ],
        },
      ],
      description: "Main body description in portable text.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "imageAlt",
      options: { hotspot: true },
      description: "Image displayed alongside the description text.",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "object",
      fields: [
        defineField({
          name: "years",
          title: "Years",
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              type: "string",
              description: "Number of years for number of years text ",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
              description: "Text for number of years text ",
            }),
          ],
        }),
        defineField({
          name: "chapters",
          title: "Chapters",
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              type: "string",
              description: "Number of chapters for number of chapters text ",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
              description: "Text for number of chapters text ",
            }),
          ],
        }),
        defineField({
          name: "studentsSupported",
          title: "Students Supported",
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              type: "string",
              description:
                "Number of students supported for number of students supported text ",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
              description: "Text for number of students supported text ",
            }),
          ],
        }),
      ],
    }),
  ],
});
