import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

export type Product = {
  id: string;
  priceId: string;
  name: string;
  description: string;
  displayPrice: string;
  price: number;
  category: string;
  imageUrl?: string;
};

// Fallback: automatically infer category from product name
// so the store works even without metadata set
function inferCategory(name: string, metadata: Record<string, string>): string {
  if (metadata?.category) return metadata.category.toLowerCase();

  const n = name.toLowerCase();

  if (
    n.includes("oil") ||
    n.includes("lavender") ||
    n.includes("peppermint") ||
    n.includes("cedarwood")
  ) return "essential-oils";

  if (
    n.includes("capsule") ||
    n.includes("formula") ||
    n.includes("supplement") ||
    n.includes("blend") ||
    n.includes("vitamin") ||
    n.includes("stress") ||
    n.includes("cognitive") ||
    n.includes("mood")
  ) return "supplements";

  if (
    n.includes("mat") ||
    n.includes("roller") ||
    n.includes("mask") ||
    n.includes("light") ||
    n.includes("therapy") ||
    n.includes("device") ||
    n.includes("tool") ||
    n.includes("acupressure") ||
    n.includes("cold")
  ) return "wellness-tools";

  return "general";
}

export async function getProducts(): Promise<Product[]> {
  const { data: prices } = await stripe.prices.list({
    active: true,
    expand: ["data.product"],
    limit: 100,
  });

  const products: Product[] = prices
    .filter((price) => {
      const product = price.product as Stripe.Product;
      return (
        typeof product === "object" &&
        product.active &&
        !product.deleted
      );
    })
    .map((price) => {
      const product = price.product as Stripe.Product;
      return {
        id: product.id,
        priceId: price.id,
        name: product.name,
        description: product.description ?? "",
        displayPrice: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: price.currency.toUpperCase(),
        }).format((price.unit_amount ?? 0) / 100),
        price: price.unit_amount ?? 0,
        category: inferCategory(product.name, product.metadata ?? {}),
        imageUrl: product.images?.[0],
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Fetch directly by product ID for efficiency on detail pages
  try {
    const product = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });

    if (!product.active || product.deleted) return undefined;

    const price = product.default_price as Stripe.Price | null;
    if (!price) return undefined;

    return {
      id: product.id,
      priceId: price.id,
      name: product.name,
      description: product.description ?? "",
      displayPrice: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: price.currency?.toUpperCase() ?? "USD",
      }).format((price.unit_amount ?? 0) / 100),
      price: price.unit_amount ?? 0,
      category: inferCategory(product.name, product.metadata ?? {}),
      imageUrl: product.images?.[0],
    };
  } catch {
    return undefined;
  }
}