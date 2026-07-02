import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "The Shift End Access Pass",
  description:
    "The Shift End Access Pass — priority mental healthcare for first responders, healthcare professionals, veterans, and shift workers at Train Your Brain Wellness.",
};

const eligibleBenefits = [
  "Priority scheduling whenever possible",
  "Reserved Shift End appointment availability, including select evening and weekend appointments",
  "Consideration for expedited appointments following significant work-related critical incidents, based on clinical urgency and provider availability",
  "Personalized care coordination upon your request and with your written authorization",
  "Priority processing of clinically appropriate forms, documentation, and medication refill requests",
  "Secure HIPAA-compliant communication for non-urgent clinical needs",
];

const clinicalServices = [
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
];

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

export default function ShiftEndAccessPassPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <Image
          src="/firstresponders-with-flag.png"
          alt="First responders"
          fill
          priority
          className="object-cover object-center -z-10"
        />
        <div className="absolute inset-0 bg-deep-green/55 -z-10" />
        <div className="container-narrow px-6 md:px-12 relative z-10 py-24">
          <p className="font-display italic text-xl text-cream mb-6 max-w-2xl leading-relaxed">
            &ldquo;Sometimes the bravest thing you&rsquo;ll ever do isn&rsquo;t answering the call&mdash;it&rsquo;s answering your own.&rdquo;
          </p>
          <p className="font-body text-xs uppercase tracking-widest text-cream mb-4">
            A Signature Program
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream-light font-light leading-[1.05] mb-6">
            The Shift End<br />
            <span className="italic text-cream">Access Pass</span>
          </h1>
        </div>
      </section>

      {/* ── WHAT IS IT ───────────────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
                The Shift End Access Pass™
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-deep-green font-light leading-tight mb-6">
                Your shift ends.<br />
                <span className="italic text-forest-green">What comes home with you doesn&rsquo;t have to.</span>
              </h2>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
                At Train Your Brain Wellness, we understand that healing doesn&rsquo;t always fit within traditional office hours.
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed">
                The Shift End Access Pass is our commitment to making mental
                healthcare more accessible for first responders, healthcare
                professionals, veterans, and other dedicated professionals whose
                demanding schedules often require them to place everyone else before
                themselves.
              </p>
            </div>
            <div className="aspect-5/4 rounded-2xl overflow-hidden relative">
              <Image
                src="/how-are-you-when-the-shift-ends.png"
                alt="How are you when your shift ends?"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CARE FROM SOMEONE WHO UNDERSTANDS ────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: sticky headshot + "I understand" label */}
            <div className="md:top-28">
              <div className="aspect-3/4 rounded-2xl overflow-hidden relative">
                <Image
                  src="/headshot-2.PNG"
                  alt="Amber Bucks, MSN, APRN, PMHNP-BC"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Right: heading, paragraphs, list, quote */}
            <div>
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
                trying to make someone understand why a particular call or patient
                continues to affect them, it can become difficult to build trust.
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-8">
                My background includes years of experience in emergency and trauma
                nursing, psychiatric emergency care, crisis intervention, acute
                mental health treatment, and direct work with first responders,
                veterans, healthcare professionals, and individuals experiencing
                some of the most difficult moments of their lives.
              </p>
            </div>
          </div>
          <div className="mt-6">
                <h3 className="font-display text-3xl text-deep-green pb-6">
                  I understand that frontline professionals may:
                </h3>
                <div className="flex flex-col gap-4 mb-8">
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
        </div>
      </section>

      {/* ── ELIGIBLE BENEFITS ────────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-8">
            Eligible Patients Receive
          </h2>
          <div className="flex flex-col gap-5 max-w-3xl">
            {eligibleBenefits.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                <span className="font-body text-base text-warm-brown leading-relaxed">
                  {item}
              </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINICAL SERVICES ────────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-3">
            Clinical Services
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-8">
            Psychiatric evaluations, medication management, psychotherapy, and
            all other clinical services are billed separately through insurance
            or self-pay according to the current practice fee schedule. The
            Shift End Access Pass may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {clinicalServices.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-sm text-warm-brown leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="font-body text-warm-brown text-sm leading-relaxed italic">
            Clinical services are provided based on individual need and clinical
            appropriateness. This program is not intended to replace every EAP,
            peer-support team, or workplace wellness service — it is designed to
            provide the specialized care, continuity, and understanding that may
            be needed when brief support is not enough.
          </p>
        </div>
      </section>

      

      

      {/* ── PROFESSIONAL APPRECIATION COURTESY ───────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
                Professional Appreciation Courtesy
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-forest-green font-light leading-tight mb-6">
                A thank you for your service.
            </h2>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
                As a small expression of gratitude, eligible self-pay first
                responders, healthcare professionals, active military members,
                veterans, and their immediate family members receive a{" "}
                <span className="text-sage-green font-semibold">
                  10% Professional Appreciation Courtesy
                </span>{" "}
                on self-pay clinical services.
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-8">
                Because caring for those who care for others isn&rsquo;t just
                part of what we do &mdash; it&rsquo;s part of who we are.
              </p>
              <p className="font-display italic text-xl text-warm-brown leading-relaxed">
                &ldquo;From Survival to Healing&rdquo;<br />
                <span className="font-body not-italic text-sm text-warm-brown/90 mt-1 block">
                  — Amber Bucks, PMHNP-BC
                </span>
              </p>
            </div>
            {/* Firefighter headshot */}
            <div className="aspect-3/4 rounded-2xl overflow-hidden relative">
              <Image
                src="/firefighter-headshot.jpg"
                alt="A first responder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-3">
            The people waiting at home deserve the healthiest version of you.
          </h2>
          <p className="font-body text-warm-brown text-base max-w-xl mx-auto mb-8 leading-relaxed">
            And so do you. Reach out and Amber will follow up with you as soon
            as possible.
          </p>
          <Link
            href="/getting-started#contact"
            className="inline-flex items-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
