import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_MESSAGE_LENGTH = 500;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // ── Validation ──────────────────────────────────────────
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
        { status: 400 }
      );
    }

    // ── Sanity check env vars before calling Resend ─────────
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in environment");
      return NextResponse.json(
        { error: "Server email configuration is missing. Contact the site administrator." },
        { status: 500 }
      );
    }
    if (!process.env.SPRUCE_HEALTH_EMAIL) {
      console.error("Missing SPRUCE_HEALTH_EMAIL in environment");
      return NextResponse.json(
        { error: "Server email configuration is missing. Contact the site administrator." },
        { status: 500 }
      );
    }

    // ── Send via Resend into Amber's Spruce Health inbox ───
    const { data, error } = await resend.emails.send({
      // TODO: swap to a verified domain sender once set up in Resend
      // e.g. "Train Your Brain Wellness <contact@trainyourbrainwellness.com>"
      from: "Train Your Brain Wellness <onboarding@resend.dev>",
      to: [process.env.SPRUCE_HEALTH_EMAIL],
      replyTo: email,
      subject: `New website message from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone?.trim() ? phone : "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    console.log("Resend response:", { data, error });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}