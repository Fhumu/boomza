"use client";

import Image from "next/image";
import {
  useState,
} from "react";

type ClueOption = {
  id: string;
  label: string;
  description: string;
  type:
    | "sun"
    | "sky"
    | "grass"
    | "flower"
    | "cloud"
    | "butterfly";
};

type Round = {
  eyebrow: string;
  question: string;
  hint: string;
  correct: string;
  accent: string;
  options: ClueOption[];
};

const rounds: Round[] = [
  {
    eyebrow: "Clue 01",
    question: "Can you find something yellow?",
    hint: "Look around Boomza's world for something bright like sunshine.",
    correct: "sun",
    accent: "#f8c947",
    options: [
      {
        id: "sun",
        label: "Sun",
        description: "Bright and warm",
        type: "sun",
      },
      {
        id: "sky",
        label: "Sky",
        description: "A bright blue day",
        type: "sky",
      },
      {
        id: "grass",
        label: "Grass",
        description: "Soft and green",
        type: "grass",
      },
      {
        id: "flower",
        label: "Flower",
        description: "A cheerful orange bloom",
        type: "flower",
      },
    ],
  },
  {
    eyebrow: "Clue 02",
    question: "What matches the blue sky?",
    hint: "Boomza is outside on a beautiful sunny day.",
    correct: "sky",
    accent: "#78b8d4",
    options: [
      {
        id: "flower",
        label: "Flower",
        description: "Growing in the garden",
        type: "flower",
      },
      {
        id: "sky",
        label: "Sky",
        description: "Blue above Boomza",
        type: "sky",
      },
      {
        id: "sun",
        label: "Sun",
        description: "Shining overhead",
        type: "sun",
      },
      {
        id: "grass",
        label: "Grass",
        description: "Green beneath his feet",
        type: "grass",
      },
    ],
  },
  {
    eyebrow: "Clue 03",
    question: "What colour is the grass?",
    hint: "Look near Boomza's feet and find what grows across the garden.",
    correct: "grass",
    accent: "#78ad5b",
    options: [
      {
        id: "cloud",
        label: "Cloud",
        description: "Soft and white",
        type: "cloud",
      },
      {
        id: "butterfly",
        label: "Butterfly",
        description: "Fluttering nearby",
        type: "butterfly",
      },
      {
        id: "grass",
        label: "Grass",
        description: "Growing all around",
        type: "grass",
      },
      {
        id: "sun",
        label: "Sun",
        description: "Warm and yellow",
        type: "sun",
      },
    ],
  },
];

function IllustratedClue({
  type,
}: {
  type: ClueOption["type"];
}) {
  if (type === "sun") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#dff3f8]">
        <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[#f8c947] shadow-[0_0_0_14px_rgba(248,201,71,0.18)] sm:h-28 sm:w-28" />

        <div className="absolute -bottom-10 -left-12 h-36 w-[130%] rounded-[50%] bg-[#78ad5b]" />

        <div className="absolute bottom-8 right-7 h-8 w-8 rounded-full bg-[#f28b3c]" />

        <div className="absolute bottom-10 right-12 h-14 w-3 rounded-full bg-[#416c42]" />
      </div>
    );
  }

  if (type === "sky") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#78b8d4]">
        <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[#f8c947]" />

        <div className="absolute left-5 top-12 h-8 w-28 rounded-full bg-white/90">
          <div className="absolute -top-5 left-5 h-12 w-12 rounded-full bg-white" />
          <div className="absolute -top-3 right-4 h-10 w-10 rounded-full bg-white" />
        </div>

        <div className="absolute -bottom-16 -left-16 h-36 w-[140%] rounded-[50%] bg-[#78ad5b]" />
      </div>
    );
  }

  if (type === "grass") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#dff3f8]">
        <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#f8c947]" />

        <div className="absolute bottom-0 left-0 h-[58%] w-full bg-[#78ad5b]" />

        <div className="absolute bottom-0 left-[12%] h-24 w-3 -rotate-12 rounded-full bg-[#416c42]" />
        <div className="absolute bottom-0 left-[30%] h-28 w-3 rotate-6 rounded-full bg-[#416c42]" />
        <div className="absolute bottom-0 left-[50%] h-20 w-3 -rotate-6 rounded-full bg-[#416c42]" />
        <div className="absolute bottom-0 left-[70%] h-32 w-3 rotate-12 rounded-full bg-[#416c42]" />
        <div className="absolute bottom-0 left-[86%] h-24 w-3 -rotate-6 rounded-full bg-[#416c42]" />

        <div className="absolute bottom-14 left-[42%] h-12 w-12 rounded-full bg-[#ef9c9c]" />
        <div className="absolute bottom-10 left-[47%] h-16 w-3 rounded-full bg-[#416c42]" />
      </div>
    );
  }

  if (type === "flower") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#fff9ed]">
        <div className="absolute bottom-0 left-0 h-[34%] w-full bg-[#78ad5b]" />

        <div className="absolute bottom-[24%] left-1/2 h-28 w-4 -translate-x-1/2 rounded-full bg-[#416c42]" />

        <div className="absolute left-1/2 top-[26%] h-14 w-14 -translate-x-1/2 rounded-full bg-[#f8c947]" />

        <div className="absolute left-[35%] top-[24%] h-16 w-16 rounded-full bg-[#f28b3c]" />
        <div className="absolute right-[35%] top-[24%] h-16 w-16 rounded-full bg-[#f28b3c]" />
        <div className="absolute left-[42%] top-[12%] h-16 w-16 rounded-full bg-[#f28b3c]" />
        <div className="absolute left-[42%] top-[38%] h-16 w-16 rounded-full bg-[#f28b3c]" />
      </div>
    );
  }

  if (type === "cloud") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#78b8d4]">
        <div className="absolute left-1/2 top-1/2 h-16 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
          <div className="absolute -top-10 left-6 h-20 w-20 rounded-full bg-white" />
          <div className="absolute -top-7 right-7 h-16 w-16 rounded-full bg-white" />
        </div>

        <div className="absolute -bottom-12 left-0 h-28 w-full rounded-[50%] bg-[#78ad5b]" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#dff3f8]">
      <div className="absolute right-5 top-5 h-14 w-14 rounded-full bg-[#f8c947]" />

      <div className="absolute left-1/2 top-1/2 h-16 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#24312d]" />

      <div className="absolute left-[27%] top-[33%] h-24 w-20 rotate-[-24deg] rounded-[60%_40%_60%_40%] bg-[#f28b3c]" />

      <div className="absolute right-[27%] top-[33%] h-24 w-20 rotate-[24deg] rounded-[40%_60%_40%_60%] bg-[#f28b3c]" />

      <div className="absolute bottom-0 left-0 h-[30%] w-full bg-[#78ad5b]" />
    </div>
  );
}

