import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "f74izoa1",
  dataset: "products",
  apiVersion: "2023-03-15",
  useCdn: true,
  token: process.env.LIGHT_SANITY_TOKEN
}); 

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
