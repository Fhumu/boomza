"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

const navigation = [
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Colour",
    href: "/colour",
  },
  {
    label: "Play",
    href: "/play",
  },
  {
    label: "Books",
    href: "/books",
  },
] as const;

function isActivePath(
  pathname: string,
  href: string,
) {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

export default function BoomzaHeader() {
  const pathname = usePathname();

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header className="boomza-header">
      <div className="site-shell boomza-nav">
        <Link
          href="/"
          className="boomza-logo"
          aria-label="Boomza home"
        >
          BOOM<span>ZA</span>
        </Link>

        <nav
          className="nav-links desktop-nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const active = isActivePath(
              pathname,
              item.href,
            );

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  active
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={mobileMenuOpen}
          aria-controls="boomza-mobile-menu"
          aria-label={
            mobileMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          onClick={() =>
            setMobileMenuOpen(
              (current) => !current,
            )
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="boomza-mobile-menu"
        className={[
          "mobile-menu",
          mobileMenuOpen
            ? "mobile-menu-open"
            : "",
        ].join(" ")}
      >
        <div className="site-shell mobile-menu-inner">
          <nav
            className="mobile-nav-links"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => {
              const active = isActivePath(
                pathname,
                item.href,
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                >
                  <span>
                    {item.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="mobile-nav-arrow"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mobile-menu-message">
            <span>
              Little adventures.
            </span>

            <strong>
              Big imagination.
            </strong>
          </div>
        </div>
      </div>
    </header>
  );
}
