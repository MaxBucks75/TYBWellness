import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-green text-cream">
      <div className="container-wide px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Train Your Brain Wellness"
                width={220}
                height={220}
                className="shrink-0"
              />
            </Link>
            <p className="font-display italic text-cream/70 text-base leading-relaxed mt-4">
              &ldquo;From survival to healing. Where your mental health is my priority.&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-sage-green mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Getting Started", href: "/getting-started" },
                { label: "Services", href: "/services" },
                { label: "Wellness Shop", href: "/store" },
                { label: "Blog", href: "/blog" },
                { label: "Resources", href: "/resources" },
                { label: "Fees & Policies", href: "/fees-policies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-sage-green mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Comprehensive Psychiatric Care", href: "/services/psychiatric-care" },
                { label: "First Responder & Healthcare Professional Wellness", href: "/services/first-responder-wellness" },
                { label: "Advanced Treatment & Recovery", href: "/services/advanced-treatment" },
                { label: "View All Services", href: "/services" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-body text-xs uppercase tracking-widest text-sage-green mb-5 mt-8">
              Crisis Resources
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.nami.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  NAMI
                </a>
              </li>
              <li>
                <a
                  href="https://afsp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  AFSP
                </a>
              </li>
              <li>
                <a
                  href="tel:988"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  988 Suicide & Crisis Lifeline
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-sage-green mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sage-green mt-0.5 shrink-0" />
                <a
                  href="tel:+14402926231"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  (440) 292-6231
                </a>
              </li>
              <li className="flex items-start gap-3">
                {/* TODO: Replace with real email address! */}
                <Mail className="w-4 h-4 text-sage-green mt-0.5 shrink-0" />
                <a
                  href="mailto:tybwellness@outlook.com"
                  className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  tybwellness@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sage-green mt-0.5 shrink-0" />
                <span className="font-body text-sm text-cream/70">
                  3201 East Royalton Rd<br />
                  Broadview Heights, Ohio 44147
                </span>
              </li>
            </ul>
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-sage-green hover:bg-forest-green text-deep-green hover:text-cream font-body text-sm font-medium px-6 py-3 rounded-full transition-all duration-200"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sage-green/20">
        <div className="container-wide px-6 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Train Your Brain Wellness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}