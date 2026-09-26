import styles from "./rune-steps.module.css";

/** Numbered diamond steps joined by a light beam ("Step Indicators"). */
export function RuneSteps({
  steps,
  current = 0,
  className,
}: {
  steps: string[];
  /** Index of the active step; earlier steps render as completed */
  current?: number;
  className?: string;
}) {
  return (
    <ol className={`${styles.steps} ${className ?? ""}`}>
      {steps.map((label, i) => {
        const state = i < current ? styles.done : i === current ? styles.active : styles.todo;
        return (
          <li key={label} className={`${styles.step} ${state}`} aria-current={i === current ? "step" : undefined}>
            <span className={styles.marker}>
              <span className={styles.number}>{i + 1}</span>
            </span>
            <span className={styles.label}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
