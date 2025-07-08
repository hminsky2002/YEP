import { defineType, defineField } from "sanity";

export const directorsList = defineType({
  name: "directorsList",
  title: "Directors List",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "directorsByGroup",
      title: "Directors by Group",
      type: "array",
      of: [
        {
          type: "object",
          name: "directorGroup",
          title: "Director Group",
          fields: [
            defineField({
              name: "directorGroupName",
              title: "Director Group Name",
              type: "string",
            }),
            defineField({
              name: "directors",
              title: "Directors",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "director",
                  title: "Director",
                  fields: [
                    defineField({
                      name: "directorName",
                      title: "Director Name",
                      type: "string",
                    }),
                    defineField({
                      name: "directorTitle",
                      title: "Director Title",
                      type: "string",
                    }),
                    defineField({
                      name: "image",
                      title: "Image",
                      type: "imageAlt",
                      options: {
                        hotspot: true,
                      },
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "array",
                      of: [{ type: "block" }],
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
