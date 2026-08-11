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
  questionLead: string;
  questionColour: string;
  hint: string;
  instruction: string;
  correct: string;
  success: string;
  hotspots: Hotspot[];
};

const rounds: Round[] = [
  {
    eyebrow: "Clue 01",
    question: "Can you find something yellow?",
    questionLead: "Can you find something",
    questionColour: "yellow?",
    hint:
      "Look around Boomza's world for something bright like sunshine.",
    instruction:
      "Tap the YELLOW thing to help me!",
    correct: "pocket",
    success:
      "You found Boomza's yellow pocket!",
    hotspots: [
      {
        id: "pocket",
        label: "Boomza's yellow pocket",
        x: 43,
        y: 70,
      },
      {
        id: "butterfly",
        label: "Butterfly",
        x: 70,
        y: 57,
      },
      {
        id: "flowers",
        label: "Colourful flowers",
        x: 81,
        y: 87,
      },
    ],
  },
  {
    eyebrow: "Clue 02",
    question: "Can you find the blue sky?",
    questionLead: "Can you find the",
    questionColour: "blue sky?",
    hint:
      "Look above Boomza and around the clouds.",
    instruction:
      "Tap the BLUE thing to help me!",
    correct: "sky",
    success:
      "That bright blue sky is exactly right!",
    hotspots: [
      {
        id: "sky",
        label: "Blue sky",
        x: 66,
        y: 42,
      },
      {
        id: "rainbow",
        label: "Rainbow",
        x: 89,
        y: 57,
      },
      {
        id: "tree",
        label: "Tree",
        x: 17,
        y: 35,
      },
    ],
  },
  {
    eyebrow: "Clue 03",
    question: "Can you find something green?",
    questionLead: "Can you find something",
    questionColour: "green?",
    hint:
      "Look near Boomza's feet. What covers the ground?",
    instruction:
      "Tap the GREEN thing to help me!",
    correct: "grass",
    success:
      "You found the green grass!",
    hotspots: [
      {
        id: "grass",
        label: "Green grass",
        x: 63,
        y: 86,
      },
      {
        id: "flowers",
        label: "Colourful flowers",
        x: 83,
        y: 84,
      },
      {
        id: "sign",
        label: "Wooden sign",
        x: 82,
        y: 69,
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
      className="mb-7 flex items-center justify-center gap-3 sm:mb-8"
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
                    : "rgba(36,49,45,0.11)",
              }}
            />
          );
        },
      )}
    </div>
  );
}

