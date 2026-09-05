import React from "react";
import { Badge } from "../badge";
import type { IBadge } from "../projects.data";

export interface IBadgeListProps {
  badges: IBadge[];
}

export function BadgeList({ badges }: IBadgeListProps): React.JSX.Element {
  return (
    <ul className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <li key={badge.id}>
          <Badge label={badge.label} tooltip={badge.description} />
        </li>
      ))}
    </ul>
  );
}
