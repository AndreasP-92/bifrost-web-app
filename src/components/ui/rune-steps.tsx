import styles from "./rune-steps.module.css";

type StepItem = string | { label: string; description?: string };

function stepLabel(step: StepItem) {
  return typeof step === "string" ? step : step.label;
}

function stepDescription(step: StepItem) {
  return typeof step === "string" ? undefined : step.description;
}

/** Numbered diamond steps joined by a light beam ("Step Indicators"). */
export function RuneSteps({
  steps,
  current = 0,
  className,
}: {
  steps: StepItem[];
  /** Index of the active step; earlier steps render as completed */
  current?: number;
  className?: string;
}) {
  return (
    <ol className={`${styles.steps} ${className ?? ""}`}>
      {steps.map((step, i) => {
        const state = i < current ? styles.done : i === current ? styles.active : styles.todo;
        const description = stepDescription(step);
        return (
          <li
            key={stepLabel(step)}
            className={`${styles.step} ${state}`}
            aria-current={i === current ? "step" : undefined}
          >
            <span className={styles.marker}>
              <span className={styles.number}>{i + 1}</span>
            </span>
            <span className={styles.label}>{stepLabel(step)}</span>
            {description ? <span className={styles.description}>{description}</span> : null}
          </li>
        );
      })}
    </ol>
  );
}
