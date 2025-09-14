// lib/gtag.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// common wrapper for GA4 events
type EventParams = {
  action: string;          // e.g. "click"
  category?: string;       // e.g. "CTA"
  label?: string;          // e.g. "Visit Us"
  value?: number;
};

export const gtagEvent = ({ action, category, label, value }: EventParams) => {
  if (typeof window === "undefined") return;
  // @ts-expect-error -- window.gtag added by GA4 script
  if (typeof window.gtag === "function") {
    // GA4: event name + params
    // keep consistent param names: event_category, event_label
    // @ts-expect-error -- window.gtag added by GA4 script
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } else {
    // for local debugging
    console.log("gtag not ready — event:", action, category, label, value);
  }
};
