import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Comprehensive Psychiatric Care",
  description:
    "Comprehensive psychiatric evaluations, medication management, deprescribing, GeneSight testing, care coordination, psychotherapy, and crisis intervention at Train Your Brain Wellness.",
};

export default function PsychiatricCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
            A Pillar of Service
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight">
            Comprehensive Psychiatric Care
          </h1>
        </div>
      </section>

      {/* Sections */}
      <section className="py-14 bg-cream-light">
        <div className="container-narrow px-6 md:px-12 flex flex-col gap-10 max-w-3xl">
          <div>
            <h2 className="font-display text-2xl text-deep-green mb-3">
              Comprehensive Psychiatric Evaluations
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              Mental health is complex, and no two individuals have the same
              story. Our comprehensive psychiatric evaluation takes a whole-
              person approach, exploring emotional, psychological, medical,
              lifestyle, and environmental factors that may be contributing to
              your symptoms. The goal is not simply to assign a diagnosis, but
              to gain a deeper understanding of your experiences and create a
              personalized treatment plan that supports healing, resilience,
              and long-term wellness.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep-green mb-3">
              Medication Management
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              Medication management is more than simply prescribing
              medication. It involves ongoing evaluation, monitoring, and
              collaboration to ensure your treatment remains safe, effective,
              and aligned with your goals. Together, we will assess benefits,
              side effects, symptom improvement, and overall wellness to
              develop a personalized treatment plan that supports long-term
              mental health, while considering lifestyle, sleep, stress,
              nutrition, and other factors that influence overall well-being.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep-green mb-3">
              Deprescribing & Medication Optimization
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              Deprescribing is a thoughtful, patient-centered approach to
              evaluating whether medications are still necessary, effective,
              and aligned with your current goals. This process may involve
              reducing, discontinuing, or transitioning medications while
              carefully monitoring safety, symptom management, and overall
              wellness. The goal is not simply fewer medications, but the
              right medications at the right time.
            </p>
          </div>

          {/* GeneSight */}
          <div>
            <div className="bg-cream rounded-2xl p-7 border border-sage-green/10">
              <Image
                src="/genesight-logo.svg"
                alt="GeneSight"
                width={180}
                height={48}
                className="h-10 w-auto mb-5"
              />
              <h3 className="font-display text-xl text-deep-green mb-2">
                About the GeneSight Test
              </h3>
              <p className="font-body text-warm-brown text-sm leading-relaxed mb-5">
                The GeneSight Psychotropic test is a genetic test that shows
                your healthcare provider how your genes may affect your
                outcomes with commonly prescribed mental health medications.
                The test provides personalized information about which
                medications may require dose adjustments, be less likely to
                work, or have an increased risk of side effects based on your
                genetic makeup.
              </p>
              <h3 className="font-display text-xl text-deep-green mb-2">
                Is the GeneSight Test Right for You?
              </h3>
              <ul className="flex flex-col gap-2 mb-5">
                <li className="font-body text-warm-brown text-sm leading-relaxed">
                  • Has a mental health medication failed you in the past?
                </li>
                <li className="font-body text-warm-brown text-sm leading-relaxed">
                  • Is your current mental health medication not working?
                </li>
                <li className="font-body text-warm-brown text-sm leading-relaxed">
                  • Does your mental health medication cause unwanted side
                  effects?
                </li>
              </ul>
              <a
                href="https://genesight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-forest-green font-body text-sm font-medium hover:gap-3 transition-all"
              >
                Learn more at genesight.com <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep-green mb-3">
              Care Coordination
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              Healing often requires a team approach. With your permission, we
              work collaboratively with therapists, primary care providers,
              specialists, schools, treatment programs, and other members of
              your healthcare team to ensure treatment remains connected,
              comprehensive, and focused on your goals. My goal is to reduce
              barriers to care, improve communication between providers, and
              help you navigate your mental health journey with confidence and
              support.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep-green mb-3">
              Psychotherapy
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              Mental health challenges are often influenced by life
              experiences, relationships, stress, trauma, and the demands of
              everyday life. Through a collaborative and trauma-informed
              approach, psychotherapy can help individuals process difficult
              experiences, strengthen coping skills, improve emotional
              regulation, and support long-term recovery and resilience. When
              appropriate, I also provide guidance and referrals to group
              therapy, support programs, and specialized therapists to ensure
              comprehensive and well-rounded care.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep-green mb-3">
              Crisis Intervention & Stabilization
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              Mental health crises can feel overwhelming and isolating. With
              extensive experience in emergency psychiatry, crisis
              stabilization, suicide risk assessment, and acute mental health
              care, I provide comprehensive evaluations, safety planning, and
              coordination of appropriate levels of care when needed.
            </p>
          </div>
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
            Book an Appointment <ArrowRight className="w-4 h-4" />
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