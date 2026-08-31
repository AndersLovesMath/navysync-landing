import Image from "next/image";
import Link from "next/link";
import {
  contactEmail,
  formatDate,
  instagramUrl,
  lastUpdated,
  navLinks,
} from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/50 bg-surface-container-lowest">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/navysync-icon.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl"
              />
              <span className="font-headline text-lg font-extrabold tracking-tight text-primary">
                NavySync
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-on-surface-variant">
              Information, scheduling, and admin tools for NJROTC units.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:gap-14">
            <div>
              <p className="font-headline font-bold text-on-surface">Site</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-on-surface-variant transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-headline font-bold text-on-surface">Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="break-words text-on-surface-variant transition hover:text-primary"
                    href={`mailto:${contactEmail}`}
                  >
                    Gmail
                  </a>
                </li>
                <li>
                  <a
                    className="text-on-surface-variant transition hover:text-primary"
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-outline-variant/50 pt-6 text-sm text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
          <p>NavySync &copy; 2026</p>
          <p>
            Last updated{" "}
            <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
          </p>
        </div>
      </div>
    </footer>
  );
}
