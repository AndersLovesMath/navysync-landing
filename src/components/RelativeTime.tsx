"use client";

import { useSyncExternalStore } from "react";
import { relativeTime } from "@/lib/site";

/* The value never changes on its own, so there is nothing to subscribe to --
   this only needs the server and client snapshots below to differ. */
const subscribe = () => () => {};

/* "3 weeks ago" next to a release date. The page is prerendered at build time
   and could be read months later, so the phrasing is left out of the server
   snapshot and computed against the reader's own clock instead. */
export default function RelativeTime({ date }: { date: string }) {
  const label = useSyncExternalStore(
    subscribe,
    () => relativeTime(date),
    () => "",
  );

  return <time dateTime={date}>{label}</time>;
}
