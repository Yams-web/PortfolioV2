import React from "react";

export interface ITechBadgeProps {
  label: string;
}

export function TechBadge({ label }: ITechBadgeProps): React.JSX.Element {
  return (
    <span className="inline-flex border border-[#23252E] px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#c4c7c8]">
      {label}
    </span>
  );
}
