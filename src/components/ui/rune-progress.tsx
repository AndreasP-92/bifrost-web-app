import styles from "./rune-progress.module.css";

/** Steel-framed progress bar with a glowing fill ("Progress Bars"). */
export function RuneProgress({
  value,
  max = 100,
  tone = "ice",
  label,
  className,
}: {
  value: number;
  max?: number;
  tone?: "ice" | "gold";
  /** Accessible label, e.g. "Download progress" */
  label?: string;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className={`${styles.track} ${styles[tone]} ${className ?? ""}`}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
    >
      <span className={styles.fill} style={{ width: `${pct}%` }} />
    </div>
  );
}
