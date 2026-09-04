export function SerahinMark({ className = "brand-mark" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Serahin" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke="var(--orange)" strokeWidth="3.2">
        <path d="M32 10.5V5.5"/><path d="m40.5 11.9 2.1-4.6"/><path d="m23.5 11.9-2.1-4.6"/><path d="m47.3 17.1 3.9-3.2"/><path d="m16.7 17.1-3.8-3.2"/>
      </g>
      <path d="M24 27v-3a8 8 0 0 1 16 0v3" stroke="var(--green)" strokeWidth="3.4"/>
      <path d="M17 27h30q4 0 3.4 4l-2.8 15.5q-.6 5-4.6 5H21q-4 0-4.6-5L13.6 31Q13 27 17 27Z" fill="var(--cream)" stroke="var(--green)" strokeWidth="3.4"/>
      <g fill="var(--green)"><circle cx="24" cy="27" r="2.6"/><circle cx="40" cy="27" r="2.6"/></g>
      <path d="M32 45s-8.4-5.2-8.4-9.7c0-2.7 2.1-4.4 4.4-4.4 1.9 0 3.4 1.2 4 2.5.6-1.3 2.1-2.5 4-2.5 2.3 0 4.4 1.7 4.4 4.4C40.4 39.8 32 45 32 45Z" stroke="var(--orange)" strokeWidth="3"/>
      <path d="M29.6 36.8q2.4 2.6 4.8 0" stroke="var(--orange)" strokeWidth="2.4"/>
    </svg>
  );
}

export function SerahinLogo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-logo${light ? " brand-logo--light" : ""}`}>
      <SerahinMark />
      <span>Serahin</span>
    </span>
  );
}
