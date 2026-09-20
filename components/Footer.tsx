import type { Dictionary, Locale } from "@/lib/dictionaries";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center lg:px-12">
        <div>
          <p className="font-display text-base font-semibold tracking-tight">4AI</p>
          <p className="mt-1 text-sm text-ink-faint">{dict.footer.tagline}</p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          © {new Date().getFullYear()} 4AI · {locale === "cs" ? "Jony Form" : "Jony Form"} —{" "}
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
