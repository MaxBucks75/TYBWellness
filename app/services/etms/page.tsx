import type { Metadata } from "next";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "eTMS Sessions",
  description:
    "FDA-cleared Transcranial Magnetic Stimulation (TMS) therapy for depression with Dr. Amber Bucks at Train Your Brain Wellness.",
};

const benefits = [
  "Non-invasive — no surgery, no anesthesia",
  "FDA-cleared for major depressive disorder",
  "No systemic side effects like weight gain or sexual dysfunction",
  "Outpatient — sessions fit into your day",
  "Effective for medication-resistant depression",
];

const notFor = [
  "Metal implants in or near the head",
  "History of seizures (in most cases)",
  "Active suicidal ideation requiring inpatient care",
];

const sessionSteps = [
  {
    step: "01",
    title: "Initial Evaluation",
    body: "Dr. Bucks reviews your history to confirm TMS is a safe, appropriate option for you.",
  },
  {
    step: "02",
    title: "Motor Threshold Mapping",
    body: "Your first session calibrates the device to your unique brain — ensuring precise, effective stimulation.",
  },
  {
    step: "03",
    title: "Treatment Course",
    body: "A standard course is 5 sessions per week for 4–6 weeks. Sessions are about 20–40 minutes each.",
  },
  {
    step: "04",
    title: "Ongoing Monitoring",
    body: "Dr. Bucks tracks your progress throughout and adjusts as needed. Many patients notice changes by week 3.",
  },
];

export default function ETMSPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Services
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            eTMS Sessions
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-6 leading-relaxed">
            Transcranial Magnetic Stimulation — a breakthrough, non-drug
            treatment for depression that works by stimulating targeted brain
            regions with magnetic pulses.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-sage-green hover:bg-cream text-deep-green font-body font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-12">
            How TMS works
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <p className="font-body text-warm-brown text-base leading-relaxed">
              TMS uses magnetic fields — similar to those in an MRI machine —
              to stimulate nerve cells in the area of the brain involved in mood
              regulation. Unlike ECT, TMS is non-invasive, requires no
              sedation, and has minimal side effects.
            </p>
            <p className="font-body text-warm-brown text-base leading-relaxed">
              It&rsquo;s particularly effective for people who haven&rsquo;t
              responded adequately to antidepressants, or who want to avoid the
              systemic side effects of medication. Studies show response rates
              of 50–60% in medication-resistant patients.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionSteps.map((s) => (
              <div
                key={s.step}
                className="bg-cream rounded-2xl p-6 border border-sage-green/10"
              >
                <p className="font-display text-4xl text-sage-green mb-4">
                  {s.step}
                </p>
                <h4 className="font-display text-lg text-deep-green mb-2">
                  {s.title}
                </h4>
                <p className="font-body text-sm text-warm-brown leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-3xl text-deep-green mb-6">
              TMS may be right for you if…
            </h3>
            <ul className="flex flex-col gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-warm-brown leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-3xl text-deep-green mb-6">
              TMS may not be suitable if…
            </h3>
            <ul className="flex flex-col gap-4">
              {notFor.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-warm-brown-light flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-warm-brown leading-relaxed">
                    {n}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-body text-xs text-warm-brown-light mt-6 leading-relaxed">
              Candidacy is always determined on a case-by-case basis during your
              initial consultation. These are general guidelines, not absolute
              exclusions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-green">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl text-cream mb-5">
            Is TMS right for you?
          </h2>
          <p className="font-body text-cream/70 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Book a consultation with Dr. Bucks to discuss your history and find
            out if TMS is a good fit for your treatment plan.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage-green hover:bg-cream text-deep-green font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}