"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Project } from "@/content/projects";

type ToastState = {
  message: string;
  visible: boolean;
};

type UiContextValue = {
  toast: ToastState;
  showToast: (message: string) => void;
  openProjectId: Project["id"] | null;
  openProject: (id: Project["id"]) => void;
  closeProject: () => void;
  emailCopied: boolean;
  markEmailCopied: () => void;
};

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>({
    message: "",
    visible: false,
  });
  const [openProjectId, setOpenProjectId] = useState<Project["id"] | null>(
    null,
  );
  const [emailCopied, setEmailCopied] = useState(false);

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 3000);
  }, []);

  const markEmailCopied = useCallback(() => {
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 3000);
  }, []);

  const openProject = useCallback((id: Project["id"]) => {
    setOpenProjectId(id);
  }, []);

  const closeProject = useCallback(() => {
    setOpenProjectId(null);
  }, []);

  const value = useMemo(
    () => ({
      toast,
      showToast,
      openProjectId,
      openProject,
      closeProject,
      emailCopied,
      markEmailCopied,
    }),
    [
      toast,
      showToast,
      openProjectId,
      openProject,
      closeProject,
      emailCopied,
      markEmailCopied,
    ],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) {
    throw new Error("useUi must be used within UiProvider");
  }
  return ctx;
}
