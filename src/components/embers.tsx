"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { coverPoint } from "./hero-geometry";
import styles from "./embers.module.css";

/**
 * Fire locations as a fraction of the source image (fx, fy), so they stay
 * anchored to the painted flames no matter how `background-size: cover`
 * crops the image at a given viewport size. Each fire has a small cluster
 * of embers with a pixel-space jitter for a natural spread.
 */
const FIRES = [
  {
    fx: 0.043,
    fy: 0.57,
    embers: [
      { dx: -6, size: 6, duration: 2.6, delay: 0, drift: 10, rise: -140 },
      { dx: 4, size: 4, duration: 2.2, delay: 0.45, drift: -8, rise: -110 },
      { dx: -2, size: 5, duration: 2.8, delay: 0.9, drift: 6, rise: -150 },
      { dx: 8, size: 4, duration: 2.3, delay: 1.35, drift: -6, rise: -100 },
      { dx: -8, size: 5, duration: 2.5, delay: 1.8, drift: 9, rise: -130 },
      { dx: 2, size: 4, duration: 2.4, delay: 2.2, drift: -9, rise: -115 },
    ],
  },
  {
    fx: 0.406,
    fy: 0.628,
    embers: [
      { dx: -6, size: 5, duration: 2.4, delay: 0, drift: -8, rise: -120 },
      { dx: 6, size: 4, duration: 2, delay: 0.4, drift: 8, rise: -100 },
      { dx: -2, size: 4, duration: 2.6, delay: 0.8, drift: -6, rise: -130 },
      { dx: 4, size: 5, duration: 2.2, delay: 1.2, drift: 7, rise: -110 },
      { dx: -4, size: 4, duration: 2.7, delay: 1.7, drift: -8, rise: -125 },
    ],
  },
  {
    // small ground fire at the base of the ship
    fx: 0.437,
    fy: 0.696,
    embers: [
      { dx: -4, size: 4, duration: 2.3, delay: 0, drift: -6, rise: -95 },
      { dx: 3, size: 3, duration: 1.9, delay: 0.5, drift: 5, rise: -80 },
      { dx: -1, size: 3, duration: 2.5, delay: 1, drift: -4, rise: -105 },
      { dx: 2, size: 3, duration: 2.1, delay: 1.5, drift: 6, rise: -85 },
    ],
  },
  {
    // torch on the wooden dock/pier
    fx: 0.619,
    fy: 0.668,
    embers: [
      { dx: -5, size: 5, duration: 2.4, delay: 0, drift: -7, rise: -115 },
      { dx: 5, size: 4, duration: 2, delay: 0.45, drift: 7, rise: -95 },
      { dx: -2, size: 4, duration: 2.7, delay: 0.9, drift: -5, rise: -125 },
      { dx: 3, size: 5, duration: 2.2, delay: 1.35, drift: 6, rise: -105 },
      { dx: -4, size: 4, duration: 2.6, delay: 1.8, drift: -8, rise: -120 },
    ],
  },
];

export function Embers({ className }: { className?: string }) {
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

  return (
    <div ref={ref} className={`${styles.field} ${className ?? ""}`} aria-hidden="true">
      {size.w > 0 &&
        FIRES.flatMap((fire, fi) => {
          const point = coverPoint(size.w, size.h, fire.fx, fire.fy);
          return fire.embers.map((e, i) => (
            <span
              key={`${fi}-${i}`}
              className={styles.ember}
              style={
                {
                  left: `${point.left + e.dx}px`,
                  top: `${point.top}px`,
                  "--size": `${e.size}px`,
                  "--duration": `${e.duration}s`,
                  "--delay": `${e.delay}s`,
                  "--drift": `${e.drift}px`,
                  "--rise": `${e.rise}px`,
                } as CSSProperties
              }
            />
          ));
        })}
    </div>
  );
}
