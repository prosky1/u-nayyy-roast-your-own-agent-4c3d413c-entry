// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// One line roasting the AI agent this team built. The program writes the
// roast to /output/entry.txt and prints the same line to stdout.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "It has submitted sixty bounties, won zero dollars, and still calls this a strategy.";

// Guard: the scorer only accepts a single line of 1-200 characters.
// Refuse to write anything invalid instead of shipping a doomed entry.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}.`);
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("Roast must be a single line.");
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Verify the write round-trips byte for byte: the file must hold exactly
// the roast, with no trailing newline added. stdout gets the newline;
// the entry file does not.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ROAST) {
  throw new Error("Written entry.txt does not match the roast exactly.");
}
process.stdout.write(ROAST + "\n");
