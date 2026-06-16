import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, Shield, Truck, RefreshCw } from "lucide-react";
import { getProductById, getProducts } from "@/lib/products";
import BuyButton from "@/components/store/BuyButton";

export const revalidate = 60;

type Props = {
  params: { productId: string };
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ productId: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.productId);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

const perks = [
  { icon: Shield, label: "Quality Guaranteed", desc: "Every product is personally vetted by Dr. Bucks." },
  { icon: Truck,  label: "Fast Shipping",       desc: "Orders ship within 2 business days." },
  { icon: RefreshCw, label: "Easy Returns",     desc: "30-day return policy on unopened items." },
];

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.productId);
  if (!product) notFound();

  return (
    <>
      <section className="pt-28 pb-8 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <Link
            href="/store"
            className="inline-flex items-center gap-2 text-sage-green hover:text-cream font-body text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Wellness Shop
          </Link>
        </div>
      </section>

      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <div className="aspect-square bg-sage-green/10 rounded-3xl overflow-hidden sticky top-28 flex items-center justify-center">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-12 h-12 text-forest-green/50" />
                  </div>
                  <p className="font-body text-sm text-warm-brown-light">
                    Product image coming soon
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
                {product.category.replace(/-/g, " ")}
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-deep-green leading-tight mb-4">
                {product.name}
              </h1>
              <p className="font-display text-3xl text-forest-green mb-6">
                {product.displayPrice}
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-8">
                {product.description}
              </p>

              <BuyButton priceId={product.priceId} />

              {product.category === "supplements" && (
                <p className="font-body text-xs text-warm-brown-light mt-5 leading-relaxed">
                  These statements have not been evaluated by the FDA. This product
                  is not intended to diagnose, treat, cure, or prevent any disease.
                  Consult your provider before use.
                </p>
              )}

              <div className="mt-10 pt-8 border-t border-sage-green/20 flex flex-col gap-5">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-forest-green" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-deep-green">{perk.label}</p>
                        <p className="font-body text-xs text-warm-brown-light">{perk.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-narrow px-6 md:px-12 text-center max-w-2xl">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Why I Carry This
          </p>
          <p className="font-display italic text-2xl text-deep-green leading-relaxed">
            &ldquo;Every product in this shop was chosen because I believe in it —
            not because it was sponsored. This is what I actually recommend to patients.&rdquo;
          </p>
          <p className="font-body text-sm text-warm-brown-light mt-5">— Dr. Amber Bucks</p>
        </div>
      </section>
    </>
  );
}