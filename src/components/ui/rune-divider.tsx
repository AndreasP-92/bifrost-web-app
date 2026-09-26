import { RuneGem } from "./rune-gem";
import styles from "./rune-divider.module.css";

/** Forged steel line with a glowing gem in the middle ("Dividers & Separators"). */
export function RuneDivider({
  className,
  variant = "forged",
}: {
  className?: string;
  /** forged = long steel bar, glow = thin light-beam line */
  variant?: "forged" | "glow";
}) {
  return (
    <div className={`${styles.divider} ${styles[variant]} ${className ?? ""}`} role="separator">
      <span className={styles.line} />
      <RuneGem size={variant === "forged" ? 30 : 20} />
      <span className={styles.line} />
    </div>
  );
}
