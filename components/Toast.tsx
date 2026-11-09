"use client";

import { useUi } from "@/components/providers/UiProvider";

export function Toast() {
  const { toast } = useUi();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-ink text-stonebg font-mono text-xs px-4 py-3 rounded-[2px] border border-hairline shadow-xl flex items-center space-x-3 transition-opacity">
      <span className="text-emerald font-bold text-sm">✓</span>
      <span>{toast.message}</span>
    </div>
  );
}
