import { definePlugin } from "sanity";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet

const singletonTypes = ["homepage", "siteSettings", "header", "footer"];

const documentsHiddenFromContentList = [
  "page",
  "pressReleasesGallery",
  "openerWithCarousel",
  "testimonialsBlock",
  "teamMembersBlock",
  "chaptersGallery",
  "chaptersList",
  "directorsList",
  "donation",
  "whatWeDo",
  "ourProgram",
  "ourHistory",
  "ourCurriculum",
  "programmingBlock",
  "howCanIHelpBlock",
  "chapterComponent",
];

export const singletonPlugin = definePlugin(() => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Settings)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext, ...rest }) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem) => !singletonTypes.includes(templateItem.templateId),
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev, { schemaType }) => {
        if (singletonTypes.includes(schemaType)) {
          return prev.filter(({ action }) => action !== "duplicate");
        }

        return prev;
      },
    },
  };
});

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("homepage")
        .schemaType("homepage")
        .title("Homepage")
        .child(
          S.document()
            .id("homepage")
            .schemaType("homepage")
            .documentId("homepage"),
        ),
      S.listItem()
        .id("header")
        .schemaType("header")
        .title("Header")
        .child(
          S.document().id("header").schemaType("header").documentId("header"),
        ),
      S.listItem()
        .id("footer")
        .schemaType("footer")
        .title("Footer")
        .child(
          S.document().id("footer").schemaType("footer").documentId("footer"),
        ),
      S.listItem()
        .title("Pages")
        .child(
          S.documentTypeList("page").defaultOrdering([
            { field: "_createdAt", direction: "asc" },
          ]),
        ),

      S.divider(),
      // Removes singletons from main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![...documentsHiddenFromContentList, ...singletonTypes].includes(
            listItem.getId() || "",
          ),
      ),

      S.listItem()
        .title("Modules")
        .child(
          S.list()
            .title("Modules List")
            .items([
              S.listItem()
                .title("Press Releases Gallery")
                .child(
                  S.documentTypeList("pressReleasesGallery").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Opener With Carousel")
                .child(
                  S.documentTypeList("openerWithCarousel").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Team Members Block")
                .child(
                  S.documentTypeList("teamMembersBlock").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Testimonials Block")
                .child(
                  S.documentTypeList("testimonialsBlock").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Chapters Gallery")
                .child(
                  S.documentTypeList("chaptersGallery").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Chapters List")
                .child(
                  S.documentTypeList("chaptersList").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),

              S.listItem()
                .title("Directors List")
                .child(
                  S.documentTypeList("directorsList").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Donation")
                .child(
                  S.documentTypeList("donation").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("What We Do")
                .child(
                  S.documentTypeList("whatWeDo").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Our Program")
                .child(
                  S.documentTypeList("ourProgram").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Our History")
                .child(
                  S.documentTypeList("ourHistory").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Our Curriculum")
                .child(
                  S.documentTypeList("ourCurriculum").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("Programming Block")
                .child(
                  S.documentTypeList("programmingBlock").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
              S.listItem()
                .title("How Can I Help Block")
                .child(
                  S.documentTypeList("howCanIHelpBlock").defaultOrdering([
                    { field: "_createdAt", direction: "asc" },
                  ]),
                ),
            ]),
        ),
      S.listItem()
        .title("Chapter Component")
        .child(
          S.documentTypeList("chapterComponent").defaultOrdering([
            { field: "_createdAt", direction: "asc" },
          ]),
        ),
      S.divider(),

      S.listItem()
        .title("Site Settings")
        .child(
          S.list()
            .title("Settings Documents")
            .items([
              S.listItem()
                .id("siteSettings")
                .schemaType("siteSettings")
                .title("SEO")
                .child(
                  S.editor()
                    .id("siteSettings")
                    .schemaType("siteSettings")
                    .documentId("siteSettings"),
                ),
            ]),
        ),
    ]);
