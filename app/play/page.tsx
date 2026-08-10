import type { Metadata } from "next";
import Link from "next/link";

import BoomzaColourGame from "@/components/play/boomza-colour-game";

export const metadata: Metadata = {
  title: "Play with Boomza",
  description:
    "Play a simple colour adventure with Boomza and help bring his colourful world to life.",
};

export default function PlayPage() {
  return (
    <main>
      <header className="boomza-header">
        <div className="site-shell boomza-nav">
          <Link
            href="/"
            className="boomza-logo"
          >
            BOOM<span>ZA</span>
          </Link>

          <nav
            className="nav-links"
            aria-label="Main navigation"
          >
            <Link href="/#stories">Stories</Link>
            <Link href="/colour">Colour</Link>

            <Link
              href="/play"
              aria-current="page"
            >
              Play
            </Link>

            <Link href="/books">Books</Link>
          </nav>
        </div>
      </header>

      <section
        className="relative overflow-hidden pb-20 pt-20 sm:pb-24 sm:pt-24"
        style={{
          background: "var(--boomza-blue-light)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full opacity-20"
          style={{
            background: "var(--boomza-yellow)",
          }}
        />

        <div
          className="pointer-events-none absolute -left-28 bottom-4 h-52 w-96 rounded-[50%] opacity-15"
          style={{
            background: "var(--boomza-green)",
            transform: "rotate(-8deg)",
          }}
        />

        <div className="site-shell relative z-10 text-center">
          <div
            className="section-label"
            style={{
              color: "var(--boomza-green-dark)",
            }}
          >
            Let&apos;s play
          </div>

          <h1
            className="mx-auto mt-5 max-w-5xl font-[family-name:var(--font-display)] text-[clamp(56px,8vw,104px)] font-semibold leading-[0.9] tracking-[-0.065em]"
            style={{
              color: "var(--boomza-ink)",
            }}
          >
            Help Boomza find
            <span
              className="block"
              style={{
                color: "var(--boomza-orange)",
              }}
            >
              the colours.
            </span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
            style={{
              color: "var(--boomza-muted)",
            }}
          >
            Follow the clues, choose the right colours and help
            brighten Boomza&apos;s world.
          </p>
        </div>
      </section>

      <section
        className="py-20 sm:py-28"
        style={{
          background: "var(--boomza-cream)",
        }}
      >
        <div className="site-shell">
          <BoomzaColourGame />
        </div>
      </section>

      <section
        className="py-20 text-center sm:py-24"
        style={{
          background: "#f7dfd2",
        }}
      >
        <div className="site-shell">
          <div
            className="section-label"
            style={{
              color: "var(--boomza-orange)",
            }}
          >
            More ways to explore
          </div>

          <h2
            className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(40px,5vw,64px)] font-semibold leading-none tracking-[-0.055em]"
            style={{
              color: "var(--boomza-ink)",
            }}
          >
            Keep the adventure going.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-8"
            style={{
              color: "var(--boomza-muted)",
            }}
          >
            Colour Boomza&apos;s world or take the adventure home
            with Boomza&apos;s First Adventures.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/colour"
              className="boomza-button"
            >
              Colour with Boomza
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/books"
              className="boomza-button boomza-button-secondary"
            >
              Explore the book
            </Link>
          </div>
        </div>
      </section>

      <footer className="boomza-footer">
        <div className="site-shell">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="boomza-logo">
                BOOM<span>ZA</span>
              </div>

              <p>
                Stories, colouring, play and little adventures
                made for big imaginations.
              </p>
            </div>

            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              <Link href="/#stories">Stories</Link>
              <Link href="/colour">Colour</Link>
              <Link href="/play">Play</Link>
              <Link href="/books">Books</Link>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Boomza.
            </span>

            <span>
              Made with imagination in South Africa.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
