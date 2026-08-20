"use client";

import {
  useMemo,
  useState,
} from "react";

type Cell = {
  row: number;
  col: number;
};

type WordDefinition = {
  word: string;
  start: Cell;
  end: Cell;
};

const grid = [
  [
    "S",
    "U",
    "N",
    "P",
    "L",
    "A",
  ],
  [
    "B",
    "O",
    "O",
    "M",
    "Z",
    "H",
  ],
  [
    "I",
    "S",
    "T",
    "A",
    "R",
    "A",
  ],
  [
    "R",
    "P",
    "L",
    "A",
    "Y",
    "T",
  ],
  [
    "D",
    "C",
    "O",
    "L",
    "O",
    "U",
  ],
  [
    "M",
    "U",
    "M",
    "B",
    "Y",
    "S",
  ],
] as const;

const words: WordDefinition[] = [
  {
    word: "SUN",
    start: {
      row: 0,
      col: 0,
    },
    end: {
      row: 0,
      col: 2,
    },
  },
  {
    word: "HAT",
    start: {
      row: 1,
      col: 5,
    },
    end: {
      row: 3,
      col: 5,
    },
  },
  {
    word: "MUM",
    start: {
      row: 5,
      col: 0,
    },
    end: {
      row: 5,
      col: 2,
    },
  },
  {
    word: "BIRD",
    start: {
      row: 1,
      col: 0,
    },
    end: {
      row: 4,
      col: 0,
    },
  },
  {
    word: "STAR",
    start: {
      row: 2,
      col: 1,
    },
    end: {
      row: 2,
      col: 4,
    },
  },
];

function sameCell(
  first: Cell,
  second: Cell,
) {
  return (
    first.row === second.row &&
    first.col === second.col
  );
}

function reverseMatches(
  start: Cell,
  end: Cell,
  word: WordDefinition,
) {
  return (
    sameCell(
      start,
      word.end,
    ) &&
    sameCell(
      end,
      word.start,
    )
  );
}

function normalMatches(
  start: Cell,
  end: Cell,
  word: WordDefinition,
) {
  return (
    sameCell(
      start,
      word.start,
    ) &&
    sameCell(
      end,
      word.end,
    )
  );
}

function cellsForWord(
  word: WordDefinition,
) {
  const rowDirection = Math.sign(
    word.end.row -
      word.start.row,
  );

  const colDirection = Math.sign(
    word.end.col -
      word.start.col,
  );

  const length = Math.max(
    Math.abs(
      word.end.row -
        word.start.row,
    ),
    Math.abs(
      word.end.col -
        word.start.col,
    ),
  );

  return Array.from(
    {
      length: length + 1,
    },
    (_, index) => ({
      row:
        word.start.row +
        rowDirection * index,
      col:
        word.start.col +
        colDirection * index,
    }),
  );
}

