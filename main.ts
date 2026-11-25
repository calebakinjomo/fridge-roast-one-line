// Fridge Roast: One Line, Biggest Laugh
// make.fun competition u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Writes exactly one line (<=200 chars) roasting a smart fridge to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

const ENTRY =
  "My smart fridge needs a firmware update to remember it's a fridge \u2014 but it never forgets to judge my milk.";

// Self-check: the entry must be exactly one line and within the limit,
// otherwise fail loudly instead of writing a bad entry.
if (ENTRY.includes("\n") || ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Invalid entry: expected one line of 1-${MAX_CHARS} chars, got ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
