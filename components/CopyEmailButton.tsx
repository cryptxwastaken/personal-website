"use client";

import { useUi } from "@/components/providers/UiProvider";
import { profile } from "@/content/profile";

type CopyEmailButtonProps = {
  variant: "nav" | "footer";
};

async function copyEmail(email: string) {
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
}

export function CopyEmailButton({ variant }: CopyEmailButtonProps) {
  const { showToast, markEmailCopied, emailCopied } = useUi();

  const handleCopy = async () => {
    await copyEmail(profile.email);
    showToast(`Copied: ${profile.email}`);
    markEmailCopied();
  };

  if (variant === "footer") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className="hover:text-emerald transition-colors"
      >
        COPY_EMAIL
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="border border-hairline bg-white px-3 py-1.5 text-ink hover:border-ink hover:bg-ink hover:text-white transition-all font-mono text-[11px] flex items-center space-x-1.5 rounded-[2px]"
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <span>{emailCopied ? "COPIED!" : "COPY EMAIL"}</span>
    </button>
  );
}
