import type { Metadata } from "next";
import Link from "next/link";

import BoomzaColourGame from "@/components/play/boomza-colour-game";
import BoomzaFindIt from "@/components/play/boomza-find-it";
import BoomzaMatchPairs from "@/components/play/boomza-match-pairs";
import BoomzaSpotDifference from "@/components/play/boomza-spot-difference";
import BoomzaWordSearch from "@/components/play/boomza-word-search";

export const metadata: Metadata = {
  title: "Play with Boomza",

  description:
    "Play with Boomza through illustrated colour clues, hidden-object adventures, spot-the-difference puzzles, matching games and simple children's word activities.",

  alternates: {
    canonical: "/play",
  },
};

export default function PlayPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden pb-20 pt-20 sm:pb-24 sm:pt-24"
        style={{
          background:
            "var(--boomza-blue-light)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full opacity-20"
          style={{
            background:
              "var(--boomza-yellow)",
          }}
        />

        <div
          className="pointer-events-none absolute -left-28 bottom-4 h-52 w-96 rounded-[50%] opacity-15"
          style={{
            background:
              "var(--boomza-green)",
            transform:
              "rotate(-8deg)",
          }}
        />

        <div className="site-shell relative z-10 text-center">
          <div
            className="section-label"
            style={{
              color:
                "var(--boomza-green-dark)",
            }}
          >
            Let&apos;s play
          </div>

          <h1
            className="mx-auto mt-5 max-w-5xl font-[family-name:var(--font-display)] text-[clamp(56px,8vw,104px)] font-semibold leading-[0.9] tracking-[-0.065em]"
            style={{
              color:
                "var(--boomza-ink)",
            }}
          >
            Little games.

            <span
              className="block"
              style={{
                color:
                  "var(--boomza-orange)",
              }}
            >
              Big discoveries.
            </span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
            style={{
              color:
                "var(--boomza-muted)",
            }}
          >
            Follow clues, spot
            differences, find hidden
            things, discover little words
            and match things together in
            Boomza&apos;s world.
          </p>
        </div>
      </section>

      <section
        className="py-16 sm:py-20"
        style={{
          background:
            "var(--boomza-cream)",
        }}
      >
        <div className="site-shell">
          <div
            className="section-label"
            style={{
              color:
                "var(--boomza-green-dark)",
            }}
          >
            Choose an activity
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <a
              href="#colour-clues"
              className="rounded-[28px_32px_26px_30px] bg-white p-5 shadow-[0_16px_42px_rgba(36,49,45,0.08)] transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl">
                🌈
              </div>

              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold"
                style={{
                  color:
                    "var(--boomza-ink)",
                }}
              >
                Colour Clues
              </h2>

              <p
                className="mt-2 text-sm leading-6"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Find colourful objects
                in Boomza&apos;s world.
              </p>

              <span
                className="mt-5 inline-block font-[family-name:var(--font-display)] text-sm font-bold"
                style={{
                  color:
                    "var(--boomza-orange)",
                }}
              >
                Play now →
              </span>
            </a>

            <a
              href="#spot-the-difference"
              className="rounded-[28px_32px_26px_30px] bg-white p-5 shadow-[0_16px_42px_rgba(36,49,45,0.08)] transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl">
                👀
              </div>

              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold"
                style={{
                  color:
                    "var(--boomza-ink)",
                }}
              >
                Spot the Difference
              </h2>

              <p
                className="mt-2 text-sm leading-6"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Look carefully and
                find five changes.
              </p>

              <span
                className="mt-5 inline-block font-[family-name:var(--font-display)] text-sm font-bold"
                style={{
                  color:
                    "var(--boomza-orange)",
                }}
              >
                Play now →
              </span>
            </a>

            <a
              href="#find-the-words"
              className="rounded-[28px_32px_26px_30px] bg-white p-5 shadow-[0_16px_42px_rgba(36,49,45,0.08)] transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl">
                🔤
              </div>

              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold"
                style={{
                  color:
                    "var(--boomza-ink)",
                }}
              >
                Find the Words
              </h2>

              <p
                className="mt-2 text-sm leading-6"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Find five little words
                hidden in the grid.
              </p>

              <span
                className="mt-5 inline-block font-[family-name:var(--font-display)] text-sm font-bold"
                style={{
                  color:
                    "var(--boomza-orange)",
                }}
              >
                Play now →
              </span>
            </a>

            <a
              href="#match-the-pairs"
              className="rounded-[28px_32px_26px_30px] bg-white p-5 shadow-[0_16px_42px_rgba(36,49,45,0.08)] transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl">
                🧩
              </div>

              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold"
                style={{
                  color:
                    "var(--boomza-ink)",
                }}
              >
                Match the Pairs
              </h2>

              <p
                className="mt-2 text-sm leading-6"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Match things that
                belong together.
              </p>

              <span
                className="mt-5 inline-block font-[family-name:var(--font-display)] text-sm font-bold"
                style={{
                  color:
                    "var(--boomza-orange)",
                }}
              >
                Play now →
              </span>
            </a>

            <a
              href="#find-it"
              className="rounded-[28px_32px_26px_30px] bg-white p-5 shadow-[0_16px_42px_rgba(36,49,45,0.08)] transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl">
                🔎
              </div>

              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold"
                style={{
                  color:
                    "var(--boomza-ink)",
                }}
              >
                Find It!
              </h2>

              <p
                className="mt-2 text-sm leading-6"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Search Boomza&apos;s
                garden for hidden things.
              </p>

              <span
                className="mt-5 inline-block font-[family-name:var(--font-display)] text-sm font-bold"
                style={{
                  color:
                    "var(--boomza-orange)",
                }}
              >
                Play now →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="colour-clues"
        className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        style={{
          background:
            "var(--boomza-cream)",
        }}
      >
        <div className="site-shell">
          <div className="mb-10 text-center">
            <div
              className="section-label"
              style={{
                color:
                  "var(--boomza-orange)",
              }}
            >
              Colour Clues
            </div>

            <h2
              className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,6vw,68px)] font-semibold leading-none tracking-[-0.055em]"
              style={{
                color:
                  "var(--boomza-ink)",
              }}
            >
              Follow Boomza&apos;s
              colour clues.
            </h2>
          </div>

          <BoomzaColourGame />
        </div>
      </section>

      <section
        id="spot-the-difference"
        className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        style={{
          background:
            "#f7dfd2",
        }}
      >
        <div className="site-shell">
          <BoomzaSpotDifference />
        </div>
      </section>

      <section
        id="find-the-words"
        className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        style={{
          background:
            "var(--boomza-blue-light)",
        }}
      >
        <div className="site-shell">
          <BoomzaWordSearch />
        </div>
      </section>

      <section
        id="match-the-pairs"
        className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        style={{
          background:
            "var(--boomza-cream)",
        }}
      >
        <div className="site-shell">
          <BoomzaMatchPairs />
        </div>
      </section>

      <section
        id="find-it"
        className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
        style={{
          background:
            "#f7dfd2",
        }}
      >
        <div className="site-shell">
          <BoomzaFindIt />
        </div>
      </section>

      <section
        className="py-20 text-center sm:py-24"
        style={{
          background:
            "var(--boomza-green-dark)",
        }}
      >
        <div className="site-shell">
          <div
            className="section-label"
            style={{
              color:
                "var(--boomza-yellow)",
            }}
          >
            More Boomza
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(40px,5vw,64px)] font-semibold leading-none tracking-[-0.055em] text-white">
            Keep the adventure going.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
            Colour Boomza&apos;s world
            or take the adventure home
            with Boomza&apos;s First
            Adventures.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/colour"
              className="boomza-button"
              style={{
                background:
                  "var(--boomza-yellow)",
                color:
                  "var(--boomza-ink)",
              }}
            >
              Colour with Boomza

              <span
                aria-hidden="true"
              >
                →
              </span>
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
    </main>
  );
}