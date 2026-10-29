import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function deliver(subject: string, replyTo: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.log("[contact] no email provider configured — submission logged only:", { subject, replyTo, text });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "4manek AI <onboarding@resend.dev>",
      to,
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] resend delivery failed:", await res.text());
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const invalid = () => NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });

  if (body && body.topic === "course-waitlist") {
    if (typeof body.email !== "string" || !EMAIL_RE.test(body.email)) return invalid();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    return deliver(
      "Nový zájemce o digitální kurz",
      body.email,
      `Seznam zájemců o kurz\nJméno: ${name || "(neuvedeno)"}\nEmail: ${body.email}`
    );
  }

  if (
    !body ||
    typeof body.company !== "string" ||
    typeof body.email !== "string" ||
    typeof body.phone !== "string" ||
    typeof body.revenue !== "string" ||
    typeof body.message !== "string" ||
    !body.company.trim() ||
    !body.phone.trim() ||
    !body.revenue.trim() ||
    !body.message.trim() ||
    !EMAIL_RE.test(body.email)
  ) {
    return invalid();
  }

  const { company, email, phone, revenue, message } = body as {
    company: string;
    revenue: string;
    email: string;
    phone: string;
    message: string;
  };
  const kind = body.topic === "training" ? " (školení)" : "";

  return deliver(
    `Nová poptávka${kind} od ${company}`,
    email,
    `Firma: ${company}\nEmail: ${email}\nTelefon: ${phone}\nObrat: ${revenue}\n\n${message}`
  );
}
