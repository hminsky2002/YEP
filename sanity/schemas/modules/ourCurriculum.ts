import { ImageIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const ourCurriculum = defineType({
  name: "ourCurriculum",
  title: "Our Curriculum",
  type: "document",
  icon: ImageIcon,
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
      name: "curriculumCards",
      title: "Curriculum Cards",
      type: "array",
      of: [
        defineArrayMember({
          name: "curriculumCard",
          title: "Curriculum Card",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "imageAlt",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "imageAlt",
              description: "Image for the curriculum card",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "carousel",
              title: "Photo Carousel",
              description:
                "Photos for a carousel (optional, if not provided, the image will be used instead)",
              type: "array",
              of: [
                defineArrayMember({
                  name: "carouselPhoto",
                  title: "carouselPhoto",
                  type: "object",
                  fields: [
                    defineField({
                      name: "photo",
                      title: "Photo",
                      type: "imageAlt",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "caption",
                      title: "Caption",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
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
        title: title ? title : "Our Curriculum",
      };
    },
  },
});
