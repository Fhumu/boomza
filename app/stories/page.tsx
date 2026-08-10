import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boomza Stories",
  description:
    "Step into Boomza's world through little stories about family, helping, playing and everyday adventures.",
};

export default function StoriesPage() {
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
            <Link
              href="/stories"
              aria-current="page"
            >
              Stories
            </Link>

            <Link href="/colour">Colour</Link>
            <Link href="/play">Play</Link>
            <Link href="/books">Books</Link>
          </nav>
        </div>
      </header>

      <section
        className="relative overflow-hidden pb-24 pt-20 sm:pb-28 sm:pt-24"
        style={{
          background: "var(--boomza-cream)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-24 top-3 h-80 w-80 rounded-full opacity-30"
          style={{
            background: "var(--boomza-yellow)",
          }}
        />

        <div
          className="pointer-events-none absolute -bottom-20 -left-24 h-60 w-96 rounded-[50%] opacity-15"
          style={{
            background: "var(--boomza-green)",
            transform: "rotate(-8deg)",
          }}
        />

        <div className="site-shell relative z-10">
          <div className="max-w-5xl">
            <div
              className="section-label"
              style={{
                color: "var(--boomza-green-dark)",
              }}
            >
              Boomza Stories
            </div>

            <h1
              className="mt-5 max-w-5xl font-[family-name:var(--font-display)] text-[clamp(56px,8vw,108px)] font-semibold leading-[0.9] tracking-[-0.065em]"
              style={{
                color: "var(--boomza-ink)",
              }}
            >
              Little stories.
              <span
                className="block"
                style={{
                  color: "var(--boomza-orange)",
                }}
              >
                Big little moments.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              Follow Boomza through everyday adventures filled
              with family, helping, discovering and imagination.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 sm:py-28"
        style={{
          background: "var(--boomza-paper)",
        }}
      >
        <div className="site-shell">
          <div
            className="section-label"
            style={{
              color: "var(--boomza-orange)",
            }}
          >
            Today&apos;s story
          </div>

          <div className="mt-8 grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[560px] overflow-hidden rounded-[52px_44px_58px_46px] bg-white shadow-[0_28px_80px_rgba(36,49,45,0.12)]">
              <Image
                src="/colouring/boomza-family-breakfast.JPG"
                alt="Boomza having breakfast with his family"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-top"
              />
            </div>

            <div>
              <p
                className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em]"
                style={{
                  color: "var(--boomza-green-dark)",
                }}
              >
                Story 01
              </p>

              <h2
                className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(46px,6vw,76px)] font-semibold leading-[0.95] tracking-[-0.055em]"
                style={{
                  color: "var(--boomza-ink)",
                }}
              >
                A Day with Boomza
              </h2>

              <p
                className="mt-6 max-w-xl text-lg leading-8"
                style={{
                  color: "var(--boomza-muted)",
                }}
              >
                Breakfast is only the beginning. Join Boomza
                and his family for a day of growing, helping,
                building and making little memories together.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="book-details">
                  <span>Family</span>
                  <span>Helping</span>
                  <span>Everyday adventure</span>
                </span>
              </div>

              <Link
                href="/stories/a-day-with-boomza"
                className="boomza-button mt-8"
              >
                Read the story
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 text-center sm:py-28"
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
            More stories are growing
          </div>

          <h2
            className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,5vw,68px)] font-semibold leading-none tracking-[-0.055em]"
            style={{
              color: "var(--boomza-ink)",
            }}
          >
            Boomza&apos;s world is only getting started.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-8"
            style={{
              color: "var(--boomza-muted)",
            }}
          >
            More little adventures, characters and places will
            appear here as Boomza&apos;s world grows.
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
              href="/play"
              className="boomza-button boomza-button-secondary"
            >
              Play with Boomza
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
              <Link href="/stories">Stories</Link>
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
