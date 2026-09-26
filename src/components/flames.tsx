import type { CSSProperties } from "react";
import styles from "./flames.module.css";

const FLAMES = [
  { x: "3.2%", y: "63%", size: 22, duration: 2.6, delay: 0 },
  { x: "39.5%", y: "66%", size: 16, duration: 2.2, delay: 0.6 },
];

export function Flames({ className }: { className?: string }) {
  return (
    <div className={`${styles.field} ${className ?? ""}`} aria-hidden="true">
      {FLAMES.map((f, i) => (
        <span
          key={i}
          className={styles.flame}
          style={
            {
              "--x": f.x,
              "--y": f.y,
              "--size": `${f.size}px`,
              "--duration": `${f.duration}s`,
              "--delay": `${f.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
