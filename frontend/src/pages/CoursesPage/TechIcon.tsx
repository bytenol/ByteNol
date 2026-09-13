import type { FC, SVGProps } from "react";

type TechIconComponent = FC<SVGProps<SVGSVGElement>>;

/**
 * Drop your real technology SVGs in here, keyed by the exact name
 * used in `courses.data.ts` (e.g. "React", "Docker", "Kotlin").
 *
 * Example, once you have the icon components ready:
 *   import ReactLogo from "@/assets/tech/react.svg?react";
 *   techIconRegistry.React = ReactLogo;
 *
 * Anything not registered here falls back to a lightweight
 * monogram placeholder, so the layout looks right before the
 * real assets are wired in.
 */
export const techIconRegistry: Record<string, TechIconComponent> = {};

function PlaceholderIcon({ label }: { label: string }) {
  const initials = label.slice(0, 2).toUpperCase();
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-heading text-[11px] font-semibold text-muted"
      title={label}
    >
      {initials}
    </span>
  );
}

interface TechIconProps {
  name: string;
}

export function TechIcon({ name }: TechIconProps) {
  const Icon = techIconRegistry[name];

  if (Icon) {
    return (
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface p-1.5"
        title={name}
      >
        <Icon className="h-full w-full" />
      </span>
    );
  }

  return <PlaceholderIcon label={name} />;
}