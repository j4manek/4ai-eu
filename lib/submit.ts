// GitHub Pages is a static export — there is no server to run /api/contact,
// so that build routes submissions through FormSubmit.co instead (set via
// NEXT_PUBLIC_CONTACT_FORM_EMAIL). Any other deploy (Vercel, `next start`)
// keeps using the local Resend-backed API route.
export async function submitForm(payload: Record<string, unknown>) {
  const formsubmitEmail = process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL;
  const endpoint =
    process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" && formsubmitEmail
      ? `https://formsubmit.co/ajax/${formsubmitEmail}`
      : "/api/contact";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("request failed");
}
