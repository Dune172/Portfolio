export function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-l-2 border-terra pl-5 py-2">
      <p
        className="text-3xl font-semibold text-terra"
        style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
      >
        {value}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
