import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { getTestimonials, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from patients who have experienced care at Train Your Brain Wellness with Amber Bucks, MSN, APRN, PMHNP-BC.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      <section className="pt-36 pb-16 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
            In Their Own Words
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            What Patients Say
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-2xl mt-4 leading-relaxed">
            These are real experiences shared by patients
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          {testimonials.length === 0 ? (
            <p className="font-body text-warm-brown text-base text-center py-16">
              Testimonials coming soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t._id}
                  className="bg-forest-green rounded-2xl p-8 flex flex-col gap-5"
                >
                  <Quote className="w-7 h-7 text-sage-green flex-shrink-0" />
                  <p className="font-body text-cream/90 text-base leading-relaxed flex-1">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    {t.photo && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={urlFor(t.photo).width(96).height(96).url()}
                          alt={t.initials}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-body font-medium text-cream text-sm">
                        — {t.initials}
                      </p>
                      {t.role && (
                        <p className="font-body text-sage-green text-xs mt-0.5">
                          {t.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
