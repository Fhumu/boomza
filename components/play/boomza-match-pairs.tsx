"use client";

import {
  useMemo,
  useState,
} from "react";

type PairItem = {
  id: string;
  pairId: string;
  icon: string;
  label: string;
};

type GameStatus =
  | "idle"
  | "correct"
  | "incorrect"
  | "complete";

const leftItems: PairItem[] = [
  {
    id: "plant",
    pairId: "plant-water",
    icon: "🌱",
    label: "Plant",
  },
  {
    id: "bird",
    pairId: "bird-home",
    icon: "🐦",
    label: "Bird",
  },
  {
    id: "toothbrush",
    pairId: "brush-teeth",
    icon: "🪥",
    label: "Toothbrush",
  },
  {
    id: "sun",
    pairId: "sun-flower",
    icon: "☀️",
    label: "Sun",
  },
  {
    id: "apple",
    pairId: "apple-basket",
    icon: "🍎",
    label: "Apple",
  },
  {
    id: "spoon",
    pairId: "spoon-bowl",
    icon: "🥄",
    label: "Spoon",
  },
];

const rightItems: PairItem[] = [
  {
    id: "water",
    pairId: "plant-water",
    icon: "💧",
    label: "Water",
  },
  {
    id: "birdhouse",
    pairId: "bird-home",
    icon: "🏠",
    label: "Birdhouse",
  },
  {
    id: "teeth",
    pairId: "brush-teeth",
    icon: "🦷",
    label: "Teeth",
  },
  {
    id: "flower",
    pairId: "sun-flower",
    icon: "🌻",
    label: "Flower",
  },
  {
    id: "basket",
    pairId: "apple-basket",
    icon: "🧺",
    label: "Basket",
  },
  {
    id: "bowl",
    pairId: "spoon-bowl",
    icon: "🥣",
    label: "Bowl",
  },
];

const totalPairs =
  leftItems.length;

