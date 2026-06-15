import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Medication Management",
  description:
    "Thoughtful psychiatric medication management with Dr. Amber Bucks. Evidence-based prescribing tailored to your unique biology and goals.",
};

const whatWeManage = [
  "Antidepressants",
  "Anti-anxiety medications",
  "Mood stabilizers",
  "ADHD medications",
  "Sleep support",
  "Antipsychotics (when indicated)",
];

export default function MedManagementPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Services
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Medication
            <span className="block italic text-sage-green">Management</span>
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-6 leading-relaxed">
            Precise, personalized psychiatric medication support — with ongoing
            monitoring, honest communication, and a focus on quality of life.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-sage-green hover:bg-cream text-deep-green font-body font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl text-deep-green mb-6">
              Our approach
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
              Medication is a tool — not a solution in itself. Dr. Bucks
              approaches prescribing with care and precision, always considering
              your full medical history, lifestyle, values, and goals before
              making any recommendation.
            </p>
            <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
              Follow-up appointments ensure your medication is working as
              intended, with adjustments made collaboratively and promptly when
              needed. You will never feel like a number here.
            </p>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              Medication management can stand alone or be combined with
              psychotherapy for a more comprehensive treatment experience.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-deep-green mb-6">
              Medications we manage
            </h3>
            <ul className="flex flex-col gap-3">
              {whatWeManage.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0" />
                  <span className="font-body text-sm text-warm-brown">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-xs text-warm-brown-light mt-6 leading-relaxed">
              All medications are prescribed following FDA guidelines and
              evidence-based psychiatric standards.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-green">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl text-cream mb-5">
            Ready to get started?
          </h2>
          <p className="font-body text-cream/70 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Your first appointment includes a comprehensive psychiatric
            evaluation so we can build the right plan for you.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage-green hover:bg-cream text-deep-green font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            Book an Appointment <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}