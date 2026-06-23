import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive, evidence-based psychiatric and integrative mental health services offered by Amber Bucks, MSN, APRN, PMHNP-BC at Train Your Brain Wellness.",
};

const serviceCategories = [
  {
    title: "Medication Management & Optimization",
    items: [
      "Psychiatric medication management",
      "Medication adjustments",
      "Deprescribing when appropriate",
      "Polypharmacy review",
      "Treatment-resistant symptom management",
      "Side effect monitoring",
    ],
    link: { label: "Medication Management", href: "/services/med-management" },
  },
  {
    title: "Integrative & Functional Mental Health",
    items: [
      "Lifestyle and wellness optimization",
      "Nutritional considerations",
      "Sleep health",
      "Supplement education",
      "Stress management",
      "Whole-person treatment planning",
    ],
    link: null,
  },
  {
    title: "Psychotherapy & Supportive Counseling",
    items: [
      "Solution-focused interventions",
      "Motivational interviewing",
      "Supportive psychotherapy",
      "Trauma-informed care",
      "Behavioral strategies",
      "Psychoeducation",
    ],
    link: { label: "Psychotherapy", href: "/services/psychotherapy" },
  },
  {
    title: "Crisis Intervention & Stabilization",
    items: [
      "Acute psychiatric assessments",
      "Safety planning",
      "Suicide risk assessments",
      "Coordination of higher levels of care when needed",
    ],
    link: null,
  },
];

const specializedTreatmentAreas = [
  { label: "ADHD", detail: "Children, adolescents, and adults" },
  {
    label: "Trauma & PTSD",
    detail: "First responders, veterans, healthcare professionals, and their families",
  },
  {
    label: "Burnout and Compassion Fatigue",
    detail: "For nurses, physicians, EMS, dispatchers, firefighters, police, social workers, and more",
  },
  { label: "Anxiety Disorders", detail: null },
  { label: "Depression & Mood Disorders", detail: null },
  { label: "OCD", detail: null },
  { label: "Autism Spectrum Support", detail: null },
  { label: "Insomnia & Sleep Concerns", detail: null },
  { label: "Substance Use Disorders", detail: null },
  { label: "TBI-Related Mental Health Concerns", detail: null },
];

const specializedPopulations = [
  "First Responders and their families — Police, Firefighters, EMS, Dispatchers",
  "Veterans",
  "Healthcare Professionals",
  "Adolescents & Adults",
];

