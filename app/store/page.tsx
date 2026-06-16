import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/store/ProductCard";

export const metadata: Metadata = {
  title: "Wellness Shop",
  description:
    "Curated wellness tools, supplements, and essential oils selected by Dr. Amber Bucks to support your mental health journey.",
};

// Revalidate the product list every 60 seconds so Stripe changes
// appear on the site without a manual redeploy
export const revalidate = 60;

export default async function StorePage() {
  let products = await getProducts();

  // Group by category
  const byCategory = products.reduce<Record<string, typeof products>>(
    (acc, product) => {
      const cat = product.category || "general";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(product);
      return acc;
    },
    {}
  );

  const categoryOrder = ["wellness-tools", "supplements", "essential-oils"];
  const sortedCategories = [
    ...categoryOrder.filter((c) => byCategory[c]),
    ...Object.keys(byCategory).filter((c) => !categoryOrder.includes(c)),
  ];

  const categoryLabels: Record<string, string> = {
    "wellness-tools": "Wellness Tools",
    supplements: "Supplements",
    "essential-oils": "Essential Oils",
  };

  return (
    <>
      <section className="pt-36 pb-16 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Curated by Dr. Bucks
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            Wellness Shop
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-5 leading-relaxed">
            Every product here has been personally selected to complement your
            mental health journey — between sessions and beyond.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-3xl text-deep-green mb-3">
                Coming Soon
              </p>
              <p className="font-body text-warm-brown">
                Products are being added. Check back shortly.
              </p>
            </div>
          ) : (
            sortedCategories.map((cat) => (
              <div key={cat} className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display text-3xl text-deep-green whitespace-nowrap">
                    {categoryLabels[cat] ??
                      cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </h2>
                  <div className="flex-1 h-px bg-sage-green/20" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {byCategory[cat].map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="py-10 bg-cream border-t border-sage-green/20">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs text-warm-brown-light leading-relaxed text-center max-w-2xl mx-auto">
            These products are not intended to diagnose, treat, cure, or prevent
            any disease. They are wellness tools meant to complement — not
            replace — professional psychiatric care. Always consult your
            provider before adding supplements to your routine.
          </p>
        </div>
      </section>
    </>
  );
}