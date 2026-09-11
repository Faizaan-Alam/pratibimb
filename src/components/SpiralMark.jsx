export default function SpiralMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle
        cx="100"
        cy="100"
        r="96"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />
      <path
        d="M100 8
           A92 92 0 0 1 192 100
           A57 57 0 0 1 100 157
           A35 35 0 0 1 65 100
           A22 22 0 0 1 100 78
           A13 13 0 0 1 113 100
           A8 8 0 0 1 100 108"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="3.2" fill="currentColor" />
    </svg>
  );
}
