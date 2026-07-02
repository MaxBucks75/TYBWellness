import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  const builder = createImageUrlBuilder(client);
  return builder.image(source);
}

// ── Blog Posts ──────────────────────────────────────────────

export type BibliographyEntry = {
  _key: string;
  citation: string;
  url?: string;
};

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
  bibliography?: BibliographyEntry[];
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
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      mainImage,
      bibliography[]{
        _key,
        citation,
        url
      },
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }`,
    { slug }
  );
}

// ── Testimonials ────────────────────────────────────────────

export type Testimonial = {
  _id: string;
  quote: string;
  initials: string;
  role?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  photo?: any;
  order?: number;
};

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc, _createdAt asc) {
      _id,
      quote,
      initials,
      role,
      photo,
      order
    }`
  );
}

// ── Supplement of the Month ─────────────────────────────────

export type SupplementOfTheMonth = {
  _id: string;
  name: string;
  // Rich text array (Portable Text) — render with <PortableTextRenderer blocks={description} />
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: any[];
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
      description[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      affiliateLink,
      image,
      affiliateQrCode,
      month
    }`
  );
}