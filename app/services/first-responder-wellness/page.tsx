import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "First Responder & Healthcare Professional Wellness",
  description:
    "A specialized mental health program for first responders, veterans, healthcare professionals, and their families at Train Your Brain Wellness.",
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

export default function FirstResponderWellnessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
            A Pillar of Service
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight">
            First Responder & Healthcare Professional Wellness
          </h1>
        </div>
      </section>

      {/* Emphasis tile — "How are you at home when your shift ends?" */}
      <section className="py-14 bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="bg-deep-green rounded-2xl p-8 md:p-12 max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-cream font-light leading-tight mb-8">
              How are you at home
              <span className="block italic text-sage-green">
                when your shift ends?
              </span>
            </h2>
            <p className="font-body text-cream/80 text-lg leading-relaxed mb-4">
              You may be able to complete the call, finish the shift, care for
              the patient, and continue doing what everyone expects of you.
            </p>
            <p className="font-body text-cream/80 text-lg leading-relaxed mb-4">
              But what happens when you go home?
            </p>
            <p className="font-body text-cream/80 text-lg leading-relaxed">
              Are you able to be emotionally present with the people you love?
              Are you sleeping? Are you increasingly irritable, detached,
              anxious, exhausted, or unable to shut your mind off? Do you feel
              as though your family receives whatever is left of you after the
              job has taken everything else?
            </p>
            <p className="font-display italic text-2xl text-sage-green mt-8">
              The effects of frontline work do not always end when the shift
              does.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-6">
            Care From Someone Who Understands the Work Behind the Symptoms
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
            Many first responders and healthcare professionals have shared
            that one of the greatest barriers to seeking mental health care is
            feeling misunderstood.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
            They may have previously been connected with a general employee
            assistance program, brief counseling service, or provider who was
            well-intentioned but unfamiliar with the culture of emergency
            services and healthcare. When a professional has to spend most of
            the appointment explaining the job, defending their reactions, or
            trying to make someone understand why a particular call or
            patient continues to affect them, it can become difficult to
            build trust.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
            This program is designed to offer something more individualized
            and clinically comprehensive.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-10">
            My background includes years of experience in emergency and
            trauma nursing, psychiatric emergency care, crisis intervention,
            acute mental health treatment, and direct work with first
            responders, Veterans, healthcare professionals, and individuals
            experiencing some of the most difficult moments of their lives.
          </p>

          <h3 className="font-display text-2xl text-deep-green mb-6">
            I understand that frontline professionals may:
          </h3>
          <div className="flex flex-col gap-4 mb-10">
            {understandsList.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                <span className="font-body text-base text-warm-brown leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="font-display italic text-2xl text-forest-green leading-relaxed">
            You should not have to translate your profession before you can
            begin talking about what it is doing to you.
          </p>
        </div>
      </section>

      {/* More than EAP */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-6">
            More Than a Brief Workplace Benefit
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
            Employee assistance programs can serve an important role by
            offering an initial point of contact and connecting employees
            with available resources. However, some first responders and
            healthcare professionals need more than a limited number of
            general counseling sessions or a one-time referral.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-8">
            The Frontline Mental Wellness Program provides access to ongoing,
            confidential clinical care that may include:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {programIncludes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-sm text-warm-brown leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="font-body text-warm-brown text-sm leading-relaxed italic">
            This program is not intended to replace every EAP, peer-support
            team, or workplace wellness service. It is designed to provide the
            specialized clinical care, continuity, and understanding that may
            be needed when brief support is not enough.
          </p>
        </div>
      </section>

      {/* You don't have to wait */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="bg-deep-green rounded-2xl p-8 md:p-12 max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-8">
              You Do Not Have to Wait Until You Are in Crisis
            </h2>
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
              You have spent your career taking care of others. You deserve care
              from someone who understands that the goal is not simply to help
              you survive another shift.
            </p>
            <p className="font-display italic text-2xl text-sage-green mt-6">
              The goal is to help you return home as yourself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-3">
            How are you at home when your shift ends?
          </h2>
          <p className="font-body text-warm-brown text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Request priority access to the Frontline Mental Wellness Program.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            Request Frontline Priority Access <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}