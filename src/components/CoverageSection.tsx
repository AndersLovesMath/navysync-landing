import Link from "next/link";
import UsMap from "@/components/UsMap";
import { programCount, programsByState } from "@/lib/site";
import { stateShapes } from "@/lib/usStates";

const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const spell = (n: number) => NUMBER_WORDS[n] ?? String(n);

export default function CoverageSection() {
  // Busiest states first, then alphabetical, so the list reads like a
  // leaderboard as counts start to differ.
  const activeStates = stateShapes
    .filter((state) => programsByState[state.code])
    .map((state) => ({ ...state, count: programsByState[state.code] }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return (
    <section className="border-b border-outline-variant/40 bg-surface-container-low">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Where it&rsquo;s used
            </p>
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Growing across the country, one unit at a time.
            </h2>
            <p className="mt-4 text-base leading-7 text-on-surface-variant">
              So far, {spell(programCount)} NJROTC program
              {programCount === 1 ? " runs" : "s run"} on NavySync across{" "}
              {spell(activeStates.length)} state
              {activeStates.length === 1 ? "" : "s"}.
            </p>

            <ul className="mt-8 divide-y divide-outline-variant/50 border-y border-outline-variant/50">
              {activeStates.map((state) => (
                <li
                  key={state.code}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-9 items-center justify-center rounded-md bg-primary font-headline text-xs font-bold text-on-primary">
                      {state.code}
                    </span>
                    <span className="text-sm font-medium text-on-surface">
                      {state.name}
                    </span>
                  </span>
                  <span className="text-sm text-on-surface-variant">
                    {state.count} program{state.count === 1 ? "" : "s"}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              className="mt-8 inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-container"
              href="/contact"
            >
              Bring NavySync to your unit
            </Link>
          </div>

          <figure data-reveal>
            <UsMap counts={programsByState} />
            <figcaption className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-on-surface-variant sm:justify-end">
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-sm bg-primary-container"
                />
                Programs on NavySync
              </span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-sm bg-primary-fixed"
                />
                Not yet on NavySync
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
