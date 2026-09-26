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
