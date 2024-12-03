import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { oderType } from "./orderType";
import { productType } from "./productType";
import { salesType } from "./salesType";

export const schema: { types: SchemaTypeDefinition[] } = {
 types: [
  blockContentType,
  categoryType,
  postType,
  authorType,
  productType, // Corrected registration
  oderType,
  salesType,
 ],
};