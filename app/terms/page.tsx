import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <section className="pt-36 pb-24 bg-cream-light">
      <div className="container-narrow px-6 md:px-12 max-w-3xl">
        <h1 className="font-display text-4xl text-deep-green mb-8">
          Terms of Use
        </h1>
        <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
          This page is currently being finalized. By using this website, you
          agree to use it for informational and scheduling purposes only. This
          site does not provide medical advice, and nothing on it should be
          considered a substitute for professional psychiatric or medical
          care.
        </p>
        <p className="font-body text-warm-brown text-base leading-relaxed">
          For questions about these terms, please contact our office directly.
        </p>
      </div>
    </section>
  );
}