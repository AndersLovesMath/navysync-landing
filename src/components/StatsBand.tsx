import Stars from "@/components/Stars";
import { stats } from "@/lib/site";

export default function StatsBand() {
  return (
    <section className="border-b border-outline-variant/40 bg-surface-container-lowest">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
          data-reveal
        >
          Serving NJROTC units
        </p>
        <dl
          className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4"
          data-reveal="stagger"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-headline text-4xl font-extrabold leading-none tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </dd>
              <p className="mt-2 text-sm font-medium text-on-surface-variant">
                {stat.label}
              </p>
              {stat.label === "App Store rating" ? (
                <div className="mt-2 text-primary-container">
                  <Stars className="h-3.5 w-3.5" />
                </div>
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
