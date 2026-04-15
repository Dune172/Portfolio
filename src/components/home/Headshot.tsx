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
    img.src = "/headshot-transparent.png";
  }, []);

  if (status === "loaded") {
    return (
      <div className="absolute inset-0">
        {/* Ambient warm radial — subject reads as lit within the scene, not placed on top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] h-[85%] w-[105%] -translate-x-1/2 -translate-y-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(82,77,72,0.42), rgba(196,83,46,0.08) 45%, transparent 72%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/headshot-transparent.png"
          alt="Andrew Swan"
          draggable={false}
          // .headshot-desktop-shift (see globals.css) shifts the image left on
          // desktop so the subject sits centered over the "Courses Made Accessible"
          // block. On mobile the portrait is centered in a single-column layout,
          // so the shift is skipped via a min-width media query.
          className="headshot-desktop-shift relative h-full w-full select-none object-contain object-bottom"
          style={{
            filter: "saturate(0.85) contrast(1.02) brightness(0.94)",
            maskImage:
              "linear-gradient(to bottom, black 68%, rgba(0,0,0,0.6) 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 68%, rgba(0,0,0,0.6) 88%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="text-[5.5rem] font-semibold leading-none text-stone-600"
        style={{ fontFamily: "var(--font-heading)" }}
        aria-hidden="true"
      >
        AS
      </span>
    </div>
  );
}
