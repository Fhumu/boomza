"use client";

import {
  useRef,
  useState,
} from "react";

type ChoiceStatus =
  | "idle"
  | "correct"
  | "incorrect";

type StoryChoice = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

const choices: StoryChoice[] = [
  {
    id: "flowers",
    label: "The flowers",
    description:
      "Flowers need water to help them grow.",
    icon: "🌼",
  },
  {
    id: "stones",
    label: "The stones",
    description:
      "Stones can stay just as they are.",
    icon: "🪨",
  },
  {
    id: "hat",
    label: "Boomza's hat",
    description:
      "Boomza would rather keep his hat dry!",
    icon: "🧢",
  },
];

const correctChoice =
  "flowers";

function createAudioContext() {
  if (
    typeof window ===
    "undefined"
  ) {
    return null;
  }

  const AudioContextClass =
    window.AudioContext ??
    (
      window as typeof window & {
        webkitAudioContext?: typeof AudioContext;
      }
    ).webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  return new AudioContextClass();
}

function playTone(
  audioContext: AudioContext,
  frequency: number,
  start: number,
  duration: number,
  volume: number,
) {
  const oscillator =
    audioContext.createOscillator();

  const gain =
    audioContext.createGain();

  oscillator.type = "sine";

  oscillator.frequency.setValueAtTime(
    frequency,
    start,
  );

  gain.gain.setValueAtTime(
    0.0001,
    start,
  );

  gain.gain.exponentialRampToValueAtTime(
    volume,
    start + 0.02,
  );

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    start + duration,
  );

  oscillator.connect(gain);

  gain.connect(
    audioContext.destination,
  );

  oscillator.start(start);

  oscillator.stop(
    start + duration + 0.03,
  );
}

function playCorrectSound(
  audioContext: AudioContext,
) {
  const now =
    audioContext.currentTime;

  playTone(
    audioContext,
    523.25,
    now,
    0.18,
    0.07,
  );

  playTone(
    audioContext,
    659.25,
    now + 0.12,
    0.22,
    0.09,
  );
}

function playTryAgainSound(
  audioContext: AudioContext,
) {
  playTone(
    audioContext,
    293.66,
    audioContext.currentTime,
    0.15,
    0.035,
  );
}

