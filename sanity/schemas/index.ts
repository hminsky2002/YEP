import { type SchemaTypeDefinition } from "sanity";

/* Document Imports */
import { header, homepage, page, siteSettings, footer } from "./documents";

/* Module Imports */
import {
  photoGallery,
  openerWithCarousel,
  testimonialsBlock,
  teamMembersBlock,
} from "./modules";

/* Object imports */
import { imageAlt, seo } from "./objects";

const documents = [header, homepage, page, siteSettings, footer];

const modules = [
  photoGallery,
  openerWithCarousel,
  testimonialsBlock,
  teamMembersBlock,
];

const objects = [imageAlt, seo];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects, ...modules],
};
