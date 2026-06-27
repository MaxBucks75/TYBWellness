import type { Metadata } from "next";
import { AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Fees, Insurance & Policies",
  description:
    "Self-pay rates, insurance information, administrative service fees, and practice policies for Train Your Brain Wellness.",
};

const selfPayRates = [
  { service: "Initial Psychiatric Evaluation (60–90 minutes)", price: "$325" },
  { service: "Follow-Up Medication Management (30 minutes)", price: "$150" },
  { service: "Medication Management + Psychotherapy (45–60 minutes)", price: "$225" },
  { service: "Extended Integrative Mental Health Consultation (60 minutes)", price: "$250" },
  { service: "Urgent Visit", price: "$225" },
];

const adminFees = [
  { service: "IEP/504 Assistance", price: "$100" },
  { service: "Work Accommodations", price: "$100" },
  { service: "Bariatric Surgery Psychological Clearances", price: "$100" },
  { service: "Disability/FMLA", price: "$100" },
  { service: "ESA Letter", price: "$100" },
  { service: "Court Letter", price: "$100" },
  { service: "Record Review", price: "$25–$50 per 15 minutes" },
];

const jumpLinks = [
  { label: "Insurance & Self-Pay", href: "#insurance" },
  { label: "Administrative Fees", href: "#admin-fees" },
  { label: "Cancellation Policy", href: "#cancellation" },
  { label: "Communication Policy", href: "#communication" },
  { label: "Medication Refills", href: "#refills" },
  { label: "Good Faith Estimate", href: "#good-faith" },
];

export default function FeesPoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Practice Information
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Fees, Insurance
            <span className="block italic text-sage-green">& Policies</span>
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-6 leading-relaxed">
            Insurance coverage is available through participating plans.
            Self-pay options are offered for individuals seeking flexibility,
            privacy, or services not covered by insurance.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <section className="py-6 bg-deep-green border-y-cream-light sm:sticky top-20 z-30">
        <div className="px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xs uppercase tracking-wider  text-cream/70 hover:text-cream-light border border-cream/70 hover:border-cream-light rounded-full px-4 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Self-Pay */}
      <section id="insurance" className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-3">
            Insurance & Self-Pay
          </h2>
          <p className="font-body text-warm-brown text-sm mb-10 max-w-2xl">
            Insurance coverage is available through participating plans.
            Self-pay options are offered for individuals seeking flexibility,
            privacy, or services not covered by insurance.
          </p>

          <h3 className="font-display text-xl text-deep-green mb-4">
            Insurances Accepted
          </h3>
          <p className="font-body text-warm-brown text-sm mb-10 italic">
            A full list of accepted insurance plans is being finalized and
            will be posted here shortly. Please contact our office to confirm
            your specific coverage.
          </p>

          <h3 className="font-display text-xl text-deep-green mb-5">
            Self-Pay Rates
          </h3>
          <div className="bg-cream rounded-2xl overflow-hidden border border-sage-green/10">
            {selfPayRates.map((row, i) => (
              <div
                key={row.service}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${
                  i !== selfPayRates.length - 1 ? "border-b border-sage-green/10" : ""
                }`}
              >
                <span className="font-body text-sm text-warm-brown">{row.service}</span>
                <span className="font-display text-lg text-deep-green flex-shrink-0">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Fees */}
      <section id="admin-fees" className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-3">
            Additional Administrative & Documentation Services
          </h2>
          <p className="font-body text-warm-brown text-sm leading-relaxed mb-8 max-w-2xl">
            Available after evaluation and established care. Because these
            services are generally not covered by insurance and require
            provider time outside of scheduled appointments, fees apply.
          </p>
          <p className="font-body text-warm-brown text-sm leading-relaxed mb-10 max-w-2xl">
            Documentation requests, disability forms, ESA evaluations, court-
            related letters, and other administrative services require
            provider review and clinical evaluation. Requests must be
            discussed during a scheduled appointment and cannot be completed
            solely through phone calls, messages, or staff requests.
            Completion of documentation does not guarantee approval by
            employers, courts, housing providers, disability carriers,
            schools, or other third parties. Fees may apply for provider time
            spent reviewing records, evaluating requests, and completing
            forms.
          </p>

          <div className="bg-cream rounded-2xl overflow-hidden border border-sage-green/10">
            {adminFees.map((row, i) => (
              <div
                key={row.service}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${
                  i !== adminFees.length - 1 ? "border-b border-sage-green/10" : ""
                }`}
              >
                <span className="font-body text-sm text-warm-brown">{row.service}</span>
                <span className="font-display text-lg text-deep-green flex-shrink-0">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No-Show & Cancellation */}
      <section id="cancellation" className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-3xl text-deep-green mb-5">
            No-Show & Cancellation Policy
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "1 courtesy no-show allowed annually",
              "$100 fee for each no-show thereafter",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-base text-warm-brown leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Policy */}
      <section id="communication" className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-3xl text-deep-green mb-5">
            Communication Policy
          </h2>
          <div className="flex flex-col gap-3 mb-8">
            {[
              "Secure communication is available through Spruce.",
              "Messages are reviewed during normal business hours.",
              "Typical response time is 1–2 business days.",
              "Providers do not communicate with patients through personal phone numbers or social media accounts.",
              "Documentation requests, disability paperwork, and administrative forms may require additional appointments and fees.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-base text-warm-brown leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Emergency callout */}
          <div className="bg-warm-brown/10 border border-warm-brown/30 rounded-2xl p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-warm-brown flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-display text-lg text-deep-green mb-2">
                Spruce is not monitored 24/7
              </p>
              <p className="font-body text-warm-brown text-sm leading-relaxed">
                Spruce should not be used for emergencies. After-hours
                messages will be addressed on the next business day.
                Emergencies should not wait for a response. For emergencies,
                call 911, 988, or go to the nearest emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Refill Policy */}
      <section id="refills" className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-3xl text-deep-green mb-5">
            Medication Refill Policy
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "Request refills several business days before running out.",
              "Attend scheduled appointments.",
              "Controlled substances may have additional requirements.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0 mt-1" />
                <span className="font-body text-base text-warm-brown leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good Faith Estimate */}
      <section id="good-faith" className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <h2 className="font-display text-3xl text-deep-green mb-5">
            Good Faith Estimate Policy
          </h2>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-4">
            Under federal law, patients who do not have insurance or who
            choose not to use their insurance have the right to receive a
            Good Faith Estimate of expected charges for medical and mental
            health services.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-4">
            You have the right to receive an estimate of the total expected
            cost of non-emergency services, including evaluations, treatment
            visits, and other healthcare-related services.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-4">
            A Good Faith Estimate will be provided upon request and prior to
            the delivery of services when required by law.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed mb-4">
            If you receive a bill that is substantially higher than your Good
            Faith Estimate, you may have the right to dispute the charges.
          </p>
          <p className="font-body text-warm-brown text-base leading-relaxed">
            For questions regarding your Good Faith Estimate, please contact
            our office.
          </p>
        </div>
      </section>
    </>
  );
}