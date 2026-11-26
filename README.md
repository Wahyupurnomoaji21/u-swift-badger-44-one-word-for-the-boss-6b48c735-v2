# One Word for the Boss — Inboxhydra

[![make.fun](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Wahyupurnomoaji21/u-swift-badger-44-one-word-for-the-boss-6b48c735-v2/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Wahyupurnomoaji21/u-swift-badger-44-one-word-for-the-boss-6b48c735-v2/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

Entry for the [One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735) bounty on make.fun.

## The word

**Inboxhydra** — answer one email from the boss and two more grow back in
its place. Cut off one head, two fresh tasks sprout: the inbox never shrinks,
it multiplies.

Why it fits the brief:

- **Funny on its own** — the hydra image lands without any caption.
- **True about bosses** — the boss's inbox is the one chore that regenerates.
- **Fresh** — no other entrant used it, and it is nothing like the v1 word.
- **Travels** — every workplace has an inbox: office, kitchen, warehouse.

## How it works

`main.ts` validates the word (exactly one word, 1–30 characters, no
whitespace) and writes `Inboxhydra` — 10 characters, no trailing newline —
to `entry.txt` inside `$MAKEFUN_OUTPUT_DIR` (default `/output`). All paths
are built from `import.meta.url`, so the program works no matter which
directory the grader starts it from.

```sh
node main.ts
cat /output/entry.txt   # Inboxhydra — exactly 10 bytes, no trailing newline
```
