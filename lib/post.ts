import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary shown on the blog index page.",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bibliography",
      title: "Bibliography / References",
      type: "array",
      description:
        "Optional — add sources, citations, or further reading. Each entry can include a citation and an optional link.",
      of: [
        {
          type: "object",
          name: "bibliographyEntry",
          fields: [
            {
              name: "citation",
              title: "Citation",
              type: "text",
              rows: 2,
              description:
                "The full citation text, e.g. author, title, publication, year.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "Link (optional)",
              type: "url",
              description: "Link to the source online, if available.",
            },
          ],
          preview: {
            select: { title: "citation" },
            prepare({ title }: { title?: string }) {
              return { title: title ?? "Untitled reference" };
            },
          },
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "publishedAt",
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : "No date",
      };
    },
  },
});