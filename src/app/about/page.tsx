import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ReleaseList from "@/components/ReleaseList";
import {
  contactEmail,
  founder,
  instagramUrl,
  stats,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The latest NavySync releases, how the mobile app and admin website fit together, and the story behind it from founder ${founder.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Designed around real NJROTC workflows."
        intro="NavySync connects the mobile app cadets and parents use with the admin tools instructors need to keep information current."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Latest updates
          </p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            NavySync ships updates often.
          </h2>
          <p className="mt-4 text-base leading-7 text-on-surface-variant">
            The most recent releases on the App Store and Google Play.
          </p>
        </div>

        <ReleaseList />
      </section>

      <section className="border-y border-outline-variant/40 bg-surface-container-low">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              How it fits together
            </p>
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              A mobile app and an admin website.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2" data-reveal="stagger">
            <div className="rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-7">
              <h3 className="font-headline text-xl font-bold text-primary">
                Mobile app
              </h3>
              <p className="mt-3 text-base leading-7 text-on-surface-variant">
                Cadets and parents see announcements, events, calendars,
                learning resources, profiles, and notifications from their
                phone.
              </p>
              <Link
                className="mt-5 inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-container"
                href="/#download"
              >
                Download links
              </Link>
            </div>
            <div className="rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-7">
              <h3 className="font-headline text-xl font-bold text-primary">
                Admin website
              </h3>
              <p className="mt-3 text-base leading-7 text-on-surface-variant">
                Program staff manage users, roles, teams, departments, events,
                and access controls from a dedicated web workspace.
              </p>
              <Link
                className="mt-5 inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-container"
                href="/contact"
              >
                Ask about access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
          data-reveal="stagger"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary-fixed" />
              <Image
                src={founder.avatar}
                alt={`${founder.name}, ${founder.role} of NavySync`}
                width={306}
                height={512}
                className="relative w-64 rounded-3xl object-cover shadow-xl sm:w-72"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Who builds it
            </p>
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              {founder.name}
            </h2>
            <p className="mt-2 font-headline text-lg font-semibold text-primary">
              {founder.role}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-on-surface-variant">
              NavySync started as a way to keep a unit&rsquo;s announcements,
              schedule, and resources in one place instead of scattered across
              group chats. It is designed, built, and maintained around how
              units actually run.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant">
              Feedback from instructors and cadets shapes what gets built next.
              If something is missing for your unit, say so.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-outline-variant/50 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-headline text-2xl font-extrabold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-on-primary shadow-sm transition hover:bg-primary-container"
                href={`mailto:${contactEmail}`}
              >
                Gmail
              </a>
              <a
                className="rounded-full border border-outline-variant px-6 py-3 text-center text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary-fixed/50"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
