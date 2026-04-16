// Summit Percussion Scholarship logo — inline SVG icon (stacked mountain
// peaks) tinted to stone-500 to match the other logos in the strip. No
// wordmark; the section caption already names the project.
export function SummitPercussionLogo() {
  return (
    <svg
      viewBox="0 0 96 62"
      aria-hidden="true"
      className="block h-full w-auto text-stone-500"
    >
      <g fill="currentColor">
        {/* Back peak (lightest) */}
        <path d="M40 50 L62 14 L84 50 Z" opacity="0.3" />
        {/* Middle peak */}
        <path d="M22 50 L44 20 L66 50 Z" opacity="0.55" />
        {/* Front peak (solid) */}
        <path d="M2 50 L24 6 L46 50 Z" />
      </g>
    </svg>
  );
}
