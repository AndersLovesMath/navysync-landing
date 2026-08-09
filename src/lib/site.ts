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
  { value: "300+", label: "Downloads" },
  { value: "6", label: "Schools" },
  { value: "3", label: "States" },
  { value: "5.0", label: "App Store rating" },
];

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
    text: "Keep Color Guard, Drill Team, Orienteering, departments, and leadership groups organized.",
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
