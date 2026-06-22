import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-36 pb-24 bg-cream-light">
      <div className="container-narrow px-6 md:px-12 max-w-3xl">
        <h1 className="font-display text-4xl text-deep-green mb-8">
          Privacy Policy
        </h1>
        <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
          This page is currently being finalized. Train Your Brain Wellness is
          committed to protecting your privacy and handling your personal and
          health information responsibly and in compliance with applicable
          law, including HIPAA where relevant.
        </p>
        <p className="font-body text-warm-brown text-base leading-relaxed">
          For questions about how your information is handled, please contact
          our office directly.
        </p>
      </div>
    </section>
  );
}