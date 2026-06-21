import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, QrCode } from "lucide-react";
import { getSupplementOfTheMonth, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Wellness Supplements",
  description:
    "Supplements personally recommended by Dr. Amber Bucks through her Pure Encapsulations partnership.",
};

export const revalidate = 3600; // refresh Supplement of the Month hourly

// Static list of supplements Amber has selected from Pure Encapsulations.
// Update the affiliateLink on each once Amber confirms how her code works
// (sitewide vs. per-product) — for now all point to the same sitewide link.
const SITEWIDE_AFFILIATE_LINK = "#"; // TODO: replace with Amber's real affiliate link

const supplements = [
  { name: "Acupressure Mat Set", category: "Wellness Tool" },
  { name: "Handheld Cold Therapy Roller", category: "Wellness Tool" },
  { name: "Facial Red Light Mask", category: "Wellness Tool" },
  { name: "Mood Balancing Formula", category: "Supplement" },
  { name: "Cognitive Support Blend", category: "Supplement" },
  { name: "Stress Resilience Capsules", category: "Supplement" },
  { name: "Grounding Cedarwood Oil", category: "Essential Oil" },
  { name: "Focus Peppermint Oil", category: "Essential Oil" },
  { name: "Serene Lavender Oil", category: "Essential Oil" },
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
            Curated by Dr. Bucks
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Wellness Supplements
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-5 leading-relaxed">
            Every supplement here has been personally selected to complement
            your mental health journey — between sessions and beyond.
          </p>
        </div>
      </section>

      {/* Pure Encapsulations brand block */}
      <section className="py-14 bg-cream-light border-b border-sage-green/20">
        <div className="container-narrow px-6 md:px-12">
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-cream-light rounded-2xl p-8">
            <div className="bg-cream-light rounded-lg p-4 flex-shrink-0 inline-flex items-center justify-center">
              <Image
                src="/pure-encapsulations-logo.svg"
                alt="Pure Encapsulations"
                width={170}
                height={51}
                className="w-36 h-auto"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl text-deep-green mb-2">
                Our Pure Encapsulations Partnership
              </h2>
              {/* Editable via Sanity later if needed — static for now per Amber's request */}
              <p className="font-body text-warm-brown text-sm leading-relaxed max-w-2xl">
                Dr. Bucks partners with Pure Encapsulations, a trusted leader
                in research-backed, hypoallergenic supplements, to bring
                patients access to high-quality products that support mental
                and physical wellness alongside clinical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplement of the Month */}
      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4 text-center">
            Featured This Month
          </p>

          {supplementOfTheMonth ? (
            <div className="bg-cream-light rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0 max-w-4xl mx-auto">
              {/* Image */}
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

              {/* Content */}
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

                <div className="flex flex-col gap-4">
                  <a
                    href={supplementOfTheMonth.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-6 py-3.5 rounded-full transition-all duration-200"
                  >
                    Shop on Pure Encapsulations <ExternalLink className="w-4 h-4" />
                  </a>

                  {supplementOfTheMonth.affiliateQrCode && (
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-20 h-20 relative flex-shrink-0 bg-white rounded-lg p-1">
                        <Image
                          src={urlFor(supplementOfTheMonth.affiliateQrCode).width(160).height(160).url()}
                          alt="Scan to shop"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="font-body text-xs text-warm-brown-light leading-relaxed">
                        <QrCode className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                        Scan to shop directly from your phone
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <p className="font-display text-2xl text-deep-green mb-2">
                Coming Soon
              </p>
              <p className="font-body text-warm-brown text-sm">
                Dr. Bucks is selecting this month&rsquo;s featured supplement.
                Check back shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* General supplement list */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <h2 className="font-display text-3xl text-deep-green mb-3">
            Recommended Supplements
          </h2>
          <p className="font-body text-warm-brown text-sm mb-10 max-w-xl">
            A few of Dr. Bucks&rsquo; go-to recommendations. All purchases are
            made directly through Pure Encapsulations &mdash; no payment is
            processed on this site.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supplements.map((item) => (
              <a
                key={item.name}
                href={SITEWIDE_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group bg-cream rounded-2xl p-6 border border-sage-green/10 hover:border-sage-green/40 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-warm-brown-light mb-1">
                    {item.category}
                  </p>
                  <p className="font-display text-lg text-deep-green group-hover:text-forest-green transition-colors">
                    {item.name}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-sage-green flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-cream border-t border-sage-green/20">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs text-warm-brown-light leading-relaxed text-center max-w-2xl mx-auto">
            These statements have not been evaluated by the FDA. These
            products are not intended to diagnose, treat, cure, or prevent any
            disease. They are wellness tools meant to complement — not
            replace — professional psychiatric care. Always consult your
            provider before adding supplements to your routine. Dr. Bucks may
            receive a commission on purchases made through these affiliate
            links.
          </p>
        </div>
      </section>
    </>
  );
}