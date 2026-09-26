import type { ReactNode } from "react";
import { RuneGem } from "./rune-gem";
import styles from "./rune-panel.module.css";

/** Filigree corner, drawn as SVG so it stays sharp at any size. */
function Corner({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`${styles.corner} ${className}`} aria-hidden="true" focusable="false">
      <path d="M1 39V1h38" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M6 30V6h24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M6 14c5 0 8-3 8-8M14 6c0 6 4 10 10 10M6 22c9 0 16-7 16-16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="6" cy="6" r="2.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Carved dark panel with steel filigree corners ("Panels & Frames").
 * - plain: thin rim + corners
 * - gem:   adds a glowing gem on the top edge
 * - glow:  adds a blue light pool along the bottom edge
 */
export function RunePanel({
  children,
  variant = "plain",
  className,
}: {
  children?: ReactNode;
  variant?: "plain" | "gem" | "glow";
  className?: string;
}) {
  return (
    <div className={`${styles.panel} ${styles[variant]} ${className ?? ""}`}>
      <Corner className={styles.tl} />
      <Corner className={styles.tr} />
      <Corner className={styles.bl} />
      <Corner className={styles.br} />
      {variant === "gem" ? <RuneGem className={styles.topGem} size={26} /> : null}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
