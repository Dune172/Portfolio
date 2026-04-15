// Real Colibri Group logo tinted to stone-500 via the #logo-tint SVG filter
// defined in the root layout.
export function ColibriLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/Colibri.png"
      alt=""
      aria-hidden="true"
      className="block h-full w-auto"
      style={{ filter: "url(#logo-tint)" }}
    />
  );
}
