import Link from "next/link";
import { HeroDecor } from "@/components/Decorations";
import DownloadSection from "@/components/DownloadSection";
import StatsBand from "@/components/StatsBand";
import { audiences, features } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="command-gradient relative overflow-hidden text-on-primary">
        <HeroDecor />

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="max-w-3xl" data-rise>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim">
              Built for NJROTC units
            </p>
            <h1 className="mt-4 font-headline text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              One place for the whole unit.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-fixed/90">
              NavySync brings unit communication, event planning, cadet
              resources, and administration into a single app cadets, parents,
              and instructors actually use.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded-full bg-on-primary px-6 py-3 text-center text-sm font-semibold text-primary shadow-sm transition hover:bg-primary-fixed"
                href="/#download"
              >
                Get the app
              </Link>
              <Link
                className="rounded-full border border-primary-fixed-dim/60 px-6 py-3 text-center text-sm font-semibold text-on-primary transition hover:bg-on-primary/10"
                href="/contact"
              >
                Request access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            What it covers
          </p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            The moving parts of unit life, in one app.
          </h2>
          <p className="mt-4 text-base leading-7 text-on-surface-variant">
            NavySync connects the mobile app cadets and parents use with the
            admin tools instructors need to keep information current.
          </p>
        </div>

        <div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal="stagger"
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-6 transition hover:border-primary/40 hover:shadow-lg"
            >
              <h3 className="font-headline text-lg font-bold text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-outline-variant/40 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Who it is for
            </p>
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Three audiences, one source of truth.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3" data-reveal="stagger">
            {audiences.map((item) => (
              <div key={item.role}>
                <h3 className="font-headline text-lg font-bold text-on-surface">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <Link
            className="mt-10 inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-container"
            href="/about"
            data-reveal
          >
            More about how NavySync works
          </Link>
        </div>
      </section>

      <DownloadSection />
    </>
  );
}
