import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-charcoal grain overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-2xl font-semibold text-stone-100"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Andrew Swan
            </p>
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.2em] text-stone-500">
              Learning Architect
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              Bridging learning science and technology to build systems that
              make great learning possible at scale.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-stone-400 transition-colors hover:text-stone-100 underline underline-offset-4 decoration-stone-600 hover:decoration-stone-400"
              aria-label="Send email"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 transition-colors hover:text-stone-100 underline underline-offset-4 decoration-stone-600 hover:decoration-stone-400"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700" />

        <p className="mt-6 text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Andrew Swan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
