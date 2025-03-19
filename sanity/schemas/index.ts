import { type SchemaTypeDefinition } from "sanity";

/* Document Imports */
import { header, homepage, page, siteSettings } from "./documents";

/* Module Imports */
import { photoGallery } from "./modules";

/* Object imports */
import { imageAlt, seo } from "./objects";

const documents = [header, homepage, page, siteSettings];

const modules = [photoGallery];

const objects = [imageAlt, seo];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects, ...modules],
};
