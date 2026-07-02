import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      description: "The patient's words — keep it concise and impactful.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: 'e.g. "J.D." — used instead of a full name for privacy.',
      validation: (Rule) => Rule.required().max(8),
    }),
    defineField({
      name: "role",
      title: "Role or Context",
      type: "string",
      description:
        'Optional — e.g. "First Responder", "Veteran", "Patient since 2024". Shown below the initials.',
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      description:
        "Optional — only upload with the patient's written consent. Used to humanize the testimonial.",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first. Leave blank to use date order.",
    }),
  ],
  preview: {
    select: {
      title: "initials",
      subtitle: "quote",
      media: "photo",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title ?? "Untitled",
        subtitle: subtitle ? subtitle.slice(0, 60) + "…" : "",
        media,
      };
    },
  },
});
