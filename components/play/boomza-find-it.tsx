"use client";

import Image from "next/image";
import {
  useMemo,
  useState,
} from "react";

type HiddenObject = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
};

const hiddenObjects: HiddenObject[] = [
  {
    id: "cloud",
    label: "Cloud",
    icon: "☁️",
    x: 18,
    y: 9,
  },
  {
    id: "plant",
    label: "Little plant",
    icon: "🌱",
    x: 52,
    y: 61,
  },
  {
    id: "watering-can",
    label: "Watering can",
    icon: "🪣",
    x: 76,
    y: 70,
  },
  {
    id: "trowel",
    label: "Trowel",
    icon: "🪴",
    x: 31,
    y: 78,
  },
  {
    id: "flower-pot",
    label: "Flower pot",
    icon: "🌼",
    x: 8,
    y: 86,
  },
];

export default function BoomzaFindIt() {
  const [
    found,
    setFound,
  ] = useState<string[]>([]);

  const complete =
    found.length ===
    hiddenObjects.length;

  const remaining = useMemo(
    () =>
      hiddenObjects.length -
      found.length,
    [found],
  );

  const findObject = (
    id: string,
  ) => {
    setFound((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [
        ...current,
        id,
      ];
    });
  };

  const restart = () => {
    setFound([]);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <div
          className="section-label"
          style={{
            color:
              "var(--boomza-orange)",
          }}
        >
          Find It!
        </div>

        <h2
          className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,7vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em]"
          style={{
            color:
              "var(--boomza-ink)",
          }}
        >
          What can you find
          in Boomza&apos;s garden?
        </h2>

        <p
          className="mx-auto mt-5 max-w-xl text-lg leading-8"
          style={{
            color:
              "var(--boomza-muted)",
          }}
        >
          Look carefully around the
          picture and tap each thing
          when you find it.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <aside
          className="rounded-[30px_36px_28px_34px] p-6 sm:p-8"
          style={{
            background:
              "var(--boomza-green-dark)",
          }}
        >
          <div
            className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.1em]"
            style={{
              color:
                "var(--boomza-yellow)",
            }}
          >
            Things to find
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-1">
            {hiddenObjects.map(
              (object) => {
                const isFound =
                  found.includes(
                    object.id,
                  );

                return (
                  <div
                    key={
                      object.id
                    }
                    className={[
                      "flex min-h-16 items-center gap-3 rounded-2xl px-4 py-3",
                      isFound
                        ? "bg-white/20"
                        : "bg-white/10",
                    ].join(
                      " ",
                    )}
                  >
                    <span
                      className="text-2xl"
                      aria-hidden="true"
                    >
                      {
                        object.icon
                      }
                    </span>

                    <span
                      className={[
                        "flex-1 font-[family-name:var(--font-display)] text-base font-bold text-white",
                        isFound
                          ? "line-through opacity-60"
                          : "",
                      ].join(
                        " ",
                      )}
                    >
                      {
                        object.label
                      }
                    </span>

                    {isFound && (
                      <span
                        className="font-bold text-white"
                        aria-label="Found"
                      >
                        ✓
                      </span>
                    )}
                  </div>
                );
              },
            )}
          </div>

          <div className="mt-7 border-t border-white/15 pt-6">
            <strong className="font-[family-name:var(--font-display)] text-lg text-white">
              {
                found.length
              }
              /
              {
                hiddenObjects.length
              }
            </strong>

            <span className="ml-2 text-white/70">
              found
            </span>
          </div>

          {!complete && (
            <p className="mt-3 text-sm leading-6 text-white/65">
              {remaining === 1
                ? "One thing is still hiding."
                : `${remaining} things are still hiding.`}
            </p>
          )}
        </aside>

        <div>
          <div className="relative overflow-hidden rounded-[34px_40px_30px_38px] bg-white shadow-[0_20px_60px_rgba(36,49,45,0.10)]">
            <div className="relative aspect-[0.78]">
              <Image
                src="/colouring/boomza-family-gardening.JPG"
                alt="Boomza and his family gardening together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover"
              />

              {hiddenObjects.map(
                (object) => {
                  const isFound =
                    found.includes(
                      object.id,
                    );

                  return (
                    <button
                      key={
                        object.id
                      }
                      type="button"
                      onClick={() =>
                        findObject(
                          object.id,
                        )
                      }
                      aria-label={`Find ${object.label}`}
                      className={[
                        "absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24",
                        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4",
                        isFound
                          ? "border-4 border-dashed border-white bg-[rgba(65,108,66,0.62)] shadow-[0_0_0_6px_rgba(65,108,66,0.20)]"
                          : "bg-transparent",
                      ].join(
                        " ",
                      )}
                      style={{
                        left: `${object.x}%`,
                        top: `${object.y}%`,
                        outlineColor:
                          "var(--boomza-orange)",
                      }}
                    >
                      {isFound && (
                        <span className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          <div
            className="mt-6 rounded-[28px_32px_26px_30px] border border-dashed px-6 py-5 sm:px-8"
            aria-live="polite"
            style={{
              borderColor:
                complete
                  ? "rgba(65,108,66,0.28)"
                  : "rgba(242,139,60,0.30)",

              background:
                complete
                  ? "rgba(120,173,91,0.14)"
                  : "rgba(255,249,232,0.92)",
            }}
          >
            {!complete ? (
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <strong
                    className="font-[family-name:var(--font-display)] text-xl"
                    style={{
                      color:
                        "var(--boomza-orange)",
                    }}
                  >
                    Look carefully!
                  </strong>

                  <p
                    className="mt-1"
                    style={{
                      color:
                        "var(--boomza-muted)",
                    }}
                  >
                    Tap each object when
                    you spot it in
                    Boomza&apos;s garden.
                  </p>
                </div>

                <div
                  className="shrink-0 rounded-full px-5 py-3 font-[family-name:var(--font-display)] font-bold"
                  style={{
                    background:
                      "var(--boomza-green-dark)",
                    color:
                      "#ffffff",
                  }}
                >
                  {
                    found.length
                  }
                  /
                  {
                    hiddenObjects.length
                  }
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <div>
                  <div
                    className="text-4xl"
                    aria-hidden="true"
                  >
                    ⭐
                  </div>

                  <strong
                    className="mt-2 block font-[family-name:var(--font-display)] text-2xl"
                    style={{
                      color:
                        "var(--boomza-green-dark)",
                    }}
                  >
                    You found everything!
                  </strong>

                  <p
                    className="mt-1"
                    style={{
                      color:
                        "var(--boomza-muted)",
                    }}
                  >
                    Brilliant looking.
                    You found all five
                    things in
                    Boomza&apos;s garden.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={
                    restart
                  }
                  className="boomza-button cursor-pointer self-center sm:self-auto"
                >
                  Play again

                  <span
                    aria-hidden="true"
                  >
                    ↻
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}