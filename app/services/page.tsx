import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive, evidence-based psychiatric and integrative mental health services offered by Amber Bucks, MSN, APRN, PMHNP-BC at Train Your Brain Wellness.",
};

const understandsList = [
  "Use humor to cope with difficult experiences",
  "Compartmentalize emotions to complete the job",
  "Minimize symptoms because others appear to have experienced something worse",
  "Fear being perceived as weak, unreliable, or unable to perform",
  "Worry that asking for help could affect their reputation or career",
  "Struggle to explain the cumulative effect of repeated exposure to death, injury, violence, grief, and human suffering",
  "Function effectively at work while relationships, sleep, mood, or home life begin to deteriorate",
  "Experience burnout, compassion fatigue, moral distress, or secondary traumatic stress without immediately recognizing it",
];

const programIncludes = [
  "Comprehensive psychiatric evaluation",
  "Medication management",
  "Individual psychotherapy",
  "Trauma-informed treatment",
  "Burnout and compassion-fatigue support",
  "Critical-incident follow-up",
  "Treatment for anxiety, depression, PTSD, insomnia, ADHD, OCD, and related concerns",
  "Substance-use assessment and support",
  "Suicide-risk assessment and safety planning",
  "Functional and integrative psychiatric care",
  "Coordination with other providers or peer-support programs when authorized",
  "Referrals for TMS, psychotherapy, and additional wellness or recovery services when clinically appropriate",
  "Priority access for eligible spouses, partners, and immediate family members",
];

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

const additionalServices = [
  "Bariatric surgery psychological clearances",
  "ESA evaluations and documentation for qualifying individuals",
  "FMLA, Short-Term Disability, and Long-Term Disability evaluations",
  "Court-related treatment verification letters",
  "Care coordination and provider collaboration",
  "IEP/504 Documentation",
  "Work Accommodations",
];

