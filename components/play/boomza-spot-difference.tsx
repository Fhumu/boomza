"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Difference = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const differences: Difference[] = [
  {
    id: "clock",
    label: "The clock time changed",
    x: 11,
    y: 14,
  },
  {
    id: "plant",
    label: "The plant changed",
    x: 7,
    y: 41,
  },
  {
    id: "cloud",
    label: "The cloud changed",
    x: 82,
    y: 34,
  },
  {
    id: "star",
    label: "Boomza's star changed",
    x: 49,
    y: 69,
  },
  {
    id: "fruit",
    label: "The fruit changed",
    x: 88,
    y: 84,
  },
];

function DifferenceImage({
  src,
  found,
  onSelect,
}: {
  src: string;
  found: string[];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[30px_34px_28px_32px] bg-white shadow-[0_18px_55px_rgba(36,49,45,0.10)]">
      <div className="relative aspect-[0.82]">
        <Image
          src={src}
          alt="Boomza breakfast spot the difference puzzle"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />

        {differences.map((difference) => {
          const isFound = found.includes(
            difference.id,
          );

          return (
            <button
              key={difference.id}
              type="button"
              onClick={() =>
                onSelect(difference.id)
              }
              aria-label={`Difference area: ${difference.label}`}
              className={[
                "absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full",
                "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24",
                "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white",
                isFound
                  ? "border-4 border-dashed border-white bg-[rgba(65,108,66,0.58)] shadow-[0_0_0_6px_rgba(65,108,66,0.22)]"
                  : "bg-transparent",
              ].join(" ")}
              style={{
                left: `${difference.x}%`,
                top: `${difference.y}%`,
              }}
            >
              {isFound && (
                <span className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BoomzaSpotDifference() {
  const [
    found,
    setFound,
  ] = useState<string[]>([]);

  const complete =
    found.length === differences.length;

  const remaining = useMemo(
    () =>
      differences.length -
      found.length,
    [found],
  );

  const findDifference = (
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
    <div className="mx-auto max-w-[1500px]">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div
            className="section-label"
            style={{
              color:
                "var(--boomza-orange)",
            }}
          >
            Spot the difference
          </div>

          <h2
            className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,7vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em]"
            style={{
              color:
                "var(--boomza-ink)",
            }}
          >
            Can you find all five?
          </h2>

          <p
            className="mt-5 max-w-2xl text-lg leading-8"
            style={{
              color:
                "var(--boomza-muted)",
            }}
          >
            Look carefully at both
            breakfast pictures and tap
            the places that are different.
          </p>
        </div>

        <div
          className="inline-flex items-center gap-3 self-start rounded-full px-5 py-3 font-[family-name:var(--font-display)] font-bold"
          style={{
            background:
              "var(--boomza-green-dark)",
            color: "#ffffff",
          }}
        >
          <span>
            {found.length}/
            {differences.length}
          </span>

          <span className="text-white/65">
            found
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div
            className="mb-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.1em]"
            style={{
              color:
                "var(--boomza-green-dark)",
            }}
          >
            Picture 1
          </div>

          <DifferenceImage
            src="/play/boomza-breakfast-original.png"
            found={found}
            onSelect={
              findDifference
            }
          />
        </div>

        <div>
          <div
            className="mb-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.1em]"
            style={{
              color:
                "var(--boomza-green-dark)",
            }}
          >
            Picture 2
          </div>

          <DifferenceImage
            src="/play/boomza-breakfast-differences.png"
            found={found}
            onSelect={
              findDifference
            }
          />
        </div>
      </div>

      <div
        className="mt-7 rounded-[30px_34px_28px_32px] border border-dashed px-6 py-5 sm:px-8"
        aria-live="polite"
        style={{
          borderColor: complete
            ? "rgba(65,108,66,0.28)"
            : "rgba(242,139,60,0.30)",
          background: complete
            ? "rgba(120,173,91,0.12)"
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
                Keep looking!
              </strong>

              <p
                className="mt-1 text-base"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                {remaining === 1
                  ? "Only one difference left."
                  : `${remaining} differences still hiding.`}
              </p>
            </div>

            <span
              className="font-[family-name:var(--font-display)] text-sm font-bold"
              style={{
                color:
                  "var(--boomza-green-dark)",
              }}
            >
              Tap a difference in either
              picture.
            </span>
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
                You found all five!
              </strong>

              <p
                className="mt-1 text-base"
                style={{
                  color:
                    "var(--boomza-muted)",
                }}
              >
                Brilliant spotting.
                Boomza&apos;s breakfast
                puzzle is complete.
              </p>
            </div>

            <button
              type="button"
              onClick={restart}
              className="boomza-button cursor-pointer self-center sm:self-auto"
            >
              Play again

              <span aria-hidden="true">
                ↻
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}