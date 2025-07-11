import { type SchemaTypeDefinition } from "sanity";

/* Document Imports */
import { header, homepage, page, siteSettings, footer } from "./documents";

/* Module Imports */
import {
  pressReleasesGallery,
  openerWithCarousel,
  testimonialsBlock,
  teamMembersBlock,
  chaptersGallery,
  chapterComponent,
  chaptersList,
  directorsList,
  donation,
  whatWeDo,
  ourProgram,
} from "./modules";

/* Object imports */
import { imageAlt, seo } from "./objects";

const documents = [header, homepage, page, siteSettings, footer];

const modules = [
  pressReleasesGallery,
  openerWithCarousel,
  testimonialsBlock,
  teamMembersBlock,
  chaptersGallery,
  chapterComponent,
  chaptersList,
  directorsList,
  donation,
  whatWeDo,
  ourProgram,
];

const objects = [imageAlt, seo];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects, ...modules],
};
