import React from "react";
import { TechBadge } from "../tech-badge";

export interface ITechBadgeListProps {
  stack: string[];
}

export function TechBadgeList({ stack }: ITechBadgeListProps): React.JSX.Element | null {
  if (stack.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((technology: string) => (
        <li key={technology}>
          <TechBadge label={technology} />
        </li>
      ))}
    </ul>
  );
}
