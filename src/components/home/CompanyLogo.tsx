import { cn } from "@/lib/utils";

type CompanyLogoProps = {
  name: string;
  children: React.ReactNode;
  className?: string;
  /** Height utility class for the logo slot. Defaults to `h-[62px]`. */
  heightClass?: string;
};

// Renders a logo tinted to the parent's text color, with a pill tooltip
// that fades in below the logo on hover or keyboard focus.
// Accessibility: the wrapper carries role="img" + aria-label={name}, so
// screen readers announce the company; the tooltip is purely visual.
export function CompanyLogo({
  name,
  children,
  className,
  heightClass = "h-[62px]",
}: CompanyLogoProps) {
  return (
    <div
      role="img"
      aria-label={name}
      tabIndex={0}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-sm outline-none",
        className
      )}
    >
      {/*
        Logos are raster images tinted via the #logo-tint SVG filter (defined in
        the root layout) — so hover is cued by the tooltip plus a subtle opacity
        lift rather than a color swap, which a filter can't react to.
      */}
      <div className={cn("flex items-center opacity-90 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100", heightClass)}>
        {children}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full bg-stone-900 px-2.5 py-1 text-xs tracking-wide text-stone-100 opacity-0 shadow-md transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
      >
        {name}
      </span>
    </div>
  );
}
