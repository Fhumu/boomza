"use client";

import Image from "next/image";
import {
  useState,
} from "react";

type Hotspot = {
  id: string;
  label: string;
  x: number;
  y: number;
};

type Round = {
  eyebrow: string;
  question: string;
  hint: string;
  correct: string;
  success: string;
  hotspots: Hotspot[];
};

const rounds: Round[] = [
  {
    eyebrow: "Clue 01",
    question: "Can you find something yellow?",
    hint:
      "Look carefully around Boomza. Something bright is hiding on his outfit.",
    correct: "pocket",
    success:
      "You found Boomza's yellow pocket!",
    hotspots: [
      {
        id: "pocket",
        label: "Boomza's yellow pocket",
        x: 45,
        y: 68,
      },
      {
        id: "butterfly",
        label: "Butterfly",
        x: 70,
        y: 54,
      },
      {
        id: "flowers",
        label: "Flowers",
        x: 78,
        y: 83,
      },
    ],
  },
  {
    eyebrow: "Clue 02",
    question: "Can you find the blue sky?",
    hint:
      "Look above Boomza and around the clouds.",
    correct: "sky",
    success:
      "That bright blue sky is exactly right!",
    hotspots: [
      {
        id: "sky",
        label: "Blue sky",
        x: 67,
        y: 27,
      },
      {
        id: "rainbow",
        label: "Rainbow",
        x: 88,
        y: 47,
      },
      {
        id: "tree",
        label: "Tree",
        x: 13,
        y: 28,
      },
    ],
  },
  {
    eyebrow: "Clue 03",
    question: "Can you find something green?",
    hint:
      "Look near Boomza's feet. What covers the ground?",
    correct: "grass",
    success:
      "You found the green grass!",
    hotspots: [
      {
        id: "grass",
        label: "Green grass",
        x: 61,
        y: 86,
      },
      {
        id: "flowers",
        label: "Flowers",
        x: 82,
        y: 84,
      },
      {
        id: "sign",
        label: "Wooden sign",
        x: 82,
        y: 66,
      },
    ],
  },
];

function Progress({
  roundIndex,
}: {
  roundIndex: number;
}) {
  return (
    <div
      className="mb-8 flex items-center justify-center gap-3"
      aria-label={`Clue ${roundIndex + 1} of ${rounds.length}`}
    >
      {rounds.map(
        (
          round,
          index,
        ) => {
          const complete =
            index < roundIndex;

          const active =
            index === roundIndex;

          return (
            <div
              key={round.eyebrow}
              className="h-3 rounded-full transition-all duration-300"
              style={{
                width: active
                  ? "58px"
                  : "20px",

                background:
                  complete ||
                  active
                    ? "var(--boomza-orange)"
                    : "rgba(36,49,45,0.12)",
              }}
            />
          );
        },
      )}
    </div>
  );
}

