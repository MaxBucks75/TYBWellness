import { defineField, defineType } from "sanity";

export const supplementOfTheMonthSchema = defineType({
  name: "supplementOfTheMonth",
  title: "Supplement of the Month",
  type: "document",
  fields: [
    defineField({
      name: "month",
      title: "Month",
      type: "string",
      description: 'e.g. "June 2026" — used to identify which entry is current',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Supplement Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Why It's Beneficial",
      type: "text",
      rows: 4,
      description: "Dr. Bucks' explanation of why she's recommending this supplement.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "affiliateLink",
      title: "Pure Encapsulations Affiliate Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "month",
    },
  },
});