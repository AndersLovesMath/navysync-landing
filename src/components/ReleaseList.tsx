"use client";

import { useState } from "react";
import RelativeTime from "@/components/RelativeTime";
import { formatDate, releases, shownReleaseCount } from "@/lib/site";

export default function ReleaseList() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? releases : releases.slice(0, shownReleaseCount);
  const remaining = releases.length - shownReleaseCount;

  return (
    <>
      <ol className="mt-12 grid gap-3" data-reveal="stagger">
        {shown.map((release, index) => (
          <li
            key={release.version}
            className="grid gap-4 rounded-2xl border border-outline-variant/50 bg-surface-container-lowest px-6 py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div className="order-2 sm:order-1">
              {release.notes.map((note) => (
                <p
                  key={note}
                  className="text-sm leading-6 text-on-surface-variant"
                >
                  {note}
                </p>
              ))}
            </div>

            <div className="order-1 flex flex-wrap items-baseline gap-x-3 sm:order-2 sm:flex-col sm:items-end sm:text-right">
              <span className="font-headline text-lg font-bold text-primary">
                {release.version}
              </span>
              {index === 0 ? (
                <span className="rounded-full bg-primary-fixed px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary-fixed">
                  Current
                </span>
              ) : null}
              <span className="text-sm text-on-surface-variant sm:mt-1">
                {formatDate(release.date)}
              </span>
              <span className="text-sm text-on-surface-variant">
                <RelativeTime date={release.date} />
              </span>
            </div>
          </li>
        ))}
      </ol>

      {remaining > 0 ? (
        <button
          type="button"
          onClick={() => setShowAll((open) => !open)}
          aria-expanded={showAll}
          className="mt-6 rounded-full border border-outline-variant px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary-fixed/50"
        >
          {showAll ? "Show fewer updates" : `See all ${releases.length} updates`}
        </button>
      ) : null}
    </>
  );
}
