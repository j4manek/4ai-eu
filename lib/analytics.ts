"use client";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

/**
 * GA4 event — shows up in GA4 immediately, no extra setup needed.
 * Mark it as a "key event" in GA4 admin to use it as a Google Ads conversion.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

/**
 * Fires a dedicated Google Ads conversion, only if NEXT_PUBLIC_ADS_CONVERSION_ID
 * is configured (format "AW-XXXXXXXXX/YourConversionLabel"). Use this instead of
 * (or alongside) trackEvent when Ads isn't linked to GA4 as the conversion source.
 */
export function trackAdsConversion(params: Record<string, unknown> = {}) {
  const sendTo = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
  if (!sendTo || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: sendTo, ...params });
}