export default function BoomzaColourGame() {
  const [
    roundIndex,
    setRoundIndex,
  ] = useState(0);

  const [
    selectedHotspot,
    setSelectedHotspot,
  ] = useState<string | null>(null);

  const [
    status,
    setStatus,
  ] = useState<
    | "idle"
    | "correct"
    | "incorrect"
    | "complete"
  >("idle");

  const round =
    rounds[roundIndex];

  const checkHotspot = (
    hotspotId: string,
  ) => {
    if (
      status === "correct"
    ) {
      return;
    }

    setSelectedHotspot(
      hotspotId,
    );

    if (
      hotspotId ===
      round.correct
    ) {
      setStatus(
        "correct",
      );

      return;
    }

    setStatus(
      "incorrect",
    );
  };

  const nextRound = () => {
    if (
      roundIndex ===
      rounds.length - 1
    ) {
      setStatus(
        "complete",
      );

      return;
    }

    setRoundIndex(
      (current) =>
        current + 1,
    );

    setSelectedHotspot(
      null,
    );

    setStatus(
      "idle",
    );
  };

  const restart = () => {
    setRoundIndex(0);
    setSelectedHotspot(
      null,
    );
    setStatus(
      "idle",
    );
  };

  if (
    status === "complete"
  ) {
    return (
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[42px_50px_48px_58px] bg-white shadow-[0_28px_80px_rgba(36,49,45,0.12)]">
          <div className="grid lg:grid-cols-[1fr_0.92fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-[var(--boomza-blue-light)] sm:min-h-[520px] lg:min-h-[600px]">
              <div
                className="absolute -bottom-24 -left-20 h-64 w-[135%] rounded-[50%]"
                style={{
                  background:
                    "var(--boomza-green)",
                }}
              />

              <div
                className="absolute right-7 top-7 h-24 w-24 rounded-full sm:h-28 sm:w-28"
                style={{
                  background:
                    "var(--boomza-yellow)",
                  boxShadow:
                    "0 0 0 18px rgba(248,201,71,0.18)",
                }}
              />

              <div className="absolute inset-x-[8%] bottom-0 top-8 overflow-hidden rounded-[48%_52%_46%_54%/42%_42%_58%_58%] border-[5px] border-white/85 shadow-[0_24px_60px_rgba(36,49,45,0.18)] sm:inset-x-[13%]">
                <Image
                  src="/books/boomza-first-adventures-cover.JPG"
                  alt="Boomza smiling in his colourful world"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover object-[44%_52%]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center px-7 py-12 text-center sm:px-12 sm:py-16 lg:px-14 lg:text-left">
              <div
                className="text-6xl"
                aria-hidden="true"
              >
                ⭐
              </div>

              <p
                className="mt-5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em]"
                style={{
                  color:
                    "var(--boomza-orange)",
                }}
              >
                Adventure complete
              </p>

              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-[clamp(44px,7vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em]"
                style={{
                  color:
                    "var(--boomza-ink)",
                }}
              >
                You found
                Boomza&apos;s
                colourful world!
              </h2>

              <p
                className="mt-5 max-w-xl text-lg leading-8"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Brilliant exploring.
                You followed every
                clue and helped
                Boomza spot all the
                colours.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={
                    restart
                  }
                  className="boomza-button cursor-pointer"
                >
                  Play again

                  <span
                    aria-hidden="true"
                  >
                    ↻
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <Progress
        roundIndex={
          roundIndex
        }
      />

      <div className="overflow-hidden rounded-[42px_50px_48px_58px] bg-white shadow-[0_28px_80px_rgba(36,49,45,0.12)]">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative overflow-hidden bg-[var(--boomza-green-dark)] px-7 py-9 text-white sm:px-10 sm:py-12 lg:min-h-[680px] lg:px-12">
            <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[var(--boomza-yellow)] opacity-20" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-[130%] rounded-[50%] bg-[var(--boomza-green)] opacity-30" />

            <div className="relative z-10 flex h-full flex-col">
              <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em] text-[#f8d770]">
                {round.eyebrow}
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-[clamp(42px,9vw,68px)] font-semibold leading-[0.94] tracking-[-0.055em]">
                {round.question}
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-white/75 sm:text-lg">
                {round.hint}
              </p>

              <div className="mt-8 flex items-center gap-3 lg:mt-auto lg:pt-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/60 bg-[var(--boomza-orange)] font-[family-name:var(--font-display)] text-[11px] font-bold text-[var(--boomza-ink)] shadow-[0_7px_0_rgba(0,0,0,0.09)]">
                  LOOK!
                </div>

                <p className="max-w-[220px] text-sm leading-6 text-white/65">
                  Tap one of the
                  dotted places in
                  Boomza&apos;s
                  picture.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white p-4 sm:p-7 lg:p-9">
            <div className="mb-5 px-2 sm:px-1">
              <p
                className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.1em]"
                style={{
                  color:
                    "var(--boomza-green-dark)",
                }}
              >
                Explore Boomza&apos;s
                world
              </p>

              <p
                className="mt-2 text-base leading-7"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Look around the
                picture and tap the
                object that answers
                the clue.
              </p>
            </div>

            <div className="relative isolate aspect-[0.79] w-full overflow-hidden rounded-[32px_38px_30px_42px] bg-[var(--boomza-blue-light)] shadow-[inset_0_0_0_1px_rgba(36,49,45,0.06)] sm:aspect-[1.15] lg:flex-1">
              <Image
                src="/books/boomza-first-adventures-cover.JPG"
                alt="Boomza standing in his colourful outdoor world"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 58vw"
                className="object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.03] via-transparent to-white/[0.04]" />

              {round.hotspots.map(
                (
                  hotspot,
                ) => {
                  const selected =
                    selectedHotspot ===
                    hotspot.id;

                  const correct =
                    selected &&
                    hotspot.id ===
                      round.correct;

                  const incorrect =
                    selected &&
                    hotspot.id !==
                      round.correct;

                  return (
                    <button
                      key={
                        hotspot.id
                      }
                      type="button"
                      onClick={() =>
                        checkHotspot(
                          hotspot.id,
                        )
                      }
                      disabled={
                        status ===
                        "correct"
                      }
                      aria-label={`Choose ${hotspot.label}`}
                      className={[
                        "group absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full",
                        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white",
                        "disabled:cursor-default",
                      ].join(
                        " ",
                      )}
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                      }}
                    >
                      <span
                        className={[
                          "relative flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-dashed transition-all duration-200",
                          "sm:h-16 sm:w-16 lg:h-[70px] lg:w-[70px]",
                          correct
                            ? "scale-110"
                            : "",
                          incorrect
                            ? "scale-90"
                            : "",
                          !selected
                            ? "group-hover:scale-110"
                            : "",
                        ].join(
                          " ",
                        )}
                        style={{
                          borderColor:
                            correct
                              ? "#ffffff"
                              : incorrect
                                ? "var(--boomza-orange)"
                                : "rgba(255,255,255,0.95)",

                          background:
                            correct
                              ? "rgba(65,108,66,0.88)"
                              : incorrect
                                ? "rgba(242,139,60,0.88)"
                                : "rgba(255,255,255,0.13)",

                          boxShadow:
                            "0 6px 24px rgba(36,49,45,0.24)",
                        }}
                      >
                        <span
                          className={[
                            "h-3 w-3 rounded-full transition-transform duration-200",
                            correct
                              ? "scale-150"
                              : "",
                          ].join(
                            " ",
                          )}
                          style={{
                            background:
                              correct
                                ? "var(--boomza-yellow)"
                                : "#ffffff",
                          }}
                        />
                      </span>

                      {selected && (
                        <span
                          className="absolute left-1/2 top-[calc(100%+8px)] min-w-max -translate-x-1/2 rounded-full px-3 py-2 font-[family-name:var(--font-display)] text-xs font-bold shadow-[0_8px_20px_rgba(36,49,45,0.18)]"
                          style={{
                            background:
                              correct
                                ? "var(--boomza-green-dark)"
                                : "var(--boomza-orange)",

                            color:
                              "#ffffff",
                          }}
                        >
                          {correct
                            ? "YES!"
                            : "TRY AGAIN"}
                        </span>
                      )}
                    </button>
                  );
                },
              )}

              <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-white/92 px-4 py-2 font-[family-name:var(--font-display)] text-xs font-semibold text-[var(--boomza-ink)] shadow-[0_8px_24px_rgba(36,49,45,0.12)] backdrop-blur-sm sm:bottom-5 sm:left-5 sm:text-sm">
                Find the dotted clues
              </div>
            </div>

            <div
              className="mt-5 min-h-[104px] rounded-[24px_28px_22px_26px] px-5 py-4"
              aria-live="polite"
              style={{
                background:
                  status ===
                  "correct"
                    ? "rgba(120,173,91,0.13)"
                    : status ===
                        "incorrect"
                      ? "rgba(242,139,60,0.12)"
                      : "rgba(120,184,212,0.12)",
              }}
            >
              {status ===
                "idle" && (
                <div>
                  <strong
                    className="font-[family-name:var(--font-display)] text-lg"
                    style={{
                      color:
                        "var(--boomza-ink)",
                    }}
                  >
                    Where is it hiding?
                  </strong>

                  <p
                    className="mt-1"
                    style={{
                      color:
                        "var(--boomza-muted)",
                    }}
                  >
                    Tap a dotted spot
                    in Boomza&apos;s
                    world.
                  </p>
                </div>
              )}

              {status ===
                "incorrect" && (
                <div>
                  <strong
                    className="font-[family-name:var(--font-display)] text-xl"
                    style={{
                      color:
                        "var(--boomza-orange)",
                    }}
                  >
                    Good try!
                  </strong>

                  <p
                    className="mt-1"
                    style={{
                      color:
                        "var(--boomza-muted)",
                    }}
                  >
                    That is not the
                    one. Have another
                    look around.
                  </p>
                </div>
              )}

              {status ===
                "correct" && (
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <strong
                      className="font-[family-name:var(--font-display)] text-xl"
                      style={{
                        color:
                          "var(--boomza-green-dark)",
                      }}
                    >
                      You found it!
                    </strong>

                    <p
                      className="mt-1"
                      style={{
                        color:
                          "var(--boomza-muted)",
                      }}
                    >
                      {round.success}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={
                      nextRound
                    }
                    className="boomza-button cursor-pointer whitespace-nowrap"
                  >
                    {roundIndex ===
                    rounds.length -
                      1
                      ? "Finish"
                      : "Next clue"}

                    <span
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