const specialties = [
  "ADHD",
  "Trauma & PTSD",
  "Burnout and Compassion Fatigue",
  "Anxiety Disorders",
  "Depression & Mood Disorders",
  "OCD",
  "Autism Spectrum Support",
  "Insomnia & Sleep Concerns",
  "Substance Use Disorders",
  "Stress & Burnout",
  "Schizophrenia Spectrum & Psychotic Disorders",
  "TBI-Related Mental Health Concerns",
  "Bipolar Disorders",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — deep-green */}
      <section className="pt-32 pb-0 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
            Everything We Offer
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight">
            Services
          </h1>
          <p className="font-body text-cream/70 text-base max-w-2xl mt-4 leading-relaxed">
            A complete look at every service available at Train Your Brain
            Wellness, organized by our three pillars of care.
          </p>
        </div>
      </section>

      {/* Jump tiles — single cream tile on the deep-green hero's trailing edge */}
      <section className="py-12 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <div className="bg-cream rounded-2xl p-7 md:p-9">
            <h3 className="font-display text-2xl text-deep-green text-center mb-6">
              Jump to a Section
            </h3>

            {/* Top row: 2 main pillar links */}
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <a
                href="#psychiatric-care"
                className="font-body text-base text-forest-green hover:text-deep-green font-medium transition-colors"
              >
                Comprehensive Psychiatric Care &rarr;
              </a>
              <a
                href="#advanced-treatment"
                className="font-body text-base text-forest-green hover:text-deep-green font-medium transition-colors"
              >
                Advanced Treatment & Recovery &rarr;
              </a>
            </div>

            {/* Middle row: 2 supporting links */}
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <a
                href="#specialize"
                className="font-body text-base text-forest-green hover:text-deep-green font-medium transition-colors"
              >
                What We Specialize In &rarr;
              </a>
              <a
                href="#additional-services"
                className="font-body text-base text-forest-green hover:text-deep-green font-medium transition-colors"
              >
                Additional Clinical Services &rarr;
              </a>
            </div>

            {/* Bottom row: First Responder, full width */}
            <a
              href="#first-responder"
              className="font-body text-base text-forest-green hover:text-deep-green font-medium transition-colors"
            >
              First Responder & Healthcare Professional Wellness &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PILLAR 1: Comprehensive Psychiatric Care — forest-green
      ══════════════════════════════════════════════════ */}
      <section id="psychiatric-care" className="py-20 bg-forest-green">
        <div className="container-narrow px-6 md:px-12">
          <div className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Comprehensive Psychiatric Care
            </h2>
          </div>
          <div className="text-center mb-14">
            <Link
              href="/services/psychiatric-care"
              className="inline-flex items-center gap-2 bg-cream hover:bg-cream-light text-forest-green font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              Full Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-10 max-w-3xl mx-auto">
            <div>
              <h3 className="font-display text-2xl text-cream mb-3">
                Comprehensive Psychiatric Evaluations
              </h3>
              <p className="font-body text-cream/80 text-base leading-relaxed">
                Mental health is complex, and no two individuals have the same
                story. Our comprehensive psychiatric evaluation takes a whole-
                person approach, exploring emotional, psychological, medical,
                lifestyle, and environmental factors that may be contributing
                to your symptoms. The goal is not simply to assign a
                diagnosis, but to gain a deeper understanding of your
                experiences and create a personalized treatment plan that
                supports healing, resilience, and long-term wellness.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-cream mb-3">
                Medication Management
              </h3>
              <p className="font-body text-cream/80 text-base leading-relaxed">
                Medication management is more than simply prescribing
                medication. It involves ongoing evaluation, monitoring, and
                collaboration to ensure your treatment remains safe,
                effective, and aligned with your goals. Together, we will
                assess benefits, side effects, symptom improvement, and
                overall wellness to develop a personalized treatment plan
                that supports long-term mental health, while considering
                lifestyle, sleep, stress, nutrition, and other factors that
                influence overall well-being.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-cream mb-3">
                Deprescribing & Medication Optimization
              </h3>
              <p className="font-body text-cream/80 text-base leading-relaxed">
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
            <div className="bg-cream rounded-2xl p-7">
              <Image
                src="/genesight-logo.svg"
                alt="GeneSight"
                width={180}
                height={48}
                className="h-10 w-auto mb-5"
              />
              <h4 className="font-display text-xl text-deep-green mb-2">
                About the GeneSight Test
              </h4>
              <p className="font-body text-warm-brown text-sm leading-relaxed mb-5">
                The GeneSight Psychotropic test is a genetic test that shows
                your healthcare provider how your genes may affect your
                outcomes with commonly prescribed mental health medications.
                The test provides personalized information about which
                medications may require dose adjustments, be less likely to
                work, or have an increased risk of side effects based on your
                genetic makeup.
              </p>
              <h4 className="font-display text-xl text-deep-green mb-2">
                Is the GeneSight Test Right for You?
              </h4>
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

            <div>
              <h3 className="font-display text-2xl text-cream mb-3">
                Care Coordination
              </h3>
              <p className="font-body text-cream/80 text-base leading-relaxed">
                Healing often requires a team approach. With your permission,
                we work collaboratively with therapists, primary care
                providers, specialists, schools, treatment programs, and
                other members of your healthcare team to ensure treatment
                remains connected, comprehensive, and focused on your goals.
                My goal is to reduce barriers to care, improve communication
                between providers, and help you navigate your mental health
                journey with confidence and support.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-cream mb-3">
                Psychotherapy
              </h3>
              <p className="font-body text-cream/80 text-base leading-relaxed">
                Mental health challenges are often influenced by life
                experiences, relationships, stress, trauma, and the demands of
                everyday life. Through a collaborative and trauma-informed
                approach, psychotherapy can help individuals process difficult
                experiences, strengthen coping skills, improve emotional
                regulation, and support long-term recovery and resilience.
                When appropriate, I also provide guidance and referrals to
                group therapy, support programs, and specialized therapists
                to ensure comprehensive and well-rounded care.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-cream mb-3">
                Crisis Intervention & Stabilization
              </h3>
              <p className="font-body text-cream/80 text-base leading-relaxed">
                Mental health crises can feel overwhelming and isolating. With
                extensive experience in emergency psychiatry, crisis
                stabilization, suicide risk assessment, and acute mental
                health care, I provide comprehensive evaluations, safety
                planning, and coordination of appropriate levels of care when
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PILLAR 2: First Responder & Healthcare Wellness — sage-green, dark text
      ══════════════════════════════════════════════════ */}
      <section id="first-responder" className="py-20 bg-sage-green">
        <div className="container-narrow px-6 md:px-12">
          <div className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl text-deep-green">
              First Responder & Healthcare Professional Wellness
            </h2>
          </div>
          <div className="text-center mb-14">
            <Link
              href="/services/first-responder-wellness"
              className="inline-flex items-center gap-2 bg-deep-green hover:bg-forest-green text-cream font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              Full Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Emphasis tile */}
            <div className="bg-deep-green rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="font-display text-3xl md:text-4xl text-cream font-light leading-tight mb-8">
                How are you at home
                <span className="block italic text-sage-green">
                  when your shift ends?
                </span>
              </h3>
              <p className="font-body text-cream/80 text-lg leading-relaxed mb-4">
                You may be able to complete the call, finish the shift, care
                for the patient, and continue doing what everyone expects of
                you.
              </p>
              <p className="font-body text-cream/80 text-lg leading-relaxed mb-4">
                But what happens when you go home?
              </p>
              <p className="font-body text-cream/80 text-lg leading-relaxed">
                Are you able to be emotionally present with the people you
                love? Are you sleeping? Are you increasingly irritable,
                detached, anxious, exhausted, or unable to shut your mind
                off? Do you feel as though your family receives whatever is
                left of you after the job has taken everything else?
              </p>
              <p className="font-display italic text-2xl text-sage-green mt-8">
                The effects of frontline work do not always end when the
                shift does.
              </p>
            </div>

            <h3 className="font-display text-2xl text-deep-green mb-6">
              Care From Someone Who Understands the Work Behind the Symptoms
            </h3>
            <p className="font-body text-deep-green/80 text-base leading-relaxed mb-5">
              Many first responders and healthcare professionals have shared
              that one of the greatest barriers to seeking mental health care
              is feeling misunderstood.
            </p>
            <p className="font-body text-deep-green/80 text-base leading-relaxed mb-5">
              They may have previously been connected with a general employee
              assistance program, brief counseling service, or provider who
              was well-intentioned but unfamiliar with the culture of
              emergency services and healthcare. When a professional has to
              spend most of the appointment explaining the job, defending
              their reactions, or trying to make someone understand why a
              particular call or patient continues to affect them, it can
              become difficult to build trust.
            </p>
            <p className="font-body text-deep-green/80 text-base leading-relaxed mb-5">
              This program is designed to offer something more individualized
              and clinically comprehensive.
            </p>
            <p className="font-body text-deep-green/80 text-base leading-relaxed mb-10">
              My background includes years of experience in emergency and
              trauma nursing, psychiatric emergency care, crisis intervention,
              acute mental health treatment, and direct work with first
              responders, Veterans, healthcare professionals, and individuals
              experiencing some of the most difficult moments of their lives.
            </p>

            <h4 className="font-display text-xl text-deep-green mb-6">
              I understand that frontline professionals may:
            </h4>
            <div className="flex flex-col gap-4 mb-10">
              {understandsList.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-deep-green flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base text-deep-green/80 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-display italic text-2xl text-deep-green leading-relaxed mb-12">
              You should not have to translate your profession before you can
              begin talking about what it is doing to you.
            </p>

            <h3 className="font-display text-2xl text-deep-green mb-6">
              More Than a Brief Workplace Benefit
            </h3>
            <p className="font-body text-deep-green/80 text-base leading-relaxed mb-5">
              Employee assistance programs can serve an important role by
              offering an initial point of contact and connecting employees
              with available resources. However, some first responders and
              healthcare professionals need more than a limited number of
              general counseling sessions or a one-time referral.
            </p>
            <p className="font-body text-deep-green/80 text-base leading-relaxed mb-8">
              The Frontline Mental Wellness Program provides access to
              ongoing, confidential clinical care that may include:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {programIncludes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-deep-green flex-shrink-0 mt-1" />
                  <span className="font-body text-sm text-deep-green/80 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-body text-deep-green/70 text-sm leading-relaxed italic mb-12">
              This program is not intended to replace every EAP, peer-support
              team, or workplace wellness service. It is designed to provide
              the specialized clinical care, continuity, and understanding
              that may be needed when brief support is not enough.
            </p>

            {/* You Don't Have to Wait — kept dark for emphasis */}
            <div className="bg-deep-green rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-8">
                You Do Not Have to Wait Until You Are in Crisis
              </h3>
              <div className="flex flex-col gap-4 font-body text-cream/80 text-base leading-relaxed mb-8">
                <p>Mental health care is not only for the person who can no longer work.</p>
                <p>It is also for the firefighter who is becoming increasingly distant at home.</p>
                <p>The paramedic who cannot stop replaying a call.</p>
                <p>The dispatcher who continues hearing the voices from the other end of the line.</p>
                <p>The police officer who is constantly on alert, even while sitting safely at home.</p>
                <p>The nurse who has lost compassion and feels guilty about it.</p>
                <p>
                  The healthcare professional who dreads returning to work but
                  does not know who they would be if they left.
                </p>
                <p>The spouse or partner who sees the changes but does not know how to help.</p>
              </div>
              <p className="font-body text-cream/90 text-lg leading-relaxed mb-2">
                You have spent your career taking care of others. You deserve
                care from someone who understands that the goal is not simply
                to help you survive another shift.
              </p>
              <p className="font-display italic text-2xl text-sage-green mt-6">
                The goal is to help you return home as yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PILLAR 3: Advanced Treatment & Recovery — light green, dark text
      ══════════════════════════════════════════════════ */}
      <section id="advanced-treatment" className="py-20 bg-sage-green/40">
        <div className="container-narrow px-6 md:px-12">
          <div className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl text-deep-green">
              Advanced Treatment & Recovery Options
            </h2>
          </div>
          <div className="text-center mb-14">
            <Link
              href="/services/advanced-treatment"
              className="inline-flex items-center gap-2 bg-deep-green hover:bg-forest-green text-cream font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              Full Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {/* TMS */}
            <div>
              <h3 className="font-display text-2xl text-deep-green mb-3">
                Transcranial Magnetic Stimulation (TMS)
              </h3>
              <p className="font-body text-deep-green/80 text-base leading-relaxed mb-6">
                TMS is a non-invasive, FDA-cleared brain stimulation treatment
                that uses magnetic pulses to help regulate areas of the brain
                involved in mood, emotional processing, focus, and stress
                response. It is performed while you&rsquo;re awake, does not
                require sedation, and allows you to return to normal
                activities immediately afterward.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {tmsBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-deep-green/80 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wellness Modalities — dark tile */}
            <div className="bg-deep-green rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-3">
                Wellness Modalities
              </h3>
              <p className="font-body text-cream/70 text-base leading-relaxed mb-8">
                Through trusted partnerships, patients have access to
                advanced treatment equipment and complementary recovery
                modalities that pair well with an integrative treatment plan.
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

            {/* Spravato */}
            <div>
              <h3 className="font-display text-2xl text-deep-green mb-3">
                Spravato&reg; (Esketamine)
              </h3>
              <p className="font-body text-deep-green/80 text-base leading-relaxed">
                For qualifying individuals experiencing treatment-resistant
                depression and other approved indications. Spravato is
                administered in-office under provider supervision as part of
                a comprehensive treatment plan.
              </p>
            </div>

            {/* Integrative & Functional */}
            <div>
              <h3 className="font-display text-2xl text-deep-green mb-3">
                Integrative Psychiatry & Functional Mental Health
              </h3>
              <p className="font-body text-deep-green/80 text-base leading-relaxed">
                Mental wellness is more than medication alone. Our
                integrative approach incorporates lifestyle optimization,
                nutrition, sleep support, stress management, and supplement
                education alongside evidence-based psychiatric care &mdash;
                supporting the whole person, not just the diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          What We Specialize In + Additional Clinical Services — cream
      ══════════════════════════════════════════════════ */}
      <section id="specialize" className="py-20 bg-cream">
        <div className="container-narrow px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-deep-green">
              What We Specialize In
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {specialties.map((s) => (
              <div key={s} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-base text-warm-brown leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="additional-services" className="py-20 bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-deep-green">
              Additional Clinical Services
            </h2>
            <p className="font-body text-warm-brown text-sm mt-3 max-w-2xl mx-auto">
              Available after evaluation and established care:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto">
            {additionalServices.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle className="w-3.5 h-3.5 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-sm text-warm-brown leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-cream rounded-xl p-5 border border-sage-green/20 max-w-2xl mx-auto">
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