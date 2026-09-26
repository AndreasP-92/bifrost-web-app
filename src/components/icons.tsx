export function ValknutMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="valknutGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e6b876" />
          <stop offset="55%" stopColor="#c9974f" />
          <stop offset="100%" stopColor="#8fd3ff" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#valknutGradient)" strokeWidth="2.4" strokeLinejoin="round">
        <path d="M32 6 L54 44 L10 44 Z" transform="rotate(0 32 32)" />
        <path d="M32 6 L54 44 L10 44 Z" transform="rotate(120 32 32)" />
        <path d="M32 6 L54 44 L10 44 Z" transform="rotate(240 32 32)" />
      </g>
      <circle cx="32" cy="32" r="2.2" fill="#c3e9ff" />
    </svg>
  );
}

export function BridgeMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 480"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bridgeArc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6fd0ff" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#8fb8ff" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#b48cff" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#e6a5d8" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#ffd28a" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="bridgeFade" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="bridgeMask">
          <rect width="1200" height="480" fill="url(#bridgeFade)" />
        </mask>
      </defs>
      <g mask="url(#bridgeMask)">
        <path
          d="M -50 420 C 250 420, 300 120, 600 120 C 900 120, 950 420, 1250 420"
          fill="none"
          stroke="url(#bridgeArc)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M -50 440 C 260 440, 305 150, 600 150 C 895 150, 940 440, 1250 440"
          fill="none"
          stroke="#8fd3ff"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <path
          d="M -50 400 C 240 400, 295 95, 600 95 C 905 95, 960 400, 1250 400"
          fill="none"
          stroke="#8fd3ff"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

export function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 26c0-5 3.6-8 8-8s8 3 8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="22" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <path
        d="M18 26c.4-3.6 2.6-6 6-6.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function GameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect x="3" y="11" width="26" height="13" rx="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 14v6M7 17h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="22.5" cy="15" r="1.4" fill="currentColor" />
      <circle cx="25.5" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect x="6" y="6" width="12" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="18" y="13" width="8" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
      <path d="M9 11h2M13 11h2M9 15h2M13 15h2M9 19h2M13 19h2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ApiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <circle cx="7" cy="16" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="25" cy="8" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="25" cy="24" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 15L22 9M10 17L22 23" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function RuneKnot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <path
        d="M24 8 L34 24 L24 40 L14 24 Z"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
    </svg>
  );
}
