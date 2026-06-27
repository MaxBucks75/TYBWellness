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
      title: "Write-Up",
      type: "array",
      description:
        "Write the full post here. Use headings (H3/H4) to create sections like 'Potential Benefits' or 'Who May Benefit' — you can add as many or as few sections as you want each month. Use the bullet list button in the toolbar for checklists.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
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
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Describe the image for accessibility and SEO.",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Optional caption shown below the image.",
            },
            {
              name: "aspectRatio",
              title: "Aspect Ratio",
              type: "string",
              description:
                "Choose how the image should be cropped on the page. 'Native' uses the image's original proportions.",
              options: {
                list: [
                  { title: "Native (original proportions)", value: "native" },
                  { title: "Square (1:1)", value: "1:1" },
                  { title: "Portrait (2:3)", value: "2:3" },
                  { title: "Portrait (1:2)", value: "1:2" },
                  { title: "Landscape (3:2)", value: "3:2" },
                  { title: "Landscape (2:1)", value: "2:1" },
                  { title: "Widescreen (16:9)", value: "16:9" },
                ],
                layout: "dropdown",
              },
              initialValue: "native",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "affiliateLink",
      title: "Pure Encapsulations Affiliate Link",
      type: "url",
      description:
        "This is the link the button on the site will take you to",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "affiliateQrCode",
      title: "Affiliate QR Code",
      type: "image",
      description:
        "Optional — upload a QR code image (This feature is for if you get a link for each product in the future, rather than the sitewide sign-up)",
      options: { hotspot: true },
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