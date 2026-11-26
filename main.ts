// Inboxhydra — one word for the boss.
//
// Answer one email from the boss and two more grow back in its place:
// reply, and the inbox sprouts fresh heads. Every workplace has an
// inbox — office, kitchen, warehouse — so the word travels anywhere
// a boss can reach you, which is everywhere.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const THE_WORD = "Inboxhydra";

function outputDirectory(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR;
  if (configured !== undefined && configured !== "") {
    return resolve(configured);
  }
  return "/output";
}

function entryFilePath(): string {
  const here = fileURLToPath(new URL(".", import.meta.url));
  const dir = outputDirectory();
  if (dir.startsWith("/")) {
    return join(dir, "entry.txt");
  }
  return join(here, dir, "entry.txt");
}

function checkWord(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${word.length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word, no whitespace");
  }
}

checkWord(THE_WORD);

const target = entryFilePath();
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, THE_WORD, { encoding: "utf8" });
