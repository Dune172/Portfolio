"use client";

import { useState, useEffect } from "react";

export function Headshot() {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth > 0) {
        setStatus("loaded");
      } else {
        setStatus("failed");
      }
    };
    img.onerror = () => setStatus("failed");
    img.src = "/headshot.jpg";
  }, []);

  return (
    <div className="relative mx-auto mb-8 h-48 w-48 overflow-hidden border border-stone-700 bg-charcoal-light">
      {status === "loaded" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/headshot.jpg"
          alt="Andrew Swan"
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <span
          className="flex h-full w-full items-center justify-center text-5xl font-semibold text-stone-600"
          style={{ fontFamily: "var(--font-heading)" }}
          aria-hidden="true"
        >
          AS
        </span>
      )}
    </div>
  );
}
