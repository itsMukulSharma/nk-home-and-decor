import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};