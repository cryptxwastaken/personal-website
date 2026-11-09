"use client";

import { useEffect } from "react";
import { useUi } from "@/components/providers/UiProvider";
import { projects, type ModalSection } from "@/content/projects";

function ModalSections({ sections }: { sections: ModalSection[] }) {
  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        if (section.kind === "callout") {
          return (
            <div
              key={index}
              className="p-3.5 bg-stonebg border border-hairline font-mono text-xs"
            >
              <span className="font-bold text-ink">{section.title}</span>
              <p className="mt-1 text-body">{section.body}</p>
            </div>
          );
        }

        if (section.kind === "list") {
          return (
            <div key={index} className="space-y-2">
              <h4 className="font-mono text-xs font-semibold text-ink uppercase">
                {section.title}
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-body font-sans">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="p-3 bg-white border border-hairline font-mono text-xs"
          >
            <span className="text-emerald font-semibold">{section.label}</span>{" "}
            {section.text}
          </div>
        );
      })}
    </div>
  );
}

export function ProjectModal() {
  const { openProjectId, closeProject } = useUi();
  const project = projects.find((item) => item.id === openProjectId);

  useEffect(() => {
    if (!openProjectId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProject();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openProjectId, closeProject]);

  if (!project) return null;

  const { modal } = project;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeProject();
      }}
    >
      <div className="bg-cardbg border border-hairline w-full max-w-2xl rounded-[2px] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-4 bg-stonebg border-b border-hairline flex items-center justify-between font-mono text-xs">
          <span className="text-emerald font-semibold">[ {modal.tag} ]</span>
          <button
            type="button"
            onClick={closeProject}
            className="text-muted hover:text-ink font-mono px-2 py-1 border border-hairline bg-white hover:bg-ink hover:text-white transition-all text-[11px]"
          >
            ✕ CLOSE (ESC)
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <h3 className="font-serif text-2xl text-ink font-normal">
            {modal.title}
          </h3>

          <div className="font-mono text-xs text-muted flex flex-wrap items-center gap-3 border-b border-hairline pb-3">
            {modal.meta.map((item) => (
              <span
                key={item}
                className="bg-stonebg border border-hairline px-2 py-0.5 text-ink"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="font-sans text-body text-sm leading-relaxed space-y-3">
            <ModalSections sections={modal.sections} />
          </div>
        </div>

        <div className="p-3 bg-stonebg border-t border-hairline text-right font-mono text-[11px] text-muted">
          <span>PRESS ESCAPE OR CLICK CLOSE TO EXIT</span>
        </div>
      </div>
    </div>
  );
}