export default function BoomzaMatchPairs() {
  const [
    selectedLeft,
    setSelectedLeft,
  ] = useState<PairItem | null>(
    null,
  );

  const [
    selectedRight,
    setSelectedRight,
  ] = useState<PairItem | null>(
    null,
  );

  const [
    matchedPairs,
    setMatchedPairs,
  ] = useState<string[]>([]);

  const [
    status,
    setStatus,
  ] = useState<GameStatus>(
    "idle",
  );

  const [
    message,
    setMessage,
  ] = useState(
    "Pick one picture from each side.",
  );

  const complete =
    matchedPairs.length ===
    totalPairs;

  const remaining = useMemo(
    () =>
      totalPairs -
      matchedPairs.length,
    [matchedPairs],
  );

  const resetSelections = () => {
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const checkPair = (
    left: PairItem,
    right: PairItem,
  ) => {
    if (
      left.pairId ===
      right.pairId
    ) {
      const nextMatched = [
        ...matchedPairs,
        left.pairId,
      ];

      setMatchedPairs(
        nextMatched,
      );

      setStatus(
        nextMatched.length ===
          totalPairs
          ? "complete"
          : "correct",
      );

      setMessage(
        nextMatched.length ===
          totalPairs
          ? "You matched them all!"
          : `${left.label} and ${right.label} go together!`,
      );

      resetSelections();

      return;
    }

    setStatus(
      "incorrect",
    );

    setMessage(
      "Good try! Those two do not belong together.",
    );
  };

  const chooseLeft = (
    item: PairItem,
  ) => {
    if (
      matchedPairs.includes(
        item.pairId,
      )
    ) {
      return;
    }

    setSelectedLeft(
      item,
    );

    setStatus(
      "idle",
    );

    setMessage(
      `You picked ${item.label}. Now find what goes with it.`,
    );

    if (selectedRight) {
      checkPair(
        item,
        selectedRight,
      );
    }
  };

  const chooseRight = (
    item: PairItem,
  ) => {
    if (
      matchedPairs.includes(
        item.pairId,
      )
    ) {
      return;
    }

    setSelectedRight(
      item,
    );

    setStatus(
      "idle",
    );

    setMessage(
      `You picked ${item.label}. Now find its match.`,
    );

    if (selectedLeft) {
      checkPair(
        selectedLeft,
        item,
      );
    }
  };

  const restart = () => {
    setMatchedPairs([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setStatus("idle");
    setMessage(
      "Pick one picture from each side.",
    );
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
          Match the pairs
        </div>

        <h2
          className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,7vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em]"
          style={{
            color:
              "var(--boomza-ink)",
          }}
        >
          What goes together?
        </h2>

        <p
          className="mx-auto mt-5 max-w-xl text-lg leading-8"
          style={{
            color:
              "var(--boomza-muted)",
          }}
        >
          Pick one picture from
          each side and help Boomza
          find the matching pairs.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
          {leftItems.map(
            (item) => {
              const matched =
                matchedPairs.includes(
                  item.pairId,
                );

              const selected =
                selectedLeft?.id ===
                item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={matched}
                  onClick={() =>
                    chooseLeft(
                      item,
                    )
                  }
                  className={[
                    "relative min-h-[150px] rounded-[26px_30px_24px_28px] border-2 bg-white p-4 text-center",
                    "shadow-[0_14px_38px_rgba(36,49,45,0.08)]",
                    "transition-all duration-200",
                    "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4",
                    matched
                      ? "scale-[0.97] opacity-55"
                      : "hover:-translate-y-1",
                  ].join(
                    " ",
                  )}
                  style={{
                    borderColor:
                      matched
                        ? "var(--boomza-green)"
                        : selected
                          ? "var(--boomza-orange)"
                          : "rgba(36,49,45,0.08)",
                    outlineColor:
                      "var(--boomza-orange)",
                    background:
                      selected
                        ? "var(--boomza-cream)"
                        : "#ffffff",
                  }}
                >
                  {matched && (
                    <div
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{
                        background:
                          "var(--boomza-green-dark)",
                      }}
                    >
                      ✓
                    </div>
                  )}

                  <div
                    className="text-5xl sm:text-6xl"
                    aria-hidden="true"
                  >
                    {
                      item.icon
                    }
                  </div>

                  <div
                    className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold"
                    style={{
                      color:
                        "var(--boomza-ink)",
                    }}
                  >
                    {
                      item.label
                    }
                  </div>
                </button>
              );
            },
          )}
        </div>

        <div className="hidden flex-col items-center gap-3 lg:flex">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-2xl font-bold"
            style={{
              background:
                "var(--boomza-yellow)",
              color:
                "var(--boomza-ink)",
            }}
          >
            ↔
          </div>

          <span
            className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.08em]"
            style={{
              color:
                "var(--boomza-muted)",
            }}
          >
            Match
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
          {rightItems.map(
            (item) => {
              const matched =
                matchedPairs.includes(
                  item.pairId,
                );

              const selected =
                selectedRight?.id ===
                item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={matched}
                  onClick={() =>
                    chooseRight(
                      item,
                    )
                  }
                  className={[
                    "relative min-h-[150px] rounded-[26px_30px_24px_28px] border-2 bg-white p-4 text-center",
                    "shadow-[0_14px_38px_rgba(36,49,45,0.08)]",
                    "transition-all duration-200",
                    "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4",
                    matched
                      ? "scale-[0.97] opacity-55"
                      : "hover:-translate-y-1",
                  ].join(
                    " ",
                  )}
                  style={{
                    borderColor:
                      matched
                        ? "var(--boomza-green)"
                        : selected
                          ? "var(--boomza-orange)"
                          : "rgba(36,49,45,0.08)",
                    outlineColor:
                      "var(--boomza-orange)",
                    background:
                      selected
                        ? "var(--boomza-blue-light)"
                        : "#ffffff",
                  }}
                >
                  {matched && (
                    <div
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{
                        background:
                          "var(--boomza-green-dark)",
                      }}
                    >
                      ✓
                    </div>
                  )}

                  <div
                    className="text-5xl sm:text-6xl"
                    aria-hidden="true"
                  >
                    {
                      item.icon
                    }
                  </div>

                  <div
                    className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold"
                    style={{
                      color:
                        "var(--boomza-ink)",
                    }}
                  >
                    {
                      item.label
                    }
                  </div>
                </button>
              );
            },
          )}
        </div>
      </div>

      <div
        className="mt-8 rounded-[28px_32px_26px_30px] border border-dashed px-6 py-5 sm:px-8"
        aria-live="polite"
        style={{
          borderColor:
            complete
              ? "rgba(65,108,66,0.28)"
              : status ===
                  "incorrect"
                ? "rgba(242,139,60,0.34)"
                : "rgba(120,184,212,0.34)",

          background:
            complete
              ? "rgba(120,173,91,0.14)"
              : status ===
                  "incorrect"
                ? "rgba(242,139,60,0.10)"
                : "rgba(223,243,248,0.65)",
        }}
      >
        {complete ? (
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
                You matched them all!
              </strong>

              <p
                className="mt-1"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Brilliant matching.
                All six Boomza pairs
                belong together.
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
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <strong
                className="font-[family-name:var(--font-display)] text-xl"
                style={{
                  color:
                    status ===
                    "incorrect"
                      ? "var(--boomza-orange)"
                      : "var(--boomza-green-dark)",
                }}
              >
                {status ===
                "incorrect"
                  ? "Try another pair!"
                  : status ===
                      "correct"
                    ? "Great match!"
                    : "What goes together?"}
              </strong>

              <p
                className="mt-1"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                {
                  message
                }
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
                matchedPairs.length
              }
              /{totalPairs} matched
            </div>
          </div>
        )}

        {!complete &&
          remaining === 1 && (
            <p
              className="mt-4 text-sm font-bold"
              style={{
                color:
                  "var(--boomza-orange)",
              }}
            >
              One pair left!
            </p>
          )}
      </div>
    </div>
  );
}