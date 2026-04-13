import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-cobalt/20 bg-cobalt-light px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cobalt",
        className
      )}
    >
      {children}
    </span>
  );
}