export default function BoomzaWordSearch() {
  const [
    startCell,
    setStartCell,
  ] = useState<Cell | null>(
    null,
  );

  const [
    foundWords,
    setFoundWords,
  ] = useState<string[]>([]);

  const [
    message,
    setMessage,
  ] = useState(
    "Tap the first letter of a word.",
  );

  const complete =
    foundWords.length ===
    words.length;

  const foundCells = useMemo(
    () => {
      const result =
        new Set<string>();

      words
        .filter((word) =>
          foundWords.includes(
            word.word,
          ),
        )
        .forEach((word) => {
          cellsForWord(
            word,
          ).forEach(
            (cell) => {
              result.add(
                `${cell.row}-${cell.col}`,
              );
            },
          );
        });

      return result;
    },
    [foundWords],
  );

  const chooseCell = (
    row: number,
    col: number,
  ) => {
    const selected = {
      row,
      col,
    };

    if (!startCell) {
      setStartCell(selected);
      setMessage(
        "Great! Now tap the last letter.",
      );
      return;
    }

    const matchedWord =
      words.find(
        (word) =>
          !foundWords.includes(
            word.word,
          ) &&
          (normalMatches(
            startCell,
            selected,
            word,
          ) ||
            reverseMatches(
              startCell,
              selected,
              word,
            )),
      );

    if (matchedWord) {
      const nextFound = [
        ...foundWords,
        matchedWord.word,
      ];

      setFoundWords(
        nextFound,
      );

      setStartCell(null);

      if (
        nextFound.length ===
        words.length
      ) {
        setMessage(
          "You found every word!",
        );
      } else {
        setMessage(
          `You found ${matchedWord.word}! Pick another word.`,
        );
      }

      return;
    }

    setStartCell(null);

    setMessage(
      "Almost! Try another pair of letters.",
    );
  };

  const restart = () => {
    setFoundWords([]);
    setStartCell(null);
    setMessage(
      "Tap the first letter of a word.",
    );
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <div
          className="section-label"
          style={{
            color:
              "var(--boomza-green-dark)",
          }}
        >
          Find the words
        </div>

        <h2
          className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(42px,7vw,72px)] font-semibold leading-[0.95] tracking-[-0.055em]"
          style={{
            color:
              "var(--boomza-ink)",
          }}
        >
          Can you find Boomza&apos;s
          words?
        </h2>

        <p
          className="mx-auto mt-5 max-w-xl text-lg leading-8"
          style={{
            color:
              "var(--boomza-muted)",
          }}
        >
          Find each little word in the
          grid. Tap its first letter,
          then tap its last letter.
        </p>
      </div>

      <div className="mt-10 grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
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
            Words to find
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-1">
            {words.map(
              (word) => {
                const found =
                  foundWords.includes(
                    word.word,
                  );

                return (
                  <div
                    key={
                      word.word
                    }
                    className={[
                      "flex min-h-14 items-center justify-between rounded-2xl px-4 py-3",
                      found
                        ? "bg-white/20"
                        : "bg-white/10",
                    ].join(
                      " ",
                    )}
                  >
                    <span
                      className={[
                        "font-[family-name:var(--font-display)] text-xl font-bold text-white",
                        found
                          ? "line-through opacity-60"
                          : "",
                      ].join(
                        " ",
                      )}
                    >
                      {
                        word.word
                      }
                    </span>

                    {found && (
                      <span
                        aria-label="Found"
                        className="text-xl"
                      >
                        ✓
                      </span>
                    )}
                  </div>
                );
              },
            )}
          </div>

          <div className="mt-7 border-t border-white/15 pt-6 text-white/70">
            <strong className="font-[family-name:var(--font-display)] text-lg text-white">
              {
                foundWords.length
              }
              /{words.length}
            </strong>{" "}
            words found
          </div>
        </aside>

        <div className="rounded-[34px_40px_30px_38px] bg-white p-4 shadow-[0_20px_60px_rgba(36,49,45,0.10)] sm:p-7">
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {grid.map(
              (
                row,
                rowIndex,
              ) =>
                row.map(
                  (
                    letter,
                    colIndex,
                  ) => {
                    const key = `${rowIndex}-${colIndex}`;

                    const found =
                      foundCells.has(
                        key,
                      );

                    const selected =
                      startCell?.row ===
                        rowIndex &&
                      startCell?.col ===
                        colIndex;

                    return (
                      <button
                        key={
                          key
                        }
                        type="button"
                        onClick={() =>
                          chooseCell(
                            rowIndex,
                            colIndex,
                          )
                        }
                        aria-label={`Letter ${letter}, row ${
                          rowIndex +
                          1
                        }, column ${
                          colIndex +
                          1
                        }`}
                        className={[
                          "aspect-square rounded-[16px] border font-[family-name:var(--font-display)]",
                          "text-[clamp(22px,5vw,42px)] font-semibold",
                          "transition-all duration-150",
                          "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2",
                          found
                            ? "scale-[0.96]"
                            : "hover:-translate-y-1",
                        ].join(
                          " ",
                        )}
                        style={{
                          background:
                            found
                              ? "var(--boomza-yellow)"
                              : selected
                                ? "var(--boomza-blue-light)"
                                : "var(--boomza-cream)",
                          borderColor:
                            selected
                              ? "var(--boomza-green-dark)"
                              : "rgba(36,49,45,0.10)",
                          color:
                            "var(--boomza-ink)",
                          outlineColor:
                            "var(--boomza-orange)",
                        }}
                      >
                        {
                          letter
                        }
                      </button>
                    );
                  },
                ),
            )}
          </div>

          <div
            className="mt-6 rounded-[24px] px-5 py-4"
            aria-live="polite"
            style={{
              background: complete
                ? "rgba(120,173,91,0.15)"
                : "var(--boomza-blue-light)",
            }}
          >
            {!complete ? (
              <div>
                <strong
                  className="font-[family-name:var(--font-display)] text-lg"
                  style={{
                    color:
                      "var(--boomza-green-dark)",
                  }}
                >
                  {startCell
                    ? "Find the end!"
                    : "Look carefully!"}
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
                    You found them all!
                  </strong>

                  <p
                    className="mt-1"
                    style={{
                      color:
                        "var(--boomza-muted)",
                    }}
                  >
                    Brilliant reading.
                    All five Boomza words
                    are found.
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

                  <span aria-hidden="true">
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