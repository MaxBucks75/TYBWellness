"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Psychotherapy", href: "/services/psychotherapy" },
      { label: "Medication Management", href: "/services/med-management" },
      { label: "eTMS Sessions", href: "/services/etms" },
    ],
  },
  { label: "Getting Started", href: "/getting-started" },
  { label: "Wellness Shop", href: "/store" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-deep-green/95 backdrop-blur-sm shadow-md"
          : "bg-deep-green"
      )}
    >
      <div className="container-wide px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
              <Brain className="w-5 h-5 text-deep-green" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-cream text-lg font-semibold tracking-wide">
                Train Your Brain
              </p>
              <p className="font-body text-sage-green text-xs tracking-widest uppercase">
                Wellness
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "px-4 py-2 font-body text-sm text-cream/80 hover:text-cream transition-colors rounded-md",
                      pathname.startsWith("/services") && "text-cream"
                    )}
                  >
                    {link.label}
                  </button>
                  {/* Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-2 transition-all duration-200",
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                  >
                    <div className="bg-cream rounded-lg shadow-xl overflow-hidden min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 font-body text-sm text-deep-green hover:bg-sage-green/20 hover:text-forest-green transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 font-body text-sm text-cream/80 hover:text-cream transition-colors rounded-md",
                    pathname === link.href && "text-cream"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side: auth + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="font-body text-sm text-cream/70 hover:text-cream transition-colors px-3 py-2">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/account"
                className="font-body text-sm text-cream/70 hover:text-cream transition-colors px-3 py-2"
              >
                My Account
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage-green hover:bg-forest-green text-deep-green hover:text-cream font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-deep-green border-t border-sage-green/20 overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <p className="px-3 py-2 font-body text-sm text-sage-green uppercase tracking-wider">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block pl-6 pr-3 py-2 font-body text-sm text-cream/80 hover:text-cream"
                    >
                      {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block px-3 py-2 font-body text-sm text-cream/80 hover:text-cream"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-sage-green/20 flex flex-col gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-left px-3 py-2 font-body text-sm text-cream/70">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/account" className="px-3 py-2 font-body text-sm text-cream/70">
                My Account
              </Link>
            </SignedIn>
            <a
              href={process.env.NEXT_PUBLIC_SIMPLE_PRACTICE_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-sage-green text-deep-green font-body text-sm font-medium px-5 py-3 rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
