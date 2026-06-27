import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Shield, Sparkles, ShieldCheck, Star, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Comprehensive Psychiatric Care",
    description:
      "Whole-person evaluations, medication management, deprescribing, GeneSight testing, care coordination, psychotherapy, and crisis support — all under one roof.",
    href: "/services/psychiatric-care",
  },
  {
    icon: Shield,
    title: "First Responder & Healthcare Professional Wellness",
    description:
      "Specialized, confidential care for police, fire, EMS, dispatchers, veterans, and healthcare workers — and the families who stand beside them.",
    href: "/services/first-responder-wellness",
  },
  {
    icon: Sparkles,
    title: "Advanced Treatment & Recovery Options",
    description:
      "TMS, Spravato, integrative psychiatry, functional mental health, and recovery-focused wellness modalities for when more is needed.",
    href: "/services/advanced-treatment",
  },
];

const conditionsTreated = [
  "PTSD",
  "Anxiety",
  "Depression",
  "OCD",
  "Eating Disorders, Body Dysmorphia",
  "ADHD",
  "Autism",
  "Insomnia & Sleep Concerns",
  "Substance Use Disorders",
  "Stress, Burnout & Compassion Fatigue",
  "Schizophrenia Spectrum & Psychotic Disorders",
  "TBI-Related Mental Health Concerns",
  "Bipolar Disorders",
];

const populationsServed = [
  "First Responders and their families — Police, Firefighters, EMS, Dispatchers",
  "Veterans",
  "Healthcare Professionals",
  "Any age group",
  "All others that may need assistance",
];

