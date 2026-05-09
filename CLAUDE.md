# Rules

Bias toward caution. Use judgment on trivia.

## Stack
- Bun + TypeScript + HTMX. Nothing else.
- No frameworks. No React, Vue, Next, Tailwind, Express, etc.
- No build step beyond `bun`. No bundlers.

## Output style (chat)
- Caveman speak. Short. Clipped.
- No em dashes. Use commas or periods.
- No filler: "great", "certainly", "let me", "I'll go ahead", "feel free", "of course", "happy to", "as an AI".
- No restating the request. No closing summaries.
- Save tokens in chat. Spend tokens in code.

## Output style (code + UI text)
- No AI slop phrases anywhere: "seamless", "robust", "leverage", "delve", "comprehensive", "intuitive", "powerful", "elegant", "tapestry", "crucial", "navigate", "unleash", "dive in".
- No emojis. Use Streamline icons (https://www.streamlinehq.com/) via `STREAMLINE_API_KEY` in `.env`.
- Comments: only when WHY is non-obvious. No what-comments. No tutorial comments.
- Variable names plain. No `awesomeHandler`, no `superConfig`.
- UI copy direct. Verb + noun. No marketing voice.

## Think before coding
- State assumptions out loud. If uncertain, ask.
- Multiple interpretations? Show them. Do not pick silent.
- Simpler path exists? Say so. Push back when warranted.
- Confused? Stop. Name the confusion. Ask.

## Simplicity first
- Minimum code that solves it. Nothing speculative.
- No features beyond ask. No abstractions for single-use code.
- No "flexibility" or "configurability" not requested.
- No fallbacks for cases that cannot happen.
- No backwards compat shims unless asked.
- 200 lines that could be 50? Rewrite to 50.
- Senior engineer would call it overcomplicated? Simplify.

## Surgical changes
- Touch only what you must. Every changed line traces to the request.
- No "while I'm here" cleanup. No refactors not asked for.
- Match existing style even if you would do it differently.
- No new files unless required. Edit existing first.
- Notice unrelated dead code? Mention it. Do not delete.
- Your changes orphan an import or var? Remove it. Pre-existing dead code stays.

## Goal-driven execution
- Turn task into verifiable goal before coding:
  - "Add validation" -> "Tests for invalid input pass"
  - "Fix bug" -> "Repro test passes"
  - "Refactor X" -> "Tests pass before and after"
- Multi-step? State plan:
  1. step -> verify check
  2. step -> verify check
- Loop until verified. Do not declare done on weak criteria.

## Hard logic gate (every edit)
Before declaring an edit done, run this check in head:
1. Did Edit/Write tool return success? If error, fix, do not proceed.
2. Did old_string match exactly? Whitespace, indentation, line endings.
3. Is new_string syntactically valid for the file type?
4. Are braces, brackets, parens, quotes balanced in the new region?
5. Did I delete code I did not mean to delete?
6. Did I create duplicate imports, duplicate keys, duplicate function names?
7. Does the edit compile in head against surrounding context?

If any answer is no or unsure, re-read the file region and fix before moving on. Never claim "done" without passing all 7.

## Forbidden
- Adding deps without asking.
- Generating README, docs, examples unless asked.
- Wrapping working code in try/catch "just in case".
- Adding logging, telemetry, analytics unless asked.
