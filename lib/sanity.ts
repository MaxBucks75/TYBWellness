import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// ── Blog Posts ──────────────────────────────────────────────

export type SanityPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  estimatedReadingTime?: number;
};

export async function getPosts(): Promise<SanityPost[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }`
  );
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      mainImage,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }`,
    { slug }
  );
}

// ── Supplement of the Month ─────────────────────────────────

export type SupplementOfTheMonth = {
  _id: string;
  name: string;
  description: string;
  affiliateLink: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  affiliateQrCode?: any;
  month: string;
};

export async function getSupplementOfTheMonth(): Promise<SupplementOfTheMonth | null> {
  return client.fetch(
    `*[_type == "supplementOfTheMonth"] | order(_createdAt desc) [0] {
      _id,
      name,
      description,
      affiliateLink,
      image,
      affiliateQrCode,
      month
    }`
  );
}