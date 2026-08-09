"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface-container-lowest/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/navysync-icon.png"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 rounded-xl sm:h-9 sm:w-9"
          />
          <span className="font-headline text-base font-extrabold tracking-tight text-primary sm:text-lg">
            NavySync
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-6">
          <nav className="flex items-center gap-0.5 text-sm font-medium sm:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "rounded-lg px-2 py-2 font-semibold text-primary sm:px-3"
                    : "rounded-lg px-2 py-2 text-on-surface-variant transition hover:bg-surface-container hover:text-primary sm:px-3"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#download"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition hover:bg-primary-container sm:inline-flex"
          >
            Get the app
          </Link>
        </div>
      </div>
    </header>
  );
}
