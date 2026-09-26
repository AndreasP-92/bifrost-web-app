"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./rune-controls.module.css";

/** Segmented tab bar; the active tab glows blue ("Misc UI elements"). */
export function RuneTabs({
  tabs,
  defaultIndex = 0,
  className,
}: {
  tabs: { label: string; content?: ReactNode }[];
  defaultIndex?: number;
  className?: string;
}) {
  const [active, setActive] = useState(defaultIndex);
  const id = useId();

  return (
    <div className={className}>
      <div role="tablist" className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setActive((active + 1) % tabs.length);
              if (e.key === "ArrowLeft") setActive((active - 1 + tabs.length) % tabs.length);
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) =>
        t.content ? (
          <div
            key={t.label}
            role="tabpanel"
            id={`${id}-panel-${i}`}
            aria-labelledby={`${id}-tab-${i}`}
            hidden={i !== active}
            className={styles.tabPanel}
          >
            {t.content}
          </div>
        ) : null,
      )}
    </div>
  );
}
