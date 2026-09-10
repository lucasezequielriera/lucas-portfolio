"use client";

import { useContactDrawer } from "./contact-drawer-context";

export function OpenContactButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useContactDrawer();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
