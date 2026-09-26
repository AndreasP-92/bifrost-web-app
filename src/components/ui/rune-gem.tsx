import { useId } from "react";

/**
 * Glowing diamond gem — the recurring "Bifrost crystal" from the art sheet.
 * Used on its own, as button end caps, divider centres and step markers.
 */
export function RuneGem({
  className,
  size = 24,
  tone = "ice",
  framed = true,
}: {
  className?: string;
  size?: number;
  tone?: "ice" | "bronze";
  framed?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const core = tone === "ice" ? ["#e8f6ff", "#4aa8ff", "#1846a8"] : ["#fff1d6", "#f0a64a", "#7a3f12"];
  const glow = tone === "ice" ? "#3d9bff" : "#ff9a3d";

  return (
    <svg
      viewBox="0 0 32 40"
      width={size * 0.8}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ overflow: "visible", filter: `drop-shadow(0 0 ${size / 6}px ${glow})` }}
    >
      <defs>
        <linearGradient id={`steel-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f7fc" />
          <stop offset="0.35" stopColor="#8e97a8" />
          <stop offset="0.55" stopColor="#3a3f4a" />
          <stop offset="0.8" stopColor="#a9b2c2" />
          <stop offset="1" stopColor="#2a2e36" />
        </linearGradient>
        <radialGradient id={`core-${id}`} cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={core[0]} />
          <stop offset="0.45" stopColor={core[1]} />
          <stop offset="1" stopColor={core[2]} />
        </radialGradient>
      </defs>
      {framed ? (
        <path d="M16 0 32 20 16 40 0 20Z" fill={`url(#steel-${id})`} stroke="#0b0d12" strokeWidth="0.8" />
      ) : null}
      <path d="M16 5 27 20 16 35 5 20Z" fill="#070a12" />
      <path d="M16 8 24.5 20 16 32 7.5 20Z" fill={`url(#core-${id})`} />
      <path d="M16 8v24M7.5 20h17" stroke={core[0]} strokeOpacity="0.55" strokeWidth="0.8" />
      <path d="M16 12.5 19.5 20 16 27.5 12.5 20Z" fill={core[0]} fillOpacity="0.85" />
    </svg>
  );
}
