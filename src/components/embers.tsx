import type { CSSProperties } from "react";
import styles from "./embers.module.css";

const EMBERS = [
  { left: "4%", size: 9, duration: 7.5, delay: 0, drift: 22 },
  { left: "12%", size: 6, duration: 9.5, delay: 1.6, drift: -18 },
  { left: "20%", size: 11, duration: 6.8, delay: 3.4, drift: 14 },
  { left: "29%", size: 7, duration: 10.5, delay: 0.8, drift: -26 },
  { left: "37%", size: 8, duration: 8.2, delay: 4.6, drift: 20 },
  { left: "45%", size: 6, duration: 9, delay: 2.1, drift: -14 },
  { left: "53%", size: 10, duration: 7.2, delay: 5.2, drift: 18 },
  { left: "61%", size: 7, duration: 10, delay: 1.2, drift: -22 },
  { left: "69%", size: 12, duration: 6.5, delay: 3.8, drift: 16 },
  { left: "77%", size: 6, duration: 9.8, delay: 0.4, drift: -18 },
  { left: "85%", size: 9, duration: 8, delay: 4.2, drift: 24 },
  { left: "92%", size: 7, duration: 10.2, delay: 2.6, drift: -20 },
  { left: "97%", size: 10, duration: 7, delay: 5.6, drift: 14 },
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
