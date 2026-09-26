"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { coverPoint } from "./hero-geometry";
import styles from "./beam-pulse.module.css";

/** Where the light beam sits in the source image, as a fraction of its size. */
const BEAM = { fx: 0.769, fyBottom: 0.318, fyTop: -0.02 };

export function BeamPulse({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: width, h: height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bottom = size.w > 0 ? coverPoint(size.w, size.h, BEAM.fx, BEAM.fyBottom) : null;
  const top = size.w > 0 ? coverPoint(size.w, size.h, BEAM.fx, BEAM.fyTop) : null;

  return (
    <div ref={ref} className={`${styles.track} ${className ?? ""}`} aria-hidden="true">
      {bottom && top && (
        <span
          className={styles.orb}
          style={
            {
              "--start-left": `${bottom.left}px`,
              "--start-top": `${bottom.top}px`,
              "--end-top": `${top.top}px`,
            } as CSSProperties
          }
        />
      )}
    </div>
  );
}
