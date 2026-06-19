import type { Metadata } from "next";
import { ExternalLink, Phone, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Mental Health Resources",
  description:
    "Curated mental health resources, crisis lines, and support organizations recommended by Dr. Amber Bucks.",
};

const crisisResources = [
  {
    name: "988 Suicide & Crisis Lifeline",
    description:
      "Call or text 988 anytime, 24/7. Connects you with a trained counselor for suicide, mental health, and substance use crises.",
    action: "Call or Text 988",
    href: "tel:988",
    isPhone: true,
  },
  {
    name: "Crisis Text Line",
    description:
      'Text HOME to 741741 from anywhere in the USA to reach a trained crisis counselor. Free, confidential, 24/7.',
    action: "Text HOME to 741741",
    href: "sms:741741",
    isPhone: true,
  },
  {
    name: "NAMI Helpline",
    description:
      "The National Alliance on Mental Illness helpline offers information, support, and referrals. Mon–Fri, 10am–10pm ET.",
    action: "Call 1-800-950-NAMI",
    href: "tel:18009506264",
    isPhone: true,
  },
];

const organizations = [
  {
    name: "NAMI — National Alliance on Mental Illness",
    description:
      "The nation's largest grassroots mental health organization, offering education programs, support groups, and advocacy resources.",
    href: "https://www.nami.org",
  },
  {
    name: "AFSP — American Foundation for Suicide Prevention",
    description:
      "Dedicated to saving lives and bringing hope to those affected by suicide through research, education, and advocacy.",
    href: "https://afsp.org",
  },
  {
    name: "MentalHealth.gov",
    description:
      "U.S. government information and resources on mental health, including how to find help and support for specific conditions.",
    href: "https://www.mentalhealth.gov",
  },
  {
    name: "SAMHSA National Helpline",
    description:
      "Free, confidential, 24/7 treatment referral service for mental health and substance use disorders.",
    href: "https://www.samhsa.gov/find-help/national-helpline",
  },
  {
    name: "Psychology Today Therapist Finder",
    description:
      "Search for licensed therapists, psychiatrists, and support groups in your area by specialty and insurance.",
    href: "https://www.psychologytoday.com/us/therapists",
  },
  {
    name: "Anxiety & Depression Association of America",
    description:
      "Trusted resources on anxiety, depression, OCD, PTSD, and co-occurring disorders, including therapist referrals.",
    href: "https://adaa.org",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Support
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Mental Health
            <span className="block italic text-sage-green">Resources</span>
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-6 leading-relaxed">
            A curated collection of trusted organizations, crisis lines, and
            support tools — for when you need more than what one practice can
            offer.
          </p>
        </div>
      </section>

      {/* Crisis section */}
      <section className="section-padding bg-warm-brown/10 border-b border-warm-brown/20">
        <div className="container-narrow px-6 md:px-12">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-5 h-5 text-warm-brown" />
            <h2 className="font-display text-3xl text-deep-green">
              If you&rsquo;re in crisis right now
            </h2>
          </div>
          <p className="font-body text-warm-brown text-sm mb-8 max-w-xl">
            If you or someone you know is in immediate danger, please call 911.
            For mental health crises that are not immediately life-threatening,
            these resources offer 24/7 confidential support.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {crisisResources.map((r) => (
              <div
                key={r.name}
                className="bg-cream rounded-2xl p-6 border border-warm-brown/20"
              >
                <h4 className="font-display text-xl text-deep-green mb-3">
                  {r.name}
                </h4>
                <p className="font-body text-sm text-warm-brown leading-relaxed mb-5">
                  {r.description}
                </p>
                <a
                  href={r.href}
                  className="inline-flex items-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {r.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-4xl text-deep-green mb-10">
            Organizations & tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cream rounded-2xl p-7 border border-sage-green/10 hover:border-sage-green/40 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-display text-xl text-deep-green group-hover:text-forest-green transition-colors">
                    {org.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-sage-green flex-shrink-0 mt-1" />
                </div>
                <p className="font-body text-sm text-warm-brown leading-relaxed">
                  {org.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-cream border-t border-sage-green/20">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs text-warm-brown-light leading-relaxed text-center max-w-2xl mx-auto">
            Train Your Brain Wellness is not a crisis service. These resources
            are provided for informational purposes. If you are a current
            patient in need of urgent support, please contact our office or use
            the crisis resources above.
          </p>
        </div>
      </section>
    </>
  );
}