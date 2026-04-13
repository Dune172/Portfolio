import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  wide,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <div className={cn("mx-auto px-6", wide ? "max-w-6xl" : "max-w-5xl")}>
        {children}
      </div>
    </section>
  );
}
