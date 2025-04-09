import { type SchemaTypeDefinition } from "sanity";

/* Document Imports */
import { header, homepage, page, siteSettings, footer } from "./documents";

/* Module Imports */
import { photoGallery, openerWithCarousel } from "./modules";

/* Object imports */
import { imageAlt, seo } from "./objects";

const documents = [header, homepage, page, siteSettings, footer];

const modules = [photoGallery, openerWithCarousel];

const objects = [imageAlt, seo];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects, ...modules],
};
