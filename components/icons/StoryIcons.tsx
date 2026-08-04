export function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M16 8c-2.5-2-6-2.5-9-1.5v17c3-1 6.5-.5 9 1.5 2.5-2 6-2.5 9-1.5v-17c-3-1-6.5-.5-9 1.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 8v17" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M4 16c3-5.5 8-8.5 12-8.5S25 10.5 28 16c-3 5.5-8 8.5-12 8.5S7 21.5 4 16z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" />
    </svg>
  );
}

export function FlowerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" strokeWidth={1.6} {...props}>
      <circle cx="16" cy="16" r="3" stroke="currentColor" />
      <path
        d="M16 13c0-3.5-2-6-4-7 0 3 1 5.5 4 7zM16 13c0-3.5 2-6 4-7 0 3-1 5.5-4 7zM19 16c3.5 0 6-2 7-4-3 0-5.5 1-7 4zM19 16c3.5 0 6 2 7 4-3 0-5.5-1-7-4zM16 19c0 3.5-2 6-4 7 0-3 1-5.5 4-7zM16 19c0 3.5 2 6 4 7 0-3-1-5.5-4-7zM13 16c-3.5 0-6-2-7-4 3 0 5.5 1 7 4zM13 16c-3.5 0-6 2-7 4 3 0 5.5-1 7-4z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
