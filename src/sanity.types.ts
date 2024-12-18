/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

export type Order = {
 _id: string; // Unique identifier for the order
 _type: string; // Order type
 _createdAt: string; // Timestamp of order creation
 _updatedAt: string; // Timestamp of last order update
 orderNumber: string; // Unique order number
 customerName: string; // Customer's name
 email: string; // Customer's email address
 orderDate: string; // Date of the order
 currency: string; // Currency used for the order (e.g., "gbp")
 total_price: number; // Total order price
 amountDiscount: number; // Discount applied (if any)
 status: string; // Payment status (e.g., "paid")
 stripeCustomerId: string; // Stripe customer ID
 stripeCheckoutSessionId: string; // Stripe checkout session ID
 stripePaymentIntentId: string; // Stripe payment intent ID
 clerkUserId: string; // Clerk user ID
 products: ProductInOrder[]; // Array of products in the order
};

type ProductInOrder = {
 product: Product; // Product details
 quantity: number; // Quantity of the product in the order
 _key: string; // Unique key for the product in the order
};

// Source: schema.json
export type SanityImagePaletteSwatch = {
 _type: "sanity.imagePaletteSwatch";
 background?: string;
 foreground?: string;
 population?: number;
 title?: string;
};

export type SanityImagePalette = {
 _type: "sanity.imagePalette";
 darkMuted?: SanityImagePaletteSwatch;
 lightVibrant?: SanityImagePaletteSwatch;
 darkVibrant?: SanityImagePaletteSwatch;
 vibrant?: SanityImagePaletteSwatch;
 dominant?: SanityImagePaletteSwatch;
 lightMuted?: SanityImagePaletteSwatch;
 muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
 _type: "sanity.imageDimensions";
 height?: number;
 width?: number;
 aspectRatio?: number;
};

export type Product = {
 _id: string;
 _type: "product";
 _createdAt: string;
 _updatedAt: string;
 _rev: string;
 name: string;
 description: string;
 stock: number;
 price: number;
 categories: Array<{
  _type: "reference";
  _ref: string;
  _key: string;
 }>;
 slug: {
  _type: "slug";
  current: string;
 };
 image: {
  url: string;
  _type: "image";
  asset: {
   _type: "reference";
   _ref: string;
  };
 };
};

export type SanityFileAsset = {
 _id: string;
 _type: "sanity.fileAsset";
 _createdAt: string;
 _updatedAt: string;
 _rev: string;
 originalFilename?: string;
 label?: string;
 title?: string;
 description?: string;
 altText?: string;
 sha1hash?: string;
 extension?: string;
 mimeType?: string;
 size?: number;
 assetId?: string;
 uploadId?: string;
 path?: string;
 url?: string;
 source?: SanityAssetSourceData;
};

export type Geopoint = {
 _type: "geopoint";
 lat?: number;
 lng?: number;
 alt?: number;
};

export type Post = {
 _id: string;
 _type: "post";
 _createdAt: string;
 _updatedAt: string;
 _rev: string;
 title?: string;
 slug?: Slug;
 author?: {
  _ref: string;
  _type: "reference";
  _weak?: boolean;
  [internalGroqTypeReferenceTo]?: "author";
 };
 mainImage?: {
  asset?: {
   _ref: string;
   _type: "reference";
   _weak?: boolean;
   [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
 };
 categories?: Array<{
  _ref: string;
  _type: "reference";
  _weak?: boolean;
  _key: string;
  [internalGroqTypeReferenceTo]?: "category";
 }>;
 publishedAt?: string;
 body?: Array<
  | {
     children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
     }>;
     style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
     listItem?: "bullet";
     markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
     }>;
     level?: number;
     _type: "block";
     _key: string;
    }
  | {
     asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
     };
     hotspot?: SanityImageHotspot;
     crop?: SanityImageCrop;
     alt?: string;
     _type: "image";
     _key: string;
    }
 >;
};

export type Author = {
 _id: string;
 _type: "author";
 _createdAt: string;
 _updatedAt: string;
 _rev: string;
 name?: string;
 slug?: Slug;
 image?: {
  asset?: {
   _ref: string;
   _type: "reference";
   _weak?: boolean;
   [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
 };
 bio?: Array<{
  children?: Array<{
   marks?: Array<string>;
   text?: string;
   _type: "span";
   _key: string;
  }>;
  style?: "normal";
  listItem?: never;
  markDefs?: Array<{
   href?: string;
   _type: "link";
   _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
 }>;
};

export type Category = {
 _id: string;
 _type: "category";
 _createdAt: string;
 _updatedAt: string;
 _rev: string;
 title?: string;
 slug?: Slug;
 description?: string;
};

export type Slug = {
 _type: "slug";
 current?: string;
 source?: string;
};

export type BlockContent = Array<
 | {
    children?: Array<{
     marks?: Array<string>;
     text?: string;
     _type: "span";
     _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
     href?: string;
     _type: "link";
     _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
   }
 | {
    asset?: {
     _ref: string;
     _type: "reference";
     _weak?: boolean;
     [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
   }
>;

export type SanityImageCrop = {
 _type: "sanity.imageCrop";
 top?: number;
 bottom?: number;
 left?: number;
 right?: number;
};

export type SanityImageHotspot = {
 _type: "sanity.imageHotspot";
 x?: number;
 y?: number;
 height?: number;
 width?: number;
};

export type SanityImageAsset = {
 _id: string;
 _type: "sanity.imageAsset";
 _createdAt: string;
 _updatedAt: string;
 _rev: string;
 originalFilename?: string;
 label?: string;
 title?: string;
 description?: string;
 altText?: string;
 sha1hash?: string;
 extension?: string;
 mimeType?: string;
 size?: number;
 assetId?: string;
 uploadId?: string;
 path?: string;
 url?: string;
 metadata?: SanityImageMetadata;
 source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
 _type: "sanity.assetSourceData";
 name?: string;
 id?: string;
 url?: string;
};

export type SanityImageMetadata = {
 _type: "sanity.imageMetadata";
 location?: Geopoint;
 dimensions?: SanityImageDimensions;
 palette?: SanityImagePalette;
 lqip?: string;
 blurHash?: string;
 hasAlpha?: boolean;
 isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
 | SanityImagePaletteSwatch
 | SanityImagePalette
 | SanityImageDimensions
 | SanityFileAsset
 | Geopoint
 | Post
 | Author
 | Category
 | Slug
 | BlockContent
 | SanityImageCrop
 | SanityImageHotspot
 | SanityImageAsset
 | SanityAssetSourceData
 | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