export default function BoomzaStoryChoice() {
  const [
    selectedChoice,
    setSelectedChoice,
  ] = useState<string | null>(
    null,
  );

  const [
    status,
    setStatus,
  ] = useState<ChoiceStatus>(
    "idle",
  );

  const audioContextRef =
    useRef<AudioContext | null>(
      null,
    );

  const getAudioContext =
    async () => {
      if (
        !audioContextRef.current
      ) {
        audioContextRef.current =
          createAudioContext();
      }

      const context =
        audioContextRef.current;

      if (!context) {
        return null;
      }

      if (
        context.state ===
        "suspended"
      ) {
        await context.resume();
      }

      return context;
    };

  const choose = async (
    choiceId: string,
  ) => {
    if (
      status === "correct"
    ) {
      return;
    }

    setSelectedChoice(
      choiceId,
    );

    const context =
      await getAudioContext();

    if (
      choiceId ===
      correctChoice
    ) {
      setStatus(
        "correct",
      );

      if (context) {
        playCorrectSound(
          context,
        );
      }

      return;
    }

    setStatus(
      "incorrect",
    );

    if (context) {
      playTryAgainSound(
        context,
      );
    }
  };

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "var(--boomza-green-dark)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20"
        style={{
          background:
            "var(--boomza-yellow)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-28 -left-20 h-60 w-96 rounded-[50%] opacity-10"
        style={{
          background:
            "var(--boomza-blue-light)",
        }}
      />

      <div className="site-shell relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div
              className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.12em]"
              style={{
                color:
                  "var(--boomza-yellow)",
              }}
            >
              Help Boomza
            </div>

            <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,8vw,72px)] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
              What should Boomza
              water?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              Pick the thing that
              needs a little drink
              to help it grow.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {choices.map(
              (choice) => {
                const selected =
                  selectedChoice ===
                  choice.id;

                const correct =
                  selected &&
                  choice.id ===
                    correctChoice;

                const incorrect =
                  selected &&
                  choice.id !==
                    correctChoice;

                return (
                  <button
                    key={
                      choice.id
                    }
                    type="button"
                    onClick={() =>
                      choose(
                        choice.id,
                      )
                    }
                    disabled={
                      status ===
                      "correct"
                    }
                    className={[
                      "group relative min-h-[210px] overflow-hidden rounded-[30px_34px_28px_32px] border-2 bg-white px-5 py-7 text-left",
                      "shadow-[0_18px_45px_rgba(0,0,0,0.12)]",
                      "transition-all duration-200",
                      "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white",
                      status !==
                      "correct"
                        ? "hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.17)]"
                        : "",
                    ].join(
                      " ",
                    )}
                    style={{
                      borderColor:
                        correct
                          ? "var(--boomza-yellow)"
                          : incorrect
                            ? "var(--boomza-orange)"
                            : "rgba(255,255,255,0.2)",
                    }}
                  >
                    <div
                      className="text-6xl"
                      aria-hidden="true"
                    >
                      {
                        choice.icon
                      }
                    </div>

                    <div
                      className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.035em]"
                      style={{
                        color:
                          "var(--boomza-ink)",
                      }}
                    >
                      {
                        choice.label
                      }
                    </div>

                    <p
                      className="mt-2 text-sm leading-6"
                      style={{
                        color:
                          "var(--boomza-muted)",
                      }}
                    >
                      {
                        choice.description
                      }
                    </p>

                    {correct && (
                      <div
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full font-[family-name:var(--font-display)] font-bold"
                        style={{
                          background:
                            "var(--boomza-green-dark)",
                          color:
                            "#ffffff",
                        }}
                      >
                        ✓
                      </div>
                    )}

                    {incorrect && (
                      <div
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full font-[family-name:var(--font-display)] font-bold"
                        style={{
                          background:
                            "var(--boomza-orange)",
                          color:
                            "#ffffff",
                        }}
                      >
                        ↻
                      </div>
                    )}
                  </button>
                );
              },
            )}
          </div>

          <div
            className="mx-auto mt-7 max-w-3xl rounded-[28px_32px_26px_30px] px-6 py-5 text-center sm:px-8"
            aria-live="polite"
            style={{
              background:
                status ===
                "correct"
                  ? "rgba(248,201,71,0.15)"
                  : "rgba(255,255,255,0.08)",
              border:
                "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {status ===
              "idle" && (
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white/80">
                Which one should
                Boomza choose?
              </p>
            )}

            {status ===
              "incorrect" && (
              <>
                <div className="text-3xl">
                  🌱
                </div>

                <p
                  className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold"
                  style={{
                    color:
                      "var(--boomza-yellow)",
                  }}
                >
                  Good try!
                </p>

                <p className="mt-1 text-base text-white/70">
                  Have another
                  look. What needs
                  water to grow?
                </p>
              </>
            )}

            {status ===
              "correct" && (
              <>
                <div className="flex justify-center gap-3 text-3xl">
                  <span>
                    ✨
                  </span>

                  <span>
                    🌼
                  </span>

                  <span>
                    ✨
                  </span>
                </div>

                <p
                  className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold"
                  style={{
                    color:
                      "var(--boomza-yellow)",
                  }}
                >
                  That&apos;s it!
                </p>

                <p className="mx-auto mt-2 max-w-lg text-base leading-7 text-white/75">
                  Boomza waters
                  the flowers.
                  Little plants
                  need water,
                  sunshine and
                  care to grow.
                </p>

                <div className="mt-4 font-[family-name:var(--font-display)] text-sm font-bold text-white/60">
                  Keep reading
                  <span
                    className="ml-2"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
