"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* One observer drives every [data-reveal] element on the page, so sections stay
   server components and opt into the animation with an attribute instead of a
   client wrapper. Styles live in globals.css. */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not([data-revealed])",
      ),
    );

    // Nothing to animate for reduced-motion readers or browsers without the
    // observer; show the content immediately instead.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      for (const el of targets) el.dataset.revealed = "";
      return;
    }

    // The bottom margin holds an element back until it is a little way into the
    // viewport. The top margin spans the whole page so anything jumped straight
    // past -- a #download link, scroll restoration, a fast fling -- still counts
    // as intersecting and shows up instead of staying blank.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: `${document.documentElement.scrollHeight}px 0px -10% 0px`,
        threshold: 0,
      },
    );

    for (const el of targets) observer.observe(el);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
