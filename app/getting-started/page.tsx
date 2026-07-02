import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar, FileText, Heart } from "lucide-react";
import ContactForm from "@/components/contact-form/ContactForm";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "New to Train Your Brain Wellness? Learn how to become a patient, what to expect, and how we'll support you every step of the way.",
};

const steps = [
  {
    icon: MessageCircle,
    title: "Reach Out",
    description:
      "Use our contact form or call us to introduce yourself. Tell us a little about what's bringing you in — there's no pressure and no judgment. This first contact helps us understand how we can best support you.",
  },
  {
    icon: FileText,
    title: "Complete Intake Forms",
    description:
      "Once we confirm we're a good fit, you'll receive intake paperwork through SimplePractice, our secure patient portal. This helps Dr. Bucks get to know your history before your first visit.",
  },
  {
    icon: Calendar,
    title: "Schedule Your First Appointment",
    description:
      "Book your initial consultation online. Appointments are available in-person and via telehealth. Your first session is about getting to know each other and exploring what care might look like for you.",
  },
  {
    icon: Heart,
    title: "Begin Your Journey",
    description:
      "Treatment is collaborative. Together, we'll build a plan that reflects your goals, your pace, and your life. There is no one-size-fits-all approach here.",
  },
];

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "We accept several major insurance plans and also offer self-pay options. Contact us to confirm coverage before your first appointment.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Each patient receives one courtesy no-show per year. After that, a $100 fee applies to missed appointments. Please see our Fees & Policies page for full details.",
  },
  {
    q: "Is telehealth available?",
    a: "Yes. We offer secure telehealth appointments for established patients and for initial consultations when clinically appropriate.",
  },
  {
    q: "How often will I need appointments?",
    a: "Frequency varies depending on your treatment plan. Many patients start with weekly or biweekly sessions and adjust over time as progress is made.",
  },
  {
    q: "What ages do you treat?",
    a: "We currently serve adolescents and adults. Please contact us if you have questions about your specific situation.",
  },
  {
    q: "What if I'm in crisis?",
    a: "If you are experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. We are not a crisis service.",
  },
];

export default function GettingStartedPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            New Patients
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Your first step
            <span className="block italic text-sage-green">starts here.</span>
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-6 leading-relaxed">
            We know reaching out can feel overwhelming. This page walks you
            through everything — from first contact to your first appointment —
            so there are no surprises.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-12">
            How it works
          </h2>
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-cream" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-forest-green/20 mt-4 min-h-12" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-2xl text-deep-green mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-warm-brown text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              Book Your First Appointment <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 border border-forest-green text-forest-green hover:bg-forest-green hover:text-cream font-body px-8 py-4 rounded-full transition-all duration-200"
            >
              View Support Resources
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-10">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h4 className="font-display text-xl text-deep-green mb-2">
                  {faq.q}
                </h4>
                <p className="font-body text-warm-brown text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*CONTACT US*/}
      <section id="contact" className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-10">
            Contact Us
          </h2>
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Send us a short message with any questions you may have
          </p>
          <ContactForm />
        </div>
      </section>

    </>

  );
}