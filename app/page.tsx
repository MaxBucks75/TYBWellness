import Link from "next/link";
import { ArrowRight, Heart, Brain, Zap, ShieldCheck, Star } from "lucide-react";


// List of services
const services = [
  {
    icon: Heart,
    title: "Psychotherapy",
    description:
      "A compassionate space to explore your inner world. Whether you're navigating grief, anxiety, trauma, or life transitions — talk therapy offers a foundation for lasting change.",
    href: "/services/psychotherapy",
    cta: "Learn More",
  },
  {
    icon: Brain,
    title: "Medication Management",
    description:
      "Thoughtful, evidence-based psychiatric medication support tailored to your biology, history, and goals. We work together to find what genuinely helps.",
    href: "/services/med-management",
    cta: "Learn More",
  },
  {
    icon: Zap,
    title: "eTMS Sessions",
    description:
      "Transcranial Magnetic Stimulation — a non-invasive, FDA-cleared treatment for depression that stimulates targeted areas of the brain without medication.",
    href: "/services/etms",
    cta: "Learn More",
  },
];


// List of core values
const values = [
  {
    label: "Safety First",
    text: "Every interaction begins with establishing a space where you feel safe to be honest.",
  },
  {
    label: "Whole-Person Care",
    text: "We treat the full person — mind, body, and the life circumstances that shape both.",
  },
  {
    label: "No Judgment",
    text: "Whatever you've been through or are going through, you will not be judged here.",
  },
  {
    label: "Evidence-Based",
    text: "Treatments grounded in research and continuously refined to match what actually works.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-deep-green overflow-hidden pt-20">
        {/* Organic background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, #8fa882 0%, transparent 60%),
                              radial-gradient(ellipse at 80% 20%, #ebdec4 0%, transparent 50%)`,
          }}
        />
        <div className="container-wide px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <p className="font-body text-sage-green text-sm uppercase tracking-widest mb-6">
              Dr. Amber Bucks, Psychiatrist
            </p>
            <h1 className="font-display text-cream leading-[1.1]">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light">
                From survival
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light italic text-sage-green mt-1">
                to healing.
              </span>
            </h1>
            <p className="font-body text-cream/70 text-lg md:text-xl mt-8 max-w-xl leading-relaxed">
              Where your mental health is my priority. Compassionate psychiatric
              care that meets you exactly where you are — and walks with you
              toward where you want to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sage-green hover:bg-cream text-deep-green font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                Book Your First Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/getting-started"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 hover:border-cream text-cream font-body text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                New Here? Start Here
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative organic shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] opacity-5">
          <div className="w-full h-full rounded-full bg-cream" />
        </div>
      </section>

      {/* ── ABOUT / INTRO ────────────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-sage-green/20 rounded-2xl flex items-center justify-center order-2 md:order-1">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-sage-green/30 mx-auto mb-3 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-forest-green" />
                </div>
                <p className="font-body text-sm text-warm-brown-light">
                  Photo of Dr. Bucks
                </p>
              </div>
            </div>
            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
                Meet Your Psychiatrist
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-deep-green leading-tight mb-6">
                Dr. Amber Bucks
              </h2>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-5">
                My path into psychiatry was shaped by a personal understanding
                of what it means to struggle — and to find your way through. I
                believe deeply that healing is possible for everyone, and that
                the therapeutic relationship is its own form of medicine.
              </p>
              <p className="font-body text-warm-brown text-base leading-relaxed mb-8">
                At Train Your Brain Wellness, I blend evidence-based psychiatric
                treatment with a whole-person approach. We explore not just
                symptoms, but the story behind them — because lasting change
                requires understanding the whole picture.
              </p>
              <Link
                href="/getting-started"
                className="inline-flex items-center gap-2 text-forest-green font-body font-medium hover:gap-3 transition-all"
              >
                Learn how to get started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-deep-green">
              Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-cream-light rounded-2xl p-8 flex flex-col group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-green/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-forest-green" />
                  </div>
                  <h3 className="font-display text-2xl text-deep-green mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-warm-brown leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-forest-green font-body text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    {service.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ───────────────────────────────────── */}
      <section className="section-padding bg-deep-green">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-3">
              The Foundation
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              How We Practice
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.label}
                className="border border-sage-green/20 rounded-2xl p-8 hover:border-sage-green/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-sage-green flex-shrink-0" />
                  <h4 className="font-display text-xl text-cream">{v.label}</h4>
                </div>
                <p className="font-body text-sm text-cream/60 leading-relaxed pl-8">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / QUOTE BAND ─────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="container-narrow text-center">
          <Star className="w-6 h-6 text-sage-green mx-auto mb-6" />
          <blockquote className="font-display italic text-3xl md:text-4xl text-deep-green leading-relaxed max-w-2xl mx-auto">
            &ldquo;The right support doesn&rsquo;t just help you cope — it helps
            you grow into who you were meant to be.&rdquo;
          </blockquote>
          <p className="font-body text-sm text-warm-brown-light mt-6">
            — Dr. Amber Bucks
          </p>
        </div>
      </section>

      {/* ── WELLNESS SHOP PREVIEW ────────────────────────── */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-2">
                Curated for Your Journey
              </p>
              <h2 className="font-display text-4xl text-deep-green">
                Wellness Shop
              </h2>
            </div>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 text-forest-green font-body text-sm font-medium hover:gap-3 transition-all"
            >
              Browse All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {/* Teaser grid — just 3 items */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Mood Balancing Formula", price: "$42.00", category: "Supplement" },
              { name: "Acupressure Mat Set", price: "$75.00", category: "Wellness Tool" },
              { name: "Serene Lavender Oil", price: "$25.00", category: "Essential Oil" },
            ].map((item) => (
              <Link key={item.name} href="/store" className="group">
                <div className="aspect-square bg-sage-green/10 rounded-xl mb-4 flex items-center justify-center group-hover:bg-sage-green/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-forest-green" />
                  </div>
                </div>
                <p className="font-body text-xs text-warm-brown-light uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <p className="font-display text-lg text-deep-green group-hover:text-forest-green transition-colors">
                  {item.name}
                </p>
                <p className="font-body text-sm text-warm-brown mt-1">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="section-padding bg-forest-green">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-5">
            Ready to take the first step?
          </h2>
          <p className="font-body text-cream/70 text-lg max-w-xl mx-auto mb-10">
            Reaching out is the hardest part. We make everything after that as
            gentle as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cream hover:bg-cream-light text-deep-green font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center gap-2 border border-cream/40 hover:border-cream text-cream font-body px-8 py-4 rounded-full transition-all duration-200"
            >
              I&rsquo;m not sure where to start
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}