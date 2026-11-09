import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-center justify-between border-b border-hairline pb-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight">
          <span className="font-mono text-sm sm:text-base text-emerald mr-2">
            {experience.sectionLabel}
          </span>
          {experience.sectionTitle}
        </h2>
        <span className="font-mono text-xs text-muted uppercase tracking-wider font-medium">
          {experience.metaLabel}
        </span>
      </div>

      <div className="bg-cardbg border border-hairline p-6 sm:p-8 rounded-[2px]">
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-36 before:w-[1px] before:bg-hairline">
          {experience.items.map((item) => (
            <div
              key={`${item.dateRange}-${item.title}`}
              className="relative flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0"
            >
              <div className="sm:w-36 flex-shrink-0 font-mono text-xs text-muted pl-8 sm:pl-0 pt-0.5">
                {item.dateRange}
              </div>
              <div
                className={`absolute left-1.5 sm:left-[139px] top-1.5 w-3 h-3 bg-white border-2 rounded-full ${
                  item.active ? "border-emerald" : "border-slate-400"
                }`}
              />
              <div className="pl-8 sm:pl-8 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-lg text-ink font-medium">
                    {item.title}
                  </h3>
                  <span
                    className={`font-mono text-[11px] px-2 py-0.5 border ${
                      item.badgeVariant === "accent"
                        ? "bg-emerald/10 text-emerald border-emerald/30 font-semibold"
                        : "bg-stonebg border-hairline text-ink"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-body leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