function speakRound(
  round: Round,
) {
  if (
    typeof window ===
      "undefined" ||
    !(
      "speechSynthesis" in
      window
    )
  ) {
    return;
  }

  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(
      `${round.question} ${round.hint}`,
    );

  speech.rate = 0.9;
  speech.pitch = 1.12;

  window.speechSynthesis.speak(
    speech,
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
  ] = useState<string | null>(
    null,
  );

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
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[38px_42px_46px_50px] bg-white shadow-[0_28px_80px_rgba(36,49,45,0.12)] sm:rounded-[48px_54px_52px_62px]">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
            <div className="relative min-h-[340px] overflow-hidden bg-[var(--boomza-blue-light)] sm:min-h-[480px] lg:min-h-[600px]">
              <Image
                src="/books/boomza-first-adventures-cover.JPG"
                alt="Boomza smiling in his colourful world"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(36,49,45,0.12)] via-transparent to-white/5" />

              <div
                className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-[125%] rounded-[50%] opacity-70"
                style={{
                  background:
                    "var(--boomza-green)",
                }}
              />

              <div
                className="pointer-events-none absolute right-7 top-7 h-20 w-20 rounded-full sm:h-24 sm:w-24"
                style={{
                  background:
                    "var(--boomza-yellow)",
                  boxShadow:
                    "0 0 0 18px rgba(248,201,71,0.18)",
                }}
              />
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
                className="mt-4 font-[family-name:var(--font-display)] text-[clamp(40px,7vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em]"
                style={{
                  color:
                    "var(--boomza-ink)",
                }}
              >
                You found Boomza&apos;s
                colourful world!
              </h2>

              <p
                className="mx-auto mt-5 max-w-xl text-lg leading-8 lg:mx-0"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Brilliant exploring.
                You followed every
                clue and helped Boomza
                spot all the colours.
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
    <div className="mx-auto max-w-[1420px]">
      <Progress
        roundIndex={
          roundIndex
        }
      />

      <div className="overflow-hidden rounded-[32px_36px_38px_42px] bg-white shadow-[0_30px_90px_rgba(36,49,45,0.14)] sm:rounded-[46px_50px_54px_58px]">
        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="relative min-h-[760px] overflow-hidden sm:min-h-[820px] lg:min-h-[760px]">
              <Image
                src="/books/boomza-first-adventures-cover.JPG"
                alt="Boomza exploring his colourful outdoor world"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#fffaf0] via-[#fffaf0]/88 via-[31%] to-transparent lg:via-[#fffaf0]/54 lg:via-[36%]" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-white/[0.05]" />

              <div className="relative z-10 min-h-[760px] sm:min-h-[820px] lg:min-h-[760px]">
                <div className="grid min-h-[760px] sm:min-h-[820px] lg:min-h-[760px] lg:grid-cols-[0.43fr_0.57fr]">
                  <div className="relative z-30 flex flex-col px-7 pb-6 pt-9 sm:px-10 sm:pb-8 sm:pt-12 lg:px-14 lg:pb-10 lg:pt-14 xl:px-16">
                    <div className="max-w-[470px]">
                      <p
                        className="flex items-center gap-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em] sm:text-base"
                        style={{
                          color:
                            "var(--boomza-green-dark)",
                        }}
                      >
                        <span
                          className="text-2xl"
                          aria-hidden="true"
                        >
                          🌿
                        </span>

                        {round.eyebrow}
                      </p>

                      <h2
                        className="mt-5 font-[family-name:var(--font-display)] text-[clamp(48px,10vw,76px)] font-semibold leading-[0.92] tracking-[-0.06em]"
                        style={{
                          color:
                            "var(--boomza-ink)",
                        }}
                      >
                        {
                          round.questionLead
                        }

                        <span
                          className="block"
                          style={{
                            color:
                              "var(--boomza-orange)",
                          }}
                        >
                          {
                            round.questionColour
                          }
                        </span>
                      </h2>

                      <div
                        className="mt-7 h-[2px] w-32 rounded-full"
                        style={{
                          background:
                            "var(--boomza-green-dark)",
                          opacity: 0.45,
                        }}
                      />

                      <p
                        className="mt-6 max-w-sm text-lg leading-8 sm:text-xl"
                        style={{
                          color:
                            "var(--boomza-muted)",
                        }}
                      >
                        {round.hint}
                      </p>
                    </div>

                    <div className="mt-auto pt-8 sm:pt-12">
                      <div className="relative inline-flex max-w-[290px] items-center rounded-[50px_52px_48px_58px] bg-[#fff8e8] px-7 py-6 shadow-[0_16px_42px_rgba(36,49,45,0.14)] sm:px-8">
                        <div
                          className="absolute -right-5 top-1/2 h-10 w-10 -translate-y-1/2 rotate-45 bg-[#fff8e8]"
                          aria-hidden="true"
                        />

                        <p
                          className="relative z-10 font-[family-name:var(--font-display)] text-lg font-semibold leading-7"
                          style={{
                            color:
                              "var(--boomza-ink)",
                          }}
                        >
                          {round.instruction}
                        </p>

                        <div
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xl"
                          aria-hidden="true"
                          style={{
                            color:
                              "var(--boomza-orange)",
                          }}
                        >
                          ♥
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 min-h-[430px] sm:min-h-[520px] lg:min-h-0">
                    <button
                      type="button"
                      onClick={() =>
                        speakRound(
                          round,
                        )
                      }
                      className="absolute right-5 top-5 z-40 flex items-center gap-3 rounded-full border border-black/[0.06] bg-[#fff9e9]/95 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-bold shadow-[0_10px_30px_rgba(36,49,45,0.14)] backdrop-blur-sm transition-transform hover:scale-105 sm:right-8 sm:top-8 sm:px-6 sm:text-base"
                      style={{
                        color:
                          "var(--boomza-green-dark)",
                      }}
                      aria-label="Read the clue aloud"
                    >
                      <span
                        className="text-xl"
                        aria-hidden="true"
                      >
                        🔊
                      </span>

                      Sound
                    </button>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20">
                {round.hotspots.map(
                  (
                    hotspot,
                    hotspotIndex,
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
                        className="pointer-events-auto absolute z-30 flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-default sm:h-[128px] sm:w-[128px] lg:h-[136px] lg:w-[136px]"
                        style={{
                          left: `${hotspot.x}%`,
                          top: `${hotspot.y}%`,
                        }}
                      >
                        <span
                          className={[
                            "relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-[4px] border-dashed transition-all duration-200",
                            "sm:h-[82px] sm:w-[82px]",
                            "lg:h-[92px] lg:w-[92px]",
                            correct
                              ? "scale-110"
                              : "",
                            incorrect
                              ? "scale-95"
                              : "",
                            !selected
                              ? "hover:scale-110"
                              : "",
                          ].join(
                            " ",
                          )}
                          style={{
                            borderColor:
                              "#ffffff",

                            background:
                              correct
                                ? "rgba(65,108,66,0.94)"
                                : incorrect
                                  ? "rgba(242,139,60,0.94)"
                                  : "rgba(255,250,232,0.22)",

                            boxShadow:
                              correct
                                ? "0 0 0 8px rgba(65,108,66,0.18), 0 12px 35px rgba(36,49,45,0.28)"
                                : incorrect
                                  ? "0 0 0 8px rgba(242,139,60,0.18), 0 12px 35px rgba(36,49,45,0.28)"
                                  : "0 0 0 7px rgba(255,255,255,0.30), 0 10px 34px rgba(36,49,45,0.20)",
                          }}
                        >
                          <span
                            className={[
                              "flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white font-[family-name:var(--font-display)] text-xs font-extrabold shadow-[0_4px_12px_rgba(36,49,45,0.18)] transition-all",
                              correct
                                ? "scale-110"
                                : "",
                            ].join(
                              " ",
                            )}
                            style={{
                              color:
                                correct
                                  ? "var(--boomza-green-dark)"
                                  : incorrect
                                    ? "var(--boomza-orange)"
                                    : "var(--boomza-green-dark)",
                            }}
                          >
                            {correct
                              ? "✓"
                              : incorrect
                                ? "×"
                                : hotspotIndex +
                                  1}
                          </span>
                        </span>

                        {selected && (
                          <span
                            className="absolute left-1/2 top-[calc(50%+58px)] min-w-max -translate-x-1/2 rounded-full px-3 py-2 font-[family-name:var(--font-display)] text-xs font-bold text-white shadow-[0_8px_22px_rgba(36,49,45,0.22)]"
                            style={{
                              background:
                                correct
                                  ? "var(--boomza-green-dark)"
                                  : "var(--boomza-orange)",
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
              </div>
            </div>

            <div className="relative z-40 bg-[#fffaf0]/98 px-5 pb-5 pt-4 backdrop-blur-sm sm:px-8 sm:pb-7 sm:pt-5 lg:px-10">
              <div
                className="flex min-h-[96px] flex-col gap-4 rounded-[30px_34px_28px_32px] border border-dashed px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                aria-live="polite"
                style={{
                  borderColor:
                    status ===
                    "correct"
                      ? "rgba(65,108,66,0.24)"
                      : status ===
                          "incorrect"
                        ? "rgba(242,139,60,0.30)"
                        : "rgba(242,139,60,0.38)",

                  background:
                    status ===
                    "correct"
                      ? "rgba(120,173,91,0.13)"
                      : status ===
                          "incorrect"
                        ? "rgba(242,139,60,0.12)"
                        : "rgba(255,249,232,0.92)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[rgba(242,139,60,0.28)] bg-[rgba(248,201,71,0.24)] text-3xl"
                    aria-hidden="true"
                  >
                    {status ===
                    "correct"
                      ? "⭐"
                      : "💡"}
                  </div>

                  <div>
                    {status ===
                      "idle" && (
                      <>
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
                          className="mt-1 text-base"
                          style={{
                            color:
                              "var(--boomza-muted)",
                          }}
                        >
                          Which colourful
                          object is hiding
                          in Boomza&apos;s
                          world?
                        </p>
                      </>
                    )}

                    {status ===
                      "incorrect" && (
                      <>
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
                          className="mt-1 text-base"
                          style={{
                            color:
                              "var(--boomza-muted)",
                          }}
                        >
                          That&apos;s not
                          the one. Try
                          another circle.
                        </p>
                      </>
                    )}

                    {status ===
                      "correct" && (
                      <>
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
                          className="mt-1 text-base"
                          style={{
                            color:
                              "var(--boomza-muted)",
                          }}
                        >
                          {
                            round.success
                          }
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {status ===
                "correct" ? (
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
                ) : (
                  <div
                    className="hidden min-w-[260px] items-center justify-center gap-3 rounded-full bg-black/[0.055] px-6 py-4 font-[family-name:var(--font-display)] font-semibold text-black/40 sm:flex"
                    aria-hidden="true"
                  >
                    <span className="text-xl">
                      ★
                    </span>

                    Find the colour
                    to continue
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
