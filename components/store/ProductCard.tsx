"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import type { Product } from "@/lib/products";

function ShoppingBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 7V5a6 6 0 0 1 12 0v2" />
      <path d="M6 7h12l-1.5 12.75A1.5 1.5 0 0 1 15 21H9a1.5 1.5 0 0 1-1.5-1.25L6 7z" />
      <path d="M9 10h6" />
    </svg>
  );
}

function Loader2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-9-9" />
    </svg>
  );
}
import { cn } from "@/lib/utils";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-cream rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Product image placeholder */}
      <div className="aspect-square bg-sage-green/10 flex items-center justify-center group-hover:bg-sage-green/15 transition-colors">
        <div className="w-20 h-20 rounded-full bg-sage-green/20 flex items-center justify-center">
          <ShoppingBag className="w-8 h-8 text-forest-green/60" />
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-1">
        <p className="font-body text-xs uppercase tracking-wider text-warm-brown-light mb-2">
          {product.category.replace("-", " ")}
        </p>
        <h3 className="font-display text-xl text-deep-green mb-2 leading-snug">
          {product.name}
        </h3>
        <p className="font-body text-sm text-warm-brown leading-relaxed flex-1 mb-5">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-2xl text-deep-green">
            {product.displayPrice}
          </span>
          <button
            onClick={handleBuy}
            disabled={loading}
            className={cn(
              "flex items-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200",
              loading && "opacity-60 cursor-not-allowed"
            )}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
            {loading ? "Loading..." : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}