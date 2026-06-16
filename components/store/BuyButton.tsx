"use client";

import { useState } from "react";
import { ShoppingBag, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  priceId: string;
};

export default function BuyButton({ priceId }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
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
    <button
      onClick={handleBuy}
      disabled={loading}
      className={cn(
        "w-full flex items-center justify-center gap-3 bg-forest-green hover:bg-deep-green text-cream font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-200",
        loading && "opacity-60 cursor-not-allowed"
      )}
    >
      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingBag className="w-5 h-5" />}
      {loading ? "Redirecting to checkout..." : "Buy Now"}
    </button>
  );
}