import { HeaderDecor } from "@/components/Decorations";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="command-gradient relative overflow-hidden text-on-primary">
      <HeaderDecor />

      <div
        className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20"
        data-rise
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-fixed-dim">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-headline text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-fixed/90">
          {intro}
        </p>
      </div>
    </section>
  );
}
