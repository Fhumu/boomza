import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Day with Boomza",
  description:
    "Follow Boomza and his family through breakfast, gardening, helping, building and a cosy end to the day.",
};

const storyScenes = [
  {
    image: "/colouring/boomza-family-breakfast.JPG",
    eyebrow: "Morning",
    title: "A happy day begins together.",
    story:
      "Boomza starts the morning around the table with his family. There is breakfast to eat, stories to share and a whole day waiting outside.",
    background: "var(--boomza-cream)",
  },
  {
    image: "/colouring/boomza-garden-wave.JPG",
    eyebrow: "Outside",
    title: "Hello, sunshine!",
    story:
      "The garden is bright and warm. Boomza steps outside, waves hello and wonders what adventure might be hiding among the flowers.",
    background: "var(--boomza-blue-light)",
  },
  {
    image: "/colouring/boomza-family-gardening.JPG",
    eyebrow: "Growing",
    title: "Little hands can grow big things.",
    story:
      "Boomza joins his family in the garden. They dig, water and care for the little plants together.",
    background: "#f7dfd2",
  },
  {
    image: "/colouring/boomza-clean-up.JPG",
    eyebrow: "Helping",
    title: "Everyone can lend a hand.",
    story:
      "There is a little tidying to do too. Boomza discovers that helping makes the garden nicer for everyone who lives and plays there.",
    background: "var(--boomza-paper)",
  },
  {
    image: "/colouring/boomza-building-birdhouse.JPG",
    eyebrow: "Making",
    title: "Something special for a little friend.",
    story:
      "Next, Boomza helps build a tiny home for the birds. Piece by piece, their idea becomes something real.",
    background: "var(--boomza-blue-light)",
  },
  {
    image: "/colouring/boomza-mum-hug.JPG",
    eyebrow: "Home",
    title: "The best part of an adventure.",
    story:
      "After a busy day, Boomza has one more thing to collect — a very big hug.",
    background: "#f7dfd2",
  },
  {
    image: "/colouring/boomza-bedtime.JPG",
    eyebrow: "Good night",
    title: "Tomorrow is another adventure.",
    story:
      "The day is done. Boomza gets cosy, shares one last story and dreams about all the places tomorrow might take him.",
    background: "var(--boomza-cream)",
  },
] as const;

export default function StoryPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden pb-24 pt-20 text-center sm:pb-28 sm:pt-24"
        style={{
          background: "var(--boomza-green-dark)",
          color: "#ffffff",
        }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full opacity-20"
          style={{
            background: "var(--boomza-yellow)",
          }}
        />

        <div className="site-shell relative z-10">
          <div
            className="section-label"
            style={{
              color: "var(--boomza-yellow)",
            }}
          >
            Boomza Story 01
          </div>

          <h1 className="mx-auto mt-5 max-w-5xl font-[family-name:var(--font-display)] text-[clamp(62px,9vw,116px)] font-semibold leading-[0.88] tracking-[-0.065em]">
            A Day
            <span
              className="block"
              style={{
                color: "var(--boomza-yellow)",
              }}
            >
              with Boomza.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            One ordinary day. Lots of little adventures.
          </p>

          <div className="mt-9">
            <span className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold text-white/70">
              Scroll to begin
              <span aria-hidden="true">↓</span>
            </span>
          </div>
        </div>
      </section>

      {storyScenes.map((scene, index) => (
        <section
          key={scene.image}
          className="py-24 sm:py-28 lg:py-32"
          style={{
            background: scene.background,
          }}
        >
          <div
            className={[
              "site-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20",
              index % 2 === 1
                ? "lg:[&>*:first-child]:order-2"
                : "",
            ].join(" ")}
          >
            <div className="relative min-h-[560px] overflow-hidden rounded-[52px_44px_58px_46px] bg-white shadow-[0_26px_75px_rgba(36,49,45,0.12)] sm:min-h-[650px]">
              <Image
                src={scene.image}
                alt={scene.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div>
              <div className="flex items-center gap-4">
                <span
                  className="font-[family-name:var(--font-display)] text-sm font-bold"
                  style={{
                    color: "var(--boomza-orange)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="h-[3px] w-7 rounded-full"
                  style={{
                    background: "var(--boomza-orange)",
                  }}
                />

                <span
                  className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.1em]"
                  style={{
                    color: "var(--boomza-green-dark)",
                  }}
                >
                  {scene.eyebrow}
                </span>
              </div>

              <h2
                className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(44px,6vw,76px)] font-semibold leading-[0.95] tracking-[-0.055em]"
                style={{
                  color: "var(--boomza-ink)",
                }}
              >
                {scene.title}
              </h2>

              <p
                className="mt-7 max-w-xl text-lg leading-8 sm:text-xl"
                style={{
                  color: "var(--boomza-muted)",
                }}
              >
                {scene.story}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section
        className="py-24 text-center sm:py-28"
        style={{
          background: "var(--boomza-green-dark)",
          color: "#ffffff",
        }}
      >
        <div className="site-shell">
          <div
            className="text-6xl"
            aria-hidden="true"
          >
            ⭐
          </div>

          <div
            className="mt-5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em]"
            style={{
              color: "var(--boomza-yellow)",
            }}
          >
            The end
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(46px,6vw,78px)] font-semibold leading-none tracking-[-0.055em]">
            What should Boomza do tomorrow?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
            There are always more stories waiting in
            Boomza&apos;s world.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/stories"
              className="boomza-button"
              style={{
                background: "var(--boomza-yellow)",
                color: "var(--boomza-ink)",
              }}
            >
              More stories
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/colour"
              className="boomza-button boomza-button-secondary"
            >
              Colour the adventure
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
