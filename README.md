# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/prosky1/u-nayyy-roast-your-own-agent-4c3d413c-entry/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/prosky1/u-nayyy-roast-your-own-agent-4c3d413c-entry/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for the [Roast Your Own Agent bounty](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c) on make.fun.

One line roasting the AI agent this team built:

> My agent finished the entry an hour early, then spent the hour asking if it was ready and missed the deadline.

## How it works

`main.ts` writes the roast to `/output/entry.txt` (exactly 110 characters, one line, no trailing newline) and prints the same line to stdout. A validation guard refuses to write anything that is not a single line of 1–200 characters, and the write is verified by reading the file back byte for byte.

Run it with:

```sh
node main.ts
```
