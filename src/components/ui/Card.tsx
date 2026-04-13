import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-border bg-background p-6 transition-all duration-300 hover:border-stone-400 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}
