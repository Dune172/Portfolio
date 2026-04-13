export function TagforceDiagram() {
  return (
    <figure className="my-10">
      <div className="border border-border bg-surface p-6 sm:p-8 overflow-x-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt mb-6">
          Workflow Transformation
        </p>
        <div className="grid gap-6 sm:grid-cols-[1fr,auto,1fr] items-center min-w-[500px]">
          {/* Before */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-terra mb-3">Before TAGFORCE</p>
            {["Template setup", "Content assembly", "Format checks", "QA review", "Publishing"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-stone-300 text-[10px] font-semibold text-stone-500">{i + 1}</span>
                <span className="text-sm text-ink-light">{step}</span>
                <span className="ml-auto text-[10px] text-terra font-medium">Manual</span>
              </div>
            ))}
            <div className="mt-3 border-t border-border pt-2">
              <span className="text-sm font-semibold text-terra">~40 hours / course</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex flex-col items-center gap-1">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-cobalt">
              <path d="M0 12h40m0 0l-8-8m8 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-cobalt">TAGFORCE</span>
          </div>

          {/* After */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-cobalt mb-3">After TAGFORCE</p>
            {[
              { step: "Template setup", auto: true },
              { step: "Content assembly", auto: true },
              { step: "Format checks", auto: true },
              { step: "QA review", auto: false },
              { step: "Publishing", auto: true },
            ].map(({ step, auto }, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center text-[10px] font-semibold ${auto ? "bg-cobalt text-white" : "border border-stone-300 text-stone-500"}`}>{i + 1}</span>
                <span className="text-sm text-ink-light">{step}</span>
                <span className={`ml-auto text-[10px] font-medium ${auto ? "text-cobalt" : "text-stone-500"}`}>{auto ? "Automated" : "Human"}</span>
              </div>
            ))}
            <div className="mt-3 border-t border-border pt-2">
              <span className="text-sm font-semibold text-cobalt">~16 hours / course</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted text-center">
        TAGFORCE automates 4 of 5 pipeline stages, preserving human judgment for QA review.
      </figcaption>
    </figure>
  );
}

export function LlmCopilotsDiagram() {
  return (
    <figure className="my-10">
      <div className="border border-border bg-surface p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt mb-6">
          Team-Specific AI Integration Map
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { team: "Design", tasks: ["Content drafting", "Template adaptation", "Style consistency"], gain: "45%" },
            { team: "QA", tasks: ["First-pass review", "Standards checking", "Regression detection"], gain: "60%" },
            { team: "Data", tasks: ["Query generation", "Report building", "Trend analysis"], gain: "30%" },
          ].map(({ team, tasks, gain }) => (
            <div key={team} className="border border-border bg-background p-5">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-ink">{team} Team</p>
                <span className="text-lg font-semibold text-terra" style={{ fontFamily: "var(--font-heading)" }}>{gain}</span>
              </div>
              <div className="mt-3 space-y-1.5">
                {tasks.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-ink-light">
                    <span className="h-px w-2 bg-cobalt" aria-hidden="true" />
                    {t}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="h-1 flex-1 bg-cobalt/20 overflow-hidden">
                  <div className="h-full bg-cobalt" style={{ width: gain }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted text-center">
        Each team received tailored copilot integrations mapped to their specific workflows.
      </figcaption>
    </figure>
  );
}

export function WcagDiagram() {
  return (
    <figure className="my-10">
      <div className="border border-border bg-surface p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt mb-6">
          Three-Layer Accessibility Architecture
        </p>
        <div className="space-y-3">
          {[
            { layer: "01", title: "Standards Framework", desc: "WCAG AAA criteria translated into content-specific development guidelines", color: "bg-cobalt" },
            { layer: "02", title: "Automated Tooling", desc: "Pipeline-integrated checks catching violations before human review", color: "bg-terra" },
            { layer: "03", title: "Team Training", desc: "Mindset shift from compliance checkbox to inclusive design culture", color: "bg-ink" },
          ].map(({ layer, title, desc, color }) => (
            <div key={layer} className="flex gap-4 items-start">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center text-[11px] font-semibold text-white ${color}`}>
                {layer}
              </div>
              <div className="flex-1 border-b border-border pb-3">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="mt-0.5 text-xs text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-cobalt">
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-muted">Layers compound: each one makes the next more effective</span>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted text-center">
        Accessibility embedded at every level — not bolted on at the end.
      </figcaption>
    </figure>
  );
}

export function LmsDiagram() {
  return (
    <figure className="my-10">
      <div className="border border-border bg-surface p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt mb-6">
          LMS Operations Overview
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { area: "User Management", items: ["Automated provisioning", "Role-based access", "Self-service onboarding"], users: "2,000+" },
            { area: "Content Delivery", items: ["Course organization", "Version control", "Completion tracking"], users: "45+ courses" },
            { area: "Reporting", items: ["Standardized dashboards", "Self-service data access", "Compliance reporting"], users: "Faculty + Admin" },
            { area: "System Health", items: ["Uptime monitoring", "Issue documentation", "Knowledge base"], users: "Zero downtime" },
          ].map(({ area, items, users }) => (
            <div key={area} className="border border-border bg-background p-4">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-ink">{area}</p>
                <span className="text-[10px] font-medium uppercase tracking-wider text-cobalt">{users}</span>
              </div>
              <div className="mt-2 space-y-1">
                {items.map((item) => (
                  <p key={item} className="text-xs text-muted flex items-center gap-1.5">
                    <span className="h-px w-2 bg-terra" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted text-center">
        Four interconnected operational areas supporting 2,000+ learners in healthcare education.
      </figcaption>
    </figure>
  );
}
