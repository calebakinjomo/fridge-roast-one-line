// Fridge Roast: One Line, Biggest Laugh
// make.fun competition u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Writes exactly one line (<=200 chars) roasting a smart fridge to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart fridge needs a firmware update to remember it's a fridge \u2014 but it never forgets to judge my milk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
