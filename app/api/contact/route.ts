import { NextRequest, NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 500;
const SPRUCE_BASE = "https://api.sprucehealth.com";

function spruceHeaders(token: string) {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // ── Validation ────────────────────────────────────────────
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
        { status: 400 }
      );
    }

    // ── Env vars ──────────────────────────────────────────────
    const token = process.env.SPRUCE_API_TOKEN;
    const endpointId = process.env.SPRUCE_INTERNAL_ENDPOINT_ID;

    if (!token || !endpointId) {
      console.error("Missing SPRUCE_API_TOKEN or SPRUCE_INTERNAL_ENDPOINT_ID");
      return NextResponse.json(
        { error: "Server configuration is incomplete. Please call the office directly at (440) 472-1237." },
        { status: 500 }
      );
    }

    // ── Step 1: Duplicate contact check ──────────────────────
    // Normalize to E.164 (+1XXXXXXXXXX) for the search since Spruce stores numbers that way
    const digits = phone.trim().replace(/\D/g, "");
    const e164Phone = digits.length === 10 ? `+1${digits}` : `+${digits}`;

    const searchRes = await fetch(`${SPRUCE_BASE}/v1/contacts/search`, {
      method: "POST",
      headers: spruceHeaders(token),
      body: JSON.stringify({ freeText: e164Phone, pageSize: 5 }),
    });

    if (!searchRes.ok) {
      console.error("Spruce search error:", searchRes.status, await searchRes.text());
      return NextResponse.json(
        { error: "Something went wrong. Please try again or call us at (440) 472-1237." },
        { status: 500 }
      );
    }

    const searchData = await searchRes.json();
    const existingContacts: Array<{ phoneNumbers?: Array<{ value?: string }> }> =
      searchData.contacts ?? searchData.data ?? [];

    console.log("Spruce search raw:", JSON.stringify(searchData));

    const normalizePhone = (p: string) => p.replace(/\D/g, "").slice(-10);
    const isDuplicate = existingContacts.some((c) =>
      c.phoneNumbers?.some(
        (p) => normalizePhone(p.value ?? "") === normalizePhone(phone.trim())
      )
    );

    console.log("isDuplicate:", isDuplicate, "| contacts found:", existingContacts.length);

    if (isDuplicate) {
      return NextResponse.json(
        {
          error:
            "We already have an inquiry on file from this phone number. Amber will be in touch — if it's urgent, please call (440) 472-1237.",
        },
        { status: 409 }
      );
    }

    // ── Step 2: Create contact ────────────────────────────────
    const contactBody: Record<string, unknown> = {
      category: "patient",
      givenName: firstName.trim(),
      familyName: lastName.trim(),
      emailAddresses: [{ value: email.trim() }],
    };

    if (phone?.trim()) {
      contactBody.phoneNumbers = [{ value: phone.trim() }];
    }

    const createRes = await fetch(`${SPRUCE_BASE}/v1/contacts`, {
      method: "POST",
      headers: spruceHeaders(token),
      body: JSON.stringify(contactBody),
    });

    if (!createRes.ok) {
      console.error("Spruce create contact error:", createRes.status, await createRes.text());
      return NextResponse.json(
        { error: "Something went wrong. Please try again or call us at (440) 472-1237." },
        { status: 500 }
      );
    }

    const createdContact = await createRes.json();
    const contactId: string | undefined = createdContact?.id;

    // ── Step 3: Create internal note with the patient's message ──
    if (contactId) {
      const noteText = `New inquiry from ${firstName.trim()} ${lastName.trim()}\nEmail: ${email.trim()}${phone?.trim() ? `\nPhone: ${phone.trim()}` : ""}\n\nMessage:\n${message.trim()}`;

      const noteRes = await fetch(`${SPRUCE_BASE}/v1/conversations`, {
        method: "POST",
        headers: spruceHeaders(token),
        body: JSON.stringify({
          type: "note",
          note: {
            title: `New inquiry — ${firstName.trim()} ${lastName.trim()}`,
            associatedContactIds: [contactId],
            message: {
              body: [{ type: "text", value: noteText }],
            },
          },
        }),
      });

      if (!noteRes.ok) {
        console.error("Spruce create note error:", noteRes.status, await noteRes.text());
      }
    }

    // ── Step 4: Send SMS confirmation ────────────────────────
    const messageBody = `Hi ${firstName.trim()}, thank you for contacting Train Your Brain Wellness. Amber Bucks, PMHNP-BC, will review your inquiry and follow up with you as soon as possible. If your situation is urgent, please call the office at (440) 472-1237 or dial 988 for the Suicide & Crisis Lifeline.`;

    const msgRes = await fetch(
      `${SPRUCE_BASE}/v1/internalendpoints/${endpointId}/conversations`,
      {
        method: "POST",
        headers: spruceHeaders(token),
        body: JSON.stringify({
          destination: {
            smsOrEmailEndpoint: phone.trim(),
          },
          message: {
            body: [{ type: "text", value: messageBody }],
          },
        }),
      }
    );

    if (!msgRes.ok) {
      console.error("Spruce send message error:", msgRes.status, await msgRes.text());
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us at (440) 472-1237." },
      { status: 500 }
    );
  }
}
