"use client";

import { useState } from "react";
import type { CodeLine, Project } from "@/content/projects";

type TelemetryPanel = Extract<Project["panel"], { kind: "telemetry" }>;

function CodeSnippet({ lines }: { lines: CodeLine[] }) {
  return (
    <pre className="text-slate-800">
      <code>
        {lines.map((line, index) => {
          if (line.type === "blank") {
            return <br key={index} />;
          }

          return (
            <span key={index}>
              {line.parts.map((part, partIndex) => {
                const className =
                  part.kind === "keyword"
                    ? "syn-keyword"
                    : part.kind === "func"
                      ? "syn-func"
                      : part.kind === "str"
                        ? "syn-str"
                        : part.kind === "comment"
                          ? "syn-comment"
                          : undefined;

                return (
                  <span key={partIndex} className={className}>
                    {part.text}
                  </span>
                );
              })}
              {"\n"}
            </span>
          );
        })}
      </code>
    </pre>
  );
}

export function TelemetryTabs({ panel }: { panel: TelemetryPanel }) {
  const [tab, setTab] = useState<"metrics" | "code">("metrics");

  const activeBtn =
    "px-2 py-0.5 bg-white border border-hairline text-ink text-[11px] font-medium";
  const inactiveBtn =
    "px-2 py-0.5 bg-stonebg text-muted border border-transparent text-[11px] hover:text-ink";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-hairline pb-3 font-mono">
        <span className="text-xs font-semibold text-ink">{panel.header}</span>
        <div className="flex space-x-1">
          <button
            type="button"
            onClick={() => setTab("metrics")}
            className={tab === "metrics" ? activeBtn : inactiveBtn}
          >
            METRICS
          </button>
          <button
            type="button"
            onClick={() => setTab("code")}
            className={tab === "code" ? activeBtn : inactiveBtn}
          >
            CODE
          </button>
        </div>
      </div>

      {tab === "metrics" ? (
        <div className="space-y-3">
          <div className="bg-white border border-hairline p-4 space-y-2.5">
            <div className="flex justify-between items-center border-b border-hairline pb-2">
              <span className="text-muted">{panel.coverage.label}</span>
              <span className="text-emerald font-bold text-sm">
                {panel.coverage.value}
              </span>
            </div>
            <div className="w-full bg-stonebg h-1.5 border border-hairline">
              <div
                className="bg-emerald h-full"
                style={{ width: panel.coverage.width }}
              />
            </div>
            <p className="text-[11px] text-muted leading-normal font-sans">
              {panel.coverage.note}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {panel.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-hairline p-3"
              >
                <span className="text-[10px] text-muted block">
                  {stat.label}
                </span>
                <span className="text-ink text-xs font-semibold">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white border border-hairline p-3 text-[11px] leading-relaxed overflow-x-auto">
          <CodeSnippet lines={panel.codeSnippet} />
        </div>
      )}
    </div>
  );
}