const values = [
  {
    label: "Safety First",
    text: "Every interaction begins with establishing a space where you feel safe to be honest.",
  },
  {
    label: "Whole-Person Care",
    text: "We treat the full person — mind, body, and the life circumstances that shape both.",
  },
  {
    label: "No Judgment",
    text: "Whatever you've been through or are going through, you will not be judged here.",
  },
  {
    label: "Evidence-Based",
    text: "Treatments grounded in research and continuously refined to match what actually works.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background photo */}
        <Image
          src="/hero.png"
          alt="Dr. Amber Bucks"
          fill
          priority
          className="object-cover object-center -z-10"
        />

        {/* Daisy Award */}
        <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 z-20">
          <Image
            src="/daisy-award.png"
            alt="Daisy Award"
            width={140}
            height={140}
          />
        </div>

        {/* Darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-deep-green/55 -z-10" />

        <div className="container-wide px-6 md:px-12 relative z-10">
          <div className="max-w-2xl md:-ml-20">
            <p className="font-body text-sage-green text-sm uppercase tracking-widest mb-6">
              Amber Bucks, MSN, APRN, PMHNP-BC
            </p>
            <h1 className="font-display text-cream leading-[1.1]">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light">
                From survival
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light italic text-sage-green mt-1">
                to healing.
              </span>
            </h1>
            <p className="font-body text-cream/90 text-lg md:text-xl mt-8 max-w-xl leading-relaxed">
              Where your mental health is my priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sage-green hover:bg-cream text-deep-green font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                Book Your First Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/getting-started"
                className="inline-flex items-center justify-center gap-2 border border-cream/40 hover:border-cream text-cream font-body text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                New? Start Here
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / INTRO ────────────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Headshot */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden order-2 md:order-1 relative">
              <Image
                src="/headshot.png"
                alt="Dr. Amber Bucks"
                fill
                className="object-cover"
              />
            </div>
            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
                Meet your Board Certified Psychiatric Mental Health Nurse Practitioner
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-deep-green leading-tight mb-0">
                Amber Bucks
              </h2>
              <h3 className="font-display text-2xl md:text-2xl text-forest-green leading-tight mb-6">
                (MSN, APRN, PMHNP-BC)
              </h3>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
                I combine evidence-based psychiatric care with a holistic,
                functional medicine approach — because true healing goes
                beyond managing symptoms. It means understanding the why
                behind what you&rsquo;re experiencing and addressing it at the
                root, not just placing a temporary fix over the surface. If
                you&rsquo;ve been carrying things quietly&hellip; if
                you&rsquo;ve been pushing through when no one sees it&hellip;
                if you&rsquo;re ready for something to change &mdash; even
                just a little &mdash; I&rsquo;m here to walk that path with
                you.
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
                This work is deeply personal to me. After losing a close family 
                member to suicide, I made a commitment: no one should
                feel like they have to struggle in silence. That loss shaped
                my mission to create a space where people feel seen, heard,
                and supported &mdash; without judgment and without stigma.
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
                I have had the privilege of supporting people in some of
                their most vulnerable moments, including veterans, first
                responders and their families, healthcare professionals, and
                individuals navigating crisis, trauma, and major life
                transitions. These are the people who often carry the
                most &mdash; and speak about it the least. But you don&rsquo;t
                have to be in one of these roles to belong here. I provide
                care for all ages and a wide range of mental health
                conditions, always with a trauma-informed lens.
              </p>
              <p className="font-display italic text-xl text-forest-green leading-relaxed mb-8">
                Where clinical expertise meets compassion &mdash; and healing
                goes deeper than symptoms.
              </p>
              <Link
                href="/getting-started"
                className="inline-flex items-center gap-2 text-forest-green font-body font-medium hover:gap-3 transition-all"
              >
                Learn how to get started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 PILLARS OF SERVICE ─────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-deep-green">
              3 Pillars of Service
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-forest-green rounded-2xl p-8 flex flex-col group hover:shadow-lg hover:bg-deep-green transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-sage-green" />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-cream/70 leading-relaxed flex-1 mb-6">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sage-green font-body text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-deep-green hover:bg-forest-green text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-light text-forest-green font-body font-medium px-8 py-4 rounded-full transition-all duration-200 border border-sage-green/30"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS WE TREAT ──────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-deep-green">
              Conditions We Treat
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {conditionsTreated.map((condition) => (
              <div key={condition} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-base text-warm-brown leading-relaxed">
                  {condition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULATIONS WE SERVE ─────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-deep-green">
              Who We Serve
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {populationsServed.map((pop) => (
              <div key={pop} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                <span className="font-body text-base text-warm-brown leading-relaxed">
                  {pop}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ───────────────────────────────────── */}
      <section className="relative section-padding overflow-hidden">
        <Image
          src="/cns-background.jpg"
          alt=""
          fill
          className="object-cover object-center -z-10"
        />
        <div className="absolute inset-0 bg-cream/85 -z-10" />
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
              The Foundation
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-deep-green">
              How We Practice
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.label}
                className="bg-forest-green rounded-2xl p-8 hover:bg-deep-green transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-sage-green flex-shrink-0" />
                  <h4 className="font-display text-xl text-cream">{v.label}</h4>
                </div>
                <p className="font-body text-sm text-cream/70 leading-relaxed pl-8">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BAND ───────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-narrow text-center">
          <Star className="w-6 h-6 text-sage-green mx-auto mb-6" />
          <blockquote className="font-display italic text-3xl md:text-4xl text-deep-green leading-relaxed max-w-2xl mx-auto">
            &ldquo;Where clinical expertise meets compassion &mdash; and
            healing goes deeper than symptoms.&rdquo;
          </blockquote>
          <p className="font-body text-sm text-warm-brown-light mt-6">
            — Amber Bucks, MSN, APRN, PMHNP-BC
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="section-padding bg-forest-green">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-5">
            Ready to take the first step?
          </h2>
          <p className="font-body text-cream/70 text-lg max-w-xl mx-auto mb-10">
            Reaching out is the hardest part. We make everything after that as
            gentle as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cream hover:bg-cream-light text-deep-green font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center gap-2 border border-cream/40 hover:border-cream text-cream font-body px-8 py-4 rounded-full transition-all duration-200"
            >
              I&rsquo;m not sure where to start
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}