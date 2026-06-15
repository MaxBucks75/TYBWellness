import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Psychotherapy",
  description:
    "Compassionate individual psychotherapy with Dr. Amber Bucks. Explore talk therapy for anxiety, depression, trauma, grief, and life transitions.",
};

const approaches = [
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    description:
      "Identify and shift thought patterns that keep you stuck. CBT is one of the most well-researched therapies for anxiety and depression.",
  },
  {
    name: "Psychodynamic Therapy",
    description:
      "Explore how your past experiences and unconscious mind shape your present feelings and relationships.",
  },
  {
    name: "Mindfulness-Based Approaches",
    description:
      "Develop present-moment awareness and build skills for tolerating difficult emotions without being overwhelmed by them.",
  },
  {
    name: "Trauma-Informed Care",
    description:
      "A gentle, paced approach to processing painful experiences in a way that feels safe and doesn't re-traumatize.",
  },
];

const wellSuited = [
  "Anxiety & chronic worry",
  "Depression & low mood",
  "Grief & loss",
  "Life transitions",
  "Relationship challenges",
  "Low self-esteem",
  "Burnout & work stress",
  "Identity exploration",
];

export default function PsychotherapyPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Services
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Psychotherapy
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-6 leading-relaxed">
            A confidential, compassionate space to understand yourself more
            deeply — and to make the changes that matter most to you.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-sage-green hover:bg-cream text-deep-green font-body font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Book a Session <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl text-deep-green mb-6">
              What to expect
            </h2>
            <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
              Therapy at Train Your Brain Wellness is collaborative, not
              prescriptive. Dr. Bucks tailors her approach to your specific
              needs, drawing from multiple evidence-based modalities rather than
              fitting everyone into the same box.
            </p>
            <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
              Sessions are 50 minutes and are available in-person or via
              telehealth. Frequency is discussed at your first appointment and
              adjusted as your needs evolve.
            </p>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              There is no agenda beyond your wellbeing. You set the pace.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-deep-green mb-6">
              Well-suited for
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {wellSuited.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0" />
                  <span className="font-body text-sm text-warm-brown">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-10">
            Treatment approaches
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((a) => (
              <div
                key={a.name}
                className="bg-cream-light rounded-2xl p-7 border border-sage-green/10"
              >
                <h4 className="font-display text-xl text-deep-green mb-3">
                  {a.name}
                </h4>
                <p className="font-body text-sm text-warm-brown leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-deep-green">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl text-cream mb-5">
            Pricing & Insurance
          </h2>
          <p className="font-body text-cream/70 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            We accept several major insurance plans and also offer self-pay
            rates. Contact us to verify your coverage before booking.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage-green hover:bg-cream text-deep-green font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            Book Your First Session <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}