"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_MESSAGE_LENGTH = 500;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      setError(`Your message is too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.`);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setSuccess(true);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    const d = phone.replace(/\D/g, "").slice(-10);
    const formattedPhone = d.length === 10 ? `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}` : phone;

    return (
      <div className="bg-cream rounded-2xl p-10 text-center border border-sage-green/20">
        <CheckCircle2 className="w-10 h-10 text-forest-green mx-auto mb-4" />
        <h3 className="font-display text-2xl text-deep-green mb-2">
          Message Sent
        </h3>
        <p className="font-body text-warm-brown text-sm leading-relaxed max-w-md mx-auto">
          Thank you for reaching out. Amber personally reviews every message
          and will follow up with you as soon as possible. You will receive a
          confirmation text at the number you provided ({formattedPhone}).
        </p>
      </div>
    );
  }

  const remaining = MAX_MESSAGE_LENGTH - message.length;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream rounded-2xl p-8 border border-sage-green/20 flex flex-col gap-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block font-body text-sm text-deep-green mb-2">
            First Name <span className="text-warm-brown-light">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-sage-green/30 bg-cream-light font-body text-sm text-deep-green focus:outline-none focus:ring-2 focus:ring-forest-green/40"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-body text-sm text-deep-green mb-2">
            Last Name <span className="text-warm-brown-light">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-sage-green/30 bg-cream-light font-body text-sm text-deep-green focus:outline-none focus:ring-2 focus:ring-forest-green/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-body text-sm text-deep-green mb-2">
          Email <span className="text-warm-brown-light">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-sage-green/30 bg-cream-light font-body text-sm text-deep-green focus:outline-none focus:ring-2 focus:ring-forest-green/40"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-body text-sm text-deep-green mb-2">
          Phone <span className="text-warm-brown-light">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-sage-green/30 bg-cream-light font-body text-sm text-deep-green focus:outline-none focus:ring-2 focus:ring-forest-green/40"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="message" className="block font-body text-sm text-deep-green">
            Message <span className="text-warm-brown-light">*</span>
          </label>
          <span
            className={cn(
              "font-body text-xs",
              remaining < 0 ? "text-red-600" : "text-warm-brown-light"
            )}
          >
            {remaining} characters left
          </span>
        </div>
        <textarea
          id="message"
          required
          rows={5}
          maxLength={MAX_MESSAGE_LENGTH}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share a little about what's bringing you here. There's no need to go into detail — just enough for Amber to understand how she can help."
          className="w-full px-4 py-3 rounded-lg border border-sage-green/30 bg-cream-light font-body text-sm text-deep-green resize-none focus:outline-none focus:ring-2 focus:ring-forest-green/40"
        />
      </div>

      {error && (
        <p className="font-body text-sm text-red-600 -mt-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-deep-green text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200 mt-2",
          submitting && "opacity-60 cursor-not-allowed"
        )}
      >
        {submitting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {submitting ? "Sending..." : "Send Message"}
      </button>

      <p className="font-body text-xs text-warm-brown-light text-center leading-relaxed">
        This form is for general inquiries only and is not monitored 24/7. If
        you are experiencing a mental health emergency, please call 911 or
        the 988 Suicide & Crisis Lifeline.
      </p>
    </form>
  );
}