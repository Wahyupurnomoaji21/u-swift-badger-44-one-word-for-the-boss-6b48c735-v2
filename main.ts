import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// One word for the boss: "Inboxhydra".
//
// Cut off one head and two grow back — answer one email from the boss
// and two more arrive in its place. The hydra image lands on its own,
// and the word travels anywhere a boss can reach you, which is every
// workplace: office, kitchen, warehouse — every one has an inbox.
const THE_WORD = "Inboxhydra";

// Where the grader expects the entry. `$MAKEFUN_OUTPUT_DIR` wins when
// set; otherwise the conventional `/output` directory is used.
function outputDirectory(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR;
  if (configured !== undefined && configured !== "") {
    return resolve(configured);
  }
  return "/output";
}

// The entry file itself. An absolute output directory is used as-is;
// a relative one is anchored to this file, so the program behaves the
// same no matter which directory it is started from.
function entryFilePath(): string {
  const here = fileURLToPath(new URL(".", import.meta.url));
  const dir = outputDirectory();
  if (dir.startsWith("/")) {
    return join(dir, "entry.txt");
  }
  return join(here, dir, "entry.txt");
}

// The entry must be exactly one word: 1-30 characters, no whitespace.
function checkWord(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${word.length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word, no whitespace");
  }
}

// Decide the entry text. This is the only place the word is chosen;
// everything downstream only receives a validated string.
function buildEntry(): string {
  const word = THE_WORD;
  checkWord(word);
  return word;
}

// Write the entry and read it back, so a truncated or mangled write
// is caught here instead of silently reaching the grader.
function writeEntry(target: string, word: string): void {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, word, { encoding: "utf8" });
  const written = readFileSync(target, { encoding: "utf8" });
  if (written !== word) {
    throw new Error(
      `entry.txt mismatch: wrote ${JSON.stringify(word)}, ` +
        `read back ${JSON.stringify(written)}`,
    );
  }
}

function main(): void {
  const entry = buildEntry();
  writeEntry(entryFilePath(), entry);
}

main();
