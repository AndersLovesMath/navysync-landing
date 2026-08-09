/* Decorative nautical background art for the dark gradient bands.
   Everything here is aria-hidden and sits behind page content. */

function Anchor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="3.4" r="1.9" />
      <path d="M12 5.3V21.2" />
      <path d="M7.8 8.6h8.4" />
      <path d="M3.4 12.9a8.6 8.6 0 0 0 17.2 0" />
      <path d="M3.4 12.9h3.1M3.4 12.9l1.5-1.9M3.4 12.9l1.9 1.4" />
      <path d="M20.6 12.9h-3.1M20.6 12.9l-1.5-1.9M20.6 12.9l-1.9 1.4" />
    </svg>
  );
}

function CompassRose({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9.4" />
      <circle cx="12" cy="12" r="6.2" />
      <path d="M12 1.6l1.9 8.5L12 12l-1.9-1.9z" />
      <path d="M12 22.4l-1.9-8.5L12 12l1.9 1.9z" />
      <path d="M1.6 12l8.5-1.9L12 12l-1.9 1.9z" />
      <path d="M22.4 12l-8.5 1.9L12 12l1.9-1.9z" />
    </svg>
  );
}

function Waves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 40"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
    >
      <path d="M0 10c15 0 15 8 30 8s15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8" />
      <path d="M0 22c15 0 15 8 30 8s15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8" />
      <path d="M0 34c15 0 15 8 30 8s15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8 15-8 30-8 15 8 30 8" />
    </svg>
  );
}

function Chevrons({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-5.5L21 9" />
      <path d="M3 14l9-5.5L21 14" />
      <path d="M3 19l9-5.5L21 19" />
    </svg>
  );
}

/* Full decor layer for the homepage hero. */
export function HeroDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden text-primary-fixed-dim"
    >
      <Anchor className="absolute -top-10 right-[-3rem] h-[26rem] w-[26rem] opacity-[0.13] sm:right-4 sm:h-[30rem] sm:w-[30rem] lg:right-24 lg:h-[34rem] lg:w-[34rem]" />
      <CompassRose className="absolute -left-16 top-8 h-64 w-64 opacity-[0.10] sm:left-[-3rem] sm:h-72 sm:w-72" />
      <Chevrons className="absolute bottom-24 left-1/3 hidden h-24 w-24 opacity-[0.09] lg:block" />
      <Waves className="absolute inset-x-0 bottom-0 h-24 w-full opacity-[0.14]" />
    </div>
  );
}

/* Lighter decor layer for interior page headers. */
export function HeaderDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden text-primary-fixed-dim"
    >
      <Anchor className="absolute -top-6 right-[-2rem] h-72 w-72 opacity-[0.13] sm:right-8 sm:h-80 sm:w-80" />
      <CompassRose className="absolute -left-20 bottom-[-3rem] h-56 w-56 opacity-[0.09]" />
      <Waves className="absolute inset-x-0 bottom-0 h-16 w-full opacity-[0.12]" />
    </div>
  );
}
