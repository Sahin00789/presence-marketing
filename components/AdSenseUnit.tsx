"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type AdSenseUnitProps = {
  client: string;
  slot: string;
};

/**
 * Renders a responsive AdSense unit. The loader script is added once in the
 * root layout, so this only has to request the fill on mount.
 */
export function AdSenseUnit({ client, slot }: AdSenseUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle ?? []).push({});
    } catch {
      // Ad blockers and offline previews can throw here; the page must not care.
    }
  }, []);

  return (
    <ins
      className="adsbygoogle ad-unit"
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
