import type { CSSProperties } from "react";
import styles from "./embers.module.css";

const EMBERS = [
  { left: "6%", size: 4, duration: 9, delay: 0, drift: 18 },
  { left: "16%", size: 3, duration: 11, delay: 2.2, drift: -14 },
  { left: "27%", size: 5, duration: 8, delay: 4.1, drift: 10 },
  { left: "38%", size: 3, duration: 12, delay: 1.1, drift: -22 },
  { left: "52%", size: 4, duration: 10, delay: 3.4, drift: 16 },
  { left: "64%", size: 3, duration: 9.5, delay: 0.6, drift: -10 },
  { left: "74%", size: 5, duration: 11.5, delay: 2.8, drift: 20 },
  { left: "85%", size: 3, duration: 8.5, delay: 5, drift: -16 },
  { left: "93%", size: 4, duration: 10.5, delay: 1.8, drift: 12 },
];

export function Embers({ className }: { className?: string }) {
  return (
    <div className={`${styles.field} ${className ?? ""}`} aria-hidden="true">
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className={styles.ember}
          style={
            {
              left: e.left,
              "--size": `${e.size}px`,
              "--duration": `${e.duration}s`,
              "--delay": `${e.delay}s`,
              "--drift": `${e.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
