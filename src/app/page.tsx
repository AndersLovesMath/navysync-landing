import Image from "next/image";

const contactEmail = "navysyncapp@gmail.com";
const appStoreUrl = "https://apps.apple.com/us/app/navysync/id6754468754";
const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.anderslu.navysync&pli=1";

const highlights = [
  {
    title: "Announcements",
    text: "Send unit updates to cadets, parents, and instructors from one shared feed.",
  },
  {
    title: "Events & Calendar",
    text: "Track practices, inspections, competitions, ceremonies, and team-specific activities.",
  },
  {
    title: "Teams & Departments",
    text: "Keep Color Guard, Drill Team, Orienteering, departments, and leadership groups organized.",
  },
  {
    title: "Study Tools",
    text: "Give cadets quick access to NJROTC curriculum, advancement topics, and ribbon rack planning.",
  },
];

const audiences = [
  "Cadets get the schedule, announcements, study material, and profile tools they need every week.",
  "Parents can follow their cadet's unit activity without relying on scattered messages.",
  "Instructors and administrators manage rosters, events, announcements, and access from the admin site.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#0b1728]">
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#071327] text-white">
        <Image
          src="/navysync-banner.png"
          alt="NavySync banner artwork"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,39,0.96)_0%,rgba(7,19,39,0.78)_42%,rgba(7,19,39,0.36)_100%)]" />

        <nav className="absolute left-0 right-0 top-0 z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/navysync-icon.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-base font-semibold">NavySync</span>
          </a>
          <div className="flex items-center gap-4 text-sm font-medium text-white/82">
            <a className="hidden hover:text-white sm:inline" href="#features">
              Features
            </a>
            <a className="hidden hover:text-white sm:inline" href="#contact">
              Contact
            </a>
            <a
              className="rounded-md border border-white/28 px-4 py-2 text-white transition hover:border-white hover:bg-white hover:text-[#071327]"
              href="#download"
            >
              Get the app
            </a>
          </div>
        </nav>

        <div id="top" className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:pb-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#f0c15f]">
              Built for NJROTC units
            </p>
            <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              NavySync
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/86 sm:text-xl">
              The all-in-one platform for unit communication, event planning,
              cadet resources, and administrative coordination.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md bg-[#f0c15f] px-5 py-3 text-center text-sm font-bold text-[#071327] transition hover:bg-[#ffd889]"
                href="#download"
              >
                Get the app
              </a>
              <a
                className="rounded-md border border-white/28 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
                href={`mailto:${contactEmail}?subject=Request NavySync access`}
              >
                Request access
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="border-b border-[#dce4ef] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a07522]">
              Download NavySync
            </p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-[#4d5c70]">
              The mobile app is available now for cadets, parents, and
              instructors on iPhone and Android.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-md bg-[#10213a] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#20395f]"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on the App Store
            </a>
            <a
              className="rounded-md border border-[#b9c6d8] px-5 py-3 text-center text-sm font-bold text-[#10213a] transition hover:border-[#10213a] hover:bg-[#eef3f9]"
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce4ef] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
          {audiences.map((item) => (
            <p key={item} className="text-sm leading-6 text-[#4d5c70]">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a07522]">
            What it covers
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-[#0b1728] sm:text-4xl">
            One place for the moving parts of unit life.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4d5c70]">
            NavySync connects the mobile app cadets and parents use with the
            admin tools instructors need to keep information current.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-[#dce4ef] bg-white p-5 shadow-[0_18px_48px_rgba(11,23,40,0.06)]"
            >
              <h3 className="text-lg font-bold text-[#10213a]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#536176]">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0b1728] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f0c15f]">
              For programs
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Designed around real NJROTC workflows.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h3 className="font-bold text-[#f0c15f]">Mobile app</h3>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Cadets and parents can see announcements, events, calendars,
                learning resources, profiles, and notifications.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  className="rounded-md bg-white px-4 py-2 text-center text-sm font-bold text-[#0b1728] transition hover:bg-[#f0c15f]"
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
                <a
                  className="rounded-md border border-white/28 px-4 py-2 text-center text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#f0c15f]">Admin website</h3>
              <p className="mt-2 text-sm leading-6 text-white/78">
                Program staff can manage users, roles, teams, departments,
                events, and access controls from a dedicated web workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a07522]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Bring NavySync to your unit.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#4d5c70]">
              For access codes, onboarding questions, demos, or school setup,
              reach out with your unit name, role, and the best way to contact
              you.
            </p>
          </div>
          <div className="rounded-lg border border-[#dce4ef] bg-white p-6 shadow-[0_18px_48px_rgba(11,23,40,0.08)]">
            <p className="text-sm font-semibold text-[#536176]">Email</p>
            <a
              className="mt-2 block break-words text-2xl font-bold text-[#10213a] hover:text-[#a07522]"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
            <a
              className="mt-6 inline-flex rounded-md bg-[#10213a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#20395f]"
              href={`mailto:${contactEmail}?subject=NavySync setup request&body=Unit name:%0D%0ARole:%0D%0AWhat we need help with:%0D%0A`}
            >
              Start a setup request
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dce4ef] bg-white px-5 py-6 text-sm text-[#536176] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>NavySync</p>
          <p>Information, scheduling, and admin tools for NJROTC units.</p>
        </div>
      </footer>
    </main>
  );
}
