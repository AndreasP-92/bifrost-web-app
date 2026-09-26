import type { ReactNode } from "react";
import { FrameCorner } from "./icons";
import styles from "./frame.module.css";

export function Frame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.frame} ${className ?? ""}`}>
      <FrameCorner className={`${styles.corner} ${styles.cornerTl}`} />
      <FrameCorner className={`${styles.corner} ${styles.cornerTr}`} />
      <FrameCorner className={`${styles.corner} ${styles.cornerBl}`} />
      <FrameCorner className={`${styles.corner} ${styles.cornerBr}`} />
      {children}
    </div>
  );
}
