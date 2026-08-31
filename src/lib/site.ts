export const contactEmail = "navysyncapp@gmail.com";

export const appStoreUrl =
  "https://apps.apple.com/us/app/navysync/id6754468754";
export const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.anderslu.navysync&pli=1";

export const instagramHandle = "@navysyncapp";
export const instagramUrl = "https://www.instagram.com/navysyncapp/";

export const mailto = (subject: string, body?: string) => {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${contactEmail}?${params.toString()}`;
};

export const founder = {
  name: "YiLin (Anders) Lu",
  role: "Founder",
  avatar: "/avatar.jpg",
};

export const stats = [
  { value: "600+", label: "Downloads" },
  { value: "9", label: "Schools" },
  { value: "3", label: "States" },
  { value: "5.0", label: "App Store rating" },
];

/* Bump this whenever the site's own copy changes (stats, releases, wording).
   It is the site's date, not the app's -- the release list above tracks that. */
export const lastUpdated = "2026-08-29";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const features = [
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
    text: "Keep your teams, departments, and leadership groups organized.",
  },
  {
    title: "Study Tools",
    text: "Give cadets quick access to NJROTC curriculum, advancement topics, and ribbon rack planning.",
  },
];

export const audiences = [
  {
    role: "Cadets",
    text: "Get the schedule, announcements, study material, and profile tools they need every week.",
  },
  {
    role: "Parents",
    text: "Follow their cadet's unit activity without relying on scattered messages.",
  },
  {
    role: "Instructors",
    text: "Manage rosters, events, announcements, and access from the admin site.",
  },
];

/* Full release history, newest first, matching the store listings. The About
   page shows only the most recent few and keeps the rest behind a toggle. */
export const releases = [
  {
    version: "1.1.0",
    date: "2026-08-29",
    notes: [
      "Added a dark theme",
      "Added support for multiple departments",
      "Added the unit view page",
      "Revamped the guest page",
    ],
  },
  {
    version: "1.0.13",
    date: "2026-08-12",
    notes: ["Added the parent event page", "Rethemed the parent page"],
  },
  {
    version: "1.0.12",
    date: "2026-08-03",
    notes: [
      'Added searchable pickers for adding team and department members, and a new "Event Staff" section on the event form where you can assign the CIC and organizers directly by name instead of typing email addresses.',
    ],
  },
  {
    version: "1.0.11",
    date: "2026-07-24",
    notes: [
      "Event checkout simplified so that one-tap check-out with confirmation replaces QR code scanning",
    ],
  },
  {
    version: "1.0.10",
    date: "2026-07-13",
    notes: ["Fix: Show all members in the members list"],
  },
  {
    version: "1.0.9",
    date: "2026-06-23",
    notes: ["Added email sending feature"],
  },
  {
    version: "1.0.8",
    date: "2026-05-31",
    notes: [
      "Fixed learn content ordering.",
      "Fixed error when viewing events",
      "Everyone can make events now, but they require approval from administrators.",
    ],
  },
  {
    version: "1.0.7",
    date: "2026-05-30",
    notes: ["Changed the parent-view UI."],
  },
  {
    version: "1.0.5",
    date: "2026-05-07",
    notes: [
      "Fixed bugs in the calendar",
      "Changed calendar date formatting",
      "Reorganized dashboard",
    ],
  },
  {
    version: "1.0.3",
    date: "2026-04-15",
    notes: [
      "Improved the quiz page",
      "Added quick access on the dashboard for the learn page.",
    ],
  },
  {
    version: "1.0.2",
    date: "2026-04-08",
    notes: [
      "Added onto the previous update by adding more quality of life changes.",
    ],
  },
  {
    version: "1.0.1",
    date: "2026-03-27",
    notes: ["New UI changes and easier announcements view"],
  },
  {
    version: "1.0.0",
    date: "2026-03-05",
    notes: [
      "Stabilized features. Improved calendar UI",
      "Added better parent-student view features",
      "Fixed bugs when creating announcements and events",
    ],
  },
  {
    version: "0.2.5",
    date: "2026-02-24",
    notes: ["Expanded instructor access"],
  },
  {
    version: "0.2.4",
    date: "2026-02-11",
    notes: [
      "Fixed wrong order of ribbon addition in the ribbon rack builder",
      "Added quality of life improvements",
      "Removed email verification, but added strict school code requirements",
    ],
  },
  {
    version: "0.2.1",
    date: "2026-01-13",
    notes: ["Added ribbon rack builder"],
  },
  {
    version: "0.1.4",
    date: "2025-12-07",
    notes: ["Fixed student-parent linking", "Fixed flickering when logging in"],
  },
  {
    version: "0.1.3",
    date: "2025-11-23",
    notes: [
      "Added parent sign up and login and improved guest mode",
      "Added some bug fixes like incorrect event numbering on the dashboard.",
      "Added better personalization features.",
    ],
  },
];

/* How many releases show before "See all updates" opens the rest. */
export const shownReleaseCount = 4;

const DAY = 86_400_000;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/* Both helpers read the date in UTC so a reader's time zone can never shift the
   result by a day, and so the server and client always agree. */
export const formatDate = (date: string) => {
  const at = new Date(`${date}T00:00:00Z`);
  return `${MONTHS[at.getUTCMonth()]} ${at.getUTCDate()}, ${at.getUTCFullYear()}`;
};

/* Coarse "3 weeks ago" phrasing, recomputed on the client so it never goes
   stale against a page that was rendered ahead of time. */
export const relativeTime = (date: string, now: Date = new Date()) => {
  const days = Math.floor((now.getTime() - Date.parse(date)) / DAY);

  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  const plural = (elapsed: number, unit: string) => {
    const count = Math.max(1, elapsed);
    return `${count} ${unit}${count === 1 ? "" : "s"} ago`;
  };

  // Elapsed units are counted, not rounded, so a release stays "1 month ago"
  // until it is genuinely two months old -- the same way the stores phrase it.
  if (days < 30) return plural(Math.floor(days / 7), "week");
  if (days < 365) return plural(Math.floor(days / 30.44), "month");
  return plural(Math.floor(days / 365.25), "year");
};

export const setupSteps = [
  {
    title: "Download the app",
    text: "Install NavySync from the App Store or Google Play on the device the cadet or parent uses day to day.",
  },
  {
    title: "Join your unit",
    text: "Use the access code from your instructor so the app shows your unit's announcements, events, and teams.",
  },
  {
    title: "Turn on notifications",
    text: "Allow notifications so schedule changes and new announcements arrive when they are posted.",
  },
];
