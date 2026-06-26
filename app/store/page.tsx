import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, CheckCircle } from "lucide-react";
import { getSupplementOfTheMonth, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Wellness Supplements",
  description:
    "Supplements personally recommended by Amber Bucks, PMHNP-BC through her Pure Encapsulations partnership.",
};

export const revalidate = 3600;

// Pending confirmation of exact sign-up URL from Amber — see Open Decisions in PROJECT_CONTEXT.md
const SITEWIDE_AFFILIATE_LINK = "https://patientdirect.pureencapsulationspro.com/patients/sign_up?practice_code=425997";

const magFormBenefits = [
  "Highly absorbable",
  "Gentle on the stomach",
  "Less likely to cause diarrhea than other forms of magnesium",
  "Combined with glycine, an amino acid that may support relaxation and restful sleep",
];

const magPotentialBenefits = [
  "Supporting relaxation and stress management",
  "Promoting healthy sleep quality",
  "Helping with muscle tension and recovery",
  "Supporting overall nervous system function",
  "Assisting with mood and emotional wellness",
  "Supporting individuals experiencing high levels of stress or burnout",
];

export default async function StorePage() {
  let supplementOfTheMonth = null;
  try {
    supplementOfTheMonth = await getSupplementOfTheMonth();
  } catch {
    supplementOfTheMonth = null;
  }

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Curated by Amber Bucks, PMHNP-BC
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Wellness Supplements
          </h1>
        </div>
      </section>

      {/* Philosophy + Pure Encapsulations partner info */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
                My Philosophy
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-deep-green mb-5 leading-tight">
                Mental wellness is more than medication alone.
              </h2>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-4">
                My approach combines evidence-based psychiatric care with
                lifestyle optimization, nutrition, sleep support, stress
                management, psychotherapy, and integrative wellness strategies
                to help individuals move from survival to healing.
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed">
                While supplements are never a substitute for individualized
                medical or psychiatric treatment, certain evidence-based
                products may help support overall wellness when incorporated
                into a comprehensive treatment plan.
              </p>
            </div>

            <div className="md:w-72 bg-cream rounded-2xl p-7 border border-sage-green/10 flex-shrink-0">
              <div className="mb-5">
                <Image
                  src="/pure-encapsulations-logo.svg"
                  alt="Pure Encapsulations"
                  width={170}
                  height={51}
                  className="w-36 h-auto"
                />
              </div>
              <h3 className="font-display text-xl text-deep-green mb-2">
                Our Supplement Partner
              </h3>
              <p className="font-body text-warm-brown text-sm leading-relaxed">
                Pure Encapsulations® is a trusted supplement company known for
                its commitment to quality, purity, and science-backed
                formulations. Products are manufactured with rigorous quality
                standards and are free from many common allergens, artificial
                ingredients, and unnecessary fillers.
              </p>
            </div>
          </div>
        </div>

        {/* How to access / QR code */}
        <div className="py-10 container-narrow px-6 md:px-12">
          <div className="bg-deep-green rounded-2xl p-8 md:p-12 max-w-3xl flex flex-col sm:flex-row items-center gap-8">
            <div className="bg-white rounded-xl p-3 flex-shrink-0">
              <Image
                src="/qr_code_pure_encapsulations.png"
                alt="QR code to create a Pure Encapsulations patient account"
                width={140}
                height={140}
                className="w-32 h-32"
              />
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
                How to Access
              </p>
              <h3 className="font-display text-2xl text-cream mb-3 leading-tight">
                Scan to Create Your Account
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed mb-5">
                Scan the QR code or use the link below to create a Pure
                Encapsulations patient account. Once registered with
                Amber&rsquo;s practice code, you&rsquo;ll receive access to
                her recommended products and a patient discount on your
                purchases.
              </p>
              <a
                href={SITEWIDE_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-sage-green hover:bg-cream text-deep-green font-body font-medium px-6 py-3 rounded-full transition-all duration-200"
              >
                Create Your Account <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supplement of the Month — Sanity-driven */}
      <section className="py-0 bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-body text-4x1 uppercase tracking-widest text-sage-green mb-4 text-center">
            Featured This Month
          </h2>

          {supplementOfTheMonth ? (
            <div className="bg-cream rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0 max-w-4xl mx-auto border border-sage-green/10">
              <div className="aspect-square md:aspect-auto bg-sage-green/10 relative">
                {supplementOfTheMonth.image ? (
                  <Image
                    src={urlFor(supplementOfTheMonth.image).width(600).height(600).url()}
                    alt={supplementOfTheMonth.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-sm text-warm-brown-light">
                      No image yet
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-10 flex flex-col">
                <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-2">
                  Supplement of the Month — {supplementOfTheMonth.month}
                </p>
                <h3 className="font-display text-3xl text-deep-green mb-4">
                  {supplementOfTheMonth.name}
                </h3>
                <p className="font-body text-warm-brown text-sm leading-relaxed mb-6 flex-1">
                  {supplementOfTheMonth.description}
                </p>
                <a
                  href={supplementOfTheMonth.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-6 py-3.5 rounded-full transition-all duration-200"
                >
                  Shop on Pure Encapsulations <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <p className="font-display text-2xl text-deep-green mb-2">
                Coming Soon
              </p>
              <p className="font-body text-warm-brown text-sm">
                Amber is selecting this month&rsquo;s featured supplement.
                Check back shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs text-warm-brown-light leading-relaxed text-center max-w-2xl mx-auto">
            These statements have not been evaluated by the FDA. These
            products are not intended to diagnose, treat, cure, or prevent any
            disease. They are wellness tools meant to complement — not
            replace — professional psychiatric care. Always consult your
            provider before adding supplements to your routine. Amber Bucks
            may receive a commission on purchases made through these affiliate
            links.
          </p>
        </div>
      </section>
    </>
  );
}
