"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span
            className="text-base font-semibold tracking-tight text-ink"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Andrew Swan
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400 lg:inline">
            Learning Architect
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-2.5 py-1.5 text-[12px] font-medium uppercase tracking-wide transition-colors",
                  isActive
                    ? "text-cobalt"
                    : "text-stone-500 hover:text-ink"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-cobalt transition-transform duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
          <a
            href="/andrew-swan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 border border-cobalt/30 px-3 py-1.5 text-[12px] font-medium uppercase tracking-wide text-cobalt transition-colors hover:bg-cobalt hover:text-white"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-[18px] w-[18px] text-ink"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Subtle bottom line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="animate-menu-down border-b border-border bg-background px-6 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                pathname === item.href ? "text-cobalt" : "text-stone-500"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/andrew-swan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-sm font-medium uppercase tracking-wide text-cobalt"
            onClick={() => setMobileOpen(false)}
          >
            Resume (PDF)
          </a>
        </nav>
      )}
    </header>
  );
}
