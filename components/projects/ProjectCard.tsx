"use client";

import { useUi } from "@/components/providers/UiProvider";
import { TelemetryTabs } from "@/components/projects/TelemetryTabs";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { openProject } = useUi();

  return (
    <article className="border border-hairline bg-cardbg rounded-[2px] overflow-hidden hover:border-emerald/50 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-hairline">
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-emerald bg-emerald/10 px-2.5 py-0.5 border border-emerald/20 font-medium">
              {project.code}
            </span>
            <span className="font-mono text-xs text-muted">
              ● {project.category}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium">
            {project.title}
          </h3>

          <p className="text-sm text-body leading-relaxed font-sans">
            {project.summary}
          </p>

          <div className="space-y-2">
            <h4 className="font-mono text-xs text-muted uppercase font-medium">
              {project.highlightsTitle}
            </h4>
            <ul className="text-xs space-y-1.5 font-sans text-body list-disc list-inside">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-stonebg px-2.5 py-1 border border-hairline text-ink"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2 flex items-center space-x-4 font-mono text-xs">
            <button
              type="button"
              onClick={() => openProject(project.id)}
              className="border border-hairline bg-stonebg hover:bg-ink hover:text-white px-4 py-2 transition-all font-mono text-xs flex items-center space-x-1.5"
            >
              <span>{project.ctaLabel}</span>
              <span>→</span>
            </button>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-hairline bg-white hover:border-ink px-4 py-2 transition-all font-mono text-xs flex items-center space-x-1.5 text-ink"
              >
                <span>GitHub ↗</span>
              </a>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-5 bg-stonebg p-6 flex flex-col justify-between font-mono text-xs">
          {project.panel.kind === "telemetry" ? (
            <>
              <TelemetryTabs panel={project.panel} />
              <div className="pt-4 text-[10px] text-muted border-t border-hairline flex justify-between items-center mt-4">
                <span>{project.panel.footerLeft}</span>
                <span className="text-emerald font-medium">
                  {project.panel.footerRight}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div className="border-b border-hairline pb-2 font-semibold text-ink flex justify-between font-mono">
                  <span>{project.panel.header}</span>
                  {project.panel.subheader ? (
                    <span className="text-xs font-normal text-muted">
                      {project.panel.subheader}
                    </span>
                  ) : null}
                </div>

                <div className="space-y-2.5">
                  {project.panel.rows.map((row) => (
                    <div
                      key={row.label}
                      className="bg-white border border-hairline p-3 space-y-1"
                    >
                      <span className="text-[10px] text-muted block uppercase">
                        {row.label}
                      </span>
                      <span
                        className={`text-xs ${
                          row.accent
                            ? "text-emerald font-bold"
                            : "text-ink font-medium"
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-[10px] text-muted border-t border-hairline flex justify-between items-center mt-4">
                <span>{project.panel.footerLeft}</span>
                <span className="text-emerald font-medium">
                  {project.panel.footerRight}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
