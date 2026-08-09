import Stars from "@/components/Stars";
import { appStoreUrl, googlePlayUrl, setupSteps } from "@/lib/site";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="scroll-mt-20 border-t border-outline-variant/40 bg-surface-container-lowest"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Download
            </p>
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get NavySync on iPhone and Android.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-on-surface-variant">
              Free for cadets, parents, and instructors. Program staff also get
              a web workspace for administration.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-primary-container">
                <Stars />
              </span>
              <p className="text-sm font-medium text-on-surface-variant">
                5.0 on the App Store
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-on-primary shadow-sm transition hover:bg-primary-container"
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on the App Store
              </a>
              <a
                className="rounded-full border border-outline-variant px-6 py-3 text-center text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary-fixed/50"
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get it on Google Play
              </a>
            </div>
          </div>

          <ol className="grid gap-4">
            {setupSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-outline-variant/50 bg-surface-container-low p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-fixed font-headline text-sm font-bold text-on-primary-fixed">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