const additionalServices = [
  "Bariatric surgery psychological clearances",
  "ESA evaluations and documentation for qualifying individuals",
  "FMLA, Short-Term Disability, and Long-Term Disability evaluations",
  "Court-related treatment verification letters",
  "Care coordination and provider collaboration",
  "IEP/504 Documentation",
  "Work Accommodations",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
            What We Offer
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight">
            Services
          </h1>
          <p className="font-body text-cream/70 text-base max-w-2xl mt-4 leading-relaxed">
            Thoughtful prescribing and deprescribing with the goal of
            utilizing the least amount of medication necessary to achieve
            optimal wellness — starting with a comprehensive psychiatric
            evaluation of your symptoms, history, and goals.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-14 bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="grid md:grid-cols-2 bg-center">
            {serviceCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-cream rounded-2xl p-6 border border-sage-green/10"
              >
                <h3 className="font-display text-xl text-deep-green mb-4">
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-2 mb-4">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-forest-green flex-shrink-0 mt-1" />
                      <span className="font-body text-sm text-warm-brown leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {cat.link && (
                  <Link
                    href={cat.link.href}
                    className="inline-flex items-center gap-2 text-forest-green font-body text-sm font-medium hover:gap-3 transition-all"
                  >
                    Learn more about {cat.link.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* D2 partnership blurb — folded into Integrative & Functional context */}
          <div className="mt-6 bg-cream rounded-2xl p-6 border border-sage-green/10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="bg-deep-green rounded-lg p-3 flex-shrink-0">
              <a href="https://d2hpcenters.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/d2-logo.png"
                  alt="D2 Human Performance Centers"
                  width={120}
                  height={48}
                  className="w-28 h-auto"
                />
              </a>
            </div>
            <p className="font-body text-sm text-warm-brown leading-relaxed">
              Through our partnership with{" "}
              <a
                href="https://d2hpcenters.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-green underline hover:no-underline"
              >
                D2 Human Performance Centers
              </a>
              , patients have access to complementary recovery and nervous-
              system modalities — including red light therapy, cryotherapy,
              and Shiftwave pulsed-pressure therapy — that pair well with an
              integrative treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* Precision Psychiatry & Genetic Testing */}
      <section className="py-14 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-2xl md:text-3xl text-cream mb-6">
            Precision Psychiatry & Genetic Testing
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-sage-green/20 rounded-2xl p-6">
              <h3 className="font-display text-lg text-cream mb-2">
                GeneSight Testing
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                When clinically appropriate, pharmacogenomic testing may help
                guide medication decisions and identify genetic factors that
                influence medication response.
              </p>
            </div>
            <div className="border border-sage-green/20 rounded-2xl p-6">
              <h3 className="font-display text-lg text-cream mb-2">
                Spravato&reg; (Esketamine)
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                For qualifying individuals experiencing treatment-resistant
                depression and other approved indications.
              </p>
            </div>
            <div className="border border-sage-green/20 rounded-2xl p-6">
              <h3 className="font-display text-lg text-cream mb-2">
                Transcranial Magnetic Stimulation (TMS)
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed mb-3">
                A non-invasive treatment option for qualifying individuals
                experiencing depression and other mental health conditions, in
                partnership with{" "}
                <a
                  href="https://jlcservicesinc.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-green underline hover:no-underline"
                >
                  JLC Services
                </a>
                .
              </p>
              <Link
                href="/services/tms"
                className="inline-flex items-center gap-2 text-sage-green hover:text-cream font-body text-sm font-medium transition-colors"
              >
                Learn more about TMS <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="border border-sage-green/20 rounded-2xl p-6">
              <h3 className="font-display text-lg text-cream mb-2">
                Collaborative Treatment Planning
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                Coordination with specialty providers and advanced treatment
                programs when clinically appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Treatment Areas */}
      <section id="specialized-treatment-areas" className="py-14 bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-2xl md:text-3xl text-deep-green mb-6">
            Specialized Treatment Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {specializedTreatmentAreas.map((area) => (
              <div
                key={area.label}
                className="flex items-start gap-3 bg-cream rounded-xl p-4 border border-sage-green/10"
              >
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-base text-deep-green leading-tight">
                    {area.label}
                  </p>
                  {area.detail && (
                    <p className="font-body text-xs text-warm-brown-light mt-0.5">
                      {area.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Populations */}
      <section id="specialized-populations" className="py-14 bg-cream">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-2xl md:text-3xl text-deep-green mb-6">
            Who We Specialize In Seeing
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mb-6">
            {specializedPopulations.map((pop) => (
              <div key={pop} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-sm text-warm-brown leading-relaxed">
                  {pop}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/services/first-responder-package"
            className="inline-flex items-center gap-2 text-forest-green font-body text-sm font-medium hover:gap-3 transition-all"
          >
            Learn about our Frontline Mental Wellness Program <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Additional Clinical Services */}
      <section className="py-14 bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-2xl md:text-3xl text-deep-green mb-2">
            Additional Clinical Services
          </h2>
          <p className="font-body text-warm-brown text-sm mb-6 max-w-2xl">
            Available after evaluation and established care:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6 max-w-3xl">
            {additionalServices.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle className="w-3.5 h-3.5 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-sm text-warm-brown leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-cream rounded-xl p-5 border border-sage-green/20 max-w-3xl">
            <p className="font-body text-xs text-warm-brown-light leading-relaxed">
              <strong className="text-warm-brown">Please Note:</strong>{" "}
              Documentation requests require discussion with the provider
              during a scheduled appointment and are subject to clinical
              appropriateness and provider discretion. Additional fees may
              apply. Please refer to our{" "}
              <Link href="/fees-policies" className="text-forest-green underline hover:no-underline">
                Fees &amp; Policies
              </Link>{" "}
              page for details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-forest-green">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl text-cream mb-5">
            Ready to get started?
          </h2>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream hover:bg-cream-light text-deep-green font-body font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Book an Appointment <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}