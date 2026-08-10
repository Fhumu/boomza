"use client";

import { useState } from "react";

type ColourOption = {
  id: string;
  label: string;
  colour: string;
};

type Round = {
  eyebrow: string;
  question: string;
  hint: string;
  correct: string;
};

const colours: ColourOption[] = [
  {
    id: "yellow",
    label: "Yellow",
    colour: "#f8c947",
  },
  {
    id: "blue",
    label: "Blue",
    colour: "#78b8d4",
  },
  {
    id: "green",
    label: "Green",
    colour: "#78ad5b",
  },
  {
    id: "orange",
    label: "Orange",
    colour: "#f28b3c",
  },
];

const rounds: Round[] = [
  {
    eyebrow: "Round 1",
    question: "Can you find the yellow sun?",
    hint: "Look for the colour that shines like sunshine.",
    correct: "yellow",
  },
  {
    eyebrow: "Round 2",
    question: "Which colour matches the sky?",
    hint: "Think about a bright day in Boomza's world.",
    correct: "blue",
  },
  {
    eyebrow: "Round 3",
    question: "Which colour would you choose for the grass?",
    hint: "Boomza loves playing outside.",
    correct: "green",
  },
];

export default function BoomzaColourGame() {
  const [roundIndex, setRoundIndex] = useState(0);
  const [selectedColour, setSelectedColour] = useState<string | null>(
    null,
  );
  const [status, setStatus] = useState<
    "idle" | "correct" | "incorrect" | "complete"
  >("idle");

  const round = rounds[roundIndex];

  const checkColour = (colourId: string) => {
    setSelectedColour(colourId);

    if (colourId === round.correct) {
      setStatus("correct");
      return;
    }

    setStatus("incorrect");
  };

  const nextRound = () => {
    if (roundIndex === rounds.length - 1) {
      setStatus("complete");
      return;
    }

    setRoundIndex((current) => current + 1);
    setSelectedColour(null);
    setStatus("idle");
  };

  const restart = () => {
    setRoundIndex(0);
    setSelectedColour(null);
    setStatus("idle");
  };

  if (status === "complete") {
    return (
      <div className="mx-auto max-w-3xl rounded-[46px_54px_44px_58px] bg-white px-7 py-14 text-center shadow-[0_24px_70px_rgba(36,49,45,0.12)] sm:px-12 sm:py-16">
        <div className="text-6xl" aria-hidden="true">
          ⭐
        </div>

        <p
          className="mt-5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em]"
          style={{
            color: "var(--boomza-orange)",
          }}
        >
          Adventure complete
        </p>

        <h2
          className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(44px,7vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em]"
          style={{
            color: "var(--boomza-ink)",
          }}
        >
          You found Boomza&apos;s colours!
        </h2>

        <p
          className="mx-auto mt-5 max-w-xl text-lg leading-8"
          style={{
            color: "var(--boomza-muted)",
          }}
        >
          Great exploring. Boomza&apos;s world is looking colourful
          again.
        </p>

        <button
          type="button"
          onClick={restart}
          className="boomza-button mt-8 cursor-pointer"
        >
          Play again
          <span aria-hidden="true">↻</span>
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-7 flex items-center justify-center gap-3">
        {rounds.map((item, index) => {
          const complete = index < roundIndex;
          const active = index === roundIndex;

          return (
            <div
              key={item.eyebrow}
              className="h-3 rounded-full transition-all duration-300"
              style={{
                width: active ? "56px" : "20px",
                background:
                  complete || active
                    ? "var(--boomza-orange)"
                    : "rgba(36,49,45,0.12)",
              }}
            />
          );
        })}
      </div>

      <div className="grid overflow-hidden rounded-[50px_42px_58px_46px] bg-white shadow-[0_28px_80px_rgba(36,49,45,0.12)] lg:grid-cols-[0.92fr_1.08fr]">
        <div
          className="relative min-h-[370px] overflow-hidden p-9 sm:min-h-[460px] sm:p-12"
          style={{
            background:
              status === "correct"
                ? "var(--boomza-blue-light)"
                : "#fff9ed",
          }}
        >
          <div
            className="absolute -right-10 -top-12 h-40 w-40 rounded-full"
            style={{
              background: "var(--boomza-yellow)",
              opacity: 0.75,
            }}
          />

          <div
            className="absolute -bottom-16 -left-12 h-48 w-80 rounded-[50%]"
            style={{
              background: "var(--boomza-green)",
              opacity: 0.18,
              transform: "rotate(-8deg)",
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p
                className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em]"
                style={{
                  color: "var(--boomza-orange)",
                }}
              >
                {round.eyebrow}
              </p>

              <h2
                className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-[clamp(40px,5vw,62px)] font-semibold leading-[0.95] tracking-[-0.055em]"
                style={{
                  color: "var(--boomza-ink)",
                }}
              >
                {round.question}
              </h2>

              <p
                className="mt-5 max-w-md text-base leading-7 sm:text-lg"
                style={{
                  color: "var(--boomza-muted)",
                }}
              >
                {round.hint}
              </p>
            </div>

            <div
              className="mt-10 flex h-24 w-24 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-sm font-bold shadow-[0_10px_0_rgba(36,49,45,0.1)]"
              style={{
                background:
                  status === "correct"
                    ? "var(--boomza-yellow)"
                    : "var(--boomza-green-dark)",
                color:
                  status === "correct"
                    ? "var(--boomza-ink)"
                    : "#ffffff",
              }}
            >
              {status === "correct" ? "YES!" : "BOOMZA"}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-12">
          <div className="grid grid-cols-2 gap-4">
            {colours.map((colour) => {
              const selected = selectedColour === colour.id;

              return (
                <button
                  key={colour.id}
                  type="button"
                  onClick={() => checkColour(colour.id)}
                  disabled={status === "correct"}
                  className="group cursor-pointer rounded-[28px_34px_26px_32px] border-2 bg-white p-4 text-left transition-all duration-200 hover:-translate-y-1 disabled:cursor-default sm:p-5"
                  style={{
                    borderColor: selected
                      ? "var(--boomza-ink)"
                      : "rgba(36,49,45,0.1)",
                    boxShadow: selected
                      ? "0 10px 0 rgba(36,49,45,0.12)"
                      : "0 8px 24px rgba(36,49,45,0.06)",
                  }}
                  aria-pressed={selected}
                >
                  <span
                    className="block aspect-square w-full rounded-[22px_26px_20px_24px] transition-transform duration-200 group-hover:scale-[1.02]"
                    style={{
                      background: colour.colour,
                    }}
                  />

                  <strong
                    className="mt-4 block font-[family-name:var(--font-display)] text-lg font-semibold"
                    style={{
                      color: "var(--boomza-ink)",
                    }}
                  >
                    {colour.label}
                  </strong>
                </button>
              );
            })}
          </div>

          <div
            className="mt-7 min-h-24 rounded-[24px] px-5 py-4"
            aria-live="polite"
            style={{
              background:
                status === "correct"
                  ? "rgba(120,173,91,0.13)"
                  : status === "incorrect"
                    ? "rgba(242,139,60,0.12)"
                    : "rgba(120,184,212,0.12)",
            }}
          >
            {status === "idle" && (
              <p
                className="font-semibold"
                style={{
                  color: "var(--boomza-muted)",
                }}
              >
                Tap a colour to make your choice.
              </p>
            )}

            {status === "incorrect" && (
              <div>
                <strong
                  className="font-[family-name:var(--font-display)] text-xl"
                  style={{
                    color: "var(--boomza-orange)",
                  }}
                >
                  Almost!
                </strong>

                <p
                  className="mt-1"
                  style={{
                    color: "var(--boomza-muted)",
                  }}
                >
                  Try another colour.
                </p>
              </div>
            )}

            {status === "correct" && (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <strong
                    className="font-[family-name:var(--font-display)] text-xl"
                    style={{
                      color: "var(--boomza-green-dark)",
                    }}
                  >
                    You found it!
                  </strong>

                  <p
                    className="mt-1"
                    style={{
                      color: "var(--boomza-muted)",
                    }}
                  >
                    Boomza is ready for the next clue.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={nextRound}
                  className="boomza-button cursor-pointer whitespace-nowrap"
                >
                  {roundIndex === rounds.length - 1
                    ? "Finish"
                    : "Next clue"}

                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
