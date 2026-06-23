import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "TMS Sessions",
  description:
    "FDA-cleared Transcranial Magnetic Stimulation (TMS) therapy for depression, PTSD, and stress with Dr. Amber Bucks at Train Your Brain Wellness.",
};

const benefits = [
  "Improved resilience",
  "Reduced depression and PTSD symptoms",
  "Improved sleep and focus",
  "Reduction in crisis escalation",
  "Improved family functioning",
  "Reduced absenteeism at work",
  "Support for operational readiness",
  "Improved medication management regimens",
];

export default function TMSPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Services
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            TMS Sessions
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-6 leading-relaxed">
            A non-invasive, FDA-cleared brain stimulation treatment that uses
            magnetic pulses to help regulate the areas of the brain involved
            in mood, emotional processing, focus, and stress response.
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

      {/* What is TMS */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-8">
            What is TMS?
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed max-w-2xl mb-6">
            TMS is a non-invasive, FDA-cleared brain stimulation treatment that
            uses magnetic pulses to help regulate areas of the brain involved
            in mood, emotional processing, focus, and stress response. It is
            performed while you&rsquo;re awake, does not require sedation, and
            allows you to return to normal activities immediately afterward.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed max-w-2xl">
            TMS is offered as part of Dr. Bucks&rsquo; precision psychiatry
            approach for qualifying individuals experiencing depression and
            other mental health conditions, often alongside medication
            management, genetic testing, and other advanced treatment options.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-10">
            What it can improve
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                <span className="font-body text-base text-warm-brown leading-relaxed">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership note */}
      <section className="section-padding bg-deep-green">
        <div className="container-narrow px-6 md:px-12 max-w-2xl">
          <h2 className="font-display text-3xl text-cream mb-5">
            Our TMS Partnership
          </h2>
          <p className="font-body text-cream/70 text-base leading-relaxed mb-6">
            Dr. Bucks partners with JLC Services to provide TMS, including
            options supported through state funding for eligible first
            responders, and with D2 Human Performance Centers for
            complementary nervous-system recovery modalities such as red
            light therapy, cryotherapy, and Shiftwave pulsed-pressure therapy.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-6">
            <div className="flex flex-col gap-2">
              <a href="https://jlcservicesinc.net/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-3 inline-block">
                <Image
                  src="/jlc-logo.png"
                  alt="JLC Services"
                  width={95}
                  height={48}
                  className="w-40 h-auto"
                />
              </a>
              <a
                href="https://jlcservicesinc.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-green hover:text-cream font-body text-sm font-medium transition-colors"
              >
                Learn more about JLC Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <a href="https://d2hpcenters.com/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-3 inline-block">
                <Image
                  src="/d2-logo.png"
                  alt="D2 Human Performance Centers"
                  width={505}
                  height={95}
                  className="w-75 h-auto"
                />
              </a>
              <a
                href="https://d2hpcenters.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-green hover:text-cream font-body text-sm font-medium transition-colors"
              >
                Learn more about D2 Human Performance Centers <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl text-deep-green mb-5">
            Is TMS right for you?
          </h2>
          <p className="font-body text-warm-brown text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Book a consultation with Dr. Bucks to discuss your history and find
            out if TMS is a good fit for your treatment plan.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}