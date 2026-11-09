# Practice 2 — Mathematics

Route: `/lessons/practice-2/math`. Fifteen questions transcribed from the user's
screenshots; enlarged screenshots are continuations of questions 2, 7, 10 and 11.
Questions and choices are English. Solutions and the ten-topic mini-lecture are
Russian, with separate rules, calculation steps, checks and common mistakes.

Source answer key, questions 1–15:
`J B F D G B K C J D J E K E F`.
Odd items retain F/G/H/J/K; even items retain A/B/C/D/E.

## Notation and figures

- `math-notation.mjs` stores structural expressions. The renderer uses native
  MathML for fractions, powers, roots and logarithm bases, including solutions
  and exercises. No external math library or network assets are needed.
- `math-geometry.mjs` holds shared figure geometry and the book-club percentages.
  Questions 10 and 11 use the same data, not separate pie-chart copies.
- SVG diagrams show parallel lines, the square/semicircle, the box, coordinate
  graphs and absolute-value solution rays. Coordinate graphs use equal axis scales.
- In question 7, CD is the diameter indicated by the source diagram, where the
  screenshot's inline segment name was missing in the stem.
- Question 2's B is the sum **not guaranteed** to be 180° by the conditions;
  equality in a special configuration is not mathematically impossible.

## Attempt and checks

The browser storage key is `act-space-practice-2-math-v1`. Checking locks the
attempt and unlocks explanations. Retry clears this section only. The score is
raw correct / 15, not an official ACT scaled-score prediction.

Run `node --test tests/*.test.mjs`. Production build: `npm run build` (or use
`ACT_BUILD_DIR=.next-verify` in the environment to leave a running dev build alone).
Practice 1 Mathematics is outside this change.
