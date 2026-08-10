import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Colour with Boomza",
  description:
    "Explore Boomza colouring pages filled with everyday adventures, family moments, play and outdoor fun.",
};

const colouringPages = [
  {
    title: "Good morning, Boomza!",
    description: "Wake up and get ready for a brand-new adventure.",
    image: "/colouring/boomza-wake-up.JPG",
    category: "My Day",
  },
  {
    title: "Breakfast time",
    description: "Start Boomza's morning with a colourful breakfast.",
    image: "/colouring/boomza-breakfast.JPG",
    category: "My Day",
  },
  {
    title: "Brush those teeth",
    description: "Help Boomza get ready for the day.",
    image: "/colouring/boomza-brushing-teeth.JPG",
    category: "My Day",
  },
  {
    title: "Family breakfast",
    description: "A happy morning around the table together.",
    image: "/colouring/boomza-family-breakfast.JPG",
    category: "Family",
  },
  {
    title: "Building together",
    description: "Boomza and a friend build something brilliant.",
    image: "/colouring/boomza-building-blocks.JPG",
    category: "Play",
  },
  {
    title: "Into the garden",
    description: "Help Boomza make the flowers grow.",
    image: "/colouring/boomza-watering-garden.JPG",
    category: "Outdoors",
  },
  {
    title: "Family gardening",
    description: "Little hands can grow wonderful things.",
    image: "/colouring/boomza-family-gardening.JPG",
    category: "Family",
  },
  {
    title: "Hello from the garden!",
    description: "Boomza is ready for another sunny adventure.",
    image: "/colouring/boomza-garden-wave.JPG",
    category: "Outdoors",
  },
  {
    title: "Clean and happy",
    description: "Boomza learns that helping can be an adventure too.",
    image: "/colouring/boomza-clean-up.JPG",
    category: "Helping",
  },
  {
    title: "Building a birdhouse",
    description: "Boomza makes a special home for a little friend.",
    image: "/colouring/boomza-building-birdhouse.JPG",
    category: "Making",
  },
  {
    title: "A big Boomza hug",
    description: "Some of the best moments are the simplest ones.",
    image: "/colouring/boomza-mum-hug.JPG",
    category: "Family",
  },
  {
    title: "Sweet dreams, Boomza",
    description: "End the day with dreams of tomorrow's adventure.",
    image: "/colouring/boomza-bedtime.JPG",
    category: "My Day",
  },
] as const;

export default function ColourPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-24 pt-20 sm:pb-28 sm:pt-24">
        <div
          className="pointer-events-none absolute -right-24 top-4 h-80 w-80 rounded-full opacity-30"
          style={{
            background: "var(--boomza-yellow)",
          }}
        />

        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-52 w-96 rounded-[50%] opacity-15"
          style={{
            background: "var(--boomza-green)",
            transform: "rotate(-8deg)",
          }}
        />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl">
            <div
              className="section-label"
              style={{
                color: "var(--boomza-orange)",
              }}
            >
              Colour with Boomza
            </div>

            <h1
              className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(56px,8vw,108px)] font-semibold leading-[0.9] tracking-[-0.065em]"
              style={{
                color: "var(--boomza-ink)",
              }}
            >
              Pick an adventure
              <span
                className="block"
                style={{
                  color: "var(--boomza-orange)",
                }}
              >
                to colour.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              From morning routines to family time and garden
              adventures, every Boomza page is waiting for your
              imagination.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 sm:py-28"
        style={{
          background: "#f7dfd2",
        }}
      >
        <div className="site-shell">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div
                className="section-label"
                style={{
                  color: "var(--boomza-green-dark)",
                }}
              >
                Boomza&apos;s colouring drawer
              </div>

              <h2
                className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(40px,5vw,64px)] font-semibold leading-none tracking-[-0.055em]"
                style={{
                  color: "var(--boomza-ink)",
                }}
              >
                What will you colour today?
              </h2>
            </div>

            <p
              className="max-w-md text-base leading-7 sm:text-lg"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              Explore Boomza&apos;s everyday world and choose the
              adventure that catches your eye.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {colouringPages.map((page, index) => (
              <article
                key={page.image}
                className={[
                  "group overflow-hidden bg-white p-4",
                  "rounded-[34px_40px_30px_38px]",
                  "shadow-[0_18px_50px_rgba(36,49,45,0.08)]",
                  "transition-all duration-200",
                  "hover:-translate-y-2",
                  "hover:shadow-[0_26px_65px_rgba(36,49,45,0.13)]",
                  index % 3 === 1
                    ? "lg:translate-y-5 lg:rotate-[0.8deg]"
                    : "",
                  index % 3 === 2
                    ? "lg:-rotate-[0.6deg]"
                    : "",
                ].join(" ")}
              >
                <div className="relative aspect-[0.78] overflow-hidden rounded-[24px] border border-black/[0.06] bg-white">
                  <Image
                    src={page.image}
                    alt={`${page.title} Boomza colouring page`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                </div>

                <div className="px-2 pb-3 pt-5">
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-extrabold"
                    style={{
                      background: "var(--boomza-blue-light)",
                      color: "var(--boomza-green-dark)",
                    }}
                  >
                    {page.category}
                  </span>

                  <h3
                    className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.035em]"
                    style={{
                      color: "var(--boomza-ink)",
                    }}
                  >
                    {page.title}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-6"
                    style={{
                      color: "var(--boomza-muted)",
                    }}
                  >
                    {page.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 flex justify-center">
            <div className="max-w-xl text-center">
              <div
                className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.045em]"
                style={{
                  color: "var(--boomza-ink)",
                }}
              >
                More adventures are coming.
              </div>

              <p
                className="mx-auto mt-4 max-w-md leading-7"
                style={{
                  color: "var(--boomza-muted)",
                }}
              >
                Boomza&apos;s world is growing, with more places to
                colour, stories to discover and games to play.
              </p>

              <Link
                href="/books"
                className="boomza-button mt-7"
              >
                Meet the book
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
