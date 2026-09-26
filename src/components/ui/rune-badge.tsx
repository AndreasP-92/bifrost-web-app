import type { ReactNode } from "react";
import styles from "./rune-badge.module.css";

export type BadgeTone = "new" | "popular" | "soon" | "alpha" | "beta" | "live";

/** Hexagonal glowing tag ("Badges & Tags"). Tone picks the gem colour. */
export function RuneBadge({
  tone = "popular",
  children,
  className,
}: {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`${styles.badge} ${styles[tone]} ${className ?? ""}`}>
      <span className={styles.label}>{children}</span>
    </span>
  );
}
