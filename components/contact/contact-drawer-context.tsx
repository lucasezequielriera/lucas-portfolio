"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ContactDrawerContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactDrawerContext = createContext<ContactDrawerContextValue | null>(null);

export function ContactDrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return <ContactDrawerContext.Provider value={value}>{children}</ContactDrawerContext.Provider>;
}

export function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) throw new Error("useContactDrawer must be used within ContactDrawerProvider");
  return ctx;
}
