import type { Metadata } from "next";
import Link from "next/link";

import BoomzaColourGame from "@/components/play/boomza-colour-game";

export const metadata: Metadata = {
  title: "Play with Boomza",
  description:
    "Follow illustrated clues, find colourful objects and explore Boomza's world through a playful children's colour adventure.",

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
            Follow Boomza&apos;s

            <span
              className="block"
              style={{
                color:
                  "var(--boomza-orange)",
              }}
            >
              colour clues.
            </span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
            style={{
              color:
                "var(--boomza-muted)",
            }}
          >
            Look around Boomza&apos;s world, spot the
            colourful objects and see where each clue
            takes you.
          </p>
        </div>
      </section>

      <section
        className="py-16 sm:py-24 lg:py-28"
        style={{
          background:
            "var(--boomza-cream)",
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
              color:
                "var(--boomza-orange)",
            }}
          >
            More ways to explore
          </div>

          <h2
            className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(40px,5vw,64px)] font-semibold leading-none tracking-[-0.055em]"
            style={{
              color:
                "var(--boomza-ink)",
            }}
          >
            Keep the adventure going.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-8"
            style={{
              color:
                "var(--boomza-muted)",
            }}
          >
            Colour Boomza&apos;s world or take the
            adventure home with Boomza&apos;s First
            Adventures.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/colour"
              className="boomza-button"
            >
              Colour with Boomza
              <span aria-hidden="true">
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
