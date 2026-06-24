import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Advanced Treatment & Recovery Options",
  description:
    "TMS, Spravato, integrative psychiatry, functional mental health, and advanced wellness modalities offered at Train Your Brain Wellness.",
};

const tmsBenefits = [
  "Improved resilience",
  "Reduced depression and PTSD symptoms",
  "Improved sleep and focus",
  "Reduction in crisis escalation",
  "Improved family functioning",
  "Reduced absenteeism at work",
  "Support for operational readiness",
  "Improved medication management regimens",
];

const partners = [
  {
    name: "JLC Services",
    href: "https://jlcservicesinc.net/",
    logo: "/jlc-logo.svg",
    logoWidth: 95,
    logoHeight: 48,
    blurb:
      "TMS is offered in partnership with JLC Services, including options supported through state funding for eligible first responders.",
  },
  {
    name: "D2 Human Performance Centers",
    href: "https://d2hpcenters.com/",
    logo: "/d2-logo.png",
    logoWidth: 505,
    logoHeight: 95,
    blurb:
      "Complementary recovery and nervous-system modalities — including red light therapy, cryotherapy, and Shiftwave pulsed-pressure therapy — that pair well with an integrative treatment plan.",
  },
];

export default function AdvancedTreatmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
            A Pillar of Service
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight">
            Advanced Treatment & Recovery Options
          </h1>
        </div>
      </section>

      {/* TMS */}
      <section className="py-14 bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-2xl text-deep-green mb-3">
            Transcranial Magnetic Stimulation (TMS)
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-6">
            TMS is a non-invasive, FDA-cleared brain stimulation treatment
            that uses magnetic pulses to help regulate areas of the brain
            involved in mood, emotional processing, focus, and stress
            response. It is performed while you&rsquo;re awake, does not
            require sedation, and allows you to return to normal activities
            immediately afterward.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {tmsBenefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-warm-brown leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Modalities & Partners — emphasis tile, matches "How are you at home" styling */}
      <section className="py-14 bg-cream">
        <div className="container-narrow px-6 md:px-12">
          <div className="bg-deep-green rounded-2xl p-8 md:p-12 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl text-cream mb-3">
              Wellness Modalities
            </h2>
            <p className="font-body text-cream/70 text-base leading-relaxed mb-8">
              Through trusted partnerships, patients have access to advanced
              treatment equipment and complementary recovery modalities that
              pair well with an integrative treatment plan.
            </p>

            <div className="flex flex-col gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-5 bg-cream/5 rounded-xl p-5 border border-sage-green/20"
                >
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-deep-green/60 rounded-lg p-3 inline-flex items-center justify-center flex-shrink-0"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.logoWidth}
                      height={partner.logoHeight}
                      className="w-28 h-auto"
                    />
                  </a>
                  <div className="flex-1">
                    <p className="font-body text-sm text-cream/70 leading-relaxed mb-2">
                      {partner.blurb}
                    </p>
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sage-green hover:text-cream font-body text-sm font-medium transition-colors"
                    >
                      Learn more about {partner.name} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spravato */}
      <section className="py-14 bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-2xl text-deep-green mb-3">
            Spravato&reg; (Esketamine)
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed">
            For qualifying individuals experiencing treatment-resistant
            depression and other approved indications. Spravato is
            administered in-office under provider supervision as part of a
            comprehensive treatment plan.
          </p>
        </div>
      </section>

      {/* Integrative & Functional */}
      <section className="py-14 bg-cream">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-2xl text-deep-green mb-3">
            Integrative Psychiatry & Functional Mental Health
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed">
            Mental wellness is more than medication alone. Our integrative
            approach incorporates lifestyle optimization, nutrition, sleep
            support, stress management, and supplement education alongside
            evidence-based psychiatric care &mdash; supporting the whole
            person, not just the diagnosis.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-forest-green">
        <div className="container-narrow px-6 md:px-12 text-center">
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream hover:bg-cream-light text-deep-green font-body font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-4">
            <Link
              href="/services"
              className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}