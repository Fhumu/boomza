import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boomza Books",
  description:
    "Discover Boomza's First Adventures — a cheerful colouring book filled with everyday moments, family, friendship and imagination.",
};

const previewPages = [
  {
    title: "Good morning, Boomza!",
    image: "/colouring/boomza-wake-up.JPG",
  },
  {
    title: "Breakfast together",
    image: "/colouring/boomza-family-breakfast.JPG",
  },
  {
    title: "Into the garden",
    image: "/colouring/boomza-watering-garden.JPG",
  },
] as const;

export default function BooksPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
        style={{
          background: "var(--boomza-cream)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full opacity-30"
          style={{
            background: "var(--boomza-yellow)",
          }}
        />

        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-96 rounded-[50%] opacity-15"
          style={{
            background: "var(--boomza-green)",
            transform: "rotate(-10deg)",
          }}
        />

        <div className="site-shell relative z-10 grid items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="order-2 lg:order-1">
            <div
              className="relative mx-auto aspect-[0.77] w-full max-w-[410px] overflow-hidden rounded-[12px_26px_26px_12px] bg-white shadow-[0_34px_80px_rgba(36,49,45,0.2)]"
              style={{
                transform: "rotate(-3deg)",
              }}
            >
              <Image
                src="/books/boomza-first-adventures-cover.JPG"
                alt="Boomza's First Adventures colouring book cover"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 410px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="section-label"
              style={{
                color: "var(--boomza-green-dark)",
              }}
            >
              Boomza Books
            </div>

            <h1
              className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(54px,7vw,96px)] font-semibold leading-[0.92] tracking-[-0.065em]"
              style={{
                color: "var(--boomza-ink)",
              }}
            >
              Boomza&apos;s First
              <span
                className="block"
                style={{
                  color: "var(--boomza-orange)",
                }}
              >
                Adventures.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              A cheerful colouring journey through everyday
              moments, family time, helping, playing and exploring
              — made for little hands and big imaginations.
            </p>

            <div className="book-details mt-7">
              <span>Ages 2–5</span>
              <span>Colouring book</span>
              <span>Everyday adventures</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#inside"
                className="boomza-button"
              >
                Look inside
                <span aria-hidden="true">↓</span>
              </Link>

              <Link
                href="/colour"
                className="boomza-button boomza-button-secondary"
              >
                Colour with Boomza
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 sm:py-28"
        style={{
          background: "var(--boomza-paper)",
        }}
      >
        <div className="site-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div
              className="section-label"
              style={{
                color: "var(--boomza-orange)",
              }}
            >
              A day with Boomza
            </div>

            <h2
              className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(42px,5vw,68px)] font-semibold leading-none tracking-[-0.055em]"
              style={{
                color: "var(--boomza-ink)",
              }}
            >
              Small moments become big adventures.
            </h2>

            <p
              className="mt-6 max-w-xl text-lg leading-8"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              Boomza&apos;s world begins with things children already
              know — waking up, eating breakfast, helping at home,
              spending time with family and discovering the outdoors.
            </p>

            <p
              className="mt-4 max-w-xl text-lg leading-8"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              Every page gives children space to imagine what the
              world should look like in their own colours.
            </p>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[48px_52px_42px_58px] bg-white shadow-[0_24px_70px_rgba(36,49,45,0.1)]">
            <Image
              src="/colouring/boomza-family-gardening.JPG"
              alt="Boomza gardening with his family"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section
        id="inside"
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
                Inside the book
              </div>

              <h2
                className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,5vw,68px)] font-semibold leading-none tracking-[-0.055em]"
                style={{
                  color: "var(--boomza-ink)",
                }}
              >
                A little peek at Boomza&apos;s day.
              </h2>
            </div>

            <p
              className="max-w-md text-lg leading-7"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              From morning routines to outdoor adventures, every
              page becomes part of Boomza&apos;s world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {previewPages.map((page, index) => (
              <article
                key={page.image}
                className={[
                  "bg-white p-4",
                  "rounded-[34px_40px_30px_38px]",
                  "shadow-[0_18px_50px_rgba(36,49,45,0.08)]",
                  index === 1
                    ? "md:translate-y-6 md:rotate-[1deg]"
                    : "",
                  index === 2
                    ? "md:-rotate-[0.8deg]"
                    : "",
                ].join(" ")}
              >
                <div className="relative aspect-[0.78] overflow-hidden rounded-[24px] border border-black/[0.06]">
                  <Image
                    src={page.image}
                    alt={`${page.title} colouring page`}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-contain"
                  />
                </div>

                <h3
                  className="px-2 pb-3 pt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.035em]"
                  style={{
                    color: "var(--boomza-ink)",
                  }}
                >
                  {page.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/colour"
              className="boomza-button boomza-button-secondary"
            >
              Explore Boomza&apos;s colouring world
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-24 sm:py-28"
        style={{
          background: "var(--boomza-blue-light)",
        }}
      >
        <div className="site-shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div
              className="section-label"
              style={{
                color: "var(--boomza-green-dark)",
              }}
            >
              Made for little hands
            </div>

            <h2
              className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,5vw,68px)] font-semibold leading-none tracking-[-0.055em]"
              style={{
                color: "var(--boomza-ink)",
              }}
            >
              Colour. Imagine. Talk. Discover.
            </h2>

            <p
              className="mt-6 max-w-2xl text-lg leading-8"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              Boomza is designed around familiar moments that give
              children something to recognise, talk about and make
              their own.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Recognise",
                  text: "Everyday moments children already know.",
                },
                {
                  number: "02",
                  title: "Imagine",
                  text: "Every blank page becomes their own world.",
                },
                {
                  number: "03",
                  title: "Connect",
                  text: "Family, friendship and helping are part of the story.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-[28px] bg-white p-6 shadow-[0_14px_38px_rgba(36,49,45,0.07)]"
                >
                  <div
                    className="font-[family-name:var(--font-display)] text-sm font-bold"
                    style={{
                      color: "var(--boomza-orange)",
                    }}
                  >
                    {item.number}
                  </div>

                  <div
                    className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold"
                    style={{
                      color: "var(--boomza-ink)",
                    }}
                  >
                    {item.title}
                  </div>

                  <p
                    className="mt-2 text-sm leading-6"
                    style={{
                      color: "var(--boomza-muted)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative mx-auto aspect-[0.77] w-full max-w-[330px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(36,49,45,0.12)]">
              <Image
                src="/books/boomza-book-belongs-to.JPG"
                alt="This book belongs to page from Boomza's First Adventures"
                fill
                sizes="330px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 sm:py-28"
        style={{
          background: "var(--boomza-cream)",
        }}
      >
        <div className="site-shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div
            className="relative mx-auto aspect-[0.77] w-full max-w-[350px] overflow-hidden rounded-[20px] bg-white shadow-[0_26px_70px_rgba(36,49,45,0.16)]"
            style={{
              transform: "rotate(2deg)",
            }}
          >
            <Image
              src="/books/boomza-book-back-cover.JPG"
              alt="Back cover of Boomza's First Adventures"
              fill
              sizes="350px"
              className="object-cover"
            />
          </div>

          <div>
            <div
              className="section-label"
              style={{
                color: "var(--boomza-orange)",
              }}
            >
              Coming soon
            </div>

            <h2
              className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(44px,5vw,72px)] font-semibold leading-none tracking-[-0.055em]"
              style={{
                color: "var(--boomza-ink)",
              }}
            >
              Take Boomza&apos;s adventure home.
            </h2>

            <p
              className="mt-6 max-w-xl text-lg leading-8"
              style={{
                color: "var(--boomza-muted)",
              }}
            >
              Boomza&apos;s First Adventures will be available soon.
              When the book is ready to order, you&apos;ll be able to
              find it right here.
            </p>

            <div className="mt-8">
              <span
                className="boomza-button"
                aria-disabled="true"
              >
                Book coming soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