export default function BoomzaColourGame() {
  const [
    roundIndex,
    setRoundIndex,
  ] = useState(0);

  const [
    selectedClue,
    setSelectedClue,
  ] = useState<string | null>(null);

  const [
    status,
    setStatus,
  ] = useState<
    "idle" | "correct" | "incorrect" | "complete"
  >("idle");

  const round = rounds[roundIndex];

  const checkClue = (
    clueId: string,
  ) => {
    setSelectedClue(clueId);

    if (
      clueId ===
      round.correct
    ) {
      setStatus("correct");
      return;
    }

    setStatus("incorrect");
  };

  const nextRound = () => {
    if (
      roundIndex ===
      rounds.length - 1
    ) {
      setStatus("complete");
      return;
    }

    setRoundIndex(
      (current) =>
        current + 1,
    );

    setSelectedClue(null);
    setStatus("idle");
  };

  const restart = () => {
    setRoundIndex(0);
    setSelectedClue(null);
    setStatus("idle");
  };

  if (
    status === "complete"
  ) {
    return (
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[42px_52px_46px_58px] bg-white shadow-[0_28px_80px_rgba(36,49,45,0.12)]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[390px] overflow-hidden bg-[#dff3f8] sm:min-h-[480px]">
            <div className="absolute -left-20 bottom-0 h-40 w-[130%] rounded-[50%] bg-[#78ad5b]" />

            <div className="absolute right-7 top-7 h-24 w-24 rounded-full bg-[#f8c947] shadow-[0_0_0_18px_rgba(248,201,71,0.18)]" />

            <div className="absolute inset-x-[15%] bottom-0 top-6 overflow-hidden rounded-[45%_55%_45%_55%/42%_40%_60%_58%]">
              <Image
                src="/books/boomza-first-adventures-cover.JPG"
                alt="Boomza smiling after completing the colour adventure"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-[42%_58%] scale-[1.7]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-12 text-center sm:px-12 sm:py-16 lg:text-left">
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
              You found Boomza&apos;s colourful world!
            </h2>

            <p
              className="mt-5 max-w-xl text-lg leading-8"
              style={{
                color:
                  "var(--boomza-muted)",
              }}
            >
              Brilliant exploring. You followed every clue
              and helped Boomza find all the colours.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={restart}
                className="boomza-button cursor-pointer"
              >
                Play again
                <span aria-hidden="true">
                  ↻
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 flex items-center justify-center gap-3">
        {rounds.map(
          (
            item,
            index,
          ) => {
            const complete =
              index <
              roundIndex;

            const active =
              index ===
              roundIndex;

            return (
              <div
                key={
                  item.eyebrow
                }
                className="h-3 rounded-full transition-all duration-300"
                style={{
                  width:
                    active
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

      <div className="overflow-hidden rounded-[42px_50px_48px_58px] bg-white shadow-[0_28px_80px_rgba(36,49,45,0.12)]">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[430px] overflow-hidden bg-[#416c42] p-8 text-white sm:min-h-[560px] sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f8c947]/20" />

            <div className="absolute -bottom-16 -left-16 h-56 w-96 rounded-[50%] bg-[#78ad5b]/35" />

            <div className="relative z-10 flex h-full flex-col">
              <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em] text-[#f8d770]">
                {round.eyebrow}
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-[clamp(42px,6vw,66px)] font-semibold leading-[0.94] tracking-[-0.055em]">
                {round.question}
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-white/75 sm:text-lg">
                {round.hint}
              </p>

              <div className="relative mt-auto min-h-[260px] pt-10 sm:min-h-[300px]">
                <div className="absolute bottom-0 left-1/2 h-[270px] w-[230px] -translate-x-1/2 overflow-hidden rounded-[48%_52%_44%_56%/42%_42%_58%_58%] border-[5px] border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:h-[300px] sm:w-[250px]">
                  <Image
                    src="/books/boomza-first-adventures-cover.JPG"
                    alt="Boomza"
                    fill
                    sizes="260px"
                    className="object-cover object-[43%_59%] scale-[1.95]"
                  />
                </div>

                <div
                  className="absolute bottom-6 right-1 h-20 w-20 rounded-full border-4 border-white/70 shadow-[0_10px_0_rgba(0,0,0,0.08)] sm:h-24 sm:w-24"
                  style={{
                    background:
                      status ===
                      "correct"
                        ? "var(--boomza-yellow)"
                        : "var(--boomza-orange)",
                  }}
                >
                  <div className="flex h-full items-center justify-center font-[family-name:var(--font-display)] text-xs font-bold text-[var(--boomza-ink)]">
                    {status ===
                    "correct"
                      ? "YES!"
                      : "LOOK!"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <div className="mb-5">
              <p
                className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.1em]"
                style={{
                  color:
                    "var(--boomza-green-dark)",
                }}
              >
                Explore the picture
              </p>

              <p
                className="mt-2 text-base leading-7"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Tap the object that answers Boomza&apos;s clue.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {round.options.map(
                (
                  option,
                ) => {
                  const selected =
                    selectedClue ===
                    option.id;

                  const correct =
                    selected &&
                    option.id ===
                      round.correct;

                  const incorrect =
                    selected &&
                    option.id !==
                      round.correct;

                  return (
                    <button
                      key={
                        option.id
                      }
                      type="button"
                      onClick={() =>
                        checkClue(
                          option.id,
                        )
                      }
                      disabled={
                        status ===
                        "correct"
                      }
                      aria-pressed={
                        selected
                      }
                      className={[
                        "group overflow-hidden rounded-[26px_32px_28px_34px] border-2 bg-white text-left",
                        "transition-all duration-200",
                        "hover:-translate-y-1",
                        "disabled:cursor-default",
                        correct
                          ? "scale-[1.015]"
                          : "",
                        incorrect
                          ? "opacity-75"
                          : "",
                      ].join(
                        " ",
                      )}
                      style={{
                        borderColor:
                          selected
                            ? correct
                              ? "var(--boomza-green-dark)"
                              : "var(--boomza-orange)"
                            : "rgba(36,49,45,0.10)",

                        boxShadow:
                          selected
                            ? "0 10px 0 rgba(36,49,45,0.10)"
                            : "0 10px 28px rgba(36,49,45,0.06)",
                      }}
                    >
                      <div className="aspect-[1.18] overflow-hidden">
                        <IllustratedClue
                          type={
                            option.type
                          }
                        />
                      </div>

                      <div className="p-4 sm:p-5">
                        <strong
                          className="block font-[family-name:var(--font-display)] text-lg font-semibold sm:text-xl"
                          style={{
                            color:
                              "var(--boomza-ink)",
                          }}
                        >
                          {
                            option.label
                          }
                        </strong>

                        <span
                          className="mt-1 block text-xs leading-5 sm:text-sm"
                          style={{
                            color:
                              "var(--boomza-muted)",
                          }}
                        >
                          {
                            option.description
                          }
                        </span>
                      </div>
                    </button>
                  );
                },
              )}
            </div>

            <div
              className="mt-6 min-h-[104px] rounded-[24px_28px_22px_26px] px-5 py-4"
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
                <p
                  className="font-semibold"
                  style={{
                    color:
                      "var(--boomza-muted)",
                  }}
                >
                  Look carefully — which object matches the clue?
                </p>
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
                    Have another look around Boomza&apos;s world.
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
                      Great spotting. Boomza has another clue for you.
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

                    <span aria-hidden="true">
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
