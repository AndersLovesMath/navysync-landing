import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  contactEmail,
  instagramHandle,
  instagramUrl,
  mailto,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the NavySync team about access codes, onboarding, demos, and school setup for your NJROTC unit.",
};

const reasons = [
  {
    title: "Access codes",
    text: "Get your unit set up so cadets and parents can join the app.",
  },
  {
    title: "Demos",
    text: "Walk through the mobile app and admin website with your instructors.",
  },
  {
    title: "School setup",
    text: "Questions about rosters, roles, and district requirements.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Bring NavySync to your unit."
        intro="For access codes, onboarding questions, demos, or school setup, reach out with your unit name, role, and the best way to contact you."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <h2 className="font-headline text-2xl font-extrabold tracking-tight sm:text-3xl">
              What we can help with
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-6"
                >
                  <h3 className="font-headline text-lg font-bold text-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-outline-variant/50 bg-surface-container-lowest p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Email
            </p>
            <a
              className="mt-3 block break-words font-headline text-2xl font-extrabold tracking-tight text-primary hover:text-primary-container"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
            <p className="mt-4 text-sm leading-6 text-on-surface-variant">
              Include your unit name and role so we can point you to the right
              setup steps.
            </p>
            <a
              className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-sm transition hover:bg-primary-container"
              href={mailto(
                "NavySync setup request",
                "Unit name:\r\nRole:\r\nWhat we need help with:\r\n",
              )}
            >
              Start a setup request
            </a>

            <div className="mt-8 border-t border-outline-variant/50 pt-6">
              <p className="text-sm text-on-surface-variant">
                Prefer social? Message us on Instagram at{" "}
                <a
                  className="font-semibold text-primary hover:text-primary-container"
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {instagramHandle}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
