"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/dictionaries";

function setLocaleCookie(next: Locale) {
  document.cookie = `locale=${next}; path=/; max-age=31536000`;
}

export function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    setLocaleCookie(next);
    const rest = pathname.replace(/^\/(cs|en)/, "");
    router.push(`/${next}${rest}`);
  }

  return (
    <div className="flex items-center rounded-full border border-line p-0.5 font-mono text-[11px] tracking-wider">
      {(["cs", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            l === locale ? "bg-ink text-bg" : "text-ink-dim hover:text-ink"
          }`}
          aria-current={l === locale}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
